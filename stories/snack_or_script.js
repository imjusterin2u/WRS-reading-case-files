/* ---------------------------------------------------------------
   STORY: Snack or Script?  (WRS Substep 3.1B)
   A deadline emergency and a helpful friend — two-syllable closed-syllable words.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_SNACK_OR_SCRIPT = ['month','number','push','first','meet','p.m.','day','down','save','make','new'];

const STORY_PARAGRAPHS_SNACK_OR_SCRIPT = [
  `Dennis went to go meet Meg on campus at seven p.m. He had asked Meg to get some hummus, chips, and a cold drink at the snack shop. When Dennis got to Meg's hall, she was candid with him and told him that she had to finish her work on a script. Meg said that she had to submit the text in class on the last day of the month. That was the very next day! She still had a lot of work to do and a number of things left to publish the script.`,
  `Meg then had a fit, "How did this happen? Why did I push this off?"`,
  `Dennis told Meg not to fret and that he could help. He did not want to witness her panic about this. Plus, he should hold off on the snacks for now.`,
  `First, Dennis would set up an index, then he had to jot down edits for the text. Next, Meg and Dennis had to save everything on her laptop. At last, the script was all set, but by then it was ten p.m. So, the two pals did not go out for a snack in the end, but Meg did have some lemon drops for them. They sat to rest and make new plans to visit the snack shop.`,
];

const ROUNDS_SNACK_OR_SCRIPT = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Dennis and Meg's evening.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Dennis goes to meet Meg on campus at seven p.m.",
          "Meg tells Dennis she still has to finish her script.",
          "Meg realizes the script is due the very next day.",
          "Meg panics and asks why she pushed off the work.",
      ]},
      { label:'Second half — put these in order', events:[
          "Dennis tells Meg not to fret and offers to help.",
          "Dennis sets up an index and jots down edits.",
          "Meg and Dennis save everything on her laptop.",
          "They finish the script but it's too late to go out for a snack.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"He had asked Meg to get some hummus, chips, and a cold drink at the snack shop."`, prompt:'Why did Dennis ask Meg to get snacks at the snack shop?',
        options:['He was testing her memory','He was planning for them to hang out and eat snacks together','He wanted her to work instead','He forgot he already had snacks'], answer:1,
        explain:'Asking her to pick up snacks shows Dennis was planning a relaxed evening together, before the script emergency came up.'},
      {context:`"she was candid with him and told him that she had to finish her work on a script"`, prompt:'What does Meg being "candid" with Dennis suggest about their friendship?',
        options:['They barely know each other','They are close enough that she can be honest about her problem','She was trying to trick him','She didn\'t want to see him'], answer:1,
        explain:'Being candid means being open and honest — a sign of a comfortable, trusting friendship.'},
      {context:`Meg then had a fit, "How did this happen?"`, prompt:'Why did Meg have a "fit" when she realized the deadline?',
        options:['She was excited','She was shocked and upset that the deadline was so close','She was bored','She wanted attention'], answer:1,
        explain:'A "fit" here means a sudden burst of strong emotion — Meg is shocked and upset by how close the deadline actually is.'},
      {context:'"Why did I push this off?"', prompt:'What can you infer from this question?',
        options:['Meg is proud of her planning','Meg regrets procrastinating on her work','Meg wants to blame Dennis','Meg finished early'], answer:1,
        explain:'Asking herself why she "pushed this off" (delayed it) shows she regrets not starting the work sooner.'},
      {context:`"Plus, he should hold off on the snacks for now."`, prompt:'Why did Dennis say this?',
        options:['He wasn\'t hungry','He realized helping Meg was more urgent than getting snacks','He didn\'t like the snacks','Meg told him to stop'], answer:1,
        explain:'Dennis shifting his priority away from snacks shows he recognized Meg\'s deadline was the more urgent problem.'},
      {context:`"Dennis told Meg not to fret and that he could help."`, prompt:'What can you infer about Dennis\'s character from how he responds to Meg\'s panic?',
        options:['He is impatient and annoyed','He is calm, supportive, and willing to help a friend in need','He doesn\'t care about the deadline','He wants credit for the work'], answer:1,
        explain:'Offering calm reassurance and practical help shows Dennis is a supportive, dependable friend.'},
      {context:`"So, the two pals did not go out for a snack in the end"`, prompt:'Why did they end up not going out for a snack?',
        options:['They weren\'t hungry','Finishing the script took until ten p.m., too late for their plan','Meg forgot about the snack shop','Dennis refused to go'], answer:1,
        explain:'The text explains that by the time the script was done, it was already ten p.m. — too late for their original snack shop plan.'},
      {context:`"Meg did have some lemon drops for them"`, prompt:'What does Meg having lemon drops for them at the end suggest?',
        options:['She wanted to share something nice to thank Dennis for his help','She forgot she had them','She was still panicking','She didn\'t want to share'], answer:0,
        explain:'Offering lemon drops even without going out shows Meg\'s appreciation for Dennis staying to help her.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Snacks are more important than school work','Helping a friend under pressure and being flexible when plans change','Procrastination never causes problems','Scripts are easy to finish'], answer:1,
        explain:'Dennis puts aside his own plans to help Meg with an urgent deadline, and they adapt their evening together.'},
      {context:'"They sat to rest and make new plans to visit the snack shop."', prompt:'Why does the story end with them planning to visit the snack shop another time?',
        options:['To show they gave up on the plan entirely','To show they didn\'t give up on their original plan, just postponed it','To show they are angry with each other','To show the snack shop closed forever'], answer:1,
        explain:'Making "new plans to visit the snack shop" shows their friendship and original plan continue, just delayed.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"she was candid with him"`, prompt:'What does candid mean here?',
        options:['Honest and direct','Secretive','Angry','Confused'], answer:0,
        explain:'Being candid means being open and honest about something, which is what Meg was with Dennis.'},
      {context:`"she had to submit the text in class"`, prompt:'What does submit mean here?',
        options:['Turn in or hand over','Write from scratch','Ignore','Delete'], answer:0,
        explain:'Submitting the text means turning it in to be graded or reviewed.'},
      {context:`"a number of things left to publish the script"`, prompt:'What does publish mean here?',
        options:['To prepare and release something for others to see','To hide something','To delete something','To rewrite completely'], answer:0,
        explain:'Publishing the script means finishing and releasing it so others can see or use it.'},
      {context:`"He did not want to witness her panic"`, prompt:'What does panic mean here?',
        options:['A sudden strong feeling of fear or worry','Calm confidence','Boredom','Happiness'], answer:0,
        explain:'Panic is a sudden overwhelming worry — what Meg felt realizing her deadline was so close.'},
      {context:`"Dennis told Meg not to fret"`, prompt:'What does fret mean here?',
        options:['To worry','To celebrate','To sleep','To eat'], answer:0,
        explain:'To fret means to worry — Dennis is telling Meg to calm down.'},
      {context:`"Dennis would set up an index"`, prompt:'What does index mean here?',
        options:['An organized list or reference guide','A type of food','A type of drink','A type of chair'], answer:0,
        explain:'An index is an organized reference tool, useful for keeping a big piece of writing organized.'},
      {context:`"jot down edits for the text"`, prompt:'What does edits mean here?',
        options:['Changes or corrections made to writing','New pages added','Pictures added','The whole document deleted'], answer:0,
        explain:'Edits are corrections or changes made to improve a piece of writing.'},
      {context:`"save everything on her laptop"`, prompt:'What does laptop mean here?',
        options:['A portable computer','A type of desk','A type of book','A type of phone booth'], answer:0,
        explain:'A laptop is a portable computer, used here to save the script.'},
      {context:`"she had to finish her work on a script"`, prompt:'What does script mean here?',
        options:['Written text for a performance or presentation','A grocery list','A text message','A math worksheet'], answer:0,
        explain:'A script is written text meant to be performed or presented, like for a class project.'},
      {context:`"get some hummus, chips, and a cold drink"`, prompt:'What does hummus mean here?',
        options:['A dip made from chickpeas','A type of candy','A type of soda','A type of chip'], answer:0,
        explain:'Hummus is a savory dip, often eaten with chips — one of the snack shop items Dennis wanted.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'campus', sentence:'Dennis went to meet Meg on campus.'},
      {word:'candid', sentence:'Meg was candid with Dennis.'},
      {word:'submit', sentence:'She had to submit the text in class.'},
      {word:'publish', sentence:'She had things left to publish the script.'},
      {word:'panic', sentence:'Dennis did not want to witness her panic.'},
      {word:'index', sentence:'Dennis would set up an index.'},
      {word:'laptop', sentence:'They saved everything on her laptop.'},
      {word:'fret', sentence:'Dennis told Meg not to fret.'},
      {word:'lemon', sentence:'Meg had some lemon drops for them.'},
      {word:'hummus', sentence:'He asked Meg to get some hummus.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of two-syllable words. Mark the syllables and welded chunks to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'campus', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Campus breaks into two syllable chunks: cam-pus.'},
      {context:'candid', prompt:'Which letters form the welded chunk in this word?', options:['ca','an','di','id'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in candid.'},
      {context:'submit', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Submit breaks into two syllable chunks: sub-mit.'},
      {context:'publish', prompt:'Which letters form the ending digraph?', options:['pu','bl','is','sh'], answer:3,
        explain:'S and h together make one new sound, /sh/, at the end of publish.'},
      {context:'index', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Index breaks into two syllable chunks: in-dex.'},
      {context:'laptop', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Laptop breaks into two syllable chunks: lap-top.'},
      {context:'panic', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Panic breaks into two syllable chunks: pan-ic.'},
      {context:'hummus', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Hummus breaks into two syllable chunks: hum-mus.'},
      {context:'fret', prompt:'Which letters form the beginning blend?', options:['fr','re','et','fe'], answer:0,
        explain:'You can still hear /f/ and /r/ blended together at the start of fret.'},
      {context:'lemon', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Lemon breaks into two syllable chunks: lem-on.'},
    ]},
];

/* =========================================================
   STORY 9: THE RUNNING CONTEST — WRS Substep 3.2 AB
   ========================================================= */

STORY_PACKS['snack_or_script'] = {
  id: 'snack_or_script',
  title: "Snack or Script?",
  substep: '3.1B',
  blurb: 'A deadline emergency and a helpful friend — two-syllable closed-syllable words.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_SNACK_OR_SCRIPT,
  paragraphs: STORY_PARAGRAPHS_SNACK_OR_SCRIPT,
  rounds: ROUNDS_SNACK_OR_SCRIPT,
};
STORY_ORDER.push('snack_or_script');
