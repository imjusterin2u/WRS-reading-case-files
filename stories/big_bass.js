/* ---------------------------------------------------------------
   STORY: Big Bass  (WRS Substep 2.5AB)
   A fishing trip full of 3-letter blends — spring, shrubs, splash, and strong.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_BIG_BASS = ['each','very','made','day'];

const STORY_PARAGRAPHS_BIG_BASS = [
  `In the spring, Tim and Frank went to the pond. They each had a rod. Tim said, "We must get a big bass!" He told Frank to get a raft.`,
  `As Frank got the raft, Tim got a pan of grubs. Frank and Tim got on the raft with the pan of grubs. Then they went past some shrubs and twigs on the bank to the best spot to fish.`,
  `In a flash, Frank got a bass on his rod! It was very big, but he was strong. He got it on the raft and it made a big splash. He was glad and did brag all day.`,
];

const ROUNDS_BIG_BASS = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild the fishing trip.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Tim and Frank went to the pond.",
          "Tim told Frank to get a raft.",
          "Tim got a pan of grubs.",
          "Frank and Tim got on the raft.",
      ]},
      { label:'Second half — put these in order', events:[
          "They went past shrubs and twigs to the best spot.",
          "Frank got a bass on his rod.",
          "The bass made a big splash.",
          "Frank bragged all day.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"He told Frank to get a raft."`, prompt:'Why did Tim tell Frank to get a raft?',
        options:['To race across the pond','So they could reach a good fishing spot on the water','To keep the grubs dry','Because it looked like rain'], answer:1,
        explain:'Right after, they use the raft to travel past shrubs and twigs "to the best spot to fish" — the raft got them to good fishing water.'},
      {context:`"We must get a big bass!"`, prompt:'What does this line tell you about Tim\'s goal?',
        options:['He wanted to nap by the pond','He was determined to catch a big fish','He wanted to build a raft','He was scared of the water'], answer:1,
        explain:'"We must" is strong, determined language — Tim was set on catching a big bass.'},
      {context:`"Tim got a pan of grubs."`, prompt:'Why did they bring grubs?',
        options:['To use as bait for fishing','To eat for lunch','To feed the fish as pets','To sell at the market'], answer:0,
        explain:'Grubs are small bait creatures, and they\'re carried along on a fishing trip specifically to use as bait.'},
      {context:`"It was very big, but he was strong."`, prompt:'What can you infer from this line?',
        options:['Frank gave up right away','Frank had to use real effort to reel in the fish','The fish was easy to catch','Frank dropped his rod'], answer:1,
        explain:'Pairing "very big" with "but he was strong" shows Frank needed his strength to handle a fish that was hard to reel in.'},
      {context:`"He was glad and did brag all day."`, prompt:'Why might Frank have bragged all day?',
        options:['He lost the fish','He was proud of catching such a big fish','He was tired of fishing','He wanted a new rod'], answer:1,
        explain:'Being "glad" and bragging right after catching the bass shows he was proud of his big catch.'},
      {context:'Think about where the story takes place.', prompt:'What kind of place were Tim and Frank in?',
        options:['A city park','Outdoors near a pond, with shrubs and a bank','Inside a house','A shopping mall'], answer:1,
        explain:'The story mentions a pond, a raft, shrubs, twigs, and a bank — all outdoor, natural fishing spot details.'},
      {context:'"He got it on the raft and it made a big splash."', prompt:'Why do you think it took effort to get the bass onto the raft?',
        options:['Because it was small and light','Because it was big and strong and fought back','Because the raft was too small','Because it was raining'], answer:1,
        explain:'A "big splash" suggests the fish was thrashing and putting up a fight as Frank pulled it in — that takes effort.'},
      {context:'Think about the whole story.', prompt:'What is the overall mood of this story?',
        options:['Excited and triumphant','Sad and disappointed','Calm and boring','Scary and tense'], answer:0,
        explain:'The story builds from planning to catching a big fish to bragging about it — an excited, triumphant arc from start to finish.'},
      {context:'Think about what Tim and Frank brought with them.', prompt:'What lesson might this story teach about fishing trips?',
        options:['Fishing is a waste of time','Being prepared with the right gear pays off','You should always fish alone','Rafts are too dangerous to use'], answer:1,
        explain:'Tim planned ahead — getting a raft and grubs — and that preparation led to a successful catch.'},
      {context:'"He was glad and did brag all day."', prompt:'Why does the story end with Frank bragging rather than something else?',
        options:['To show he was embarrassed','To show how proud and excited he was about his catch','To show he wanted to go home','To show he was annoyed with Tim'], answer:1,
        explain:'Ending on bragging is a natural way to show pride and excitement after a big personal success.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"He told Frank to get a raft."`, prompt:'What does raft mean here?',
        options:['A flat floating platform','A fishing net','A tent','A boat with a motor'], answer:0,
        explain:'Frank and Tim "got on the raft" to travel across the water — a flat platform that floats.'},
      {context:`"Tim got a pan of grubs."`, prompt:'What does grubs mean here?',
        options:['A type of fish','Small worm-like creatures used as bait','A kind of boat','A snack food for people'], answer:1,
        explain:'Grubs are carried in a pan specifically to be used for fishing — they\'re bait, not food for people.'},
      {context:`"they went past some shrubs and twigs on the bank"`, prompt:'What does shrubs mean here?',
        options:['Bushes','Tall trees','Rocks','Flowers'], answer:0,
        explain:'Shrubs are low bushes, mentioned alongside twigs as plants along the bank of the pond.'},
      {context:`"they went past some shrubs and twigs"`, prompt:'What does twigs mean here?',
        options:['Blades of grass','Small thin branches','Pebbles','Roots'], answer:1,
        explain:'Twigs are small thin branches, often found on the ground near shrubs and trees.'},
      {context:`"on the bank to the best spot to fish"`, prompt:'What does bank mean here?',
        options:['The land alongside a pond or river','A place to keep money','A hill','A boat'], answer:0,
        explain:'The "bank" here is the land at the edge of the pond, where the shrubs and twigs are.'},
      {context:`"In a flash, Frank got a bass on his rod!"`, prompt:'What does in a flash mean here?',
        options:['Slowly over time','Suddenly, in a very short moment','At the very end of the day','Quietly, without anyone noticing'], answer:1,
        explain:'"In a flash" describes something happening very quickly — the bass bit the line all at once.'},
      {context:`"He was glad and did brag all day."`, prompt:'What does brag mean here?',
        options:['Boast proudly about something','Complain about something','Whisper quietly','Forget about something'], answer:0,
        explain:'Bragging is talking proudly about an accomplishment — here, Frank\'s big catch.'},
      {context:`"He was glad and did brag all day."`, prompt:'What does glad mean here?',
        options:['Angry','Tired','Happy and pleased','Confused'], answer:2,
        explain:'Glad means happy or pleased — a natural feeling right after a big catch.'},
      {context:`"It was very big, but he was strong."`, prompt:'What does strong mean here?',
        options:['Having a lot of physical power','Weak and tired','Slow moving','Small in size'], answer:0,
        explain:'Strong describes Frank\'s physical ability to handle a big, heavy fish.'},
      {context:`"He got it on the raft and it made a big splash."`, prompt:'What does splash mean here?',
        options:['A sudden noisy spray of water','A quiet ripple','A loud crash on land','A splash of paint'], answer:0,
        explain:'A splash is the noisy spray of water made when the big fish hit the surface — fitting a fish being reeled in.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'spring', sentence:'In the spring, Tim and Frank went to the pond.'},
      {word:'shrubs', sentence:'They went past shrubs on the bank.'},
      {word:'splash', sentence:'The bass made a big splash.'},
      {word:'strong', sentence:'It was very big, but he was strong.'},
      {word:'grubs', sentence:'Tim got a pan of grubs.'},
      {word:'twigs', sentence:'They went past twigs on the bank.'},
      {word:'flash', sentence:'In a flash, Frank got a bass on his rod.'},
      {word:'brag', sentence:'He was glad and did brag all day.'},
      {word:'raft', sentence:'He told Frank to get a raft.'},
      {word:'pond', sentence:'Tim and Frank went to the pond.'},
      {word:'bass', sentence:'They wanted to get a big bass.'},
      {word:'fish', sentence:'They went to the best spot to fish.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is all about 3-letter blends. Mark the blends and digraphs to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'spring', prompt:'Which letters form the beginning 3-letter blend?', options:['spr','pri','rin','ing'], answer:0,
        explain:'You can hear all three sounds — /s/ /p/ /r/ — blended together at the start of spring.'},
      {context:'shrubs', prompt:'Which letters form the beginning 3-letter blend?', options:['shr','hru','rub','ubs'], answer:0,
        explain:'The digraph /sh/ blends with /r/ to form the 3-letter blend at the start of shrubs.'},
      {context:'splash', prompt:'Which letters form the beginning 3-letter blend?', options:['spl','pla','las','ash'], answer:0,
        explain:'You can hear /s/ /p/ /l/ blended together at the start of splash.'},
      {context:'strong', prompt:'Which letters form the beginning 3-letter blend?', options:['str','tro','ron','ong'], answer:0,
        explain:'You can hear /s/ /t/ /r/ blended together at the start of strong.'},
      {context:'splash', prompt:'Which letters form the ending digraph?', options:['pl','as','sh','la'], answer:2,
        explain:'S and h together make one new sound, /sh/, at the end of splash.'},
      {context:'flash', prompt:'Which letters form the ending digraph?', options:['fl','as','sh','la'], answer:2,
        explain:'S and h together make one new sound, /sh/, at the end of flash.'},
      {context:'grubs', prompt:'Which letters form the beginning blend?', options:['gr','ru','ub','bs'], answer:0,
        explain:'You can still hear /g/ and /r/ blended together at the start of grubs.'},
      {context:'twigs', prompt:'Which letters form the beginning blend?', options:['tw','wi','ig','gs'], answer:0,
        explain:'You can still hear /t/ and /w/ blended together at the start of twigs.'},
      {context:'strong', prompt:'How many sounds are in this word? (str / ong)', options:['3','4','5','6'], answer:2,
        explain:'Count each sound: /s/ /t/ /r/ /o/ /ng/ — the str blend is 3 sounds, and the ong welded chunk is 2 more, for 5 total.'},
      {context:'spring', prompt:'How many sounds are in this word? (spr / ing)', options:['3','4','5','6'], answer:2,
        explain:'Count each sound: /s/ /p/ /r/ /i/ /ng/ — the spr blend is 3 sounds, and the ing welded chunk is 2 more, for 5 total.'},
    ]},
];

/* =========================================================
   STORY 4: THE SPRING JOB — WRS Substep 2.5 B
   ========================================================= */

STORY_PACKS['big_bass'] = {
  id: 'big_bass',
  title: "Big Bass",
  substep: '2.5AB',
  blurb: 'A fishing trip full of 3-letter blends — spring, shrubs, splash, and strong.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_BIG_BASS,
  paragraphs: STORY_PARAGRAPHS_BIG_BASS,
  rounds: ROUNDS_BIG_BASS,
};
STORY_ORDER.push('big_bass');
