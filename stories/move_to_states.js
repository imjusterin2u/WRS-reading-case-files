/* ---------------------------------------------------------------
   STORY: A Move to the States  (WRS Substep 5.2AB)
   A baker's new life in the States — open syllables meet VCE and closed syllables.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_MOVE_TO_STATES = ['house','own','learned','toward','heart','door','plays'];

const STORY_PARAGRAPHS_MOVE_TO_STATES = [
  `Bruno is from the Azores in the mid-Atlantic. He sold his house there and moved to the States back in June. He always wanted to open his own bake shop. So, that's just what he did!`,
  `Bruno and his wife, Irene, wake up each day before sunrise to prepare. They begin to make their jumbo bagels and pecan donuts before the sun is up. They learned to bake back home on the volcanic landscape of the Azores.`,
  `Before Bruno lets the public into the bake shop, he sets a menu on top of a stand, and he puts a vase of fresh lilacs next to them.`,
  `As people walk toward the front door of the bake shop, Bruno is polite and always gives them a wide smile. He likes to chat with everyone as he hands them a menu.`,
  `All of the items they bake are a hit! However, by the end of the day, Bruno is spent. He sits on the front deck of the bake shop to relax. Bruno plays music from the Azores and thinks about his new life in the States. Bruno's heart is full of pride when he thinks about all the old customs from the Azores that he can now share with his new friends.`,
];

const ROUNDS_MOVE_TO_STATES = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Bruno's day.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Bruno sold his house in the Azores and moved to the States.",
          "Bruno and Irene wake up before sunrise to prepare.",
          "They begin making jumbo bagels and pecan donuts.",
          "Bruno sets a menu and a vase of lilacs on the stand.",
      ]},
      { label:'Second half — put these in order', events:[
          "People walk toward the front door of the bake shop.",
          "Bruno smiles and hands people a menu.",
          "By the end of the day, Bruno is spent and sits to relax.",
          "Bruno plays music from the Azores and thinks about his new life.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"He always wanted to open his own bake shop. So, that's just what he did!"`, prompt:'What does this line tell you about Bruno?',
        options:['He opened the shop by accident','He pursued a long-held goal','He was forced to open the shop','He didn\'t really want a bake shop'], answer:1,
        explain:'"Always wanted" shows this was a long-held dream, and "that\'s just what he did" shows he made it happen on purpose.'},
      {context:`"Bruno and his wife, Irene, wake up each day before sunrise to prepare."`, prompt:'What can you infer about running a bake shop from this line?',
        options:['It requires very early, consistent effort','It only takes a few minutes each day','Bruno does all the work alone','The shop is only open at night'], answer:0,
        explain:'Waking up before sunrise every day shows how much early, consistent effort running the shop takes.'},
      {context:`"They learned to bake back home on the volcanic landscape of the Azores."`, prompt:'Why might the author mention where they learned to bake?',
        options:['To show their baking skills connect to their home culture','To explain why the bagels are burnt','To show they just started baking recently','To describe the shape of their shop'], answer:0,
        explain:'Connecting their baking skill to "back home" in the Azores ties their craft to their heritage, not something new they picked up.'},
      {context:`"he sets a menu on top of a stand, and he puts a vase of fresh lilacs next to them"`, prompt:'What does this detail suggest about Bruno?',
        options:['He is careless about presentation','He cares about making a welcoming, pleasant experience for customers','He doesn\'t like flowers','He is in a hurry'], answer:1,
        explain:'Taking the extra step to add fresh flowers next to the menu shows attention to creating a pleasant atmosphere for customers.'},
      {context:`"Bruno is polite and always gives them a wide smile."`, prompt:'What can you infer about Bruno\'s approach to customers?',
        options:['He is unfriendly and rushed','He genuinely enjoys connecting with people','He only smiles for regular customers','He avoids talking to people'], answer:1,
        explain:'Being consistently polite with "a wide smile" for everyone suggests Bruno truly enjoys the customer connection, not just going through the motions.'},
      {context:`"All of the items they bake are a hit!"`, prompt:'What does this line tell you about Bruno and Irene\'s baking?',
        options:['Customers dislike their baked goods','Their baked goods are very popular and well-liked','They only bake one type of item','They are new to baking'], answer:1,
        explain:'"A hit" is a phrase meaning something is very well-received — showing their baked goods are popular with customers.'},
      {context:`"by the end of the day, Bruno is spent"`, prompt:'What does this line suggest about Bruno\'s workday?',
        options:['His day is easy and relaxing','His day is physically and mentally tiring','He works only a few hours','He doesn\'t enjoy his job'], answer:1,
        explain:'Being "spent" by the end of the day shows how much energy and effort the whole day of baking and greeting customers takes.'},
      {context:`"Bruno plays music from the Azores and thinks about his new life in the States."`, prompt:'What can you infer about how Bruno feels about his move?',
        options:['He regrets moving and wants to go back','He is building a new life while still connected to where he came from','He has forgotten about the Azores entirely','He is unhappy with his new life'], answer:1,
        explain:'Playing music "from the Azores" while thinking about his "new life in the States" shows he\'s embracing his new life without losing his connection to home.'},
      {context:`"Bruno's heart is full of pride when he thinks about all the old customs from the Azores that he can now share with his new friends."`, prompt:'What is the significance of Bruno sharing customs with new friends?',
        options:['He is trying to forget the Azores','He is bringing his heritage into his new community','He wants to move back to the Azores','He doesn\'t care about his new friends'], answer:1,
        explain:'Sharing his old customs with new friends shows Bruno blending his heritage into his life in the States, rather than leaving it behind.'},
      {context:'Think about the whole story.', prompt:'What is the overall theme of this story?',
        options:['Starting over in a new place while honoring where you came from','Baking is an easy job','Moving to a new country is always a mistake','Customers are difficult to please'], answer:0,
        explain:'The story follows Bruno building a new business and life in the States while staying connected to his Azorean roots — a theme of honoring your past while starting fresh.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Bruno is from the Azores in the mid-Atlantic."`, prompt:'Based on the story, what can you tell the Azores is?',
        options:['A place Bruno is originally from','A type of bread','A brand of bakery equipment','A city in the States'], answer:0,
        explain:'The story says Bruno "is from" the Azores and "moved to the States," showing it\'s the place he originally lived.'},
      {context:`"They begin to make their jumbo bagels and pecan donuts"`, prompt:'What does jumbo mean here?',
        options:['Very large','Very small','Round','Sweet'], answer:0,
        explain:'Jumbo describes something unusually large — here, extra-large bagels.'},
      {context:`"on the volcanic landscape of the Azores"`, prompt:'What does landscape mean here?',
        options:['The visible scenery or land of an area','A type of painting','A weather pattern','A style of building'], answer:0,
        explain:'Landscape refers to the natural scenery of a place — here, the volcanic land of the Azores.'},
      {context:`"Before Bruno lets the public into the bake shop"`, prompt:'What does the public mean here?',
        options:['Customers and general people','Bruno\'s family only','Other bakers','The government'], answer:0,
        explain:'"The public" refers to everyday people/customers, as opposed to just Bruno\'s staff or family.'},
      {context:`"he sets a menu on top of a stand"`, prompt:'What does stand mean here?',
        options:['A small display surface or table','A type of chair','A parking spot','A type of oven'], answer:0,
        explain:'A stand here is a surface for displaying the menu, like a small table or podium.'},
      {context:`"he puts a vase of fresh lilacs next to them"`, prompt:'What does vase mean here?',
        options:['A container for holding flowers','A type of pastry','A cooking pot','A serving tray'], answer:0,
        explain:'A vase is a container used to hold and display flowers, like the lilacs mentioned here.'},
      {context:`"As people walk toward the front door of the bake shop"`, prompt:'What does toward mean here?',
        options:['In the direction of','Away from','Around','Above'], answer:0,
        explain:'"Toward" describes movement in the direction of something — here, people walking in the direction of the door.'},
      {context:`"by the end of the day, Bruno is spent"`, prompt:'What does spent mean here?',
        options:['Very tired from effort','Full of energy','Angry','Confused'], answer:0,
        explain:'"Spent" here means exhausted or worn out — used differently than spending money, but meaning all his energy is used up.'},
      {context:`"His heart is full of pride"`, prompt:'What does pride mean here?',
        options:['A feeling of satisfaction and self-respect about something','A feeling of sadness','A feeling of fear','A feeling of confusion'], answer:0,
        explain:'Pride is a feeling of satisfaction, often about an accomplishment or heritage — here, about his customs and his new life.'},
      {context:`"all the old customs from the Azores that he can now share"`, prompt:'What does customs mean here?',
        options:['Traditional practices or ways of doing things from a culture','Types of pastries','Rules of the bake shop','Types of music instruments'], answer:0,
        explain:'Customs are traditional practices tied to a culture — here, traditions from the Azores that Bruno brings with him.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'prepare', sentence:'Bruno and Irene wake up before sunrise to prepare.'},
      {word:'polite', sentence:'Bruno is polite and always gives a wide smile.'},
      {word:'relax', sentence:'Bruno sits on the front deck to relax.'},
      {word:'music', sentence:'Bruno plays music from the Azores.'},
      {word:'pecan', sentence:'They make pecan donuts before the sun is up.'},
      {word:'jumbo', sentence:'They begin to make jumbo bagels.'},
      {word:'menu', sentence:'Bruno sets a menu on top of a stand.'},
      {word:'public', sentence:'Bruno lets the public into the bake shop.'},
      {word:'landscape', sentence:'They learned to bake on the volcanic landscape of the Azores.'},
      {word:'customs', sentence:'He can share the old customs from the Azores.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story mixes open syllables with VCE and closed syllables. Mark the sound chunks to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'prepare', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Prepare breaks into two syllable chunks: pre-pare, an open syllable followed by a VCE syllable.'},
      {context:'polite', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Polite breaks into two syllable chunks: po-lite, an open syllable followed by a VCE syllable.'},
      {context:'relax', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Relax breaks into two syllable chunks: re-lax, an open syllable followed by a closed syllable.'},
      {context:'music', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Music breaks into two syllable chunks: mu-sic, an open syllable followed by a closed syllable.'},
      {context:'pecan', prompt:'Which letters form the welded chunk in this word?', options:['pe','ec','an','ca'], answer:2,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together at the end of pecan.'},
      {context:'landscape', prompt:'Which letters form the welded chunk near the start?', options:['la','an','nd','ds'], answer:1,
        explain:'"An" is a welded sound taught as one unit — once learned, it stays together wherever it appears, including in landscape.'},
      {context:'jumbo', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Jumbo breaks into two syllable chunks: jum-bo, a closed syllable followed by an open syllable.'},
      {context:'public', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Public breaks into two syllable chunks: pub-lic, both closed syllables.'},
      {context:'customs', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Customs breaks into two syllable chunks: cus-toms, both closed syllables.'},
      {context:'menu', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Menu breaks into two syllable chunks: me-nu, both open syllables.'},
    ]},
];

/* =========================================================
   STORY 7: THE BEST LUNCH — WRS Substep 3.1 AB
   ========================================================= */

STORY_PACKS['move_to_states'] = {
  id: 'move_to_states',
  title: "A Move to the States",
  substep: '5.2AB',
  blurb: 'A baker\'s new life in the States — open syllables meet VCE and closed syllables.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_MOVE_TO_STATES,
  paragraphs: STORY_PARAGRAPHS_MOVE_TO_STATES,
  rounds: ROUNDS_MOVE_TO_STATES,
};
STORY_ORDER.push('move_to_states');
