/* ---------------------------------------------------------------
   STORY: Brad's Bad Day  (WRS Substep 2.4B)
   A string of unlucky mishaps on the way to work — closed syllables, blends, and digraphs.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_BRADS_BAD_DAY = ['front','said','out','only','about','go','way','time','going','day','came','home','better'];

const STORY_PARAGRAPHS_BRADS_BAD_DAY = [
  `Brad fell in the slush by his front step and his bag was all wet. Brad did think that fall would be the last of his bad luck for now. He said he would try to go on and he kept his chin up on the way to the bus stop.`,
  `Brad then had to rush to get the bus and he cut his leg on a branch. Now he had to run with a limp just to get there in time. When the bus went past his stop, Brad said, "What is going on?" He then had to call a cab and stand in the brisk, cold wind. The cab did not come for a long time. It got lost on its way to get Brad. At last, Brad got to his job at the shop where he sold prints.`,
  `At the shop, Brad did not sell any prints. He did help a gal, but she did not get her cash out to spend and Brad felt grim. The day did drag. How long could Brad's bad luck last?`,
  `At last, Brad's shift came to an end, and he went to get the bus. If only he could have a swift trip back home! But, his bad luck did not end. As the bus was about to come to the last stop, it got a flat when it ran into a trench of mud! Brad had such a bad day and felt that a spell was cast on him. The next day had to be better.`,
];

const ROUNDS_BRADS_BAD_DAY = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Brad's timeline.",
    type:'sequence', points:5,
    sets:[
      { label:'Morning — put these in order', events:[
          "Brad fell in the slush by his front step.",
          "Brad cut his leg on a branch while rushing to the bus.",
          "The bus drove past Brad's stop.",
          "Brad called a cab and waited in the cold wind.",
      ]},
      { label:'Afternoon — put these in order', events:[
          "Brad finally got to his job at the print shop.",
          "Brad helped a gal who did not buy anything.",
          "Brad's shift ended and he went to catch the bus.",
          "The bus got a flat tire in a trench of mud.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"The best clues aren't always written in the text. Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`Brad "kept his chin up" after falling in the slush.`, prompt:'What does this tell you about Brad?',
        options:['He didn\'t notice he fell','He was trying to stay positive despite the bad start','He was looking for something in the snow','He was checking the weather'], answer:1,
        explain:'"Kept his chin up" is used right after a bad fall — the story is telling you Brad chose to stay positive and keep going instead of giving up.'},
      {context:`When the bus drove past his stop, Brad said "What is going on?"`, prompt:'Why did he say this?',
        options:['He was excited','He was confused and frustrated by his bad luck','He wanted directions','He was talking to a friend'], answer:1,
        explain:'This is the second bad thing to happen that morning, right after cutting his leg. A question like "what is going on?" signals frustration, not excitement.'},
      {context:`Brad "helped a gal, but she did not get her cash out to spend."`, prompt:'What can you infer about the gal?',
        options:['She bought several prints','She was Brad\'s boss','She looked at prints but did not end up buying','She worked at the shop too'], answer:2,
        explain:'The text says Brad "helped" her, meaning she was looking at prints, but she never took her cash out — so she looked without buying.'},
      {context:`"The day did drag."`, prompt:'Why did the day drag for Brad?',
        options:['Because he was very busy','Because business was slow and time felt like it was moving slowly','Because the shop closed early','Because he took a long lunch'], answer:1,
        explain:'This line follows "Brad did not sell any prints" — with no sales and nothing happening, time feels like it\'s crawling by.'},
      {context:`Brad "felt that a spell was cast on him."`, prompt:'What does this tell you about how Brad saw his day?',
        options:['He believes someone tricked him on purpose','He is describing how unlucky and cursed the whole day felt','He is talking about a magic show he saw','He thinks he is dreaming'], answer:1,
        explain:'This comes at the very end, after a whole list of bad luck — the fall, the cut, the missed bus, the lost cab, no sales, the flat tire. "A spell was cast" is Brad\'s way of describing that string of misfortune.'},
      {context:'Think about the whole story.', prompt:'How would you describe Brad\'s mood by the end?',
        options:['Thrilled and proud','Worn out and frustrated, but still hopeful','Angry and ready to quit','Calm and unaffected'], answer:1,
        explain:'The story piles on setback after setback, yet ends with "the next day had to be better" — that combination shows exhaustion and frustration alongside hope, not defeat.'},
      {context:'"The cab did not come for a long time. It got lost on its way to get Brad."', prompt:'Why might the cab have taken so long?',
        options:['Brad called too late','It got lost trying to find Brad','There were no cabs available','Brad changed the location'], answer:1,
        explain:'This one is stated directly in the text: "it got lost on its way to get Brad" — no inference needed, just close reading.'},
      {context:'"At last, Brad got to his job at the shop where he sold prints."', prompt:'What kind of job does Brad have?',
        options:['He drives a bus','He sells prints at a shop','He fixes cars','He works at a cab company'], answer:1,
        explain:'The text names it directly: "the shop where he sold prints." The bus and cab are just how Brad travels, not his job.'},
      {context:'Think about everything that happened to Brad.', prompt:'What is one lesson or theme this story teaches?',
        options:['Bad luck follows you forever','It\'s best to give up when things go wrong','You can stay hopeful even when a lot goes wrong','Never take the bus'], answer:2,
        explain:'Even though nearly everything goes wrong for Brad, the story ends on "the next day had to be better" — that hopeful ending is the clue to the theme.'},
      {context:'"The next day had to be better."', prompt:'Why might the author end the story this way?',
        options:['To show Brad giving up','To show Brad\'s hope that things will improve','To hint at more bad luck coming','To end the story with a joke'], answer:1,
        explain:'"Had to be better" is a hopeful statement, not a defeated one — it shows Brad looking forward instead of staying stuck in his bad day.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way Brad used it in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Brad fell in the slush by his front step."`, prompt:'What does slush mean here?',
        options:['Partly melted, wet snow','A pile of dry leaves','A patch of solid ice','A soft rug'], answer:0,
        explain:'Right after this line his bag is described as "all wet" — that\'s the clue. Wet, not solid, so it can\'t be ice, and the winter setting rules out leaves or a rug.'},
      {context:`"He had to stand in the brisk, cold wind."`, prompt:'What does brisk mean here?',
        options:['Warm and gentle','Sharp and biting','Loud and windy','Slow moving'], answer:1,
        explain:'"Brisk" sits right next to "cold" in the sentence — the two words describe the same wind, so brisk has to mean something sharp and biting, not warm.'},
      {context:`"Brad felt grim."`, prompt:'What does grim mean here?',
        options:['Excited and hopeful','Proud and calm','Gloomy and unhappy','Confused'], answer:2,
        explain:'This comes right after "she did not get her cash out to spend" — a failed sale. A disappointing moment leads to a gloomy feeling, not an excited one.'},
      {context:`"The day did drag."`, prompt:'What does drag mean here?',
        options:['Move by slowly','End quickly','Get louder','Turn cold'], answer:0,
        explain:'This sentence follows "Brad did not sell any prints" and "felt grim." When nothing is happening, time feels like it\'s moving slowly — that\'s what "drag" means here.'},
      {context:`"If only he could have a swift trip back home!"`, prompt:'What does swift mean here?',
        options:['Short','Fast','Safe','Crowded'], answer:1,
        explain:'Brad is wishing for something good after a rough day — "if only" signals a hope. Wishing for a fast trip home makes more sense than wishing for a short or crowded one.'},
      {context:`"It ran into a trench of mud!"`, prompt:'What does trench mean here?',
        options:['A steep hill','A shallow puddle','A long, narrow ditch','A wooden bridge'], answer:2,
        explain:'The bus "got a flat" after hitting this — that means the trench is deep and rough enough to damage a tire, which fits a ditch far better than a puddle or a hill.'},
      {context:`"Now he had to run with a limp."`, prompt:'What does limp mean here?',
        options:['An uneven walk from an injury','A fast sprint','A big jump','A happy skip'], answer:0,
        explain:'This line comes directly after "he cut his leg on a branch." An injured leg causes an uneven walk — that\'s the limp.'},
      {context:`"He felt that a spell was cast on him."`, prompt:'What does cast mean here?',
        options:['Removed','Broken','Put or thrown upon someone','Discovered'], answer:2,
        explain:'A spell is something a person puts onto someone else — "cast on him" describes the spell landing on Brad, not being taken away or found.'},
      {context:`"At last, Brad's shift came to an end."`, prompt:'What does shift mean here?',
        options:['A kind of bus','A scheduled period of work','A store','A type of cab'], answer:1,
        explain:'Right before this Brad is at his job selling prints. His "shift" ending means his scheduled work time is over, so he can go home.'},
      {context:`"How long could Brad's bad luck last?"`, prompt:'What does last mean here?',
        options:['Stop right away','Begin','Continue','Disappear forever'], answer:2,
        explain:'This question is asked in the middle of a long string of unlucky events — it\'s asking how much longer the bad luck will continue, not whether it will start.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'slush', sentence:'Brad fell in the slush.'},
      {word:'front', sentence:'He fell by his front step.'},
      {word:'brisk', sentence:'The wind was brisk and cold.'},
      {word:'trench', sentence:'The bus got stuck in a trench of mud.'},
      {word:'swift', sentence:'He hoped for a swift trip home.'},
      {word:'grim', sentence:'Brad felt grim after such a bad day.'},
      {word:'drag', sentence:'The long day did drag.'},
      {word:'branch', sentence:'He cut his leg on a branch.'},
      {word:'shift', sentence:'His shift finally came to an end.'},
      {word:'flat', sentence:'The bus tire went flat.'},
      {word:'spend', sentence:'She did not spend any cash.'},
      {word:'cash', sentence:'She did not have the cash to spend.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"Every word is a piece of evidence with structure. Mark the blends, digraphs, and sounds to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'front', prompt:'Which letters form the beginning consonant blend?', options:['fr','on','nt','ro'], answer:0,
        explain:'A blend keeps both consonant sounds — you can still hear /f/ and /r/ together at the start of front, so fr is the blend.'},
      {context:'slush', prompt:'Which letters form the ending digraph?', options:['sl','us','sh','lu'], answer:2,
        explain:'A digraph is two letters that make one new sound. S and h together stop making /s/ and /h/ and instead make one new sound — /sh/.'},
      {context:'branch', prompt:'Which letters form the beginning blend?', options:['br','an','nc','ch'], answer:0,
        explain:'You can still hear both /b/ and /r/ blended together at the start of branch, so br is the blend, not a digraph.'},
      {context:'branch', prompt:'Which letters form the ending digraph?', options:['an','ch','br','ra'], answer:1,
        explain:'C and h together don\'t sound like /k/ + /h/ — they make one brand-new sound, /ch/. That makes ch the digraph at the end of branch.'},
      {context:'trench', prompt:'How many sounds are in this word? (tr / e / n / ch)', options:['4','5','6','3'], answer:1,
        explain:'Count each separate sound: /t/ /r/ /e/ /n/ /ch/ — that\'s 5 sounds. The tr blend counts as 2 sounds, but the ch digraph only counts as 1.'},
      {context:'brisk', prompt:'How many sounds are in this word? (b / r / i / s / k)', options:['3','4','5','6'], answer:2,
        explain:'Brisk has no digraphs, so every letter keeps its own sound: /b/ /r/ /i/ /s/ /k/ — 5 separate sounds.'},
      {context:'swift', prompt:'Which letters form the beginning blend?', options:['sw','if','ft','wi'], answer:0,
        explain:'You can hear /s/ and /w/ blended together at the start of swift — both sounds stay separate, which is what makes it a blend.'},
      {context:'grim', prompt:'Which letters form the beginning blend?', options:['gr','ri','im','mi'], answer:0,
        explain:'The /g/ and /r/ sounds blend together at the start of grim while each sound is still heard — that\'s the definition of a blend.'},
      {context:'shift', prompt:'Which letters form the beginning digraph?', options:['sh','if','ft','hi'], answer:0,
        explain:'S and h together make one new sound, /sh/, instead of /s/ + /h/ — that\'s what makes it a digraph, not a blend.'},
      {context:'spend', prompt:'Which letters form the beginning blend?', options:['sp','en','nd','pe'], answer:0,
        explain:'/s/ and /p/ are both still heard blended together at the start of spend, so sp is the blend.'},
    ]},

];

/* =========================================================
   STORY 2: THE SHACK HAS ROT — WRS Substep 1.6 AB
   ========================================================= */

STORY_PACKS['brads_bad_day'] = {
  id: 'brads_bad_day',
  title: "Brad's Bad Day",
  substep: '2.4B',
  blurb: 'A string of unlucky mishaps on the way to work — closed syllables, blends, and digraphs.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_BRADS_BAD_DAY,
  paragraphs: STORY_PARAGRAPHS_BRADS_BAD_DAY,
  rounds: ROUNDS_BRADS_BAD_DAY,
};
STORY_ORDER.push('brads_bad_day');
