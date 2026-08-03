/* ---------------------------------------------------------------
   STORY: The Fossil Exhibit  (WRS Substep 3.4B)
   A long-awaited museum visit — multisyllabic closed syllables.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_FOSSIL_EXHIBIT = ['day','way','hour','away','people','take','through','took','time','makes','show','goes'];

const STORY_PARAGRAPHS_FOSSIL_EXHIBIT = [
  `Ingrid has a splendid plan for the day. She has had this plan for a month now. She is on her way to visit the fossil exhibit in Wilmington. She is ecstatic about it, and cannot get the grin off her lips!`,
  `Ingrid will be the first one at the exhibit. Ingrid knew it would take over an hour to walk through the exhibit. So, she took the day off from work. Her boss, the congressman, did not get mad or admonish her one bit. He was glad to let Ingrid have some time off from her job.`,
  `The exhibit is just a quick walk away. When Ingrid gets there, she is not the first. The exhibit hall is full of people! She gets pushed and pulled a lot, but she is not upset or indignant at all. She makes her way to the new kinesthetic fossil exhibit where she can put her hands on the exotic rocks and shells. It is fantastic!`,
  `After she witnesses everything in the fossil show, she goes to another exhibit which is about the lost land of Atlantis. To finish up the day, Ingrid has lunch on a bench in the common. There are snapdragons everywhere! When she gets back to her job the next day, she is quick to recommend the exhibit to all her pals and her boss.`,
];

const ROUNDS_FOSSIL_EXHIBIT = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Ingrid's day.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Ingrid has had a splendid plan for a month: visiting the fossil exhibit.",
          "Ingrid takes the day off work to go to the exhibit.",
          "Ingrid expects to be the first one at the exhibit.",
          "When she arrives, the exhibit hall is already full of people.",
      ]},
      { label:'Second half — put these in order', events:[
          "Ingrid explores the kinesthetic fossil exhibit and touches exotic rocks and shells.",
          "Ingrid visits the exhibit about the lost land of Atlantis.",
          "Ingrid has lunch on a bench surrounded by snapdragons.",
          "The next day, Ingrid recommends the exhibit to her pals and boss.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"She has had this plan for a month now."`, prompt:'Why does the story mention Ingrid has had this plan for a month?',
        options:['To show how long she has been looking forward to this visit','To say she forgot about it','To show she planned poorly','To confuse the reader'], answer:0,
        explain:'A month of planning shows Ingrid has genuinely been anticipating this trip for a long time.'},
      {context:`"She is ecstatic about it, and cannot get the grin off her lips!"`, prompt:'What does this suggest about Ingrid\'s feelings?',
        options:['She is extremely excited and happy','She is nervous and worried','She is bored','She is confused'], answer:0,
        explain:'Being "ecstatic" and having a grin she "cannot get off her lips" shows intense excitement and happiness.'},
      {context:`"So, she took the day off from work."`, prompt:'Why did Ingrid take the whole day off work?',
        options:['She knew the exhibit would take over an hour and wanted plenty of time','She was fired','She didn\'t like her job','She was forced to'], answer:0,
        explain:'The text explains it would "take over an hour to walk through the exhibit," so she wanted the full day free.'},
      {context:`"did not get mad or admonish her one bit"`, prompt:'What can you infer about Ingrid\'s boss from this line?',
        options:['He is understanding and supportive of her taking time off','He is angry with her','He fired her','He didn\'t notice she was gone'], answer:0,
        explain:'Not getting mad and being "glad to let Ingrid have some time off" shows a supportive, understanding boss.'},
      {context:`"When Ingrid gets there, she is not the first."`, prompt:'Why was Ingrid surprised she wasn\'t the first one at the exhibit?',
        options:['She had planned to arrive early, but the hall was already full','She arrived very late','She didn\'t want to be first','The exhibit was closed'], answer:0,
        explain:'The story earlier said "Ingrid will be the first one at the exhibit" — so arriving to a full hall was unexpected.'},
      {context:`"she is not upset or indignant at all"`, prompt:'What does this suggest about Ingrid\'s mood despite being pushed and pulled?',
        options:['She is so happy about the exhibit that minor annoyances don\'t bother her','She is secretly furious','She wants to leave immediately','She didn\'t notice the crowd'], answer:0,
        explain:'Even being pushed and pulled doesn\'t upset her — her excitement about the exhibit outweighs any annoyance.'},
      {context:`"the new kinesthetic fossil exhibit where she can put her hands on the exotic rocks and shells"`, prompt:'Why might this exhibit have been especially exciting for Ingrid?',
        options:['It let her physically touch and interact with the exhibits, not just look','It was the only exhibit open','It was free','It was closest to the exit'], answer:0,
        explain:'"Kinesthetic" means hands-on — letting Ingrid touch the rocks and shells rather than just view them from behind glass.'},
      {context:`"she is quick to recommend the exhibit to all her pals and her boss"`, prompt:'What does this suggest about her overall experience?',
        options:['She had such a great experience that she wanted to share it with others','She was disappointed by the exhibit','She wants to complain about it','She forgot about the exhibit already'], answer:0,
        explain:'Being quick to recommend it to others shows the visit left a strong, positive impression.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Looking forward to and fully enjoying an experience you\'re passionate about','Museums are always crowded','Work is more important than hobbies','Planning trips is stressful'], answer:0,
        explain:'From a month of anticipation to genuine enjoyment despite crowds, the story centers on Ingrid\'s passion for the exhibit.'},
      {context:'The story ends with Ingrid recommending the exhibit rather than at the exhibit itself.', prompt:'Why might the author end the story this way?',
        options:['To show the lasting positive impact the visit had on her, beyond just that day','To show she regretted going','To introduce a new character','To end the story abruptly'], answer:0,
        explain:'Showing her recommending it the next day proves the experience mattered to her well beyond the day itself.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Ingrid has a splendid plan for the day."`, prompt:'What does splendid mean here?',
        options:['Wonderful, excellent','Terrible','Boring','Ordinary'], answer:0,
        explain:'Splendid means wonderful or excellent — fitting Ingrid\'s exciting plan.'},
      {context:`"She is ecstatic about it"`, prompt:'What does ecstatic mean here?',
        options:['Extremely happy and excited','Extremely sad','Calm and neutral','Angry'], answer:0,
        explain:'Ecstatic means extremely happy and excited, matching the grin she can\'t get off her face.'},
      {context:`"visit the fossil exhibit in Wilmington"`, prompt:'What does exhibit mean here?',
        options:['A public display of objects, like at a museum','A private collection','A type of book','A restaurant'], answer:0,
        explain:'An exhibit is a public display, often at a museum, of objects like fossils.'},
      {context:`"did not get mad or admonish her one bit"`, prompt:'What does admonish mean here?',
        options:['To scold or criticize firmly','To praise warmly','To ignore completely','To reward'], answer:0,
        explain:'To admonish means to scold or criticize — something the boss did NOT do to Ingrid.'},
      {context:`"she is not upset or indignant at all"`, prompt:'What does indignant mean here?',
        options:['Feeling angry because something seems unfair','Feeling calm and accepting','Feeling sleepy','Feeling hungry'], answer:0,
        explain:'Indignant means feeling angry about unfair treatment — something Ingrid does not feel despite being jostled.'},
      {context:`"the new kinesthetic fossil exhibit"`, prompt:'What does kinesthetic mean here?',
        options:['Involving hands-on movement and touch','Only looking','Only listening','Only reading'], answer:0,
        explain:'Kinesthetic describes learning or experiencing through touch and movement, not just observation.'},
      {context:`"put her hands on the exotic rocks and shells"`, prompt:'What does exotic mean here?',
        options:['Unusual or from a faraway place','Common and ordinary','Broken','Expensive only'], answer:0,
        explain:'Exotic describes something unusual, often from far away — fitting for special fossil exhibit rocks and shells.'},
      {context:`"Her boss, the congressman"`, prompt:'What does congressman mean here?',
        options:['An elected member of a legislature','A type of teacher','A museum worker','A type of doctor'], answer:0,
        explain:'A congressman is an elected government official — Ingrid\'s boss.'},
      {context:`"There are snapdragons everywhere!"`, prompt:'What does snapdragons mean here?',
        options:['A type of flowering plant','A type of rock','A type of insect','A type of fossil'], answer:0,
        explain:'Snapdragons are a type of flower, fitting the description of Ingrid\'s lunch spot in the common.'},
      {context:`"she is quick to recommend the exhibit"`, prompt:'What does recommend mean here?',
        options:['To suggest something as being good or worthwhile','To criticize something','To forget about something','To hide something'], answer:0,
        explain:'To recommend means to suggest something is good — Ingrid tells her pals and boss the exhibit is worth visiting.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'splendid', sentence:'Ingrid has a splendid plan for the day.'},
      {word:'ecstatic', sentence:'She is ecstatic about the exhibit.'},
      {word:'exhibit', sentence:'She is on her way to the fossil exhibit.'},
      {word:'admonish', sentence:'Her boss did not admonish her.'},
      {word:'indignant', sentence:'She is not upset or indignant at all.'},
      {word:'exotic', sentence:'She can touch the exotic rocks and shells.'},
      {word:'fantastic', sentence:'It is fantastic!'},
      {word:'snapdragons', sentence:'There are snapdragons everywhere.'},
      {word:'recommend', sentence:'She is quick to recommend the exhibit.'},
      {word:'congressman', sentence:'Her boss, the congressman, was glad to help.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of multisyllabic words and welded chunks. Mark them to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'splendid', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Splendid breaks into two syllable chunks: splen-did.'},
      {context:'ecstatic', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Ecstatic breaks into three syllable chunks: ec-stat-ic.'},
      {context:'exhibit', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Exhibit breaks into three syllable chunks: ex-hib-it.'},
      {context:'admonish', prompt:'Which letters form the ending digraph?', options:['ad','mo','nish','sh'], answer:3,
        explain:'S and h together make one new sound, /sh/, at the end of admonish.'},
      {context:'indignant', prompt:'Which letters form the welded chunk in this word?', options:['in','dig','an','nt'], answer:2,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in indignant.'},
      {context:'fantastic', prompt:'Which letters form the welded chunk in this word?', options:['fa','an','ta','ic'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in fantastic.'},
      {context:'congressman', prompt:'Which letters form the welded chunk in this word?', options:['con','gress','man','an'], answer:3,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in congressman.'},
      {context:'exotic', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Exotic breaks into three syllable chunks: ex-ot-ic.'},
      {context:'recommend', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Recommend breaks into three syllable chunks: rec-om-mend.'},
      {context:'snapdragons', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Snapdragons breaks into three syllable chunks: snap-drag-ons.'},
    ]},
];

/* =========================================================
   STORY 15: WALKING AND TALKING — WRS Substep 3.5 AB
   ========================================================= */

STORY_PACKS['fossil_exhibit'] = {
  id: 'fossil_exhibit',
  title: "The Fossil Exhibit",
  substep: '3.4B',
  blurb: 'A long-awaited museum visit — multisyllabic closed syllables.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_FOSSIL_EXHIBIT,
  paragraphs: STORY_PARAGRAPHS_FOSSIL_EXHIBIT,
  rounds: ROUNDS_FOSSIL_EXHIBIT,
};
STORY_ORDER.push('fossil_exhibit');
