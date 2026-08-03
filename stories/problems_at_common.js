/* ---------------------------------------------------------------
   STORY: Problems at the Common  (WRS Substep 3.2B)
   A storm-damaged town common gets a full repair — two-syllable words with blends.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_PROBLEMS_COMMON = ['another','under','down','over','other(s)','after','new','town','Mr.','make','saw'];

const STORY_PARAGRAPHS_PROBLEMS_COMMON = [
  `The squall last month had hit the town common with gusts of wind and now everything was a mess. The town boss had to call Mr. Griffin as he did the best work with this kind of stuff. He told Mr. Griffin that there was cash in the bank, but he must get a bid to submit.`,
  `Mr. Griffin said he would come check out the mess in an instant. When Mr. Griffin got to the common, he could tell that it was a complex job. The sandlot to the left of the common was full of trash, and the swing set for the kids was a mess. One swing had split in two and another swing had a big dent in it. The posts on the swing set had cracks which could put the kids at risk. There were also two lampposts that were now under some branches.`,
  `Mr. Griffin first had to jot down all the numbers on a slip, and rush over to the town boss to hand in his bid. Still, Mr. Griffin would have to enlist help and must, at best, make a small profit. This mess would cost the town hundreds and hundreds in cash.`,
  `The boss told Mr. Griffin that the numbers would work, and that he could get to work on the common now. Mr. Griffin got his best staff to assist him with yet another job. With one quick text, Jill, Brock, and the others were on the job.`,
  `They all went in shifts to pick up the trash everywhere. Then they had to drag the fallen branches and push them into a big truck. After that, they had to install new posts under the swing set and attach new swings for the kids. The lampposts got a fix with some new straps and bolts. Glass panels were put over the backs and tops of the lamps.`,
  `At the end of the job, the town boss saw the contrast. The common was back to its old self. He said, "Mr. Griffin, you impress me!"`,
];

const ROUNDS_PROBLEMS_COMMON = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild the repair job.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "A squall hit the town common and left a mess.",
          "The town boss calls Mr. Griffin for help.",
          "Mr. Griffin checks out the mess and sees it is complex.",
          "Mr. Griffin writes up a bid with all the numbers.",
      ]},
      { label:'Second half — put these in order', events:[
          "The town boss approves the bid and numbers.",
          "Mr. Griffin's staff picks up trash and drags branches.",
          "They install new posts and swings, and fix the lampposts.",
          "The town boss sees the common looking like its old self.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"The town boss had to call Mr. Griffin as he did the best work with this kind of stuff."`, prompt:'Why did the town boss call Mr. Griffin specifically?',
        options:['He was the only person available','He did the best work with this kind of repair job','He offered the lowest price','He was the boss\'s relative'], answer:1,
        explain:'The text says directly that Mr. Griffin "did the best work with this kind of stuff" — that\'s why he was chosen.'},
      {context:`"he could tell that it was a complex job"`, prompt:'What can you infer from this line?',
        options:['The damage was minor and quick to fix','The damage was extensive and would take real effort to fix','Mr. Griffin decided not to take the job','The common needed no repairs at all'], answer:1,
        explain:'Calling it "complex" right after describing all the damage shows this would be a serious repair job.'},
      {context:`"The posts on the swing set had cracks which could put the kids at risk."`, prompt:'Why does the story mention this detail?',
        options:['To show the damage was a safety problem, not just messy','To describe the color of the posts','To explain how old the swing set was','To introduce a new character'], answer:0,
        explain:'Mentioning "at risk" specifically points out this isn\'t just an eyesore — it\'s a real safety hazard for kids.'},
      {context:`"Mr. Griffin would have to enlist help"`, prompt:'Why did Mr. Griffin need to "enlist help" instead of doing the job alone?',
        options:['The job was too big and complex for one person','He didn\'t want to work','He was too tired','The town boss ordered him to hire others'], answer:0,
        explain:'Given how much needed fixing — trash, branches, posts, lampposts — one person alone couldn\'t handle it.'},
      {context:`"must, at best, make a small profit"`, prompt:'What does this line suggest about the job?',
        options:['Mr. Griffin will get very rich from this job','The job wasn\'t very profitable for him, but he took it on anyway','Mr. Griffin lost money on the job','The town boss cheated Mr. Griffin'], answer:1,
        explain:'"At best, make a small profit" shows this job wasn\'t a big money-maker, yet Mr. Griffin still did it.'},
      {context:`"The boss told Mr. Griffin that the numbers would work"`, prompt:'Why did the boss need to approve the numbers before work could start?',
        options:['The town needed to agree to the cost before spending money','Mr. Griffin forgot the numbers','The numbers were wrong','It was just a formality with no real purpose'], answer:0,
        explain:'The town\'s money is being spent, so the boss needed to approve the bid before Mr. Griffin could begin.'},
      {context:`"With one quick text, Jill, Brock, and the others were on the job."`, prompt:'What can you infer about Jill and Brock from this line?',
        options:['They were reluctant to help','They responded quickly and were ready to help right away','They refused the job','They didn\'t know Mr. Griffin'], answer:1,
        explain:'"One quick text" and being "on the job" right after shows a fast, willing response.'},
      {context:'Think about the detailed repair steps.', prompt:'Why does the story describe each repair step (trash, branches, posts, lampposts) in detail?',
        options:['To show how much work was involved in fixing the common','To confuse the reader','To pad out the story','To introduce more characters'], answer:0,
        explain:'Listing each step shows the true scale and effort of the whole repair project.'},
      {context:'"Mr. Griffin, you impress me!"', prompt:'What does the town boss\'s reaction tell you about the final result?',
        options:['He was disappointed','The repair job exceeded his expectations','He didn\'t notice any change','He wanted more repairs'], answer:1,
        explain:'Saying "you impress me" shows the boss was pleasantly surprised by how well the job turned out.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['A big problem can be solved through organized teamwork and effort','Repairs are always too expensive to do','It\'s better to ignore storm damage','One person can fix anything alone'], answer:0,
        explain:'From the initial assessment to the final team effort, the story shows how a big mess gets solved through planning and teamwork.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"The squall last month had hit the town common"`, prompt:'What does squall mean here?',
        options:['A sudden, violent storm with strong wind','A gentle rain','A sunny day','An earthquake'], answer:0,
        explain:'A squall is a sudden violent storm, which explains the gusts of wind and resulting mess.'},
      {context:`"with gusts of wind"`, prompt:'What does gusts mean here?',
        options:['Sudden strong bursts of wind','Steady soft breezes','Waves of water','Bright flashes of light'], answer:0,
        explain:'Gusts are sudden strong bursts of wind, part of what made the squall so damaging.'},
      {context:`"he could tell that it was a complex job"`, prompt:'What does complex mean here?',
        options:['Complicated, having many parts','Simple','Quick','Boring'], answer:0,
        explain:'Complex describes something with many parts — matching all the different repairs needed.'},
      {context:`"The sandlot to the left of the common was full of trash"`, prompt:'What does sandlot mean here?',
        options:['An empty area of sandy or bare ground used for play','A swimming pool','A parking garage','A flower garden'], answer:0,
        explain:'A sandlot is an open, often bare or sandy area used for play — one part of the town common.'},
      {context:`"Mr. Griffin would have to enlist help"`, prompt:'What does enlist mean here?',
        options:['To get support or assistance from others','To refuse help','To work entirely alone','To give up'], answer:0,
        explain:'To enlist help means to bring others in to assist with a task.'},
      {context:`"must, at best, make a small profit"`, prompt:'What does profit mean here?',
        options:['Money earned after costs are paid','Money spent','Money borrowed','Money lost'], answer:0,
        explain:'Profit is the money left over after paying for costs — here, a small amount for Mr. Griffin.'},
      {context:`"the town boss saw the contrast"`, prompt:'What does contrast mean here?',
        options:['A clear difference between two things','A close similarity','A repeated pattern','A mistake'], answer:0,
        explain:'The contrast is the clear difference between the messy common before and the fixed common after.'},
      {context:`""Mr. Griffin, you impress me!""`, prompt:'What does impress mean here?',
        options:['To cause someone to feel admiration','To cause someone to feel bored','To cause someone to feel angry','To cause someone to feel confused'], answer:0,
        explain:'To impress someone is to earn their admiration — the boss is admiring Mr. Griffin\'s work.'},
      {context:`"they had to install new posts"`, prompt:'What does install mean here?',
        options:['To put something in place and set it up','To remove something','To break something','To sell something'], answer:0,
        explain:'To install means to put something in place and set it up for use — here, the new posts.'},
      {context:`"he must get a bid to submit"`, prompt:'What does bid mean here?',
        options:['An offer stating a price for doing work','A type of tool','A finished report','A complaint'], answer:0,
        explain:'A bid is a formal offer stating what a job will cost — what Mr. Griffin needed to prepare.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'instant', sentence:'He would come check out the mess in an instant.'},
      {word:'complex', sentence:'It was a complex job.'},
      {word:'sandlot', sentence:'The sandlot was full of trash.'},
      {word:'lampposts', sentence:'Two lampposts were under some branches.'},
      {word:'enlist', sentence:'Mr. Griffin would have to enlist help.'},
      {word:'profit', sentence:'He must make a small profit.'},
      {word:'contrast', sentence:'The town boss saw the contrast.'},
      {word:'impress', sentence:'Mr. Griffin, you impress me!'},
      {word:'install', sentence:'They had to install new posts.'},
      {word:'submit', sentence:'He must get a bid to submit.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of welded chunks and two-syllable words. Mark them to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'instant', prompt:'Which letters form the welded chunk in this word?', options:['in','st','an','nt'], answer:2,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in instant.'},
      {context:'sandlot', prompt:'Which letters form the welded chunk in this word?', options:['sa','an','dl','ot'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in sandlot.'},
      {context:'lampposts', prompt:'Which letters form the welded chunk in this word?', options:['la','am','pp','sts'], answer:1,
        explain:'"Am" is a welded sound taught as one unit — you can hear it stay together in lampposts.'},
      {context:'install', prompt:'Which letters form the welded chunk in this word?', options:['in','st','al','all'], answer:3,
        explain:'"All" is a welded sound taught as one unit — you can hear it stay together in install.'},
      {context:'complex', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Complex breaks into two syllable chunks: com-plex.'},
      {context:'enlist', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Enlist breaks into two syllable chunks: en-list.'},
      {context:'profit', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Profit breaks into two syllable chunks: prof-it.'},
      {context:'impress', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Impress breaks into two syllable chunks: im-press.'},
      {context:'contrast', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Contrast breaks into two syllable chunks: con-trast.'},
      {context:'submit', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Submit breaks into two syllable chunks: sub-mit.'},
    ]},
];

/* =========================================================
   STORY 11: CRAFT CLASS — WRS Substep 3.3 AB
   ========================================================= */

STORY_PACKS['problems_at_common'] = {
  id: 'problems_at_common',
  title: "Problems at the Common",
  substep: '3.2B',
  blurb: 'A storm-damaged town common gets a full repair — two-syllable words with blends.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_PROBLEMS_COMMON,
  paragraphs: STORY_PARAGRAPHS_PROBLEMS_COMMON,
  rounds: ROUNDS_PROBLEMS_COMMON,
};
STORY_ORDER.push('problems_at_common');
