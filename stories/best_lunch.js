/* ---------------------------------------------------------------
   STORY: The Best Lunch  (WRS Substep 3.1AB)
   A family surprises Mom with lunch — two-syllable closed-syllable words.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_BEST_LUNCH = ['month','number','first','full','hard','says'];

const STORY_PARAGRAPHS_BEST_LUNCH = [
  `Mom is hard at work with the bills for the month. She has to check each number and add everything up. Dad and Ellen think that Mom should stop and rest for a bit.`,
  `"Mom should not miss lunch. We cannot let that happen!" says Dad. "First, I will put the dishes out so we can have shrimp salad. Then, I will grab the can of shellfish from the top shelf and mix the shrimp into a salad."`,
  `"I want to help," says Ellen, "I will put out some napkins and glasses and I can also get the basket for the plum muffins."`,
  `Ellen and her dad chitchat as they fix a very big lunch. When they finish and everything is set, they call Mom to come sit with them. When Mom comes in, she says, "What in the world have you two been up to?"`,
  `Ellen, Mom, and Dad have the shrimp salad with plum muffins and some cold milk. "This is the best lunch yet and now I am full," says Mom, "Thanks for everything!"`,
];

const ROUNDS_BEST_LUNCH = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild the lunch surprise.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Mom is hard at work with the bills for the month.",
          "Dad and Ellen think Mom should stop and rest.",
          "Dad says he will make shrimp salad.",
          "Ellen says she will get napkins and the muffin basket.",
      ]},
      { label:'Second half — put these in order', events:[
          "Ellen and her dad chitchat as they fix lunch.",
          "They call Mom to come sit with them.",
          "Mom asks what they have been up to.",
          "Ellen, Mom, and Dad enjoy the shrimp salad and muffins together.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"Dad and Ellen think that Mom should stop and rest for a bit."`, prompt:'Why do Dad and Ellen think Mom should stop and rest?',
        options:['She has been working hard on bills and needs a break','She is sick','She wants to go shopping','She asked them to leave'], answer:0,
        explain:'This line comes right after describing Mom being "hard at work with the bills" — that\'s why they think she needs a break.'},
      {context:`""Mom should not miss lunch. We cannot let that happen!" says Dad."`, prompt:'Why does Dad say this?',
        options:['He is annoyed with Mom','He cares about Mom and wants to make sure she eats','He is hungry himself','He wants Mom to cook'], answer:1,
        explain:'Dad\'s strong reaction ("We cannot let that happen!") shows he genuinely cares about Mom taking care of herself.'},
      {context:`"First, I will put the dishes out... grab the can of shellfish... mix the shrimp into a salad."`, prompt:'What does Dad\'s detailed plan tell you about him?',
        options:['He is confused about what to do','He is taking charge of making a nice meal for Mom','He doesn\'t want to cook','He is copying a recipe from Mom'], answer:1,
        explain:'His step-by-step plan shows he is confidently taking the lead on preparing a special lunch.'},
      {context:`""I want to help," says Ellen`, prompt:'Why does Ellen want to help too?',
        options:['She was told to','She cares about Mom and wants to be part of the surprise','She wants credit for the meal','She doesn\'t trust Dad to cook alone'], answer:1,
        explain:'Ellen volunteering on her own ("I want to help") shows she cares and wants to contribute to the surprise for Mom.'},
      {context:`"Ellen and her dad chitchat as they fix a very big lunch."`, prompt:'What can you infer from this line?',
        options:['They argued while cooking','They enjoyed working together and had fun','They rushed through the cooking','They didn\'t speak at all'], answer:1,
        explain:'"Chitchat" is friendly, relaxed talk — showing they enjoyed the process of cooking together.'},
      {context:`"What in the world have you two been up to?"`, prompt:'Why does Mom ask this question?',
        options:['She is angry','She is surprised and curious about what they\'ve been doing','She already knows the answer','She wants to leave the room'], answer:1,
        explain:'This phrase expresses surprise — Mom doesn\'t know what Dad and Ellen have secretly been preparing.'},
      {context:'Think about the whole story.', prompt:'What was Ellen and Dad\'s plan really about?',
        options:['Getting out of chores','Surprising Mom with a nice lunch so she\'d take a break','Testing a new recipe','Making Mom do more work'], answer:1,
        explain:'Every step of their plan — from the shrimp salad to calling Mom to sit — was aimed at giving Mom a nice break with lunch.'},
      {context:'"This is the best lunch yet and now I am full," says Mom, "Thanks for everything!"', prompt:'How does Mom feel about the lunch at the end?',
        options:['Disappointed','Happy and grateful','Confused','Still hungry'], answer:1,
        explain:'Calling it "the best lunch yet" and thanking them directly shows Mom is happy and grateful.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Cooking is difficult','Showing care for a family member through thoughtful preparation','Bills are stressful','Lunch is the most important meal'], answer:1,
        explain:'Dad and Ellen show their care for Mom by preparing a surprise lunch so she can take a needed break.'},
      {context:'"Thanks for everything!"', prompt:'Why might the author end with Mom saying "Thanks for everything!"?',
        options:['To show she is still upset','To show her appreciation for their surprise and effort','To ask for more food','To end the story abruptly'], answer:1,
        explain:'This closing line wraps up the story on a warm note of gratitude for the surprise lunch.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Mom is hard at work with the bills for the month."`, prompt:'What does hard at work mean here?',
        options:['Working with a lot of effort and focus','Playing a game','Resting comfortably','Sleeping'], answer:0,
        explain:'Being "hard at work" describes putting real effort and focus into a task — here, checking bills.'},
      {context:`"Mom is hard at work with the bills for the month."`, prompt:'What does bills mean here?',
        options:['Papers showing money owed, like for electricity or phone','Birthday cards','A grocery list','Books to read'], answer:0,
        explain:'Bills are the papers showing what money is owed each month, which Mom is checking and adding up.'},
      {context:`"Ellen and her dad chitchat as they fix a very big lunch."`, prompt:'What does chitchat mean here?',
        options:['Casual, friendly talk','A serious argument','Complete silence','Loud shouting'], answer:0,
        explain:'Chitchat is light, friendly conversation — fitting for Dad and Ellen enjoying their time cooking together.'},
      {context:`"grab the can of shellfish from the top shelf"`, prompt:'What does shellfish mean here?',
        options:['Sea creatures with shells, like shrimp or crab','A type of bread','A vegetable','A fruit'], answer:0,
        explain:'Shellfish are sea creatures with shells — fitting since Dad uses it to make shrimp salad.'},
      {context:`"I will put out some napkins and glasses"`, prompt:'What does napkins mean here?',
        options:['Cloths or paper used to wipe hands and mouth at meals','Plates','Forks','Chairs'], answer:0,
        explain:'Napkins are set out with glasses at a meal, used to wipe hands or mouths while eating.'},
      {context:`"I can also get the basket for the plum muffins"`, prompt:'What does basket mean here?',
        options:['A container, often made of woven material','A type of oven','A drawer','A shelf'], answer:0,
        explain:'A basket is a container used to hold and carry the muffins to the table.'},
      {context:`"What in the world have you two been up to?"`, prompt:'What does this phrase mean here?',
        options:['An expression of surprise, asking what someone has been doing','A request for directions','A math question','A greeting'], answer:0,
        explain:'This is a common expression of surprise used when someone doesn\'t know what\'s been going on.'},
      {context:`"now I am full," says Mom`, prompt:'What does full mean here?',
        options:['Having eaten enough, not hungry anymore','Very hungry','Tired','Thirsty'], answer:0,
        explain:'Being "full" after eating means Mom has had enough food and isn\'t hungry anymore.'},
      {context:`"She has to check each number and add everything up."`, prompt:'What does add up mean here?',
        options:['Find the total by combining numbers','Subtract numbers','Guess a number','Ignore numbers'], answer:0,
        explain:'Adding up numbers means combining them to find a total — what Mom is doing with the bills.'},
      {context:`"This is the best lunch yet"`, prompt:'What does best mean here?',
        options:['Better than all others so far','The worst','An average one','A normal one'], answer:0,
        explain:'"Best... yet" means this lunch is better than any other lunch Mom has had up to this point.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'number', sentence:'She has to check each number.'},
      {word:'napkins', sentence:'I will put out some napkins and glasses.'},
      {word:'muffins', sentence:'I can get the basket for the plum muffins.'},
      {word:'shellfish', sentence:'I will grab the can of shellfish from the shelf.'},
      {word:'chitchat', sentence:'Ellen and her dad chitchat as they fix lunch.'},
      {word:'basket', sentence:'Ellen gets the basket for the muffins.'},
      {word:'happen', sentence:'We cannot let that happen.'},
      {word:'cannot', sentence:'Mom cannot miss lunch.'},
      {word:'plum', sentence:'Ellen gets the basket for the plum muffins.'},
      {word:'shrimp', sentence:'They will have shrimp salad.'},
      {word:'salad', sentence:'Dad will mix the shrimp into a salad.'},
      {word:'lunch', sentence:'This is the best lunch yet.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of two-syllable words. Mark the syllables and digraphs to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'shellfish', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Shellfish breaks into two syllable chunks: shell-fish.'},
      {context:'chitchat', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Chitchat breaks into two syllable chunks: chit-chat.'},
      {context:'napkins', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Napkins breaks into two syllable chunks: nap-kins.'},
      {context:'muffins', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Muffins breaks into two syllable chunks: muf-fins.'},
      {context:'basket', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Basket breaks into two syllable chunks: bas-ket.'},
      {context:'shellfish', prompt:'Which letters form the beginning digraph?', options:['sh','el','fi','sh'], answer:0,
        explain:'S and h together make one new sound, /sh/, at the start of shellfish.'},
      {context:'shellfish', prompt:'Which letters form the ending digraph?', options:['sh','el','fi','sh'], answer:3,
        explain:'S and h together make one new sound, /sh/, at the end of shellfish too.'},
      {context:'chitchat', prompt:'Which letters form a digraph twice in this word?', options:['ch','it','ch','at'], answer:0,
        explain:'C and h together make /ch/, and this word has that digraph both at the start and in the middle.'},
      {context:'shrimp', prompt:'Which letters form the beginning 3-letter blend?', options:['shr','hri','rim','imp'], answer:0,
        explain:'The digraph /sh/ blends with /r/ to form the 3-letter blend at the start of shrimp.'},
      {context:'lunch', prompt:'Which letters form the ending digraph?', options:['lu','un','nc','ch'], answer:3,
        explain:'C and h together make one new sound, /ch/, at the end of lunch.'},
    ]},
];

/* =========================================================
   STORY 8: SNACK OR SCRIPT? — WRS Substep 3.1 B
   ========================================================= */

STORY_PACKS['best_lunch'] = {
  id: 'best_lunch',
  title: "The Best Lunch",
  substep: '3.1AB',
  blurb: 'A family surprises Mom with lunch — two-syllable closed-syllable words.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_BEST_LUNCH,
  paragraphs: STORY_PARAGRAPHS_BEST_LUNCH,
  rounds: ROUNDS_BEST_LUNCH,
};
STORY_ORDER.push('best_lunch');
