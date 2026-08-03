/* ---------------------------------------------------------------
   STORY: Help from Chan  (WRS Substep 2.5B)
   A study struggle solved with blends, chunking, and a good friend.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_HELP_FROM_CHAN = ['too','work','each','every','also','two','everything','world','so','Mrs.','school','know','okay','day','week','doing','grade','way'];

const STORY_PARAGRAPHS_HELP_FROM_CHAN = [
  `Trent has some stress about Mrs. Beck's class in school. It was not that she was strict or that it was too much work. But, it was each and every fact that did tend to trip him up. Also, the text for the class was two inches thick! Everything felt as if it were a trick and he did not know what to do next.`,
  `Trent was prompt for class. One day, he asked his pal, Chan, for help. He told her that he was in a slump with this class and had to pass. Chan had a top rank with an A in Mrs. Beck's class. How in the world did she do it? Could Trent do it too?`,
  `Chan was most glad to help out Trent. It would not be too much work. She told Trent that everything would be okay and that he must not dwell in the past.`,
  `Chan and Trent met every week to check their work for class. Trent just had to split the bulk of his work into small chunks of text. That's what Chan had been doing to hold her grade up so strong. If only Trent had this skill last fall! Now he was on his way. It would be grand if Trent got an A in this class by spring!`,
];

const ROUNDS_HELP_FROM_CHAN = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Trent's story.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Trent feels stressed about Mrs. Beck's class.",
          "Trent asks his pal Chan for help.",
          "Chan agrees to help Trent with his work.",
          "Chan tells Trent everything would be okay.",
      ]},
      { label:'Second half — put these in order', events:[
          "Chan and Trent meet every week to check their work.",
          "Trent learns to split his work into small chunks.",
          "Trent thinks about how this skill would have helped him last fall.",
          "Trent hopes to get an A in the class by spring.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"It was not that she was strict or that it was too much work. But, it was each and every fact that did tend to trip him up."`, prompt:'Why did Trent feel stressed about the class if it wasn\'t the strictness or workload?',
        options:['He didn\'t like Mrs. Beck','The amount of small facts and details were hard to keep track of','The classroom was too crowded','He was bad at every subject'], answer:1,
        explain:'The text rules out strictness and workload directly, then says it was "each and every fact" tripping him up — the details were the real problem.'},
      {context:`"the text for the class was two inches thick!"`, prompt:'What does this line suggest?',
        options:['The book was very interesting','The reading material was very long and overwhelming','The class had no homework','The book was brand new'], answer:1,
        explain:'A book "two inches thick" is being used to show just how much material Trent had to get through — an overwhelming amount.'},
      {context:`"he asked his pal, Chan, for help"`, prompt:'Why did Trent ask Chan specifically for help?',
        options:['She was the only one in class','She had a top rank with an A in the class','She offered first','She was Mrs. Beck\'s sister'], answer:1,
        explain:'The text explains Chan "had a top rank with an A in Mrs. Beck\'s class" — she clearly knew how to succeed there.'},
      {context:`"Chan was most glad to help out Trent."`, prompt:'What can you infer about Chan\'s character from this line?',
        options:['She is unkind and reluctant','She is kind and willing to support a friend','She is too busy to help','She only helps for a reward'], answer:1,
        explain:'Being "most glad" to help, without any mention of a reward, shows Chan is generous and supportive.'},
      {context:`"that he must not dwell in the past"`, prompt:'Why did Chan tell Trent not to dwell in the past?',
        options:['To make him feel bad about earlier grades','To help him move forward instead of feeling stuck on past struggles','Because the past doesn\'t matter at all','To change the subject'], answer:1,
        explain:'This advice comes right after reassuring him "everything would be okay" — she\'s helping him focus forward, not backward.'},
      {context:`"Trent just had to split the bulk of his work into small chunks of text."`, prompt:'What was the key strategy Chan taught Trent?',
        options:['Skipping the hard parts','Breaking work into smaller, manageable chunks instead of tackling it all at once','Copying Chan\'s answers','Reading faster'], answer:1,
        explain:'The text says directly that splitting work into "small chunks" was the strategy Chan shared with Trent.'},
      {context:`"If only Trent had this skill last fall!"`, prompt:'What does this line suggest?',
        options:['Trent wishes he\'d learned this strategy earlier in the year','Trent wants to repeat the fall semester','Trent forgot what happened last fall','Trent thinks the skill won\'t help him now'], answer:0,
        explain:'"If only... last fall" is a wish about the past — Trent realizes the strategy would have helped him earlier if he\'d known it sooner.'},
      {context:'Think about Trent from the beginning to the end of the story.', prompt:'How does Trent\'s outlook change by the end of the story?',
        options:['He goes from hopeful to hopeless','He goes from feeling overwhelmed and stressed to feeling hopeful','His outlook never changes','He gives up on the class entirely'], answer:1,
        explain:'Trent starts the story stressed and confused, but ends "on his way" and hoping for an A — a clear shift toward hope.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Asking for help and breaking big tasks into smaller pieces can lead to success','Working alone is always best','Grades don\'t really matter','Friends should not help with schoolwork'], answer:0,
        explain:'Trent\'s turnaround comes from asking Chan for help and learning her chunking strategy — the story\'s central idea.'},
      {context:'"It would be grand if Trent got an A in this class by spring!"', prompt:'Why might the author end with Trent hoping for an A "by spring"?',
        options:['To show he has already given up','To give him a specific, hopeful goal he is now working toward','To hint the story is starting over','To show he no longer cares about school'], answer:1,
        explain:'Ending on a hopeful, specific goal ("by spring") shows Trent moving forward with real motivation, thanks to his new strategy.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Trent has some stress about Mrs. Beck's class"`, prompt:'What does stress mean here?',
        options:['Worry or pressure','Excitement','Curiosity','Boredom'], answer:0,
        explain:'Stress here describes the worry and pressure Trent feels about a class that\'s hard for him.'},
      {context:`"It was not that she was strict"`, prompt:'What does strict mean here?',
        options:['Enforcing rules very firmly','Relaxed and easygoing','Funny','Forgetful'], answer:0,
        explain:'A strict teacher enforces rules firmly — but the text says that\'s not actually the source of Trent\'s stress.'},
      {context:`"each and every fact that did tend to trip him up"`, prompt:'What does trip him up mean here?',
        options:['Cause someone to become confused or make a mistake','Help someone succeed','Make someone laugh','Praise someone'], answer:0,
        explain:'"Trip up" means to cause confusion or mistakes — the small facts kept catching Trent off guard.'},
      {context:`"he was in a slump with this class"`, prompt:'What does slump mean here?',
        options:['A period of doing poorly or struggling','A period of great success','A short vacation','A type of test'], answer:0,
        explain:'Being in a slump means struggling or doing poorly for a stretch of time — matching Trent\'s difficulty with the class.'},
      {context:`"Trent was prompt for class."`, prompt:'What does prompt mean here?',
        options:['Arriving on time','Arriving late','Missing class','Arguing with the teacher'], answer:0,
        explain:'Being prompt means being on time — a small detail showing Trent takes the class seriously despite his stress.'},
      {context:`"Chan had a top rank with an A"`, prompt:'What does rank mean here?',
        options:['A level or position compared to others','A type of homework','A school subject','A type of grade book'], answer:0,
        explain:'Rank describes Chan\'s standing compared to other students — a top position, shown by her A.'},
      {context:`"he must not dwell in the past"`, prompt:'What does dwell mean here?',
        options:['Think about something for too long, especially something upsetting','Forget completely','Plan for the future','Celebrate'], answer:0,
        explain:'To dwell on something is to keep thinking about it, often something upsetting — Chan wants Trent to stop doing that.'},
      {context:`"split the bulk of his work into small chunks"`, prompt:'What does bulk mean here?',
        options:['The main or largest part of something','The smallest part','The ending part','A single piece'], answer:0,
        explain:'The bulk of the work is the large main portion of it — what Trent needed to break into smaller pieces.'},
      {context:`"split the bulk of his work into small chunks of text"`, prompt:'What does chunks mean here?',
        options:['Parts or pieces something is divided into','The whole thing at once','A title','A summary'], answer:0,
        explain:'Chunks are the smaller pieces something gets divided into — exactly what Trent learned to do with his reading.'},
      {context:`"It would be grand if Trent got an A"`, prompt:'What does grand mean here?',
        options:['Wonderful or excellent','Terrible','Ordinary','Expected'], answer:0,
        explain:'Grand describes something wonderful or excellent — how Trent imagines it would feel to earn an A.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'strict', sentence:'It was not that Mrs. Beck was strict.'},
      {word:'trick', sentence:'Everything felt as if it were a trick.'},
      {word:'prompt', sentence:'Trent was prompt for class.'},
      {word:'slump', sentence:'He was in a slump with this class.'},
      {word:'strong', sentence:'Chan held her grade up so strong.'},
      {word:'split', sentence:'Trent had to split the bulk of his work.'},
      {word:'chunks', sentence:'He split his work into small chunks.'},
      {word:'grand', sentence:'It would be grand if Trent got an A.'},
      {word:'stress', sentence:'Trent has some stress about the class.'},
      {word:'trip', sentence:'Each fact did tend to trip him up.'},
      {word:'rank', sentence:'Chan had a top rank in the class.'},
      {word:'fall', sentence:'If only Trent had this skill last fall.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is all about 3-letter blends and welded chunks. Mark them to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'strict', prompt:'Which letters form the beginning 3-letter blend?', options:['str','tri','ict','ric'], answer:0,
        explain:'You can hear /s/ /t/ /r/ blended together at the start of strict.'},
      {context:'stress', prompt:'Which letters form the beginning 3-letter blend?', options:['str','tre','res','ess'], answer:0,
        explain:'You can hear /s/ /t/ /r/ blended together at the start of stress.'},
      {context:'split', prompt:'Which letters form the beginning 3-letter blend?', options:['spl','pli','lit','it'], answer:0,
        explain:'You can hear /s/ /p/ /l/ blended together at the start of split.'},
      {context:'prompt', prompt:'Which letters form the beginning blend?', options:['pr','ro','om','pt'], answer:0,
        explain:'You can still hear /p/ and /r/ blended together at the start of prompt.'},
      {context:'slump', prompt:'Which letters form the beginning blend?', options:['sl','lu','um','mp'], answer:0,
        explain:'You can still hear /s/ and /l/ blended together at the start of slump.'},
      {context:'chunks', prompt:'Which letters form the beginning digraph?', options:['ch','hu','un','ks'], answer:0,
        explain:'C and h together make one new sound, /ch/, at the start of chunks.'},
      {context:'chunks', prompt:'Which letters form the welded chunk near the end?', options:['un','unk','nks','ks'], answer:1,
        explain:'"Unk" is a welded sound taught as one unit — you can hear it stay together in chunks.'},
      {context:'grand', prompt:'Which letters form the welded chunk in this word?', options:['gr','an','nd','ran'], answer:1,
        explain:'"An" is a welded sound taught as one unit — once learned, it stays together wherever it appears, including in grand.'},
      {context:'rank', prompt:'Which letters form the welded chunk in this word?', options:['ra','an','ank','nk'], answer:2,
        explain:'"Ank" is a welded sound taught as one unit — you can hear it stay together in rank.'},
      {context:'fall', prompt:'Which letters form the welded chunk in this word?', options:['fa','al','all','ll'], answer:2,
        explain:'"All" is a welded sound taught as one unit — you can hear it stay together in fall.'},
    ]},
];

/* =========================================================
   STORY 6: A MOVE TO THE STATES — WRS Substep 5.2 AB
   ========================================================= */

STORY_PACKS['help_from_chan'] = {
  id: 'help_from_chan',
  title: "Help from Chan",
  substep: '2.5B',
  blurb: 'A study struggle solved with blends, chunking, and a good friend.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_HELP_FROM_CHAN,
  paragraphs: STORY_PARAGRAPHS_HELP_FROM_CHAN,
  rounds: ROUNDS_HELP_FROM_CHAN,
};
STORY_ORDER.push('help_from_chan');
