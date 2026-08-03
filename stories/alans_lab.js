/* ---------------------------------------------------------------
   STORY: Alan's Work in the Lab  (WRS Substep 3.3B)
   A water-testing job that matters more than it seems — two-syllable words.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_ALANS_LAB = ['water','know','right','see','makes','gives','good'];

const STORY_PARAGRAPHS_ALANS_LAB = [
  `Everyone thinks Alan's job at the lab must be dull. The fact is - it's not! The tasks can be long to finish, but Alan relishes this hands-on work.`,
  `Each month, Alan collects gallons of water from wells and ponds. It is his job to then bring the water back to the lab to test it. There, the staff inspects the water to see if any toxins exist. The lab insists on the best methods which are complex. What they find out about the water makes a big impact.`,
  `Alan puts the water he collects in flasks. Then he injects the water with a solvent and gives it a strong mix. Alan conducts this test over and over so he can attest that the numbers are exact. This month the water tests are good. The public will know that the water is all right to fish and swim without any problems.`,
];

const ROUNDS_ALANS_LAB = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Alan's testing process.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Everyone thinks Alan's lab job must be dull, but he loves it.",
          "Each month, Alan collects gallons of water from wells and ponds.",
          "Alan brings the water back to the lab to test it.",
          "The staff inspects the water for toxins.",
      ]},
      { label:'Second half — put these in order', events:[
          "Alan puts the collected water into flasks.",
          "Alan injects the water with a solvent and mixes it.",
          "Alan conducts the test over and over to be exact.",
          "This month, the water tests are good and safe for the public.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"Everyone thinks Alan's job at the lab must be dull. The fact is - it's not!"`, prompt:'Why does the story open this way?',
        options:['To correct a common assumption and show Alan actually enjoys his work','To say Alan hates his job','To describe the lab building','To introduce a new character'], answer:0,
        explain:'The story sets up a common assumption ("must be dull") only to immediately contradict it — showing Alan\'s real feelings.'},
      {context:`"Alan relishes this hands-on work."`, prompt:'What does this suggest about Alan?',
        options:['He genuinely enjoys doing physical, practical tasks','He finds the work boring','He wants a different job','He avoids hands-on tasks'], answer:0,
        explain:'"Relishes" means to greatly enjoy — Alan actively likes doing hands-on lab work, not just tolerating it.'},
      {context:`"The lab insists on the best methods which are complex."`, prompt:'Why is it important that the lab uses complex methods?',
        options:['Careful, thorough testing is needed for trustworthy results','Complex methods are required by law only','The lab wants to seem impressive','Simple methods don\'t exist'], answer:0,
        explain:'Testing water for toxins requires careful methods to make sure the results can be trusted.'},
      {context:`"What they find out about the water makes a big impact."`, prompt:'What can you infer from this line?',
        options:['The test results affect real decisions about water safety','The test results are ignored','The tests don\'t matter to anyone','The water is always unsafe'], answer:0,
        explain:'The next paragraph explains the public needs to know if the water is "all right to fish and swim" — showing real impact.'},
      {context:`"Alan conducts this test over and over"`, prompt:'Why does Alan conduct the test "over and over"?',
        options:['To make sure the results are accurate and reliable','Because he forgets the results','Because the lab requires wasted effort','Because he is bored'], answer:0,
        explain:'Repeating the test helps confirm the numbers are consistent and correct, not just a one-time result.'},
      {context:`"so he can attest that the numbers are exact"`, prompt:'What does this tell you about Alan\'s approach to his work?',
        options:['He takes pride in being precise and trustworthy in his results','He doesn\'t care about accuracy','He guesses at the numbers','He rushes through his tests'], answer:0,
        explain:'Wanting to "attest" (confirm) that numbers are "exact" shows Alan values precision and honesty in his results.'},
      {context:`"This month the water tests are good."`, prompt:'Why does the story mention this specifically?',
        options:['To show the outcome of all the careful testing described earlier','To say the lab is closing','To introduce a new problem','To describe the weather'], answer:0,
        explain:'This line reveals the payoff of the whole careful testing process described in the story.'},
      {context:`"The public will know that the water is all right to fish and swim without any problems."`, prompt:'What does this tell you about the purpose of Alan\'s job?',
        options:['His work directly protects public safety','His work is only for scientists','His work has no real-world use','His work is a hobby'], answer:0,
        explain:'Alan\'s testing directly determines whether it\'s safe for the public to use the water — a real public safety role.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Work that seems boring on the surface can be meaningful and important','Lab work is always exciting','Testing water is unnecessary','Alan dislikes his job'], answer:0,
        explain:'The story challenges the assumption that Alan\'s job "must be dull" by showing how meaningful and important it actually is.'},
      {context:'The story ends focused on public safety rather than Alan.', prompt:'Why might the author end with a focus on public safety rather than Alan himself?',
        options:['To emphasize the real-world importance and impact of Alan\'s careful work','Because Alan isn\'t important to the story','To introduce a new character','To end on an unrelated topic'], answer:0,
        explain:'Ending on the public benefit shows why Alan\'s careful, repetitive testing actually matters.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Everyone thinks Alan's job at the lab must be dull."`, prompt:'What does dull mean here?',
        options:['Boring, not interesting','Exciting','Dangerous','Easy'], answer:0,
        explain:'Dull means boring — the assumption the story immediately disproves about Alan\'s job.'},
      {context:`"Alan relishes this hands-on work."`, prompt:'What does relishes mean here?',
        options:['Greatly enjoys something','Dislikes something','Ignores something','Fears something'], answer:0,
        explain:'To relish something means to greatly enjoy it — Alan truly likes his hands-on tasks.'},
      {context:`"Alan collects gallons of water from wells and ponds."`, prompt:'What does gallons mean here?',
        options:['A unit for measuring liquid, a large amount','A small drop','A solid object','A type of container shape'], answer:0,
        explain:'Gallons are a unit for measuring liquid — Alan collects large amounts of water.'},
      {context:`"to see if any toxins exist"`, prompt:'What does toxins mean here?',
        options:['Harmful or poisonous substances','Healthy nutrients','Clean minerals','Colors'], answer:0,
        explain:'Toxins are harmful substances — exactly what the lab is testing the water for.'},
      {context:`"The lab insists on the best methods"`, prompt:'What does methods mean here?',
        options:['Ways or processes of doing something','Mistakes','Tools only','Random guesses'], answer:0,
        explain:'Methods are the specific ways or processes used to carry out the testing.'},
      {context:`"which are complex"`, prompt:'What does complex mean here?',
        options:['Complicated, having many parts','Simple','Boring','Fast'], answer:0,
        explain:'Complex describes something with many parts, like the careful testing methods used at the lab.'},
      {context:`"he injects the water with a solvent"`, prompt:'What does solvent mean here?',
        options:['A substance used to dissolve or test other substances','A type of food','A type of container','A type of fish'], answer:0,
        explain:'A solvent is a substance used in scientific testing, here to help analyze the water.'},
      {context:`"so he can attest that the numbers are exact"`, prompt:'What does attest mean here?',
        options:['To confirm or prove something is true','To guess','To deny','To hide'], answer:0,
        explain:'To attest means to confirm something is true — here, that the numbers are correct.'},
      {context:`"the numbers are exact"`, prompt:'What does exact mean here?',
        options:['Completely accurate, precise','Approximate','Wrong','Random'], answer:0,
        explain:'Exact means completely precise — no rounding or guessing involved.'},
      {context:`"makes a big impact"`, prompt:'What does impact mean here?',
        options:['A strong effect or influence','No effect at all','A small unnoticed change','A mistake'], answer:0,
        explain:'Impact refers to a strong effect — the water test results have a real influence on public safety decisions.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'inspects', sentence:'The staff inspects the water.'},
      {word:'conducts', sentence:'Alan conducts this test over and over.'},
      {word:'toxins', sentence:'The staff checks for toxins.'},
      {word:'methods', sentence:'The lab insists on the best methods.'},
      {word:'complex', sentence:'The methods are complex.'},
      {word:'solvent', sentence:'He injects the water with a solvent.'},
      {word:'attest', sentence:'He can attest that the numbers are exact.'},
      {word:'exact', sentence:'The numbers are exact.'},
      {word:'impact', sentence:'The water tests make a big impact.'},
      {word:'collects', sentence:'Alan collects gallons of water.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of two-syllable words. Mark the syllables and digraphs to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'inspects', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Inspects breaks into two syllable chunks: in-spects.'},
      {context:'conducts', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Conducts breaks into two syllable chunks: con-ducts.'},
      {context:'toxins', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Toxins breaks into two syllable chunks: tox-ins.'},
      {context:'methods', prompt:'Which letters form the digraph in this word?', options:['me','th','od','ds'], answer:1,
        explain:'T and h together make one new sound, /th/, in the middle of methods.'},
      {context:'complex', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Complex breaks into two syllable chunks: com-plex.'},
      {context:'solvent', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Solvent breaks into two syllable chunks: sol-vent.'},
      {context:'attest', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Attest breaks into two syllable chunks: at-test.'},
      {context:'exact', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Exact breaks into two syllable chunks: ex-act.'},
      {context:'impact', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Impact breaks into two syllable chunks: im-pact.'},
      {context:'collects', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Collects breaks into two syllable chunks: col-lects.'},
    ]},
];

/* =========================================================
   STORY 13: THE ATLANTIC — WRS Substep 3.4 AB
   ========================================================= */

STORY_PACKS['alans_lab'] = {
  id: 'alans_lab',
  title: "Alan's Work in the Lab",
  substep: '3.3B',
  blurb: 'A water-testing job that matters more than it seems — two-syllable words.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_ALANS_LAB,
  paragraphs: STORY_PARAGRAPHS_ALANS_LAB,
  rounds: ROUNDS_ALANS_LAB,
};
STORY_ORDER.push('alans_lab');
