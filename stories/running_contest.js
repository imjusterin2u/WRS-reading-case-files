/* ---------------------------------------------------------------
   STORY: The Running Contest  (WRS Substep 3.2AB)
   A racer chases first place — two-syllable words with blends.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_RUNNING_CONTEST = ['another','new','other(s)','after','over','down','again','time','place','around','says'];

const STORY_PARAGRAPHS_RUNNING_CONTEST = [
  `Ted plans to win the next running contest this month. Everyone thinks he will come in second again. Ted does not wish to be unkind, but he does not want Jim or Patrick to win another time. They have gotten so many medals in the past! Ted has been putting in a lot of work to invest in his skills.`,
  `Ted gets that he must run as quick as a rabbit to be the new number one. At the signal, he must dash off and sprint as fast as he can. Blast-off! Ted kicks off to get a jump on the others. After the children run over to the cliff, they must also bolt down to the fishpond and back.`,
  `At first, Ted is only in fifth place, but he does not panic. He has to pass Patrick and Jim at the cliff. All of a sudden, Ted pushes past Patrick, and then he zips by Jim. Ted is out in front of the pack as he rushes to the fishpond and back. Yes! He comes in first and now he is number one!`,
  `"It is a thrill to get credit for this win and put a medal around my neck at last," says Ted.`,
];

const ROUNDS_RUNNING_CONTEST = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild the race.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Ted plans to win the next running contest.",
          "Everyone thinks Jim or Patrick will win again.",
          "At the signal, Ted dashes off and sprints.",
          "The children run to the cliff and bolt down to the fishpond.",
      ]},
      { label:'Second half — put these in order', events:[
          "At first, Ted is only in fifth place.",
          "Ted pushes past Patrick, then zips by Jim.",
          "Ted rushes to the fishpond and back in first place.",
          "Ted gets a medal and feels a thrill.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"Everyone thinks he will come in second again."`, prompt:'Why does everyone think Ted will "come in second again"?',
        options:['He has come in second in past contests and hasn\'t won before','He told everyone he would lose','He is new to running','He is the fastest runner ever'], answer:0,
        explain:'The word "again" signals this has happened before — Ted has a pattern of finishing second.'},
      {context:`"Ted does not wish to be unkind, but he does not want Jim or Patrick to win another time."`, prompt:'Why does Ted say he "does not wish to be unkind" about not wanting Jim or Patrick to win?',
        options:['He doesn\'t want to seem like he\'s wishing bad things on his friends, even though he wants to win','He actually wants them to win','He doesn\'t care about the contest','He wants to quit racing'], answer:0,
        explain:'This shows Ted\'s inner conflict — he wants to win but doesn\'t want that wish to seem mean toward his friends.'},
      {context:`"Ted has been putting in a lot of work to invest in his skills."`, prompt:'What does this line tell you about Ted?',
        options:['He gave up on training','He has been training hard to prepare for this contest','He is naturally the fastest without effort','He doesn\'t care about winning'], answer:1,
        explain:'"Putting in a lot of work" shows deliberate, ongoing effort and preparation.'},
      {context:`"he must run as quick as a rabbit"`, prompt:'Why might the author describe Ted running "as quick as a rabbit"?',
        options:['To emphasize how fast Ted needs to run to win','To say Ted is scared like a rabbit','To describe Ted\'s appearance','To say the race is about rabbits'], answer:0,
        explain:'Comparing Ted\'s needed speed to a rabbit emphasizes just how fast he has to run to win.'},
      {context:`"At first, Ted is only in fifth place, but he does not panic."`, prompt:'What can you infer from this line?',
        options:['Ted gives up immediately','Ted stays calm and confident even when he\'s behind','Ted is confused about the race','Ted decides to stop running'], answer:1,
        explain:'Not panicking while behind in fifth place shows Ted stays calm and trusts he can still catch up.'},
      {context:`"He has to pass Patrick and Jim at the cliff."`, prompt:'Why was it significant that Ted had to pass both Patrick and Jim?',
        options:['They were strangers to Ted','They were his main competition who had won medals before','They were slower than everyone else','They weren\'t actually racing'], answer:1,
        explain:'The story earlier explains Patrick and Jim "have gotten so many medals in the past" — they were the runners to beat.'},
      {context:`"Ted is out in front of the pack"`, prompt:'What does this tell you about the race at that point?',
        options:['Ted has taken the lead over all the other runners','Ted is now last','Ted has stopped running','The race has ended in a tie'], answer:0,
        explain:'"Out in front of the pack" means Ted is now leading, ahead of every other runner.'},
      {context:'"It is a thrill to get credit for this win and put a medal around my neck at last," says Ted.', prompt:'How does Ted feel about winning, based on his final quote?',
        options:['Thrilled and proud to finally get credit and a medal','Disappointed with the result','Indifferent about the outcome','Worried about the next race'], answer:0,
        explain:'Calling it "a thrill" and mentioning the medal "at last" shows genuine excitement and pride.'},
      {context:'Think about the whole story.', prompt:'What is the theme of this story?',
        options:['Hard work and staying calm under pressure can lead to success','Winning is not important','Racing is dangerous','Friends should never compete'], answer:0,
        explain:'Ted\'s preparation and calm comeback from fifth place both contributed to his eventual win.'},
      {context:'"It is a thrill to get credit for this win and put a medal around my neck at last," says Ted.', prompt:'Why does the story end with Ted\'s own words about the win?',
        options:['To let the reader hear directly how meaningful this achievement is to him','To confuse the reader','To introduce a new character','To end the story on a sad note'], answer:0,
        explain:'Ending with Ted\'s direct quote gives the reader a personal, first-hand sense of his excitement.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Ted does not wish to be unkind"`, prompt:'What does unkind mean here?',
        options:['Not nice or thoughtful toward others','Generous','Funny','Quiet'], answer:0,
        explain:'Unkind describes behavior that isn\'t nice toward others — the opposite of thoughtful.'},
      {context:`"putting in a lot of work to invest in his skills"`, prompt:'What does invest mean here?',
        options:['To put time or effort into something for future benefit','To ignore something','To give up on something','To sell something'], answer:0,
        explain:'Investing in his skills means putting in effort now so he\'ll benefit — winning — later.'},
      {context:`"At the signal, he must dash off"`, prompt:'What does signal mean here?',
        options:['A sign that tells people when to start or act','A type of medal','A type of shoe','A finish line'], answer:0,
        explain:'The signal is what tells the runners exactly when to start racing.'},
      {context:`"he must dash off and sprint"`, prompt:'What does dash mean here?',
        options:['To run suddenly and quickly','To walk slowly','To stop and rest','To sit down'], answer:0,
        explain:'To dash is to run suddenly and quickly, fitting the start of a race.'},
      {context:`"sprint as fast as he can"`, prompt:'What does sprint mean here?',
        options:['To run at full speed for a short distance','To jog slowly','To walk','To crawl'], answer:0,
        explain:'Sprinting means running at top speed, which Ted does after the starting signal.'},
      {context:`"they must also bolt down to the fishpond"`, prompt:'What does bolt mean here?',
        options:['To move very quickly, like a sudden dash','To walk calmly','To stand still','To climb slowly'], answer:0,
        explain:'To bolt is to move suddenly and quickly — similar to dash or sprint.'},
      {context:`"he does not panic"`, prompt:'What does panic mean here?',
        options:['Sudden overwhelming fear or worry','Calm confidence','Happiness','Boredom'], answer:0,
        explain:'Panic is a sudden feeling of fear or worry — something Ted avoids even while behind in the race.'},
      {context:`"It is a thrill to get credit for this win"`, prompt:'What does thrill mean here?',
        options:['A feeling of great excitement','A feeling of sadness','A feeling of boredom','A feeling of anger'], answer:0,
        explain:'A thrill is a rush of excitement — exactly what Ted feels after winning.'},
      {context:`"get credit for this win"`, prompt:'What does credit mean here?',
        options:['Recognition or praise for something achieved','Blame for a mistake','Money owed','A type of medal'], answer:0,
        explain:'Getting credit means being recognized for an accomplishment — here, Ted\'s win.'},
      {context:`"Ted is out in front of the pack"`, prompt:'What does pack mean here?',
        options:['A group of people or animals moving together','A type of bag','A single runner','A finish line'], answer:0,
        explain:'The "pack" refers to the group of runners moving together in the race.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'contest', sentence:'Ted plans to win the next running contest.'},
      {word:'invest', sentence:'Ted has been putting in work to invest in his skills.'},
      {word:'signal', sentence:'At the signal, he must dash off.'},
      {word:'rabbit', sentence:'He must run as quick as a rabbit.'},
      {word:'fishpond', sentence:'They must bolt down to the fishpond.'},
      {word:'thrill', sentence:'It is a thrill to get credit for this win.'},
      {word:'credit', sentence:'Ted gets credit for the win.'},
      {word:'sprint', sentence:'He must sprint as fast as he can.'},
      {word:'blast', sentence:'Blast-off! Ted kicks off to get a jump.'},
      {word:'dash', sentence:'He must dash off at the signal.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of two-syllable words. Mark the syllables and blends to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'contest', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Contest breaks into two syllable chunks: con-test.'},
      {context:'invest', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Invest breaks into two syllable chunks: in-vest.'},
      {context:'signal', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Signal breaks into two syllable chunks: sig-nal.'},
      {context:'rabbit', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Rabbit breaks into two syllable chunks: rab-bit.'},
      {context:'fishpond', prompt:'Which letters form the digraph in this word?', options:['fi','sh','po','nd'], answer:1,
        explain:'S and h together make one new sound, /sh/, in the middle of fishpond.'},
      {context:'thrill', prompt:'Which letters form the beginning digraph?', options:['th','hr','il','ll'], answer:0,
        explain:'T and h together make one new sound, /th/, at the start of thrill.'},
      {context:'credit', prompt:'How many syllables does this word have?', options:['1','2','3','4'], answer:1,
        explain:'Credit breaks into two syllable chunks: cred-it.'},
      {context:'sprint', prompt:'Which letters form the beginning 3-letter blend?', options:['spr','pri','int','rin'], answer:0,
        explain:'You can hear /s/ /p/ /r/ blended together at the start of sprint.'},
      {context:'blast', prompt:'Which letters form the beginning blend?', options:['bl','la','as','st'], answer:0,
        explain:'You can still hear /b/ and /l/ blended together at the start of blast.'},
      {context:'dash', prompt:'Which letters form the ending digraph?', options:['da','as','sh','ash'], answer:2,
        explain:'S and h together make one new sound, /sh/, at the end of dash.'},
    ]},
];

/* =========================================================
   STORY 10: PROBLEMS AT THE COMMON — WRS Substep 3.2 B
   ========================================================= */

STORY_PACKS['running_contest'] = {
  id: 'running_contest',
  title: "The Running Contest",
  substep: '3.2AB',
  blurb: 'A racer chases first place — two-syllable words with blends.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_RUNNING_CONTEST,
  paragraphs: STORY_PARAGRAPHS_RUNNING_CONTEST,
  rounds: ROUNDS_RUNNING_CONTEST,
};
STORY_ORDER.push('running_contest');
