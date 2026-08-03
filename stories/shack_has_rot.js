/* ---------------------------------------------------------------
   STORY: The Shack Has Rot  (WRS Substep 1.6AB)
   A backyard shack needs fixing — early closed syllables and the suffix -s.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_SHACK = ['have','they','one','from','house','help','go'];

const STORY_PARAGRAPHS_SHACK = [
  `Nick has a shack in back of his house. Nick and his pals have fun in the shack, but the walls are bad and moss has set in. They want to have bags of chips with cans of pop in the shack, but it is all wet in the shack. Nick tells his pals that they can have the chips and pop in his den, but the den is not fun.`,
  `Then Nick begs his dad to fix his shack. Dad will get rid of the rot and the moss on the walls, but he does want Nick and his pals to help. When Dad fixes the walls, the shack will be all set and not one of them will get wet.`,
  `Nick's dad gets his kit from the hall and sets off to do the job to fill the gaps in the walls of the shack. Then he gets rid of the moss. Dad yells to Nick and his pals to tell them the shack is all set. The kids can go back and sit in it and not get wet at all. They will have fun!`,
];

const ROUNDS_SHACK = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Nick's shack story.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Nick and his pals want to hang out in the shack.",
          "The walls are bad and wet inside the shack.",
          "Nick offers his pals chips and pop in his den instead.",
          "Nick begs his dad to fix the shack.",
      ]},
      { label:'Second half — put these in order', events:[
          "Dad gets his kit from the hall.",
          "Dad fills the gaps in the walls.",
          "Dad gets rid of the moss.",
          "Dad yells that the shack is all set.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"but the walls are bad and moss has set in"`, prompt:'Why didn\'t Nick and his pals want to sit in the shack?',
        options:['It was too small','It was wet inside','It was too far away','It was too loud'], answer:1,
        explain:'The text says the walls are bad and it is "all wet in the shack" — that\'s why they couldn\'t hang out there.'},
      {context:`"Nick tells his pals that they can have the chips and pop in his den"`, prompt:'Why did Nick offer his den instead?',
        options:['So they could still have chips and pop somewhere dry','Because his dad told him to','Because the den was bigger','Because he didn\'t like the shack'], answer:0,
        explain:'Since the shack was wet, Nick needed a dry place for his pals to have their snacks — the den was that place.'},
      {context:`"but the den is not fun"`, prompt:'What does this line tell you about the den?',
        options:['It\'s Nick\'s favorite place','It\'s not as good as the shack','It\'s bigger than the shack','It\'s outside'], answer:1,
        explain:'Saying the den "is not fun" is a direct comparison — it shows the den isn\'t as good a place to hang out as the shack normally is.'},
      {context:`"Then Nick begs his dad to fix his shack."`, prompt:'Why did Nick beg his dad to fix the shack?',
        options:['He wanted a bigger shack','He wanted to use the shack again with his friends','His dad told him to ask','He wanted a new den'], answer:1,
        explain:'Right after being stuck in the "not fun" den, Nick begs his dad to fix the shack — he wants it back the way it was.'},
      {context:`"Dad will get rid of the rot and the moss on the walls"`, prompt:'What can you tell about Dad from this line?',
        options:['He doesn\'t want to help','He is willing to help and knows how to fix it','He is too busy','He wants a new shack instead'], answer:1,
        explain:'Dad agreeing to get rid of the rot and moss shows he\'s willing to help and has a plan for fixing the walls.'},
      {context:`"but he does want Nick and his pals to help"`, prompt:'Why does Dad want Nick and his pals to help?',
        options:['He is too tired to do it alone','So they can be part of fixing it too','He doesn\'t know how to do it himself','Because it is faster with more people watching'], answer:1,
        explain:'Dad including the kids in the job (rather than doing it alone) suggests he wants them to be part of taking care of the shack.'},
      {context:`"Nick's dad gets his kit from the hall"`, prompt:'What did Dad use to fix the shack?',
        options:['His kit','A new door','His car','A cookbook'], answer:0,
        explain:'The text says directly that Dad "gets his kit from the hall" to do the job — no inference needed, just close reading.'},
      {context:'Think about the whole story.', prompt:'How do you know the shack is fixed by the end of the story?',
        options:['The story doesn\'t say','Dad fills the gaps, gets rid of the moss, and yells that it\'s all set','Nick says he is bored','The pals go home'], answer:1,
        explain:'The text describes each fix Dad makes, then Dad "yells to Nick and his pals" that the shack "is all set" — clear evidence it\'s fixed.'},
      {context:'"They will have fun!"', prompt:'How do the kids feel at the end of the story?',
        options:['Sad','Bored','Happy and excited','Confused'], answer:2,
        explain:'The story ends by saying "they will have fun," which shows they\'re happy and excited to use the shack again.'},
      {context:'Think about everything that happened.', prompt:'What is the lesson of this story?',
        options:['Shacks are always broken','Working together can fix a problem so everyone can enjoy it again','Dads should always say no','Pals should not visit'], answer:1,
        explain:'Nick asks for help, and Dad fixes the shack with the kids\' help — the story shows how asking for help and working together solves the problem.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Nick has a shack in back of his house."`, prompt:'What does shack mean here?',
        options:['A small, roughly built structure','A big fancy house','A car','A boat'], answer:0,
        explain:'It\'s described as being "in back of his house" — a small separate structure in the yard, not part of the main house.'},
      {context:`"Nick and his pals have fun in the shack"`, prompt:'What does pals mean here?',
        options:['Enemies','Friends','Teachers','Strangers'], answer:1,
        explain:'They "have fun" together and later work together to fix the shack — that\'s what friends (pals) do.'},
      {context:`"the walls are bad and moss has set in"`, prompt:'What does moss mean here?',
        options:['A soft green plant that grows on damp surfaces','A type of paint','A kind of bug','A puddle of water'], answer:0,
        explain:'Moss growing on the walls is a sign of dampness and neglect — it\'s a green plant that grows where things stay wet.'},
      {context:`"Then Nick begs his dad to fix his shack."`, prompt:'What does begs mean here?',
        options:['Orders','Ignores','Asks urgently and hopefully','Forgets'], answer:2,
        explain:'Begging is asking for something you really want, in a pleading way — Nick really wants his shack fixed.'},
      {context:`"Dad will get rid of the rot"`, prompt:'What does get rid of mean here?',
        options:['Add more of','Remove or get away from','Hide','Paint over'], answer:1,
        explain:'Dad is going to fix the walls, which means removing the damage — not adding to it or covering it up.'},
      {context:`"Dad will get rid of the rot and the moss"`, prompt:'What does rot mean here?',
        options:['Fresh new wood','Decay or damage from being wet or old','Bright paint','A new roof'], answer:1,
        explain:'Rot is paired with moss as something Dad needs to remove — both are signs of decay from the walls being wet.'},
      {context:`"Nick's dad gets his kit from the hall"`, prompt:'What does kit mean here?',
        options:['A set of tools or supplies','A small animal','A type of snack','A piece of furniture'], answer:0,
        explain:'Dad uses his kit to "do the job" of fixing the walls — that\'s a set of tools for the task.'},
      {context:`"to fill the gaps in the walls"`, prompt:'What does gaps mean here?',
        options:['Solid walls','Open spaces or holes','Windows','Doors'], answer:1,
        explain:'Something has to be "filled" in the walls — gaps are the open spaces that need filling.'},
      {context:`"Dad yells to Nick and his pals"`, prompt:'What does yells mean here?',
        options:['Whispers','Writes','Calls out loudly','Waves'], answer:2,
        explain:'Yelling is calling out loudly — Dad needs the kids to hear him from wherever they are.'},
      {context:`"the shack will be all set"`, prompt:'What does all set mean here?',
        options:['Broken','Empty','Ready and fixed','Missing'], answer:2,
        explain:'"All set" describes the shack once Dad has finished fixing it — ready to use again.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'shack', sentence:'Nick has a shack in back of his house.'},
      {word:'walls', sentence:'The walls are bad and wet.'},
      {word:'moss', sentence:'Moss has set in on the walls.'},
      {word:'chips', sentence:'They want bags of chips.'},
      {word:'begs', sentence:'Nick begs his dad to fix his shack.'},
      {word:'fix', sentence:'Dad will fix the shack.'},
      {word:'kit', sentence:'Dad gets his kit from the hall.'},
      {word:'fill', sentence:'Dad has to fill the gaps in the walls.'},
      {word:'gaps', sentence:'There are gaps in the walls.'},
      {word:'yells', sentence:'Dad yells that the shack is all set.'},
      {word:'kids', sentence:'The kids will have fun in the shack.'},
      {word:'rot', sentence:'Dad gets rid of the rot.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"Every word is a piece of evidence with structure. Mark the digraphs, welded sounds, and sounds to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'shack', prompt:'Which letters form the beginning digraph?', options:['sh','ha','ck','ac'], answer:0,
        explain:'S and h together make one new sound, /sh/, at the start of shack.'},
      {context:'chips', prompt:'Which letters form the beginning digraph?', options:['ch','hi','ip','ps'], answer:0,
        explain:'C and h together make one new sound, /ch/, at the start of chips.'},
      {context:'walls', prompt:'Which letters form the welded chunk in this word?', options:['wa','all','ls','al'], answer:1,
        explain:'"All" is a welded sound taught as one unit — you can hear it stay together in walls.'},
      {context:'moss', prompt:'How many sounds are in this word?', options:['3','4','5','6'], answer:1,
        explain:'Moss has no digraphs, so every letter keeps its own sound: /m/ /o/ /s/ /s/ — 4 sounds.'},
      {context:'fix', prompt:'How many sounds are in this word?', options:['2','3','4','5'], answer:1,
        explain:'Fix has 3 separate sounds: /f/ /i/ /x/.'},
      {context:'begs', prompt:'How many sounds are in this word?', options:['3','4','5','6'], answer:1,
        explain:'Begs has 4 separate sounds: /b/ /e/ /g/ /s/.'},
      {context:'kit', prompt:'How many sounds are in this word?', options:['2','3','4','5'], answer:1,
        explain:'Kit has 3 separate sounds: /k/ /i/ /t/.'},
      {context:'fill', prompt:'How many sounds are in this word?', options:['3','4','5','6'], answer:1,
        explain:'Fill has 4 separate sounds: /f/ /i/ /l/ /l/ — no welded chunk here since it\'s not preceded by "a".'},
      {context:'gaps', prompt:'How many sounds are in this word?', options:['3','4','5','6'], answer:1,
        explain:'Gaps has 4 separate sounds: /g/ /a/ /p/ /s/.'},
      {context:'kids', prompt:'How many sounds are in this word?', options:['3','4','5','6'], answer:1,
        explain:'Kids has 4 separate sounds: /k/ /i/ /d/ /s/.'},
    ]},
];

/* =========================================================
   STORY 3: BIG BASS — WRS Substep 2.5 AB
   ========================================================= */

STORY_PACKS['shack_has_rot'] = {
  id: 'shack_has_rot',
  title: "The Shack Has Rot",
  substep: '1.6AB',
  blurb: 'A backyard shack needs fixing — early closed syllables and the suffix -s.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_SHACK,
  paragraphs: STORY_PARAGRAPHS_SHACK,
  rounds: ROUNDS_SHACK,
};
STORY_ORDER.push('shack_has_rot');
