/* ---------------------------------------------------------------
   STORY: Craft Class  (WRS Substep 3.3AB)
   A popular puppet-making class — two-syllable words and blends.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_CRAFT_CLASS = ['Mrs.','water(s)','talk','walk','right','know','town','make','own','three',"o'clock",'goes','use'];

const STORY_PARAGRAPHS_CRAFT_CLASS = [
  `Mrs. Waters instructs a craft class every Monday. The word has gotten out that this class is the best. In fact, the talk in the town is nonstop. So many children now attend, that the class list is full!`,
  `In class, each kid gets to grab a bunch of stuff to make their very own craft. There are baskets and buckets full of objects to pick for each project; bits of glass and metal, scraps of fabric, pens, string, felt... everything you can think of!`,
  `Nelson and Alex walk to Mrs. Waters' class. The class is at three o'clock on the dot and she insists that the kids be prompt. Nelson and Alex are quick to grab a spot right in front.`,
  `Mrs. Waters tells the kids about their new craft project. They will make puppets! The class goes wild.`,
  `Next, Mrs. Waters passes out a sock to each kid. Then, they are off to collect all the stuff they wish to use to construct their very own puppet. Nelson is quick to run to the buckets with the string, pom-poms, and ink pens. Alex dashes to the baskets to get scraps of fabric, stamps, and some plastic shells.`,
  `The kids work fast to finish the project. They know that Mrs. Waters will let them try out their puppets!`,
];

const ROUNDS_CRAFT_CLASS = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild craft class.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Mrs. Waters' craft class becomes so popular that the class list fills up.",
          "Nelson and Alex walk to class and grab a spot in front.",
          "Mrs. Waters tells the kids about the new project: puppets.",
          "The class goes wild with excitement.",
      ]},
      { label:'Second half — put these in order', events:[
          "Mrs. Waters passes out a sock to each kid.",
          "Nelson runs to get string, pom-poms, and ink pens.",
          "Alex dashes to get scraps of fabric and other supplies.",
          "The kids work fast to finish their puppets.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"So many children now attend, that the class list is full!"`, prompt:'Why did the class list get full?',
        options:['The class is very cheap','The class became very popular because word spread that it was the best','Mrs. Waters forced kids to join','The class is only offered once'], answer:1,
        explain:'The text explains "the word has gotten out that this class is the best" right before mentioning the full list.'},
      {context:`"the talk in the town is nonstop"`, prompt:'What does "the talk in the town is nonstop" suggest about the class\'s reputation?',
        options:['People are talking about it constantly, showing how popular it is','No one is interested in the class','The talk is mostly negative','The class has closed down'], answer:0,
        explain:'"Nonstop" talk shows people can\'t stop discussing how great the class is.'},
      {context:`"she insists that the kids be prompt"`, prompt:'Why does Mrs. Waters "insist that the kids be prompt"?',
        options:['She wants class to run smoothly without delays from latecomers','She doesn\'t like the kids','She wants to end class early','She is testing their memory'], answer:0,
        explain:'Insisting on promptness helps keep the class organized and running on schedule.'},
      {context:`"Nelson and Alex are quick to grab a spot right in front."`, prompt:'Why did Nelson and Alex grab "a spot right in front"?',
        options:['They were told to sit there','They were excited and wanted the best position for class','They were being punished','They arrived last'], answer:1,
        explain:'Being "quick to grab" the front spot shows their eagerness and excitement for class.'},
      {context:`"The class goes wild."`, prompt:'What can you infer from this reaction to the puppet project?',
        options:['The kids were disappointed','The kids were very excited about making puppets','The kids didn\'t understand the project','The kids wanted a different project'], answer:1,
        explain:'"Goes wild" is a strong reaction showing genuine excitement about the new project.'},
      {context:`"Mrs. Waters passes out a sock to each kid."`, prompt:'Why did Mrs. Waters pass out a sock to each kid?',
        options:['The sock was the base material for building their puppets','Socks were a snack','The kids needed new socks','It was unrelated to the project'], answer:0,
        explain:'Since they were making puppets, the sock served as the base material for each kid\'s puppet.'},
      {context:'Nelson runs for string, pom-poms, and ink pens; Alex dashes for fabric scraps, stamps, and shells.', prompt:'What does Nelson and Alex choosing different supplies suggest?',
        options:['They may be planning different designs for their puppets','They are not friends','One of them is not participating','They were told exactly what to get'], answer:0,
        explain:'Different supply choices suggest each kid has their own creative vision for their puppet.'},
      {context:`"The kids work fast to finish the project."`, prompt:'What does "the kids work fast to finish the project" tell you about their motivation?',
        options:['They were excited and eager to try out their finished puppets','They wanted class to end quickly','They were bored with the project','They were forced to hurry'], answer:0,
        explain:'The next line explains they "know that Mrs. Waters will let them try out their puppets" — that\'s their motivation to hurry.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Creativity and excitement can come from a well-run, engaging class','Crafting is too difficult for kids','Classes should be small','Puppets are hard to make'], answer:0,
        explain:'The popular, well-organized class leads to genuine excitement and creative engagement from the kids.'},
      {context:'The story ends before showing the finished puppets.', prompt:'Why might the author end the story before showing the finished puppets?',
        options:['To leave the reader curious and imagining what the puppets will look like','Because puppets aren\'t interesting','Because the story ran out of room','Because the kids never finished'], answer:0,
        explain:'Ending on anticipation ("they know Mrs. Waters will let them try out their puppets") leaves the reader imagining the fun still to come.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Mrs. Waters instructs a craft class every Monday."`, prompt:'What does instructs mean here?',
        options:['Teaches or guides how to do something','Plays with','Ignores','Watches'], answer:0,
        explain:'Instructing a class means teaching or guiding students through activities.'},
      {context:`"the talk in the town is nonstop"`, prompt:'What does nonstop mean here?',
        options:['Continuing without stopping','Occasional','Rare','Silent'], answer:0,
        explain:'Nonstop describes something ongoing without any breaks — the talk about the class never seems to stop.'},
      {context:`"So many children now attend"`, prompt:'What does attend mean here?',
        options:['To be present at an event or class','To skip','To forget','To cancel'], answer:0,
        explain:'To attend a class means to show up and be present for it.'},
      {context:`"she insists that the kids be prompt"`, prompt:'What does prompt mean here?',
        options:['On time, punctual','Late','Early by a lot','Absent'], answer:0,
        explain:'Being prompt means arriving right on time, not late.'},
      {context:`"she insists that the kids be prompt"`, prompt:'What does insists mean here?',
        options:['To firmly demand or require something','To suggest gently','To forget about something','To allow anything'], answer:0,
        explain:'Insisting means firmly requiring something — Mrs. Waters requires promptness, not just suggesting it.'},
      {context:`"to construct their very own puppet"`, prompt:'What does construct mean here?',
        options:['To build or put together','To take apart','To throw away','To draw'], answer:0,
        explain:'Constructing a puppet means building or assembling it from materials.'},
      {context:`"scraps of fabric, pens, string, felt"`, prompt:'What does fabric mean here?',
        options:['Cloth material','Metal pieces','Wood chips','Paper clips'], answer:0,
        explain:'Fabric is cloth material, one of the craft supplies available to the kids.'},
      {context:`"scraps of fabric, pens, string, felt"`, prompt:'What does scraps mean here?',
        options:['Small leftover pieces of material','Whole new items','Tools','Furniture'], answer:0,
        explain:'Scraps are small leftover pieces, like small bits of fabric, useful for crafts.'},
      {context:`"objects to pick for each project"`, prompt:'What does project mean here?',
        options:['A planned piece of work or activity','A finished product only','A mistake','A rule'], answer:0,
        explain:'A project is a planned activity or piece of work — here, the puppet-making activity.'},
      {context:`"Alex dashes to the baskets"`, prompt:'What does dashes mean here?',
        options:['Moves suddenly and quickly','Walks slowly','Sits down','Stands still'], answer:0,
        explain:'Dashing means moving quickly and suddenly, showing Alex\'s excitement to gather supplies.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'instructs', sentence:'Mrs. Waters instructs a craft class.'},
      {word:'construct', sentence:'They wish to construct their very own puppet.'},
      {word:'nonstop', sentence:'The talk in the town is nonstop.'},
      {word:'attend', sentence:'So many children now attend.'},
      {word:'project', sentence:'They pick objects for each project.'},
      {word:'insists', sentence:'She insists that the kids be prompt.'},
      {word:'fabric', sentence:'Alex gets scraps of fabric.'},
      {word:'scraps', sentence:'Alex dashes to get scraps of fabric.'},
      {word:'puppets', sentence:'They will make puppets.'},
      {word:'baskets', sentence:'There are baskets full of objects.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of two-syllable words and blends. Mark them to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'instructs', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Instructs breaks into two syllable chunks: in-structs.'},
      {context:'construct', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Construct breaks into two syllable chunks: con-struct.'},
      {context:'nonstop', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Nonstop breaks into two syllable chunks: non-stop.'},
      {context:'attend', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Attend breaks into two syllable chunks: at-tend.'},
      {context:'project', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Project breaks into two syllable chunks: proj-ect.'},
      {context:'insists', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Insists breaks into two syllable chunks: in-sists.'},
      {context:'fabric', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Fabric breaks into two syllable chunks: fab-ric.'},
      {context:'scraps', prompt:'Which letters form the beginning 3-letter blend?', options:['scr','cra','rap','aps'], answer:0,
        explain:'You can hear /s/ /k/ /r/ blended together at the start of scraps.'},
      {context:'puppets', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Puppets breaks into two syllable chunks: pup-pets.'},
      {context:'baskets', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Baskets breaks into two syllable chunks: bas-kets.'},
    ]},
];

/* =========================================================
   STORY 12: ALAN'S WORK IN THE LAB — WRS Substep 3.3 B
   ========================================================= */

STORY_PACKS['craft_class'] = {
  id: 'craft_class',
  title: "Craft Class",
  substep: '3.3AB',
  blurb: 'A popular puppet-making class — two-syllable words and blends.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_CRAFT_CLASS,
  paragraphs: STORY_PARAGRAPHS_CRAFT_CLASS,
  rounds: ROUNDS_CRAFT_CLASS,
};
STORY_ORDER.push('craft_class');
