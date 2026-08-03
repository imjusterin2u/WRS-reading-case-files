/* ---------------------------------------------------------------
   STORY: Walking and Talking  (WRS Substep 3.5AB)
   Two best friends share their futures on the walk to school — adding -ing to basewords.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_WALKING_TALKING = ['friend(s)','often','called','great','school','time'];

const STORY_PARAGRAPHS_WALKING_TALKING = [
  `Angus and Jazmin could get on the bus to go to school, but they insist on walking every day. They are best friends, and they both want to walk and talk.`,
  `Each day their chat is on a new topic. They often talk about their classes, but today, Jazmin asks Angus to tell her about his plans for when school gets out. Angus jumps right into this subject. He tells Jazmin that he wants to spend each day hunting for frogs down by the pond and golfing with his dad.`,
  `Jazmin then tells her friend that she plans on attending an acting class. She wants to be cast in a film someday. Her mom called last month to get her on the acting class list. Angus thinks this is a great plan. Jazmin could be a talented actress.`,
  `In no time at all, they have landed at the front of the school. It's time to end their chat and get to work on their math and other subjects.`,
];

const ROUNDS_WALKING_TALKING = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Angus and Jazmin's walk.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Angus and Jazmin walk to school together every day instead of taking the bus.",
          "Jazmin asks Angus about his plans for after school gets out.",
          "Angus says he wants to hunt for frogs and golf with his dad.",
          "Jazmin tells Angus about her plan to attend an acting class.",
      ]},
      { label:'Second half — put these in order', events:[
          "Jazmin explains she wants to be cast in a film someday.",
          "Angus says he thinks Jazmin's plan is great.",
          "Angus and Jazmin arrive at the front of the school.",
          "They end their chat and get to work on math and other subjects.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"they insist on walking every day"`, prompt:'Why do Angus and Jazmin insist on walking every day instead of taking the bus?',
        options:['They value the chance to walk and talk together as best friends','They aren\'t allowed on the bus','It is faster than the bus','They don\'t like other kids'], answer:0,
        explain:'The text says they "both want to walk and talk" — the walk itself is valuable time for their friendship.'},
      {context:`"Each day their chat is on a new topic."`, prompt:'What does this suggest about their friendship?',
        options:['They have a lot to talk about and enjoy varied conversations','They run out of things to say quickly','They only discuss school','They argue every day'], answer:0,
        explain:'A "new topic" every day shows their conversations are varied and never seem to run dry.'},
      {context:`"Angus jumps right into this subject."`, prompt:'Why does Angus "jump right into this subject" when asked about his plans?',
        options:['He is eager and excited to share his after-school plans','He is annoyed by the question','He doesn\'t want to answer','He forgot the question'], answer:0,
        explain:'Jumping right in shows enthusiasm — Angus is excited to talk about his plans.'},
      {context:`"hunting for frogs down by the pond and golfing with his dad"`, prompt:'What can you infer about Angus\'s interests from his plans?',
        options:['He enjoys outdoor activities and spending time with his dad','He prefers to stay indoors','He doesn\'t like his dad','He dislikes nature'], answer:0,
        explain:'Frog hunting and golfing are both outdoor activities, and golfing with his dad shows he values that time together.'},
      {context:`"Her mom called last month to get her on the acting class list."`, prompt:'Why did Jazmin\'s mom call "last month" to get her on the list?',
        options:['To make sure Jazmin had a spot, suggesting the class fills up quickly','Because Jazmin forgot to sign up','Because the class was free that month only','Because the school required it'], answer:0,
        explain:'Calling a month ahead suggests planning ahead was necessary, likely because spots fill up.'},
      {context:`"Angus thinks this is a great plan."`, prompt:'What does this tell you about how Angus supports Jazmin?',
        options:['He is encouraging and supportive of his friend\'s goals','He is jealous of her plan','He thinks her plan will fail','He is indifferent to her plans'], answer:0,
        explain:'Calling her plan "great" shows genuine encouragement and support for his friend\'s goal.'},
      {context:'Think about the two very different plans.', prompt:'Why does the author include both friends\' very different plans (frogs/golf vs. acting class)?',
        options:['To show how different their interests are, even though they\'re best friends','To show they don\'t get along','To confuse the reader','To criticize one of their plans'], answer:0,
        explain:'Showing very different interests highlights that close friendships don\'t require identical interests.'},
      {context:`"In no time at all, they have landed at the front of the school."`, prompt:'What does this suggest about their walk?',
        options:['The walk felt quick because they were absorbed in conversation','The walk was actually very short in distance','They ran the whole way','They took a long detour'], answer:0,
        explain:'"In no time at all" suggests the walk felt fast because they were engaged in conversation, not literally about distance.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Good friendships involve sharing interests and supporting each other\'s goals, even when different','Friends should always have identical interests','Walking to school is dangerous','School is more important than friendship'], answer:0,
        explain:'Angus and Jazmin support each other\'s very different goals — a picture of a strong, accepting friendship.'},
      {context:'"It\'s time to end their chat and get to work on their math and other subjects."', prompt:'Why does the story end with them switching to "math and other subjects"?',
        options:['To show their walking-and-talking time is over and school routine begins','To say they will fail their classes','To show they are bored with school','To end the story unrelated to the walk'], answer:0,
        explain:'This transition marks the natural end of their walk-and-talk time as the school day begins.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"they insist on walking every day"`, prompt:'What does insist mean here?',
        options:['To firmly stick with a decision or demand','To give up easily','To forget about something','To ask a question'], answer:0,
        explain:'Insisting means firmly sticking with a choice — here, choosing to walk instead of taking the bus.'},
      {context:`"Each day their chat is on a new topic."`, prompt:'What does topic mean here?',
        options:['The subject being discussed','A type of homework','A type of game','A location'], answer:0,
        explain:'A topic is the subject of a conversation — what they talk about each day.'},
      {context:`"get to work on their math and other subjects"`, prompt:'What does subjects mean here?',
        options:['Areas of study, like school classes','A type of lunch','A type of friend','A location'], answer:0,
        explain:'Subjects refers to school classes or areas of study, like math.'},
      {context:`"Angus jumps right into this subject."`, prompt:'What does jumps right into mean here?',
        options:['Begins talking about something eagerly and without hesitation','Avoids the topic','Changes the subject','Refuses to answer'], answer:0,
        explain:'"Jumps right into" describes eagerly beginning to talk about something without delay.'},
      {context:`"she plans on attending an acting class"`, prompt:'What does attending mean here?',
        options:['Going to or being present at','Skipping','Teaching','Canceling'], answer:0,
        explain:'Attending a class means going to it and being present.'},
      {context:`"She wants to be cast in a film someday."`, prompt:'What does cast mean here?',
        options:['Chosen for a role in a performance','The director of something','A viewer of something','A writer of something'], answer:0,
        explain:'Being "cast" in a film means being chosen to play a role in it.'},
      {context:`"Jazmin could be a talented actress."`, prompt:'What does talented mean here?',
        options:['Having a natural skill or ability','Having no skill at all','Being unwilling to try','Being too busy'], answer:0,
        explain:'Talented describes having a natural ability — here, for acting.'},
      {context:`"they have landed at the front of the school"`, prompt:'What does landed mean here?',
        options:['Arrived at a place','Left a place','Gotten lost','Waited outside'], answer:0,
        explain:'Landed here means arrived — they\'ve reached the front of the school.'},
      {context:`"golfing with his dad"`, prompt:'What does golfing mean here?',
        options:['Playing the sport of golf','Playing basketball','Fishing','Reading'], answer:0,
        explain:'Golfing means playing the sport of golf, one of Angus\'s after-school plans.'},
      {context:`"hunting for frogs down by the pond"`, prompt:'What does hunting mean here?',
        options:['Searching for or trying to find something','Feeding something','Ignoring something','Painting something'], answer:0,
        explain:'Hunting means searching for something — here, looking for frogs by the pond.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'walking', sentence:'They insist on walking every day.'},
      {word:'talking', sentence:'They both want to walk and talk.'},
      {word:'hunting', sentence:'He wants to spend each day hunting for frogs.'},
      {word:'golfing', sentence:'He wants to spend each day golfing with his dad.'},
      {word:'attending', sentence:'She plans on attending an acting class.'},
      {word:'called', sentence:'Her mom called last month.'},
      {word:'landed', sentence:'They have landed at the front of the school.'},
      {word:'talented', sentence:'Jazmin could be a talented actress.'},
      {word:'insist', sentence:'They insist on walking every day.'},
      {word:'subject', sentence:'Angus jumps right into this subject.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story adds -ing to basewords. Mark the welded ing chunks to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'walking', prompt:'Which letters form the welded chunk at the end?', options:['wa','al','ki','ing'], answer:3,
        explain:'"Ing" is a welded sound taught as one unit — it gets added onto the baseword "walk."'},
      {context:'talking', prompt:'Which letters form the welded chunk at the end?', options:['ta','al','ki','ing'], answer:3,
        explain:'"Ing" is a welded sound taught as one unit — it gets added onto the baseword "talk."'},
      {context:'hunting', prompt:'Which letters form the welded chunk at the end?', options:['hu','un','ti','ing'], answer:3,
        explain:'"Ing" is a welded sound taught as one unit — it gets added onto the baseword "hunt."'},
      {context:'golfing', prompt:'Which letters form the welded chunk at the end?', options:['go','ol','fi','ing'], answer:3,
        explain:'"Ing" is a welded sound taught as one unit — it gets added onto the baseword "golf."'},
      {context:'attending', prompt:'Which letters form the welded chunk at the end?', options:['at','te','nd','ing'], answer:3,
        explain:'"Ing" is a welded sound taught as one unit — it gets added onto the baseword "attend."'},
      {context:'called', prompt:'Which letters form the welded chunk in this word?', options:['ca','all','le','ed'], answer:1,
        explain:'"All" is a welded sound taught as one unit — you can hear it stay together in called.'},
      {context:'landed', prompt:'Which letters form the welded chunk in this word?', options:['la','an','de','ed'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in landed.'},
      {context:'talented', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Talented breaks into three syllable chunks: tal-ent-ed.'},
      {context:'insist', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Insist breaks into two syllable chunks: in-sist.'},
      {context:'subject', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Subject breaks into two syllable chunks: sub-ject.'},
    ]},
];

/* =========================================================
   STORY 16: PASSING A BILL — WRS Substep 3.5 B
   ========================================================= */

STORY_PACKS['walking_and_talking'] = {
  id: 'walking_and_talking',
  title: "Walking and Talking",
  substep: '3.5AB',
  blurb: 'Two best friends share their futures on the walk to school — adding -ing to basewords.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_WALKING_TALKING,
  paragraphs: STORY_PARAGRAPHS_WALKING_TALKING,
  rounds: ROUNDS_WALKING_TALKING,
};
STORY_ORDER.push('walking_and_talking');
