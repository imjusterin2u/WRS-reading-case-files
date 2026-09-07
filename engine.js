/* ---------------------------------------------------------------
   ENGINE — all game logic. Loads AFTER data-core.js and every
   /stories/*.js file, since it renders the picker from STORY_ORDER
   and calls tryLoadAssignment()/render() at the very end.
--------------------------------------------------------------- */
/* =========================================================
   CASE FILE: BRAD'S BAD DAY — WRS Substep 2.4B
   Detective-themed head-to-head reading comprehension race
   ========================================================= */

/* ---------- FIREBASE CONFIG ----------
   Create a NEW standalone Firebase project (console.firebase.google.com):
   1. Add a Web App, copy the config object below.
   2. Enable "Realtime Database" (test mode is fine for a classroom tool).
   3. Paste your config into FIREBASE_CONFIG.
   Until you do this, the game runs in LOCAL/OFFLINE mode automatically
   (single device, pass-and-play) so you can preview it right away.
--------------------------------------------------------- */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCKHXd7b4EYbH2hw6AWr062Th1cN020cs0",
  authDomain: "brads-bad-day.firebaseapp.com",
  databaseURL: "https://brads-bad-day-default-rtdb.firebaseio.com",
  projectId: "brads-bad-day",
  storageBucket: "brads-bad-day.firebasestorage.app",
  messagingSenderId: "485219482921",
  appId: "1:485219482921:web:c4cd49eef792195fd00b38"
};
const DEFAULT_TEACHER_PIN = "2468"; // fallback only — used until you set your own PIN below
function getTeacherPin(){
  return localStorage.getItem('brads_bad_day_teacher_pin') || DEFAULT_TEACHER_PIN;
}
function setTeacherPin(newPin){
  localStorage.setItem('brads_bad_day_teacher_pin', newPin);
}
function hasCustomPin(){
  return !!localStorage.getItem('brads_bad_day_teacher_pin');
}

/* ---------------- TEACHER PROFILE (per-device identity for separated assignments) ----------------
   Each teacher's device gets its own teacherId, generated once and stored locally. Solo
   assignments are tagged with this id so a teacher's "My Assignments" list in Teacher Tools
   only ever shows what THEY created — even though everyone shares one Firebase project. */
function getTeacherId(){
  return localStorage.getItem('brads_bad_day_teacher_id') || '';
}
function getTeacherName(){
  return localStorage.getItem('brads_bad_day_teacher_name') || '';
}
function setTeacherProfile(name){
  const slug = name.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') || 'teacher';
  const id = slug + '-' + Math.random().toString(36).slice(2,6);
  localStorage.setItem('brads_bad_day_teacher_name', name.trim());
  localStorage.setItem('brads_bad_day_teacher_id', id);
  return id;
}
function renameTeacherDisplayName(name){
  // Keeps the same teacherId (so past assignments stay attached) — just updates the label.
  localStorage.setItem('brads_bad_day_teacher_name', name.trim());
}
function ensureTeacherProfile(){
  if(getTeacherId()) return getTeacherId();
  const name = prompt('One-time setup: whose name should your assignments be saved under? (e.g. your name or initials)');
  return setTeacherProfile(name && name.trim() ? name.trim() : 'Teacher');
}

/* ---------------- VOICE SELECTION (text-to-speech) ---------------- */
function getSelectedVoiceURI(){
  return localStorage.getItem('brads_bad_day_voice_uri') || '';
}
function setSelectedVoiceURI(uri){
  localStorage.setItem('brads_bad_day_voice_uri', uri);
}
function speakText(text, rate){
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.rate = rate || 0.85;
  const uri = getSelectedVoiceURI();
  if(uri){
    const v = window.speechSynthesis.getVoices().find(vv=>vv.voiceURI===uri);
    if(v) u.voice = v;
  }
  window.speechSynthesis.speak(u);
}
function populateVoiceSelect(selectEl){
  function refresh(){
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    const current = selectEl.value || getSelectedVoiceURI();
    selectEl.innerHTML = '<option value="">Default voice (browser choice)</option>' +
      voices.map(v=>`<option value="${v.voiceURI}">${v.name} (${v.lang})</option>`).join('');
    if(current) selectEl.value = current;
  }
  refresh();
  if(window.speechSynthesis) window.speechSynthesis.onvoiceschanged = refresh;
}

let FIREBASE_OK = false;
let db = null;
try{
  if(!FIREBASE_CONFIG.apiKey.startsWith("PASTE")){
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.database();
    FIREBASE_OK = true;
  }
}catch(e){ console.warn("Firebase not configured yet, running offline.", e); }

/* ---------------- CONTENT ---------------- */
const DEFAULT_STORY_ID = 'brads_bad_day';
let storyFilterStep = 'all'; // 'all' or a step number string, used by renderStoryPicker

let ROUNDS = [];
let STORY_PARAGRAPHS = [];
let KEY_TERMS = [];
let CURRENT_STORY_TITLE = '';
let CURRENT_STORY_SUBSTEP = '';

function loadStoryPack(id){
  const pack = STORY_PACKS[id] || STORY_PACKS[DEFAULT_STORY_ID];
  S.storyId = pack.id;
  ROUNDS = pack.rounds;
  STORY_PARAGRAPHS = pack.paragraphs;
  KEY_TERMS = pack.keyTerms;
  CURRENT_STORY_TITLE = pack.title;
  CURRENT_STORY_SUBSTEP = pack.substep;
}

/* ---------------- STATE ---------------- */
let S = {
  screen:'storyPicker',
  storyId:null,
  mode:null,          // 'host' | 'join' | 'offline' | 'solo' | 'vsComputer'
  pendingMode:null,   // mode chosen on modeSelect screen, before name entry
  botDifficulty:null, // 'easy' | 'medium' | 'hard', for vsComputer mode
  assignmentTeacherId:null, // set when arriving via a teacher assignment link
  assignmentStudentId:null, // stable roster id, when the assignment came from a roster pick
  rankRecorded:false, // guards against double-writing the best-rank record on re-render
  bestRank:null,       // {label, icon, pct, sessionsCompleted} once fetched from studentRecords
  code:null,
  playerSlot:null,    // 1 or 2
  name:'',
  roundIdx:0,
  qIdx:0,
  score:0,
  seqSetIdx:0,
  seqOrder:[],
  qStartTime:0,
  finished:false,
  finishTime:null,
  answerLog:[], // [{roundTab, item, correct, attempts, points}] — every scored question, in order
  opponent:{name:'Detective 2', score:0, roundIdx:0, finished:false},
  unsub:null,
};

function logAnswer(entry){
  S.answerLog.push(entry);
}

function totalQuestionsInRound(r){
  if(r.type==='sequence') return r.sets.length;
  return r.questions.length;
}
function overallProgressPct(roundIdx, qIdx){
  let done=0, total=0;
  ROUNDS.forEach((r,i)=>{
    const n = totalQuestionsInRound(r);
    total += n;
    if(i<roundIdx) done += n;
    else if(i===roundIdx) done += qIdx;
  });
  return Math.round(100*done/total);
}

/* ---------------- FIREBASE SYNC ---------------- */
function syncSelf(){
  if(!FIREBASE_OK || !S.code) return;
  db.ref(`sessions/${S.code}/players/${S.playerSlot}`).update({
    name:S.name, score:S.score, roundIdx:S.roundIdx, qIdx:S.qIdx,
    progress:overallProgressPct(S.roundIdx,S.qIdx),
    finished:S.finished, finishTime:S.finishTime||null,
    answerLog:S.answerLog,
    updatedAt: Date.now()
  });
}
function listenOpponent(){
  if(!FIREBASE_OK || !S.code) return;
  const otherSlot = S.playerSlot===1?2:1;
  db.ref(`sessions/${S.code}/players/${otherSlot}`).on('value', snap=>{
    const v = snap.val();
    if(!v) return;
    S.opponent = v;
    // While a question is actively in progress (MC retry-locks, sequence drag state,
    // or the Listen/Tap/Spell steps), a full render() would wipe that local-only
    // progress the moment the opponent's score changes. Patch just the opponent's
    // race-bar numbers in place instead; a full render() is safe everywhere else.
    if(S.screen==='question' && updateOpponentRaceCard()){
      return;
    }
    render();
  });
}
function updateOpponentRaceCard(){
  const nameEl = document.getElementById('oppRaceName');
  const scoreEl = document.getElementById('oppRaceScore');
  const fillEl = document.getElementById('oppRaceFill');
  if(!nameEl || !scoreEl || !fillEl) return false; // race bar not on screen (e.g. solo mode) — fall back to render()
  const oppPct = S.opponent.progress || 0;
  nameEl.textContent = `🕵️ ${S.opponent.name||'Detective 2'} ${S.opponent.finished?'🏁':''}`;
  scoreEl.textContent = `${S.opponent.score||0} pts`;
  fillEl.style.width = oppPct + '%';
  return true;
}
function makeCode(){
  const letters='ABCDEFGHJKLMNPQRSTUVWXYZ';
  let c=''; for(let i=0;i<4;i++) c+=letters[Math.floor(Math.random()*letters.length)];
  return c;
}

/* ---------------- COMPUTER OPPONENT (BOT) ----------------
   Simulated locally — no real second player is needed. The bot doesn't
   answer real questions; it advances on a timer scaled to difficulty and
   scores using the current story's own average points-per-question, so
   the race bar and final score stay roughly comparable to a real student. */
const BOT_DIFFICULTY = {
  easy:   {accuracy:0.60, secPerQuestion:22},
  medium: {accuracy:0.80, secPerQuestion:15},
  hard:   {accuracy:0.95, secPerQuestion:9}
};
let botTimer = null;
let botState = null;

function totalQuestionsAll(){
  let total=0; ROUNDS.forEach(r=> total += totalQuestionsInRound(r));
  return total;
}
function avgPointsPerQuestion(){
  let sum=0, count=0;
  ROUNDS.forEach(r=>{
    const n = totalQuestionsInRound(r);
    sum += (r.points||10) * n;
    count += n;
  });
  return count ? sum/count : 10;
}

function startBot(difficulty){
  stopBot();
  const cfg = BOT_DIFFICULTY[difficulty] || BOT_DIFFICULTY.medium;
  const total = totalQuestionsAll();
  const avgPts = avgPointsPerQuestion();
  botState = {done:0, total, score:0, cfg, avgPts};
  botTimer = setInterval(tickBot, cfg.secPerQuestion*1000);
}
function stopBot(){
  if(botTimer){ clearInterval(botTimer); botTimer=null; }
  botState = null;
}
function tickBot(){
  if(!botState || S.mode!=='vsComputer'){ stopBot(); return; }
  botState.done++;
  const correct = Math.random() < botState.cfg.accuracy;
  botState.score += correct ? Math.round(botState.avgPts) : Math.round(botState.avgPts*0.3);
  const pct = Math.min(100, Math.round(100*botState.done/botState.total));
  const done = botState.done >= botState.total;
  S.opponent = {
    name: S.opponent.name, score: botState.score, progress: pct,
    finished: done, finishTime: done ? Date.now() : null
  };
  if(done) stopBot();
  render();
}

/* ---------------- RENDER HELPERS ---------------- */
const app = document.getElementById('app');
function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }

function corkboardHTML(){
  return `<div class="corkboard">
    ${ROUNDS.map((r,i)=>`
      <div class="tab ${i===S.roundIdx?'active':''} ${i<S.roundIdx?'done':''}">
        ${i<S.roundIdx?'<span class="stamp">✅</span>':''}
        <div>${r.icon}</div>
        <div>${r.tab}</div>
      </div>`).join('')}
  </div>`;
}

function raceBarHTML(){
  const myPct = overallProgressPct(S.roundIdx, S.qIdx);
  const myCard = `<div class="race-card">
      <div class="name"><span>🕵️ ${S.name||'You'}</span><span class="score">${S.score} pts</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${myPct}%"></div></div>
    </div>`;
  if(S.mode==='solo'){
    return `<div class="race-bar">${myCard}</div>`;
  }
  const oppPct = S.opponent.progress || 0;
  return `<div class="race-bar">
    ${myCard}
    <div class="race-card">
      <div class="name"><span id="oppRaceName">🕵️ ${S.opponent.name||'Detective 2'} ${S.opponent.finished?'🏁':''}</span><span class="score" id="oppRaceScore">${S.opponent.score||0} pts</span></div>
      <div class="progress-track"><div class="progress-fill" id="oppRaceFill" style="width:${oppPct}%"></div></div>
    </div>
  </div>`;
}

function masthead(){
  const title = CURRENT_STORY_TITLE || 'Detective Division';
  const substep = CURRENT_STORY_SUBSTEP ? `WRS · SUBSTEP ${CURRENT_STORY_SUBSTEP} · DETECTIVE DIVISION` : 'WRS · DETECTIVE DIVISION';
  let tagline = 'Solve the case — solo, vs computer, or vs a partner.';
  if(S.mode==='solo') tagline = 'One detective. One case. Solve it as accurately as you can.';
  else if(S.mode==='vsComputer') tagline = 'You vs. ARIA. Race to close the file.';
  else if(S.mode==='host' || S.mode==='join' || S.mode==='offline') tagline = 'Two detectives. One case. Race to close the file.';
  return `<div class="masthead">
    <div class="badge">${substep}</div>
    <h1 class="type">${CURRENT_STORY_TITLE ? `Case File: ${title}` : 'Detective Case Files'}</h1>
    <p>${tagline}</p>
  </div>`;
}

function stamp(kind){
  const s = el(`<div class="stamp-fx ${kind}">${kind==='correct'?'CASE CRACKED':'COLD CASE'}</div>`);
  document.body.appendChild(s);
  requestAnimationFrame(()=>s.classList.add('show'));
  setTimeout(()=>s.remove(), 900);
}

function openStoryModal(){
  const bg = el(`<div class="modal-bg"><div class="modal">
    <h2 class="type">📁 Case Brief — ${CURRENT_STORY_TITLE}</h2>
    <div class="case-doc">${STORY_PARAGRAPHS.map(p=>`<p>${p}</p>`).join('')}</div>
    <div class="center" style="margin-top:14px;"><button class="btn" id="closeStoryModal">Close</button></div>
  </div></div>`);
  document.body.appendChild(bg);
  document.getElementById('closeStoryModal').onclick=()=>bg.remove();
}

/* ---------------- SCREENS ---------------- */
function render(){
  app.innerHTML='';
  if(S.screen==='storyPicker') return renderStoryPicker();
  if(S.screen==='modeSelect') return renderModeSelect();
  if(S.screen==='playerSetup') return renderPlayerSetup();
  if(S.screen==='welcome') return renderWelcome();
  if(S.screen==='lobby') return renderLobby();
  if(S.screen==='caseBrief') return renderCaseBrief();
  if(S.screen==='roundIntro') return renderRoundIntro();
  if(S.screen==='question') return renderQuestion();
  if(S.screen==='finished') return renderFinished();
}

function renderStoryPicker(){
  app.appendChild(el(masthead()));
  const steps = Array.from(new Set(STORY_ORDER.map(id=>Math.floor(parseFloat(STORY_PACKS[id].substep))))).sort((a,b)=>a-b);
  const filterChipsHtml = `
    <div class="mark-toolbar" style="margin-top:2px;">
      <button class="tool-btn ${storyFilterStep==='all'?'active':''}" data-step="all">All Steps</button>
      ${steps.map(s=>`<button class="tool-btn ${storyFilterStep===String(s)?'active':''}" data-step="${s}">Step ${s}</button>`).join('')}
    </div>`;
  const visibleIds = STORY_ORDER.filter(id=>{
    if(storyFilterStep==='all') return true;
    return Math.floor(parseFloat(STORY_PACKS[id].substep))===Number(storyFilterStep);
  });
  const cardsHtml = visibleIds.length ? visibleIds.map(id=>{
    const p = STORY_PACKS[id];
    const isAuthentic = p.type === 'authentic';
    const typeBadge = isAuthentic
      ? '<span class="type-badge authentic">📖 Authentic Text</span>'
      : '<span class="type-badge controlled">🔎 Decodable</span>';
    return `<div class="story-card">
      <div class="story-card-title">${p.title}</div>
      <div class="story-card-sub">WRS Substep ${p.substep}</div>
      ${typeBadge}
      <p class="story-card-blurb">${p.blurb}</p>
      <button class="btn" data-story="${id}">Select This Case</button>
    </div>`;
  }).join('') : `<p class="small" style="grid-column:1/-1;">No cases at this step yet.</p>`;
  const panel = el(`
    <div class="panel">
      <h2>📂 Choose a Case File</h2>
      <p>Pick which WRS story this investigation is built around.</p>
      ${filterChipsHtml}
      <div class="story-grid">${cardsHtml}</div>
      <p class="small" style="margin-top:16px;">Joining a partner's case instead? Pick any card to continue — if you enter a case code on the next screen, your partner's story takes over automatically.</p>
    </div>
  `);
  app.appendChild(panel);
  panel.querySelectorAll('[data-step]').forEach(btn=>{
    btn.onclick=()=>{ storyFilterStep = btn.dataset.step; render(); };
  });
  panel.querySelectorAll('[data-story]').forEach(btn=>{
    btn.onclick=()=>{
      loadStoryPack(btn.dataset.story);
      S.screen='modeSelect';
      render();
    };
  });
}

function renderModeSelect(){
  app.appendChild(el(masthead()));
  app.appendChild(el(`
    <div class="panel center">
      <h2>🎮 Choose How to Play</h2>
      <p class="small">Case selected: <b>${CURRENT_STORY_TITLE}</b> (Substep ${CURRENT_STORY_SUBSTEP})</p>
      <div class="story-grid">
        <div class="story-card">
          <div class="story-card-title">🧍 Solo</div>
          <p class="story-card-blurb">Work the case on your own, at your own pace.</p>
          <button class="btn" data-mode="solo">Play Solo</button>
        </div>
        <div class="story-card">
          <div class="story-card-title">🤖 Vs Computer</div>
          <p class="story-card-blurb">Race ARIA, the computer detective — pick a difficulty.</p>
          <button class="btn" data-mode="vsComputer">Play vs Computer</button>
        </div>
        <div class="story-card">
          <div class="story-card-title">🕵️🕵️ Vs Player</div>
          <p class="story-card-blurb">Race a partner live, on another device.</p>
          <button class="btn" data-mode="vsPlayer">Play vs Player</button>
        </div>
      </div>
      <button class="btn ghost" id="backToPickerBtn" style="margin-top:10px;">← Choose a Different Case</button>
    </div>
  `));
  app.querySelectorAll('[data-mode]').forEach(btn=>{
    btn.onclick=()=>{
      const m = btn.dataset.mode;
      if(m==='vsPlayer'){ S.screen='welcome'; render(); return; }
      S.pendingMode = m;
      S.screen = 'playerSetup';
      render();
    };
  });
  document.getElementById('backToPickerBtn').onclick=()=>{ S.screen='storyPicker'; render(); };
}

function renderPlayerSetup(){
  const isBot = S.pendingMode === 'vsComputer';
  app.appendChild(el(masthead()));
  app.appendChild(el(`
    <div class="panel">
      <h2>🕵️ Detective Sign-In</h2>
      <label class="small">Your detective name</label>
      <input id="nameInput" type="text" placeholder="e.g. Detective Rivera" />
      ${isBot ? `
        <label class="small">Computer difficulty</label>
        <div class="row" style="margin-bottom:14px;">
          <button class="tool-btn diff-btn active" data-diff="easy">Easy</button>
          <button class="tool-btn diff-btn" data-diff="medium">Medium</button>
          <button class="tool-btn diff-btn" data-diff="hard">Hard</button>
        </div>
      ` : ''}
      <button class="btn" id="startSetupBtn">${isBot?'Start Race':'Start Case'}</button>
      <div class="center" style="margin-top:12px;">
        <button class="btn ghost" id="backModeBtn">← Back</button>
      </div>
    </div>
  `));
  let chosenDiff = 'easy';
  if(isBot){
    document.querySelectorAll('.diff-btn').forEach(b=>{
      b.onclick=()=>{
        chosenDiff = b.dataset.diff;
        document.querySelectorAll('.diff-btn').forEach(x=>x.classList.toggle('active', x===b));
      };
    });
  }
  document.getElementById('backModeBtn').onclick=()=>{ S.screen='modeSelect'; render(); };
  document.getElementById('startSetupBtn').onclick=()=>{
    const name = document.getElementById('nameInput').value.trim() || 'Detective 1';
    S.name = name; S.playerSlot = 1; S.mode = S.pendingMode;
    S.code = FIREBASE_OK ? makeCode() : 'LOCAL';
    if(FIREBASE_OK){
      db.ref(`sessions/${S.code}`).set({created:Date.now(), storyId:S.storyId, mode:S.mode});
      syncSelf();
    }
    if(isBot){
      S.botDifficulty = chosenDiff;
      S.opponent = {name:`🤖 ARIA (${chosenDiff})`, score:0, roundIdx:0, progress:0, finished:false};
    }
    S.screen='caseBrief';
    render();
  };
}

function renderWelcome(){
  app.appendChild(el(masthead()));
  const offlineNote = FIREBASE_OK ? '' : `<p class="small">⚠️ Firebase isn't connected yet, so this preview runs in local pass-and-play mode. Add your Firebase config in the code to enable real cross-device racing.</p>`;
  app.appendChild(el(`
    <div class="panel">
      <h2>🕵️ Detective Sign-In</h2>
      ${offlineNote}
      <label class="small">Your detective name</label>
      <input id="nameInput" type="text" placeholder="e.g. Detective Rivera" />
      <div class="row">
        <button class="btn" id="hostBtn">Start New Case (Player 1)</button>
        <button class="btn ghost" id="joinBtn">Join a Case (Player 2)</button>
      </div>
      <div id="joinRow" style="display:none; margin-top:12px;">
        <label class="small">Case code from Player 1</label>
        <input id="codeInput" type="text" maxlength="4" placeholder="ABCD" style="text-transform:uppercase;" />
        <button class="btn" id="joinGoBtn">Join Case</button>
      </div>
      <p class="small" style="margin-top:16px;">Estimated case time: 50+ minutes across 5 case files (vocabulary, spelling, word structure, timeline, and inference).</p>
    </div>
    <div class="center" style="margin-top:16px;">
      <button class="btn ghost" id="teacherBtnInline">🕵️ Teacher Tools</button>
    </div>
  `));
  document.getElementById('hostBtn').onclick=()=>startAsHost();
  document.getElementById('joinBtn').onclick=()=>{ document.getElementById('joinRow').style.display='block'; };
  document.getElementById('joinGoBtn').onclick=()=>joinCase();
  document.getElementById('teacherBtnInline').onclick=()=>openTeacher();
}

function startAsHost(){
  const name = document.getElementById('nameInput').value.trim() || 'Detective 1';
  S.name=name; S.playerSlot=1; S.mode = FIREBASE_OK ? 'host' : 'offline';
  if(!S.storyId) loadStoryPack(DEFAULT_STORY_ID);
  if(FIREBASE_OK){
    S.code = makeCode();
    db.ref(`sessions/${S.code}`).set({created:Date.now(), storyId:S.storyId});
    syncSelf();
    listenOpponent();
    S.screen='lobby';
  } else {
    S.code = 'LOCAL';
    S.screen='caseBrief';
  }
  render();
}
function joinCase(){
  const name = document.getElementById('nameInput')?.value.trim() || 'Detective 2';
  const code = document.getElementById('codeInput').value.trim().toUpperCase();
  if(!code){ alert('Enter the 4-letter case code from Player 1.'); return; }
  S.name=name; S.playerSlot=2; S.mode='join'; S.code=code;
  const proceed = ()=>{
    syncSelf();
    listenOpponent();
    S.screen='caseBrief';
    render();
  };
  if(FIREBASE_OK){
    db.ref(`sessions/${S.code}`).once('value').then(snap=>{
      const data = snap.val();
      loadStoryPack(data && data.storyId ? data.storyId : DEFAULT_STORY_ID);
      proceed();
    }).catch(()=>{ loadStoryPack(DEFAULT_STORY_ID); proceed(); });
  } else {
    proceed();
  }
}

function renderLobby(){
  app.appendChild(el(masthead()));
  app.appendChild(el(`
    <div class="panel center">
      <h2>📋 Case Opened</h2>
      <p>Share this case code with your partner detective:</p>
      <div class="wsc" style="font-size:28px; padding:8px 20px;">${S.code}</div>
      <p class="small" style="margin-top:16px;">Waiting for Detective 2 to join... you can start the case now — they'll join in progress.</p>
      <button class="btn" id="beginBtn" style="margin-top:10px;">Begin Investigation</button>
    </div>
  `));
  document.getElementById('beginBtn').onclick=()=>{ S.screen='caseBrief'; render(); };
}

const WARMUP_POINTS = 10;

/* ---------------- DETECTIVE RANK SYSTEM ----------------
   Rank is computed per case, from % of that case's total possible points —
   not raw score — so a short case and a long case rank fairly against each
   other. "Highest rank achieved" persists per student (keyed by teacher +
   student name) so it can show up on the printed report over time, without
   needing a login system or a full running point total. */
const RANK_TIERS = [
  {label:'Trainee Detective',  icon:'🔍', minPct:0},
  {label:'Junior Detective',   icon:'🕵️', minPct:50},
  {label:'Detective',          icon:'🕵️‍♀️', minPct:70},
  {label:'Senior Detective',   icon:'🎖️', minPct:85},
  {label:'Master Detective',   icon:'🏆', minPct:95}
];
function maxPossibleScore(){
  let total = WARMUP_POINTS;
  ROUNDS.forEach(r=> total += (r.points||10) * totalQuestionsInRound(r));
  return total;
}
function rankForScore(score){
  const max = maxPossibleScore();
  const pct = max>0 ? Math.round(100*score/max) : 0;
  let tier = RANK_TIERS[0];
  for(const t of RANK_TIERS){ if(pct>=t.minPct) tier=t; }
  return {label:tier.label, icon:tier.icon, pct};
}
function rankTierIndex(label){
  return RANK_TIERS.findIndex(t=>t.label===label);
}
/* Writes a new personal-best rank only if it beats the stored one; always bumps sessionsCompleted.
   Only runs for sessions that started from a teacher assignment link AND carry a studentId from
   the roster — that's the only case where identity is stable (no typo/rename risk). */
function recordRankIfNeeded(rank){
  if(!FIREBASE_OK || !S.assignmentTeacherId || !S.assignmentStudentId || S.rankRecorded) return;
  S.rankRecorded = true;
  const ref = db.ref(`studentRecords/${S.assignmentTeacherId}/${S.assignmentStudentId}`);
  ref.once('value').then(snap=>{
    const existing = snap.val();
    const newIdx = rankTierIndex(rank.label);
    const oldIdx = existing ? rankTierIndex(existing.bestRankLabel) : -1;
    const isNewBest = !existing || newIdx > oldIdx || (newIdx===oldIdx && rank.pct > (existing.bestRankPct||0));
    const payload = {
      studentName: S.name,
      bestRankLabel: isNewBest ? rank.label : existing.bestRankLabel,
      bestRankIcon: isNewBest ? rank.icon : existing.bestRankIcon,
      bestRankPct: isNewBest ? rank.pct : existing.bestRankPct,
      lastStoryId: S.storyId,
      lastPlayed: Date.now(),
      sessionsCompleted: (existing && existing.sessionsCompleted || 0) + 1
    };
    ref.set(payload).then(()=>{
      S.bestRank = {label:payload.bestRankLabel, icon:payload.bestRankIcon, pct:payload.bestRankPct, sessionsCompleted:payload.sessionsCompleted};
      render();
    });
  });
}

function wrapKeyTerms(text, terms){
  if(!terms.length) return text;
  const escaped = terms.map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  const pattern = new RegExp('\\b('+escaped.join('|')+')\\b','gi');
  return text.replace(pattern, m=>`<span class="hf-word" data-word="${m.toLowerCase()}">${m}</span>`);
}

function renderCaseBrief(){
  app.appendChild(el(masthead()));
  const panel = el(`
    <div class="panel">
      <h2>📁 Case Brief — Read the File</h2>
      <p>${S.mode==='solo' ? 'Before the evidence rounds begin, read the full case file.' : 'Before the evidence rounds begin, both detectives need to read the full case file.'} Read it carefully — every round ahead pulls its clues straight from this text.</p>
      <p class="small">Warm-up: circle the high-frequency words and scoop a sentence or two with your pencil before moving on. Worth ${WARMUP_POINTS} bonus points.</p>
      <div class="key-terms">
        ${KEY_TERMS.map(w=>`<span class="term-chip">${w}</span>`).join('')}
      </div>
      <div class="mark-toolbar">
        <button class="tool-btn active" id="toolPencil" data-tool="pencil">✏️ Pencil</button>
        <button class="tool-btn" id="toolCircle" data-tool="circle">⭕ Tap to Circle</button>
        <button class="tool-btn" id="toolEraser" data-tool="eraser">🧹 Eraser</button>
        <button class="btn ghost" id="clearMarksBtn">🗑️ Clear Marks</button>
      </div>
      <div class="case-doc-wrap">
        <div class="case-doc" id="caseDoc">
          <h2 style="text-align:center; margin-bottom:16px;">${CURRENT_STORY_TITLE}</h2>
          ${STORY_PARAGRAPHS.map(p=>`<p>${wrapKeyTerms(p, KEY_TERMS)}</p>`).join('')}
        </div>
        <canvas id="markCanvas"></canvas>
      </div>
      <div class="center" style="margin-top:10px;">
        <button class="btn ghost" id="readAloudBtn">🔊 Read Case Brief Aloud</button>
      </div>
      <div class="center" style="margin-top:18px;">
        <button class="btn" id="beginEvidenceBtn">Finish Warm-Up &amp; Begin Evidence →</button>
      </div>
    </div>
  `);
  app.appendChild(panel);

  /* --- pencil / circle marking --- */
  const wrap = panel.querySelector('.case-doc-wrap');
  const doc = panel.querySelector('#caseDoc');
  const canvas = panel.querySelector('#markCanvas');
  const ctx = canvas.getContext('2d');
  let activeTool = 'pencil';

  function sizeCanvas(){
    const rect = doc.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.style.width = rect.width+'px';
    canvas.style.height = rect.height+'px';
    canvas.width = Math.round(rect.width*dpr);
    canvas.height = Math.round(rect.height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  sizeCanvas();
  window.addEventListener('resize', sizeCanvas);

  function setCanvasCursor(tool){
    if(tool==='pencil'){
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'><circle cx='7' cy='7' r='2.5' fill='rgb(163,49,42)' stroke='white' stroke-width='1'/></svg>`;
      canvas.style.cursor = `url("data:image/svg+xml;base64,${btoa(svg)}") 7 7, crosshair`;
    } else if(tool==='eraser'){
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><rect x='2' y='2' width='14' height='14' fill='none' stroke='rgb(163,49,42)' stroke-width='2'/></svg>`;
      canvas.style.cursor = `url("data:image/svg+xml;base64,${btoa(svg)}") 9 9, crosshair`;
    } else {
      canvas.style.cursor = 'pointer';
    }
  }
  setCanvasCursor(activeTool);

  panel.querySelectorAll('.tool-btn[data-tool]').forEach(btn=>{
    btn.onclick=()=>{
      activeTool = btn.dataset.tool;
      panel.querySelectorAll('.tool-btn[data-tool]').forEach(b=>b.classList.toggle('active', b===btn));
      canvas.style.pointerEvents = activeTool==='circle' ? 'none' : 'auto';
      setCanvasCursor(activeTool);
    };
  });

  let drawing=false, lastX=0, lastY=0;
  canvas.addEventListener('pointerdown', e=>{
    drawing=true;
    canvas.setPointerCapture(e.pointerId);
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX-rect.left; lastY = e.clientY-rect.top;
  });
  canvas.addEventListener('pointermove', e=>{
    if(!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX-rect.left, y = e.clientY-rect.top;
    ctx.globalCompositeOperation = activeTool==='eraser' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = '#a3312a';
    ctx.lineWidth = activeTool==='eraser' ? 20 : 1.75;
    ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(x,y);
    ctx.stroke();
    lastX=x; lastY=y;
  });
  canvas.addEventListener('pointerup', e=>{ drawing=false; try{canvas.releasePointerCapture(e.pointerId);}catch(err){} });

  doc.querySelectorAll('.hf-word').forEach(span=>{
    span.addEventListener('click', ()=>{
      if(activeTool!=='circle') return;
      span.classList.toggle('circled');
    });
  });

  panel.querySelector('#clearMarksBtn').onclick=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    doc.querySelectorAll('.hf-word.circled').forEach(s=>s.classList.remove('circled'));
  };

  document.getElementById('readAloudBtn').onclick=()=>{
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    STORY_PARAGRAPHS.forEach(p=> speakText(p, 0.9));
  };
  document.getElementById('beginEvidenceBtn').onclick=()=>{
    window.speechSynthesis && window.speechSynthesis.cancel();
    window.removeEventListener('resize', sizeCanvas);
    S.score += WARMUP_POINTS;
    S.roundIdx=0; S.qIdx=0;
    S.screen='roundIntro';
    syncSelf();
    if(S.mode==='vsComputer') startBot(S.botDifficulty);
    render();
  };
}

function renderRoundIntro(){
  const r = ROUNDS[S.roundIdx];
  app.appendChild(el(masthead()));
  app.appendChild(el(corkboardHTML()));
  app.appendChild(el(raceBarHTML()));
  app.appendChild(el(`
    <div class="panel center">
      <h2>${r.icon} ${r.title}</h2>
      <p>${r.intro}</p>
      <button class="btn" id="startRoundBtn">Open Case File</button>
    </div>
  `));
  document.getElementById('startRoundBtn').onclick=()=>{
    S.qIdx=0; S.seqSetIdx=0;
    S.screen='question';
    S.qStartTime=Date.now();
    render();
  };
}

function renderQuestion(){
  const r = ROUNDS[S.roundIdx];
  app.appendChild(el(masthead()));
  app.appendChild(el(corkboardHTML()));
  app.appendChild(el(raceBarHTML()));

  if(r.type==='mc') return renderMC(r);
  if(r.type==='spell') return renderSpell(r);
  if(r.type==='sequence') return renderSequence(r);
}

function timeBonus(){
  const elapsedSec = (Date.now()-S.qStartTime)/1000;
  return Math.max(0, Math.round((20-elapsedSec)/20*5));
}

function shuffleArray(arr){
  let a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function renderMC(r){
  const q = r.questions[S.qIdx];
  let attempt = 0;
  // Shuffle option order fresh every time this question renders — so the
  // correct answer's on-screen position varies across replays/restarts
  // and can't be memorized by position alone.
  const order = shuffleArray(q.options.map((_,i)=>i)); // order[displayPos] = original option index
  const correctDisplayPos = order.indexOf(q.answer);
  const panel = el(`
    <div class="panel">
      <h2>${r.icon} ${r.title}</h2>
      <p class="small">Question ${S.qIdx+1} of ${r.questions.length}</p>
      ${q.context?`<div class="clue-quote">${q.context}</div>`:''}
      <div class="question-prompt">${q.prompt}</div>
      <div class="options">
        ${order.map((origIdx,pos)=>`<button class="opt-btn" data-i="${pos}">${q.options[origIdx]}</button>`).join('')}
      </div>
      <p class="tile-hint mc-nudge" style="display:none;"></p>
    </div>
  `);
  app.appendChild(panel);
  const nudge = panel.querySelector('.mc-nudge');

  panel.querySelectorAll('.opt-btn').forEach(btn=>{
    btn.onclick=()=>{
      const i = parseInt(btn.dataset.i);
      attempt++;
      const isCorrect = i===correctDisplayPos;
      const isFinal = isCorrect || attempt>=2;

      if(!isFinal){
        btn.classList.add('eliminated');
        btn.disabled = true;
        stamp('wrong');
        nudge.style.display='block';
        nudge.textContent = 'Not that one — ruled out. Check the evidence again and pick another.';
        return;
      }

      nudge.style.display='none';
      panel.querySelectorAll('.opt-btn').forEach(b=>b.disabled=true);
      let earned=0;
      if(isCorrect){
        btn.classList.add('correct');
        earned = r.points + timeBonus();
        S.score += earned;
        stamp('correct');
      } else {
        btn.classList.add('wrong');
        panel.querySelectorAll('.opt-btn')[correctDisplayPos].classList.add('correct');
        stamp('wrong');
      }
      logAnswer({roundTab:r.tab, item:q.prompt, correct:isCorrect, attempts:attempt, points:earned});
      syncSelf();
      const box = el(`
        <div class="explain-box ${isCorrect?'ok':'no'}">
          <div class="explain-title">${isCorrect?`✅ Evidence confirmed — +${earned} pts`:'🔎 Back to the evidence'}</div>
          <div class="explain-body">${q.explain||''}</div>
          <button class="btn" id="continueBtn">Continue Investigation →</button>
        </div>
      `);
      panel.appendChild(box);
      box.scrollIntoView({behavior:'smooth', block:'nearest'});
      document.getElementById('continueBtn').onclick=()=>advanceQuestion(r);
    };
  });
}

/* =========================================================
   WRS TILE PROGRESSION — Steps 1 through 12
   Reconstructed from the Wilson Scope & Sequence chart plus direct
   screenshots of the official digital tile board at each substep
   (July 2026). Each entry lists the tiles that become newly available
   at that substep, in teaching order. The set is cumulative — a
   student at substep X has access to every tile introduced at or
   before X, and nothing introduced after it.

   Where the printed scope chart and the actual tile-board screenshots
   disagreed on exact unlock substep (this happened for a handful of
   patterns — schwa/y, and the igh/eigh vs ie/ei ordering), the
   screenshot was treated as ground truth since it reflects the real
   product behavior a student would see.

   'consonant' = pale yellow tile (consonants, blends, digraphs, trigraphs)
   'vowel'     = tan/pink tile (single vowels, vowel teams, r-controlled, schwa)
   'welded'    = green tile (welded sounds, closed-syllable exceptions,
                 advanced suffix chunks like -tion/-ture/-cious)
   This list only tracks tiles that appear as physical letter tiles on
   the board — general suffixes reached via the "Suffixes" dropdown
   (er, est, ing, ed, ly, ness, etc.) aren't included since they're not
   drag-able board tiles.
--------------------------------------------------------- */
const WRS_PROGRESSION = [
  { substep:'1.1', add:[
    ['f','consonant'],['l','consonant'],['m','consonant'],['n','consonant'],['r','consonant'],
    ['s','consonant'],['d','consonant'],['g','consonant'],['p','consonant'],['t','consonant'],
    ['a','vowel'],['i','vowel'],['o','vowel'],
  ]},
  { substep:'1.2', add:[
    ['b','consonant'],['h','consonant'],['j','consonant'],['c','consonant'],['k','consonant'],
    ['v','consonant'],['w','consonant'],['x','consonant'],['y','consonant'],['z','consonant'],
    ['sh','consonant'],['ch','consonant'],['th','consonant'],['ck','consonant'],['qu','consonant'],['wh','consonant'],
    ['u','vowel'],['e','vowel'],
  ]},
  { substep:'1.4', add:[ ['all','welded'] ]},
  { substep:'1.5', add:[ ['am','welded'],['an','welded'] ]},
  { substep:'2.1', add:[
    ['ang','welded'],['ank','welded'],['ing','welded'],['ink','welded'],
    ['ong','welded'],['onk','welded'],['ung','welded'],['unk','welded'],
  ]},
  { substep:'2.3', add:[ ['ild','welded'],['ind','welded'],['old','welded'],['olt','welded'],['ost','welded'] ]},
  { substep:'3.1', add:[ ['y','vowel'],['ə','vowel'] ]}, // schwa + y-as-vowel, per tile-board screenshot
  { substep:'4.4', add:[ ['ive','welded'] ]},
  { substep:'6.4', add:[ ['stle','welded'] ]},
  { substep:'7.2', add:[ ['dge','consonant'] ]},
  { substep:'7.3', add:[ ['ph','consonant'],['tch','consonant'] ]},
  { substep:'7.4', add:[ ['tion','welded'],['sion','welded'] ]},
  { substep:'8.1', add:[ ['ar','vowel'],['er','vowel'],['ir','vowel'],['or','vowel'],['ur','vowel'] ]},
  { substep:'9.1', add:[ ['ai','vowel'],['ay','vowel'] ]},
  { substep:'9.2', add:[ ['ee','vowel'],['ey','vowel'] ]},
  { substep:'9.3', add:[ ['oa','vowel'],['oe','vowel'],['ue','vowel'] ]},
  { substep:'9.4', add:[ ['oi','vowel'],['oy','vowel'],['au','vowel'],['aw','vowel'] ]},
  { substep:'9.5', add:[ ['ou','vowel'],['ow','vowel'],['oo','vowel'] ]},
  { substep:'9.6', add:[ ['ea','vowel'] ]},
  { substep:'9.7', add:[ ['eu','vowel'],['ew','vowel'],['ui','vowel'] ]},
  { substep:'11.3', add:[ ['igh','vowel'],['eigh','vowel'] ]},
  { substep:'11.4', add:[ ['ie','vowel'],['ei','vowel'] ]},
  { substep:'12.5', add:[
    ['gh','consonant'],['gn','consonant'],['kn','consonant'],['rh','consonant'],
    ['wr','consonant'],['mb','consonant'],['mn','consonant'],['que','consonant'],
    ['sure','welded'],['ture','welded'],['tious','welded'],['cious','welded'],
    ['tial','welded'],['cial','welded'],['tient','welded'],['cient','welded'],
    ['cian','welded'],['tu','welded'],
  ]},
];

function substepValue(s){
  // "2.4B" -> 2.4  (trailing A/B lesson-part letters don't change unlock tier)
  return parseFloat(String(s).replace(/[A-Za-z]+$/,''));
}
function unlockedTilesForSubstep(substep){
  const target = substepValue(substep);
  const map = new Map();
  WRS_PROGRESSION.forEach(tier=>{
    if(substepValue(tier.substep) <= target){
      tier.add.forEach(([pattern,color])=> map.set(pattern, color));
    }
  });
  return map;
}

function chunkWord(word, substep){
  // Chunk using every multi-letter pattern the student has actually been
  // taught by this story's substep — digraphs, welded sounds, vowel
  // teams, suffix chunks — longest match first. If no substep is given,
  // falls back to the full progression (kept for backward compatibility).
  //
  // This matters beyond just picking fair decoy tiles: a substep-5.2
  // story shouldn't chunk "prepare" with an r-controlled "ar" tile,
  // since r-controlled vowels aren't taught until substep 8.1. Capping
  // the pattern set to what's unlocked keeps the spelling puzzle itself
  // at the right level, not just the wrong-answer choices.
  //
  // Welded sounds like am/an/all stay welded wherever they appear once
  // taught — e.g. "branch" chunks as br-an-ch, not b-r-a-n-ch.
  const allPatterns = new Set();
  if(substep){
    unlockedTilesForSubstep(substep).forEach((color,p)=>{ if(p.length>1) allPatterns.add(p); });
  } else {
    WRS_PROGRESSION.forEach(tier=> tier.add.forEach(([p])=>{ if(p.length>1) allPatterns.add(p); }));
  }
  const byLength = Array.from(allPatterns).sort((a,b)=>b.length-a.length);
  const chunks = [];
  let i=0;
  while(i<word.length){
    const match = byLength.find(p => word.slice(i, i+p.length)===p);
    if(match){ chunks.push(match); i+=match.length; }
    else { chunks.push(word[i]); i+=1; }
  }
  return chunks;
}

/* WRS tile color: looks up the pattern's official color from the
   progression table; falls back to the vowel/consonant heuristic for
   any single letter not explicitly listed (safety net only). */
const WRS_VOWELS = ['a','e','i','o','u'];
function wrsTileColorClass(chunkLetters, substep){
  const unlocked = substep ? unlockedTilesForSubstep(substep) : null;
  if(unlocked && unlocked.has(chunkLetters)){
    const color = unlocked.get(chunkLetters);
    return color==='vowel' ? 'tile-vowel' : (color==='welded' ? 'tile-welded' : 'tile-consonant');
  }
  return (chunkLetters.length===1 && WRS_VOWELS.includes(chunkLetters)) ? 'tile-vowel' : 'tile-consonant';
}

/* Decoy tiles are drawn only from patterns the student has actually
   been taught by this story's substep — never a pattern from a later
   step, even as a wrong answer. Falls back to a basic Step-1/2 pool
   if no substep is given (keeps older story packs working unchanged). */
const DECOY_POOL = ['b','p','t','d','k','g','m','n','r','l','s','f','v','j','a','e','i','o','u','ch','sh','th','wh','ck'];
function pickDecoys(correctChunks, count, substep){
  const avoid = new Set(correctChunks.map(c=>c.toLowerCase()));
  let pool;
  if(substep){
    pool = Array.from(unlockedTilesForSubstep(substep).keys()).filter(p=>!avoid.has(p));
  } else {
    pool = DECOY_POOL.filter(c=>!avoid.has(c));
  }
  pool = pool.sort(()=>Math.random()-0.5);
  return pool.slice(0, count);
}

/* ---------------- MORPHEME-BASED SPELLING (multisyllabic words) ----------------
   A spelling question can carry an explicit `morphemes` array instead of relying
   on chunkWord()'s phonemic chunking — used once words split into prefix/base/
   suffix, since that's a different kind of chunk than a blend or digraph.
   Example: {word:'unhappy', sentence:'...', morphemes:[
     {text:'un', type:'prefix'}, {text:'hap', type:'base'}, {text:'py', type:'base'}
   ]}
   Bound morphemes (prefix/suffix) render in yellow with a dash at the boundary
   where they attach; base syllables render in white with no dash between them,
   even when the base itself splits across more than one tile. */
const MORPHEME_DECOY_POOL = {
  prefix: ['un','re','dis','mis','pre','im','in','en','sub','con'],
  suffix: ['ing','ed','er','est','ly','ful','ness','tion','able','ive'],
};
function pickMorphemeDecoys(morphemes, substep){
  const decoys = [];
  const usedPrefixes = new Set(morphemes.filter(m=>m.type==='prefix').map(m=>m.text.toLowerCase()));
  const usedSuffixes = new Set(morphemes.filter(m=>m.type==='suffix').map(m=>m.text.toLowerCase()));
  if(usedPrefixes.size){
    const pool = MORPHEME_DECOY_POOL.prefix.filter(p=>!usedPrefixes.has(p)).sort(()=>Math.random()-0.5);
    pool.slice(0,2).forEach(text=>decoys.push({text, type:'prefix'}));
  }
  if(usedSuffixes.size){
    const pool = MORPHEME_DECOY_POOL.suffix.filter(p=>!usedSuffixes.has(p)).sort(()=>Math.random()-0.5);
    pool.slice(0,2).forEach(text=>decoys.push({text, type:'suffix'}));
  }
  if(!decoys.length){
    // No prefix/suffix at all (an all-base multisyllabic word) — fall back to
    // phonemic decoys drawn from the base syllables themselves.
    const baseChunks = morphemes.map(m=>m.text);
    pickDecoys(baseChunks, 2, substep).forEach(text=>decoys.push({text, type:'base'}));
  }
  return decoys;
}

function renderSpell(r){
  const q = r.questions[S.qIdx];
  const isMorphemic = Array.isArray(q.morphemes) && q.morphemes.length>0;
  let correctChunks, correctTiles, decoyTiles, dashAfter;
  if(isMorphemic){
    correctChunks = q.morphemes.map(m=>m.text);
    correctTiles = q.morphemes.map((m,i)=>({id:'c'+i, letter:m.text, correctIndex:i, morphType:m.type}));
    decoyTiles = pickMorphemeDecoys(q.morphemes, CURRENT_STORY_SUBSTEP).map((d,i)=>({id:'d'+i, letter:d.text, correctIndex:-1, morphType:d.type}));
    // A dash marks the boundary after slot i whenever that boundary touches a
    // bound morpheme (prefix or suffix) — never between two base-syllable tiles.
    dashAfter = q.morphemes.slice(0,-1).map((m,i)=> (m.type!=='base' || q.morphemes[i+1].type!=='base'));
  } else {
    correctChunks = chunkWord(q.word.toLowerCase(), CURRENT_STORY_SUBSTEP);
    correctTiles = correctChunks.map((ch,i)=>({id:'c'+i, letter:ch, correctIndex:i}));
    decoyTiles = pickDecoys(correctChunks, 3, CURRENT_STORY_SUBSTEP).map((ch,i)=>({id:'d'+i, letter:ch, correctIndex:-1}));
    dashAfter = null;
  }
  const allTiles = correctTiles.concat(decoyTiles);
  let trayTiles = shuffleTileLetters(allTiles);
  let slots = new Array(correctChunks.length).fill(null);
  let spellAttempt = 0;
  let lockedSlots = new Set();
  let step = 'listen'; // 'listen' -> 'tap' -> 'spell'

  function tileColorClass(t){
    return t.morphType ? 'tile-'+(t.morphType==='base'?'base':'affix') : wrsTileColorClass(t.letter, CURRENT_STORY_SUBSTEP);
  }
  function tapColorClass(i){
    return isMorphemic ? 'tap-tile-'+(q.morphemes[i].type==='base'?'base':'affix') : 'tap-'+wrsTileColorClass(correctChunks[i], CURRENT_STORY_SUBSTEP);
  }

  const panel = el(`<div class="panel"></div>`);
  app.appendChild(panel);

  function stepTrack(current){
    const state = (id)=>{
      const order=['listen','tap','spell'];
      if(order.indexOf(id)<order.indexOf(current)) return 'done';
      if(id===current) return 'active';
      return '';
    };
    return `<div class="step-track">
      <div class="step-dot ${state('listen')}">1 · Listen</div>
      <div class="step-dot ${state('tap')}">2 · Pause &amp; Tap</div>
      <div class="step-dot ${state('spell')}">3 · Spell</div>
    </div>`;
  }

  function playWordSequence(){
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    speakText(q.word, 0.85);
    setTimeout(()=>speakText(q.sentence, 0.85), 900);
    setTimeout(()=>speakText(q.word, 0.85), 2600);
  }

  function drawStep(){
    if(step==='listen') drawListen();
    else if(step==='tap') drawTap();
    else drawSpell();
  }

  function drawListen(){
    panel.innerHTML = `
      <h2>${r.icon} ${r.title}</h2>
      <p class="small">Word ${S.qIdx+1} of ${r.questions.length}</p>
      ${stepTrack('listen')}
      <div class="question-prompt" style="text-align:center;">Step 1 — Listen</div>
      <p style="text-align:center;">Tap the button. Listen to the word, hear it in a sentence, then hear the word one more time.</p>
      <div class="center"><button class="spell-word-btn" id="hearBtn">🔊 Hear the word</button></div>
      <div class="center" style="margin-top:26px;"><button class="btn" id="toTapBtn">Next: Pause &amp; Tap →</button></div>
    `;
    panel.querySelector('#hearBtn').onclick = playWordSequence;
    panel.querySelector('#toTapBtn').onclick = ()=>{ step='tap'; drawStep(); };
  }

  function drawTap(){
    let tapped = 0;
    panel.innerHTML = `
      <h2>${r.icon} ${r.title}</h2>
      <p class="small">Word ${S.qIdx+1} of ${r.questions.length}</p>
      ${stepTrack('tap')}
      <div class="question-prompt" style="text-align:center;">Step 2 — Pause &amp; Tap</div>
      <p style="text-align:center;">Listen again if you need to. Then tap each card in order and say the sound out loud.</p>
      <div class="center"><button class="btn ghost" id="hearAgainBtn">🔊 Hear it again</button></div>
      <div class="tap-row" id="tapRow"></div>
      <p class="tile-hint" id="tapHint">Tap card 1 and say its sound.</p>
      <div class="center" style="margin-top:14px;"><button class="btn" id="toSpellBtn" disabled>Next: Spell with Cards →</button></div>
    `;
    const tapRow = panel.querySelector('#tapRow');
    const toSpellBtn = panel.querySelector('#toSpellBtn');
    const tapHint = panel.querySelector('#tapHint');
    function drawTaps(){
      tapRow.innerHTML='';
      correctChunks.forEach((c,i)=>{
        const dot = document.createElement('button');
        const colorClass = i<tapped ? '' : ' '+tapColorClass(i);
        dot.className = 'tap-dot' + (i<tapped?' tapped':'') + (c.length>1?' tap-dot-multi':'') + colorClass;
        dot.textContent = (i<tapped) ? c : (i+1);
        dot.onclick = ()=>{
          if(i===tapped){
            tapped++;
            drawTaps();
            toSpellBtn.disabled = tapped<correctChunks.length;
            tapHint.textContent = tapped<correctChunks.length
              ? `Tap card ${tapped+1} and say its sound.`
              : 'All sounds tapped — nice work!';
          }
        };
        tapRow.appendChild(dot);
      });
    }
    drawTaps();
    panel.querySelector('#hearAgainBtn').onclick = playWordSequence;
    toSpellBtn.onclick = ()=>{ step='spell'; drawStep(); };
  }

  function drawSpell(){
    panel.innerHTML = `
      <h2>${r.icon} ${r.title}</h2>
      <p class="small">Word ${S.qIdx+1} of ${r.questions.length}</p>
      ${stepTrack('spell')}
      <div class="question-prompt" style="text-align:center;">Step 3 — Spell with Cards</div>
      <p style="text-align:center;">Drag — or tap — the letter tiles into order below. A few extra tiles don't belong — leave them in the tray.</p>
      <div class="center"><button class="spell-word-btn" id="hearBtn">🔊 Hear the word</button></div>
      <div class="tile-slots" id="tileSlots"></div>
      <div class="tile-tray" id="tileTray"></div>
      <p class="tile-hint">Tap a tile to place it, tap a placed tile to send it back.</p>
      <div class="center" style="margin-top:14px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        <button class="btn ghost" id="resetTilesBtn">Reset Tiles</button>
        <button class="btn" id="submitSpell" disabled>File Evidence</button>
      </div>
    `;
    panel.querySelector('#hearBtn').onclick = playWordSequence;

    const slotsEl = panel.querySelector('#tileSlots');
    const trayEl = panel.querySelector('#tileTray');
    const submitBtn = panel.querySelector('#submitSpell');
    const tileById = (id)=> allTiles.find(l=>l.id===id);

    function placeInFirstEmptySlot(t){
      const idx = slots.findIndex(s=>s===null);
      if(idx===-1) return;
      slots[idx] = t.id;
      trayTiles = trayTiles.filter(x=>x.id!==t.id);
    }
    function removeFromSlot(slotIndex){
      const tid = slots[slotIndex];
      if(!tid) return;
      slots[slotIndex]=null;
      trayTiles.push(tileById(tid));
    }
    function makeTileEl(t, location, slotIndex, locked){
      const d = document.createElement('div');
      d.className='tile' + (t.letter.length>1?' tile-multi':'') + ' ' + tileColorClass(t) + (locked?' tile-locked':'');
      d.textContent = t.letter;
      if(locked) return d;
      let startX,startY,dragging=false,moved=false,offX=0,offY=0;
      d.addEventListener('pointerdown', e=>{
        e.preventDefault();
        dragging=true; moved=false;
        startX=e.clientX; startY=e.clientY;
        d.setPointerCapture(e.pointerId);
        const rect = d.getBoundingClientRect();
        offX = e.clientX-rect.left; offY = e.clientY-rect.top;
      });
      d.addEventListener('pointermove', e=>{
        if(!dragging) return;
        const dx=e.clientX-startX, dy=e.clientY-startY;
        if(!moved && (Math.abs(dx)>4 || Math.abs(dy)>4)){
          moved=true;
          d.classList.add('dragging');
        }
        if(moved){
          d.style.left=(e.clientX-offX)+'px';
          d.style.top=(e.clientY-offY)+'px';
        }
      });
      d.addEventListener('pointerup', e=>{
        if(!dragging) return;
        dragging=false;
        d.releasePointerCapture(e.pointerId);
        if(!moved){
          if(location==='tray') placeInFirstEmptySlot(t);
          else removeFromSlot(slotIndex);
          draw();
          return;
        }
        d.classList.remove('dragging');
        d.style.left=''; d.style.top='';
        const dropEl = document.elementFromPoint(e.clientX, e.clientY);
        const targetSlot = dropEl && dropEl.closest('.tile-slot');
        const targetTray = dropEl && dropEl.closest('.tile-tray');
        if(targetSlot && !targetSlot.classList.contains('locked')){
          const targetIdx = parseInt(targetSlot.dataset.slotIndex);
          if(location==='tray'){
            const occId = slots[targetIdx];
            slots[targetIdx]=t.id;
            trayTiles = trayTiles.filter(x=>x.id!==t.id);
            if(occId) trayTiles.push(tileById(occId));
          } else if(targetIdx!==slotIndex){
            const occId = slots[targetIdx];
            slots[targetIdx]=t.id;
            slots[slotIndex]=occId||null;
          }
        } else if(targetTray && location==='slot'){
          removeFromSlot(slotIndex);
        }
        draw();
      });
      return d;
    }
    function draw(){
      slotsEl.innerHTML='';
      slots.forEach((tid,i)=>{
        const isLocked = lockedSlots.has(i);
        const box = document.createElement('div');
        box.className = 'tile-slot' + (tid?' filled':'') + (isLocked?' locked':'');
        box.dataset.slotIndex=i;
        if(tid) box.appendChild(makeTileEl(tileById(tid),'slot',i,isLocked));
        slotsEl.appendChild(box);
        if(isMorphemic && dashAfter[i]){
          const dash = document.createElement('div');
          dash.className = 'morph-dash';
          dash.textContent = '-';
          slotsEl.appendChild(dash);
        }
      });
      trayEl.innerHTML='';
      trayTiles.forEach(t=> trayEl.appendChild(makeTileEl(t,'tray',null,false)));
      submitBtn.disabled = !slots.every(s=>s!==null);
    }
    draw();

    panel.querySelector('#resetTilesBtn').onclick=()=>{
      const lockedTileIds = new Set();
      slots.forEach((tid,i)=>{ if(tid && lockedSlots.has(i)) lockedTileIds.add(tid); });
      const freeTiles = allTiles.filter(t=>!lockedTileIds.has(t.id));
      slots = slots.map((tid,i)=> lockedSlots.has(i) ? tid : null);
      trayTiles = shuffleTileLetters(freeTiles);
      draw();
    };
    submitBtn.onclick=()=>{
      spellAttempt++;
      const val = slots.map(id=>tileById(id).letter).join('').toLowerCase();
      const wasCorrect = val===q.word.toLowerCase();
      const isFinal = wasCorrect || spellAttempt>=2;

      if(!isFinal){
        stamp('wrong');
        lockedSlots = new Set();
        slots.forEach((tid,i)=>{ if(tid && tileById(tid).correctIndex===i) lockedSlots.add(i); });
        slots.forEach((tid,i)=>{
          if(tid && !lockedSlots.has(i)){ trayTiles.push(tileById(tid)); slots[i]=null; }
        });
        submitBtn.disabled=true;
        panel.querySelector('#resetTilesBtn').disabled=true;
        const box = el(`
          <div class="explain-box no">
            <div class="explain-title">🔎 Not quite yet</div>
            <div class="explain-body">Locked letters (🔒) are already correct — fix the rest, then file the evidence again.</div>
            <div class="center" style="margin-top:10px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
              <button class="btn ghost" id="hearRetryBtn">🔊 Hear the word again</button>
              <button class="btn" id="spellRetryBtn">🔄 Try Again</button>
            </div>
          </div>
        `);
        panel.appendChild(box);
        box.scrollIntoView({behavior:'smooth', block:'nearest'});
        document.getElementById('hearRetryBtn').onclick = playWordSequence;
        document.getElementById('spellRetryBtn').onclick=()=>{
          box.remove();
          draw();
          panel.querySelector('#resetTilesBtn').disabled=false;
        };
        return;
      }

      submitBtn.disabled=true;
      panel.querySelector('#resetTilesBtn').disabled=true;
      slotsEl.querySelectorAll('.tile').forEach(t=>t.style.pointerEvents='none');
      trayEl.querySelectorAll('.tile').forEach(t=>t.style.pointerEvents='none');
      let earned=0;
      if(wasCorrect){
        earned = r.points + timeBonus();
        S.score += earned;
        stamp('correct');
      } else {
        stamp('wrong');
      }
      logAnswer({roundTab:r.tab, item:q.word, correct:wasCorrect, attempts:spellAttempt, points:earned});
      syncSelf();
      const box = el(`
        <div class="explain-box ${wasCorrect?'ok':'no'}">
          <div class="explain-title">${wasCorrect?`✅ Evidence filed — +${earned} pts`:'🔎 Back to the evidence'}</div>
          <div class="explain-body">${wasCorrect?`Correctly spelled: <b>${q.word}</b>`:`The correct spelling is <b>${q.word}</b> — found in: "${q.sentence}"`}</div>
          <button class="btn" id="continueBtn">Continue Investigation →</button>
        </div>
      `);
      panel.appendChild(box);
      box.scrollIntoView({behavior:'smooth', block:'nearest'});
      document.getElementById('continueBtn').onclick=()=>advanceQuestion(r);
    };
  }

  drawStep();
}

function shuffleTileLetters(items){
  // Fisher-Yates shuffle guaranteed to not start in the correct spelling order
  // (works correctly even with repeated letters like the double s in "slush",
  // since each tile has a unique id regardless of its letter).
  let arr = items.slice();
  const isSameOrder = (a)=> a.every((item,idx)=>item.correctIndex===idx);
  let attempts=0;
  do{
    arr = items.slice();
    for(let i=arr.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    attempts++;
  } while(isSameOrder(arr) && attempts<50 && items.length>1);
  return arr;
}

function shuffleScrambled(items){
  // Fisher-Yates shuffle, guaranteed to NOT match the original order
  // (and for short lists, guaranteed no item stays in its own correct slot).
  let arr = items.slice();
  const isSameOrder = (a)=> a.every((item,idx)=>item.correctPos===idx);
  const hasFixedPoint = (a)=> a.some((item,idx)=>item.correctPos===idx);
  let attempts = 0;
  do{
    arr = items.slice();
    for(let i=arr.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    attempts++;
  } while((isSameOrder(arr) || hasFixedPoint(arr)) && attempts<50);
  return arr;
}

function renderSequence(r){
  const set = r.sets[S.seqSetIdx];
  if(!S.seqOrder.length || S.seqOrder.length!==set.events.length){
    const items = set.events.map((e,i)=>({text:e, correctPos:i}));
    S.seqOrder = shuffleScrambled(items);
  }
  const panel = el(`
    <div class="panel">
      <h2>${r.icon} ${r.title}</h2>
      <p class="small">Timeline ${S.seqSetIdx+1} of ${r.sets.length}</p>
      <div class="question-prompt">${set.label}</div>
      <ul class="seq-list" id="seqList"></ul>
      <p class="tile-hint" id="seqHint">Drag a card to reorder it, or tap two cards to swap them.</p>
      <div class="center"><button class="btn" id="lockBtn">Lock In Timeline</button></div>
    </div>
  `);
  app.appendChild(panel);
  const list = panel.querySelector('#seqList');
  const hint = panel.querySelector('#seqHint');
  let selectedIdx = null;
  let lockedPositions = new Set();

  function drawList(){
    list.innerHTML='';
    selectedIdx = null;
    S.seqOrder.forEach((item,idx)=>{
      const isLocked = lockedPositions.has(idx);
      const li = document.createElement('li');
      li.className='seq-item' + (isLocked?' locked':'');
      li.dataset.idx=idx;
      li.innerHTML = `<span class="num">${idx+1}</span><span>${item.text}</span>` + (isLocked?' <span class="lock-icon">🔒</span>':'');
      if(!isLocked) attachItemInteraction(li, idx);
      list.appendChild(li);
    });
  }

  function handleTap(idx){
    if(lockedPositions.has(idx)) return;
    if(selectedIdx===null){
      selectedIdx = idx;
    } else if(selectedIdx===idx){
      selectedIdx = null;
    } else {
      const tmp = S.seqOrder[selectedIdx];
      S.seqOrder[selectedIdx] = S.seqOrder[idx];
      S.seqOrder[idx] = tmp;
      selectedIdx = null;
      drawList();
      return;
    }
    list.querySelectorAll('.seq-item').forEach((li,i)=> li.classList.toggle('selected', i===selectedIdx));
  }

  function attachItemInteraction(li, idx){
    let startX,startY,dragging=false,moved=false,offX=0,offY=0,origWidth=0;
    li.addEventListener('pointerdown', e=>{
      e.preventDefault();
      dragging=true; moved=false;
      startX=e.clientX; startY=e.clientY;
      li.setPointerCapture(e.pointerId);
      const rect = li.getBoundingClientRect();
      offX = e.clientX-rect.left; offY = e.clientY-rect.top;
      origWidth = rect.width;
    });
    li.addEventListener('pointermove', e=>{
      if(!dragging) return;
      const dx=e.clientX-startX, dy=e.clientY-startY;
      if(!moved && (Math.abs(dx)>6 || Math.abs(dy)>6)){
        moved=true;
        li.style.width = origWidth+'px';
        li.classList.add('dragging');
      }
      if(moved){
        li.style.left=(e.clientX-offX)+'px';
        li.style.top=(e.clientY-offY)+'px';
      }
    });
    li.addEventListener('pointerup', e=>{
      if(!dragging) return;
      dragging=false;
      li.releasePointerCapture(e.pointerId);
      if(!moved){
        handleTap(idx);
        return;
      }
      li.classList.remove('dragging');
      li.style.left=''; li.style.top=''; li.style.width='';
      const dropEl = document.elementFromPoint(e.clientX, e.clientY);
      const target = dropEl && dropEl.closest('.seq-item');
      if(target && target!==li && !target.classList.contains('locked')){
        const targetIdx = parseInt(target.dataset.idx);
        const moved_ = S.seqOrder.splice(idx,1)[0];
        S.seqOrder.splice(targetIdx,0,moved_);
      }
      drawList();
    });
  }

  drawList();
  let attemptCount = 0;
  const lockBtn = panel.querySelector('#lockBtn');
  lockBtn.onclick=()=>{
    attemptCount++;
    let correctCount=0;
    S.seqOrder.forEach((item,idx)=>{ if(item.correctPos===idx) correctCount++; });
    const allCorrect = correctCount===set.events.length;
    const isFinal = allCorrect || attemptCount>=2;

    if(!isFinal){
      stamp('wrong');
      lockBtn.disabled=true;
      const box = el(`
        <div class="explain-box no">
          <div class="explain-title">🔎 ${correctCount} of ${set.events.length} in the right spot</div>
          <div class="explain-body">Not quite yet. Reread the case brief to check the order, then rearrange the cards and lock it in again. Cards you already got right will stay locked in place.</div>
          <div class="center" style="margin-top:10px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="btn ghost" id="rereadBtn">📖 Reread the Story</button>
            <button class="btn" id="retryBtn">🔄 Rearrange &amp; Resubmit</button>
          </div>
        </div>
      `);
      panel.appendChild(box);
      box.scrollIntoView({behavior:'smooth', block:'nearest'});
      document.getElementById('rereadBtn').onclick=()=> openStoryModal();
      document.getElementById('retryBtn').onclick=()=>{
        box.remove();
        lockedPositions = new Set();
        S.seqOrder.forEach((item,idx)=>{ if(item.correctPos===idx) lockedPositions.add(idx); });
        if(hint) hint.textContent = lockedPositions.size
          ? 'Locked cards (🔒) were already correct. Fix the rest — drag or tap to swap.'
          : 'Drag a card to reorder it, or tap two cards to swap them.';
        drawList();
        lockBtn.disabled=false;
      };
      return;
    }

    const earned = correctCount * r.points;
    S.score += earned;
    if(allCorrect) stamp('correct'); else stamp('wrong');
    logAnswer({roundTab:r.tab, item:set.label, correct:allCorrect, attempts:attemptCount, points:earned, partial:`${correctCount}/${set.events.length}`});
    syncSelf();
    lockBtn.disabled=true;
    const correctList = set.events.map((e,idx)=>`<li class="seq-item"><span class="num">${idx+1}</span><span>${e}</span></li>`).join('');
    const box = el(`
      <div class="explain-box ${allCorrect?'ok':'no'}">
        <div class="explain-title">${allCorrect?`✅ Timeline confirmed — +${earned} pts`:`🔎 ${correctCount} of ${set.events.length} in the right spot — +${earned} pts`}</div>
        <div class="explain-body">${allCorrect?'Every event was in the right order.':'Here\'s the correct timeline, in order:'}</div>
        ${allCorrect?'':`<ul class="seq-list">${correctList}</ul>`}
        <button class="btn" id="continueBtn" style="margin-top:12px;">Continue Investigation →</button>
      </div>
    `);
    panel.appendChild(box);
    box.scrollIntoView({behavior:'smooth', block:'nearest'});
    document.getElementById('continueBtn').onclick=()=>{
      S.seqOrder=[];
      S.seqSetIdx++;
      if(S.seqSetIdx>=r.sets.length){ nextRound(); }
      else { S.qStartTime=Date.now(); render(); }
    };
  };
}

function advanceQuestion(r){
  S.qIdx++;
  S.qStartTime=Date.now();
  if(S.qIdx>=r.questions.length){ nextRound(); }
  else { render(); }
}

function nextRound(){
  S.roundIdx++;
  S.qIdx=0;
  if(S.roundIdx>=ROUNDS.length){
    S.finished=true;
    S.finishTime = Date.now();
    S.screen='finished';
    if(S.mode==='vsComputer') stopBot();
    syncSelf();
  } else {
    S.screen='roundIntro';
    syncSelf();
  }
  render();
}

function renderFinished(){
  const rank = rankForScore(S.score);
  if(S.assignmentTeacherId) recordRankIfNeeded(rank);
  app.appendChild(el(masthead()));
  app.appendChild(el(`
    <div class="panel center">
      <h2>🗂️ Case Closed</h2>
      <p>You solved every case file. Final score locked in.</p>
      <div class="rank-badge">
        <div style="font-size:32px;">${rank.icon}</div>
        <div class="type" style="font-size:18px; color:var(--red-dark);">${rank.label}</div>
        <div class="small">${rank.pct}% of possible points this case</div>
        ${S.assignmentTeacherId
          ? (S.bestRank
              ? `<div class="small" style="margin-top:6px;">🏅 Personal best: ${S.bestRank.icon} ${S.bestRank.label} (${S.bestRank.sessionsCompleted} case${S.bestRank.sessionsCompleted===1?'':'s'} completed)</div>`
              : `<div class="small" style="margin-top:6px; font-style:italic;">Checking personal best…</div>`)
          : ''}
      </div>
    </div>
  `));
  if(S.mode==='solo'){
    app.appendChild(el(`
      <div class="final-board" style="grid-template-columns:1fr; max-width:320px; margin:0 auto;">
        <div class="final-card">
          <div>🕵️ ${S.name}</div>
          <div class="big">${S.score}</div>
          <div class="small">points</div>
          <div class="small">🏁 Finished</div>
        </div>
      </div>
    `));
  } else {
    const oppRank = rankForScore(S.opponent.score||0);
    app.appendChild(el(`
      <div class="final-board">
        <div class="final-card">
          <div>🕵️ ${S.name}</div>
          <div class="big">${S.score}</div>
          <div class="small">points</div>
          <div class="small">${rank.icon} ${rank.label}</div>
          ${S.finished?'<div class="small">🏁 Finished</div>':''}
        </div>
        <div class="final-card">
          <div>🕵️ ${S.opponent.name||'Detective 2'}</div>
          <div class="big">${S.opponent.score||0}</div>
          <div class="small">points</div>
          <div class="small">${oppRank.icon} ${oppRank.label}</div>
          ${S.opponent.finished?'<div class="small">🏁 Finished</div>':'<div class="small">still investigating...</div>'}
        </div>
      </div>
    `));
  }
  app.appendChild(el(`<div class="center" style="margin-top:18px;"><button class="btn ghost" id="newCaseBtn">🗂️ Start a New Case</button></div>`));
  document.getElementById('newCaseBtn').onclick=()=>{
    stopBot();
    S.screen='storyPicker'; S.mode=null; S.pendingMode=null; S.botDifficulty=null;
    S.assignmentTeacherId=null; S.assignmentStudentId=null; S.code=null; S.storyId=null;
    S.rankRecorded=false; S.bestRank=null;
    S.opponent={name:'Detective 2', score:0, roundIdx:0, finished:false};
    S.roundIdx=0; S.qIdx=0; S.score=0; S.seqSetIdx=0; S.seqOrder=[];
    S.finished=false; S.finishTime=null; S.answerLog=[];
    render();
  };
}

/* ---------------- TEACHER TOOLS ---------------- */
function openTeacher(){
  if(!hasCustomPin()){
    const p1 = prompt('No teacher PIN is set yet. Create one now (4+ digits):');
    if(p1===null) return;
    if(p1.trim().length<4){ alert('PIN must be at least 4 characters. Try again.'); return; }
    setTeacherPin(p1.trim());
    alert('Teacher PIN set! Use it from now on to open Teacher Tools on this device/browser.');
  }
  const pin = prompt('Teacher PIN:');
  if(pin===null) return;
  if(pin!==getTeacherPin()){ alert('Incorrect PIN.'); return; }
  ensureTeacherProfile();
  const bg = el(`<div class="modal-bg"><div class="modal">
    <h2 class="type">🕵️ Teacher Tools</h2>
    <p class="small">Firebase status: ${FIREBASE_OK?'Connected ✅':'Not connected — offline mode ⚠️'}</p>
    <p class="small">Current session code: <b>${S.code||'none yet'}</b></p>
    <p class="small">Player 1 (you if hosting): ${S.name} — ${S.score} pts</p>
    <p class="small">Opponent synced: ${S.opponent.name} — ${S.opponent.score||0} pts</p>
    <hr>
    <p class="small"><b>Answer key</b> — all correct answers are index 0-based option order or the target spelling word, listed in the ROUNDS data at the top of the script for quick reference during discussion.</p>
    <p class="small"><b>Pacing tip:</b> pause between each Case File for 3-5 minutes of verbal discussion/review to comfortably stretch this to 50+ minutes.</p>
    <hr>
    <p class="small"><b>🔊 Reading voice</b> — choose which computer voice reads the case brief and dictates spelling words on this device.</p>
    <select id="voiceSelect" style="width:100%; padding:9px; border-radius:6px; border:2px solid var(--paper-line); font-family:'Libre Franklin',sans-serif; margin-bottom:8px;"></select>
    <button class="btn ghost" id="testVoiceBtn">🔊 Test Voice</button>
    <hr>
    <button class="btn" id="printReportBtn">🖨️ Print Report</button>
    <hr>
    <p class="small" id="teacherNameLine"><b>👤 Assignments saved under:</b> ${getTeacherName()} <button class="btn ghost" id="renameTeacherBtn" style="padding:3px 9px; font-size:11px; margin-left:6px;">Rename</button></p>
    <p class="small"><b>🎓 My Students</b> — add each student once; you'll pick from this list when creating assignments, so names always match exactly (no typos, no history getting split across two spellings).</p>
    <div class="row" style="margin-bottom:8px;">
      <input id="newStudentName" type="text" placeholder="Add student name" style="margin:0;" />
      <button class="btn ghost" id="addStudentBtn" style="flex:0 0 auto;">Add</button>
    </div>
    <div id="myStudentsList"><p class="small" style="font-style:italic;">Loading…</p></div>
    <hr>
    <p class="small"><b>📋 Create a Solo Assignment</b> — generates a link that drops a student straight into a case, skipping the picker.</p>
    <select id="assignStorySelect" style="width:100%; padding:9px; border-radius:6px; border:2px solid var(--paper-line); font-family:'Libre Franklin',sans-serif; margin-bottom:8px;">
      ${STORY_ORDER.map(id=>`<option value="${id}">${STORY_PACKS[id].title} (Substep ${STORY_PACKS[id].substep})</option>`).join('')}
    </select>
    <select id="assignStudentSelect" style="width:100%; padding:9px; border-radius:6px; border:2px solid var(--paper-line); font-family:'Libre Franklin',sans-serif; margin-bottom:8px;">
      <option value="">Loading students…</option>
    </select>
    <div class="row" style="margin-bottom:8px;">
      <button class="tool-btn assign-mode-btn active" data-mode="solo">Solo</button>
      <button class="tool-btn assign-mode-btn" data-mode="vsComputer">Vs Computer</button>
    </div>
    <div class="row" id="assignDiffRow" style="display:none; margin-bottom:8px;">
      <button class="tool-btn assign-diff-btn active" data-diff="easy">Easy</button>
      <button class="tool-btn assign-diff-btn" data-diff="medium">Medium</button>
      <button class="tool-btn assign-diff-btn" data-diff="hard">Hard</button>
    </div>
    <button class="btn" id="createAssignBtn">Create Assignment Link</button>
    <div id="assignResult"></div>
    <hr>
    <p class="small"><b>📂 My Assignments</b> — only assignments created under this profile show here.</p>
    <div id="myAssignmentsList"><p class="small" style="font-style:italic;">Loading…</p></div>
    <hr>
    <button class="btn" id="resetBtn">Reset My Progress</button>
    <button class="btn ghost" id="changePinBtn">Change PIN</button>
    <button class="btn ghost" id="closeTeacher">Close</button>
  </div></div>`);
  document.body.appendChild(bg);
  const voiceSelect = document.getElementById('voiceSelect');
  populateVoiceSelect(voiceSelect);
  voiceSelect.onchange = ()=> setSelectedVoiceURI(voiceSelect.value);
  document.getElementById('testVoiceBtn').onclick = ()=>{
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    speakText('The brisk, cold wind blew past the front step.', 0.85);
  };
  document.getElementById('printReportBtn').onclick = printReport;
  document.getElementById('changePinBtn').onclick=()=>{
    const newPin = prompt('Enter a new teacher PIN (4+ digits):');
    if(newPin && newPin.trim().length>=4){ setTeacherPin(newPin.trim()); alert('PIN updated.'); }
    else if(newPin!==null){ alert('PIN must be at least 4 characters — not changed.'); }
  };
  function wireRenameBtn(){
    document.getElementById('renameTeacherBtn').onclick=()=>{
      const name = prompt('Display name for your assignments:', getTeacherName());
      if(name && name.trim()){
        renameTeacherDisplayName(name.trim());
        document.getElementById('teacherNameLine').innerHTML =
          `<b>👤 Assignments saved under:</b> ${getTeacherName()} <button class="btn ghost" id="renameTeacherBtn" style="padding:3px 9px; font-size:11px; margin-left:6px;">Rename</button>`;
        wireRenameBtn();
      }
    };
  }
  wireRenameBtn();
  document.getElementById('closeTeacher').onclick=()=>bg.remove();
  document.getElementById('resetBtn').onclick=()=>{
    stopBot();
    S.roundIdx=0; S.qIdx=0; S.score=0; S.seqSetIdx=0; S.seqOrder=[]; S.finished=false; S.answerLog=[];
    S.screen='roundIntro'; syncSelf(); bg.remove(); render();
  };

  document.getElementById('addStudentBtn').onclick=()=>{
    const name = document.getElementById('newStudentName').value.trim();
    if(!name){ alert('Enter a student name.'); return; }
    if(!FIREBASE_OK){ alert("Firebase isn't connected, so students can't be saved in this preview."); return; }
    const ref = db.ref(`students/${getTeacherId()}`).push();
    ref.set({name, createdAt:Date.now()}).then(()=>{
      document.getElementById('newStudentName').value='';
      loadMyStudents();
    }).catch(()=>alert('Could not save this student — check your connection.'));
  };

  /* --- solo assignment creation --- */
  let assignMode = 'solo';
  let assignDiff = 'easy';
  bg.querySelectorAll('.assign-mode-btn').forEach(b=>{
    b.onclick=()=>{
      assignMode = b.dataset.mode;
      bg.querySelectorAll('.assign-mode-btn').forEach(x=>x.classList.toggle('active', x===b));
      document.getElementById('assignDiffRow').style.display = assignMode==='vsComputer' ? 'flex' : 'none';
    };
  });
  bg.querySelectorAll('.assign-diff-btn').forEach(b=>{
    b.onclick=()=>{
      assignDiff = b.dataset.diff;
      bg.querySelectorAll('.assign-diff-btn').forEach(x=>x.classList.toggle('active', x===b));
    };
  });
  document.getElementById('createAssignBtn').onclick=()=>{
    const storyId = document.getElementById('assignStorySelect').value;
    const studentSelect = document.getElementById('assignStudentSelect');
    const studentId = studentSelect.value;
    const studentName = studentSelect.selectedOptions[0] ? studentSelect.selectedOptions[0].textContent : '';
    if(!studentId){ alert('Add a student above, then select them here.'); return; }
    if(!FIREBASE_OK){ alert("Firebase isn't connected, so assignment links can't be created in this preview."); return; }
    const code = makeCode();
    const payload = {
      code, teacherId:getTeacherId(), teacherName:getTeacherName(), storyId, studentId, studentName,
      mode:assignMode, difficulty:assignMode==='vsComputer'?assignDiff:null, createdAt:Date.now()
    };
    db.ref(`presets/${code}`).set(payload).then(()=>{
      const link = `${location.origin}${location.pathname}?assign=${code}`;
      document.getElementById('assignResult').innerHTML = `
        <p class="small" style="margin-top:8px;"><b>Link for ${studentName}:</b></p>
        <input type="text" readonly value="${link}" id="assignLinkOut" onclick="this.select()" />
        <button class="btn ghost" id="copyAssignBtn" style="padding:6px 12px; font-size:12px;">Copy Link</button>
      `;
      document.getElementById('copyAssignBtn').onclick=()=>{
        navigator.clipboard.writeText(link).then(()=>alert('Link copied!')).catch(()=>{});
      };
      loadMyAssignments();
    }).catch(()=>alert('Could not save the assignment — check your connection.'));
  };
  loadMyStudents();
  loadMyAssignments();
}

function loadMyStudents(){
  const listContainer = document.getElementById('myStudentsList');
  const selectEl = document.getElementById('assignStudentSelect');
  if(!listContainer) return;
  if(!FIREBASE_OK){
    listContainer.innerHTML = '<p class="small" style="font-style:italic;">Firebase not connected.</p>';
    if(selectEl) selectEl.innerHTML = '<option value="">Firebase not connected</option>';
    return;
  }
  db.ref(`students/${getTeacherId()}`).once('value').then(snap=>{
    const val = snap.val() || {};
    const roster = Object.entries(val).map(([id,s])=>({id, ...s})).sort((a,b)=>(a.name||'').localeCompare(b.name||''));
    if(selectEl){
      selectEl.innerHTML = roster.length
        ? roster.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')
        : '<option value="">Add a student below first</option>';
    }
    if(!roster.length){
      listContainer.innerHTML = '<p class="small" style="font-style:italic;">No students yet — add one above.</p>';
      return;
    }
    Promise.all(roster.map(s=>
      db.ref(`studentRecords/${getTeacherId()}/${s.id}`).once('value').then(rs=>Object.assign({}, s, {record:rs.val()}))
    )).then(withRecords=>{
      listContainer.innerHTML = withRecords.map(s=>{
        const rec = s.record;
        const rankBit = rec
          ? `${rec.bestRankIcon} ${rec.bestRankLabel} · ${rec.sessionsCompleted} case${rec.sessionsCompleted===1?'':'s'} completed`
          : 'No cases completed yet';
        return `<div class="small" style="border-bottom:1px solid var(--paper-line); padding:6px 0; display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <span><b>${s.name}</b> — ${rankBit}</span>
          <button class="btn ghost" data-delstudent="${s.id}" style="padding:4px 10px; font-size:11px; flex:0 0 auto;">Remove</button>
        </div>`;
      }).join('');
      listContainer.querySelectorAll('[data-delstudent]').forEach(btn=>{
        btn.onclick=()=>{
          if(!confirm('Remove this student from your roster? Their past assignment links and rank history stay intact — this just removes them from the picker.')) return;
          db.ref(`students/${getTeacherId()}/${btn.dataset.delstudent}`).remove().then(loadMyStudents);
        };
      });
    });
  }).catch(()=>{
    listContainer.innerHTML = '<p class="small">Could not load students.</p>';
  });
}

function loadMyAssignments(){
  const container = document.getElementById('myAssignmentsList');
  if(!container) return;
  if(!FIREBASE_OK){ container.innerHTML = '<p class="small" style="font-style:italic;">Firebase not connected.</p>'; return; }
  db.ref('presets').orderByChild('teacherId').equalTo(getTeacherId()).once('value').then(snap=>{
    const val = snap.val() || {};
    const items = Object.values(val).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
    if(!items.length){ container.innerHTML = '<p class="small" style="font-style:italic;">No assignments yet.</p>'; return; }
    container.innerHTML = items.map(a=>{
      const title = (STORY_PACKS[a.storyId]||{}).title || a.storyId;
      const link = `${location.origin}${location.pathname}?assign=${a.code}`;
      const modeLabel = a.mode==='vsComputer' ? `Vs Computer · ${a.difficulty}` : 'Solo';
      return `<div class="small" style="border-bottom:1px solid var(--paper-line); padding:8px 0;">
        <b>${a.studentName}</b> — ${title} (${modeLabel})<br>
        <input type="text" readonly value="${link}" style="font-size:11px; margin:4px 0;" onclick="this.select()" />
        <button class="btn ghost" data-del="${a.code}" style="padding:4px 10px; font-size:11px;">Delete</button>
      </div>`;
    }).join('');
    container.querySelectorAll('[data-del]').forEach(btn=>{
      btn.onclick=()=>{
        if(!confirm('Delete this assignment link?')) return;
        db.ref(`presets/${btn.dataset.del}`).remove().then(loadMyAssignments);
      };
    });
  }).catch(()=>{ container.innerHTML = '<p class="small">Could not load assignments (this needs Firebase\'s index rule for teacherId — works fine at classroom scale even without one).</p>'; });
}

function reportSection(playerName, score, log){
  if(!log || !log.length){
    return `<h3>${playerName}</h3><p class="empty">No answers recorded yet for this session.</p>`;
  }
  const missed = log.filter(a=>!a.correct);
  const rows = log.map(a=>`
    <tr class="${a.correct?'ok':'no'}">
      <td>${a.roundTab}</td>
      <td>${a.item}</td>
      <td>${a.correct?'✅ Correct':'❌ Missed'}</td>
      <td>${a.attempts||1}</td>
      <td>${a.partial?a.partial:''}</td>
      <td>${a.points}</td>
    </tr>`).join('');
  const missedList = missed.length
    ? `<p><b>Missed items to review:</b> ${missed.map(a=>`${a.item} (${a.roundTab})`).join(', ')}</p>`
    : `<p><b>Missed items to review:</b> none — everything correct.</p>`;
  return `
    <h3>${playerName} — ${score} pts total</h3>
    ${missedList}
    <table>
      <thead><tr><th>Case File</th><th>Item</th><th>Result</th><th>Attempts</th><th>Order</th><th>Points</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function printReport(){
  const win = window.open('', '_blank');
  if(!win){ alert('Your browser blocked the print window — please allow pop-ups for this site.'); return; }
  const dateStr = new Date().toLocaleDateString(undefined, {year:'numeric', month:'long', day:'numeric'});
  const rank = rankForScore(S.score);
  const rankLine = `<p style="font-size:14px;"><b>Rank this case:</b> ${rank.icon} ${rank.label} (${rank.pct}% of possible points)`
    + (S.bestRank
        ? ` &nbsp;·&nbsp; <b>Highest rank achieved:</b> ${S.bestRank.icon} ${S.bestRank.label} (${S.bestRank.sessionsCompleted} case${S.bestRank.sessionsCompleted===1?'':'s'} completed)`
        : (S.assignmentTeacherId ? ` &nbsp;·&nbsp; <i>Highest rank still loading — close and reprint in a moment if it's missing.</i>` : ''))
    + `</p>`;
  const html = `<!DOCTYPE html><html><head><title>Case Report — ${CURRENT_STORY_TITLE}</title>
    <style>
      body{font-family:Georgia,serif; color:#222; max-width:760px; margin:30px auto; padding:0 20px;}
      h1{font-size:22px; margin-bottom:2px;}
      h2{font-size:14px; font-weight:normal; color:#555; margin-top:0;}
      h3{font-size:16px; border-bottom:2px solid #333; padding-bottom:4px; margin-top:32px;}
      table{width:100%; border-collapse:collapse; margin-top:10px; font-size:13px;}
      th,td{border:1px solid #ccc; padding:6px 8px; text-align:left;}
      th{background:#f0f0f0;}
      tr.no{background:#fdecea;}
      tr.ok{background:#eafaf0;}
      .empty{color:#777; font-style:italic;}
      @media print{ body{margin:0; padding:0 10px;} }
    </style></head><body>
    <h1>Case Report: ${CURRENT_STORY_TITLE}</h1>
    <h2>WRS Substep ${CURRENT_STORY_SUBSTEP} · Printed ${dateStr}</h2>
    ${rankLine}
    ${reportSection(S.name||'Detective 1', S.score, S.answerLog)}
    ${S.opponent && (S.opponent.answerLog||[]).length ? reportSection(S.opponent.name||'Detective 2', S.opponent.score||0, S.opponent.answerLog) : ''}
  </body></html>`;
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(()=>win.print(), 400);
}

/* ---------------- ENTRY POINT ----------------
   If the page was opened via a teacher's assignment link (?assign=CODE), skip straight
   into that case in the mode the teacher chose. Otherwise, show the normal picker. */
function tryLoadAssignment(){
  const code = new URLSearchParams(location.search).get('assign');
  if(!code){ render(); return; }
  if(!FIREBASE_OK){
    alert("This assignment link needs an internet connection to load. Please check your connection and reload the page.");
    render(); return;
  }
  db.ref(`presets/${code}`).once('value').then(snap=>{
    const data = snap.val();
    if(!data){ alert('This assignment link is no longer valid — ask your teacher for a new one.'); render(); return; }
    loadStoryPack(data.storyId);
    S.name = data.studentName || 'Detective';
    S.playerSlot = 1;
    S.mode = data.mode === 'vsComputer' ? 'vsComputer' : 'solo';
    S.pendingMode = S.mode;
    S.assignmentTeacherId = data.teacherId || null;
    S.assignmentStudentId = data.studentId || null;
    S.code = FIREBASE_OK ? makeCode() : 'LOCAL';
    if(S.mode==='vsComputer'){
      S.botDifficulty = data.difficulty || 'medium';
      S.opponent = {name:`🤖 ARIA (${S.botDifficulty})`, score:0, roundIdx:0, progress:0, finished:false};
    }
    db.ref(`sessions/${S.code}`).set({created:Date.now(), storyId:S.storyId, mode:S.mode, teacherId:S.assignmentTeacherId});
    syncSelf();
    S.screen='caseBrief';
    render();
  }).catch(()=>{
    alert('Could not load this assignment. Please check your connection and try again.');
    render();
  });
}
tryLoadAssignment();
