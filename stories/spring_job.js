/* ---------------------------------------------------------------
   STORY: The Spring Job  (WRS Substep 2.5B)
   A grumpy spring cleanup day packed with three-letter blends.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_SPRING_JOB = ['everyone','world','work','each','so','everywhere','very','too','go','two','everything','feels','yard','himself','water'];

const STORY_PARAGRAPHS_SPRING_JOB = [
  `Clint is not glad about the gust of hot wind. Spring is coming! Most everyone in the world feels bliss when the sun lasts long into dusk. Yet, Clint could not help but think of all the yard work. When all the cold and frost ends, the land and grass would be a mess.`,
  `Each spring Clint has to trim the shrubs and fix up the mulch bed. Spring has sprung, so his tasks are at hand. Black mold masks the shed. Clint finds sticks and globs of rank sod everywhere. Clint is very strong, but this is too much stress and filth!`,
  `In his mind, Clint tempts himself with a snack and a nap, but he must go on. He scrubs the swing and the two benches by the elm. Then he sets two pots on the front steps. He plants the bulbs one by one, then splashes them with water.`,
  `When everything is fresh, Clint grasps that he should not be such a grump. He lugs the trash out back and sprints to have a bath and grill some lunch.`,
];

const ROUNDS_SPRING_JOB = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild Clint's spring cleanup day.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "Clint thinks about all the yard work waiting for him.",
          "Clint trims the shrubs and fixes the mulch bed.",
          "Clint finds sod and mold everywhere.",
          "Clint scrubs the swing and the two benches.",
      ]},
      { label:'Second half — put these in order', events:[
          "Clint sets two pots on the front steps.",
          "Clint plants the bulbs one by one.",
          "Clint splashes the bulbs with water.",
          "Clint sprints to take a bath and grill lunch.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"Clint is not glad about the gust of hot wind."`, prompt:'Why is Clint not glad about spring coming?',
        options:['He is allergic to flowers','It signals more yard work is coming even though others enjoy spring','He doesn\'t like warm weather at all','He has to move away'], answer:1,
        explain:'Right after, the story lists all the yard work Clint dreads — that\'s why spring\'s arrival doesn\'t make him glad like it does others.'},
      {context:`"Most everyone in the world feels bliss when the sun lasts long into dusk."`, prompt:'What does this line suggest about how other people feel compared to Clint?',
        options:['Everyone feels the same as Clint','Other people are happy about spring while Clint feels differently','No one else likes spring either','Clint is the happiest person around'], answer:1,
        explain:'"Most everyone" feels bliss, but the very next sentence shows Clint thinking about dreaded yard work instead — a clear contrast.'},
      {context:`"Black mold masks the shed."`, prompt:'What does this line suggest about the shed?',
        options:['It was recently painted','It has been neglected and gotten dirty over winter','It is brand new','It is Clint\'s favorite place'], answer:1,
        explain:'Mold building up enough to "mask" (cover) the shed suggests it hasn\'t been cleaned in a while.'},
      {context:`"Clint tempts himself with a snack and a nap, but he must go on."`, prompt:'What can you infer from this line?',
        options:['Clint gives up on the work','Clint is tired and wants to stop, but pushes through anyway','Clint takes a long nap','Clint asks for help'], answer:1,
        explain:'Being "tempted" by rest but deciding he "must go on" shows Clint pushing past his own tiredness to keep working.'},
      {context:`"Clint grasps that he should not be such a grump."`, prompt:'Why does Clint feel he shouldn\'t be a grump?',
        options:['His friends told him to stop complaining','He realizes his attitude isn\'t helpful given the situation','He wants to seem more agreeable','He is trying to impress someone'], answer:1,
        explain:'This realization comes right as the yard starts looking fresh — Clint seems to recognize his complaining attitude wasn\'t fair or useful.'},
      {context:'Think about the whole story.', prompt:'How does Clint\'s mood change across the story?',
        options:['He starts happy and ends sad','He starts dreading the work but ends by pushing through with a better attitude','His mood never changes','He starts angry and stays angry'], answer:1,
        explain:'Clint starts by dreading spring and the mess, works through stress and filth, but ends up grasping he shouldn\'t be a grump and finishing the job.'},
      {context:`"Clint is very strong, but this is too much stress and filth!"`, prompt:'Why might the author describe Clint as "very strong"?',
        options:['To show he is physically capable even though the work is hard','To show he never gets tired','To show he doesn\'t need any tools','To show he is taller than his friends'], answer:0,
        explain:'Pairing his strength with "too much stress and filth" shows that even a strong person finds this cleanup overwhelming.'},
      {context:'Think about what Chan and Trent... wait, think about the whole story.', prompt:'What is the overall theme of this story?',
        options:['Yard work is impossible','Doing hard work despite not wanting to, and improving your attitude along the way','Spring is a bad season','Gardens should be avoided'], answer:1,
        explain:'Clint dislikes the work at first but sees it through and grasps he shouldn\'t be a grump — a story about pushing through and improving attitude.'},
      {context:'"He lugs the trash out back and sprints to have a bath and grill some lunch."', prompt:'Why does the story end with Clint sprinting to relax?',
        options:['He is running away from more chores','It shows relief and reward after finishing a big task','He forgot something important','He is racing a friend'], answer:1,
        explain:'Sprinting toward a bath and lunch right after finishing the yard work shows Clint\'s relief that the hard part is over.'},
      {context:'Think about the yard at the start versus the end.', prompt:'How does Clint\'s yard look different at the beginning versus the end?',
        options:['It looks the same throughout','It starts messy and moldy, and ends fresh and cleaned up','It starts fresh and ends a mess','The story never describes the yard'], answer:1,
        explain:'The story moves from "black mold" and "rank sod everywhere" to "when everything is fresh" — a clear before-and-after.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"Clint is not glad about the gust of hot wind."`, prompt:'What does gust mean here?',
        options:['A sudden strong rush of wind','A gentle breeze','A rain shower','A loud noise'], answer:0,
        explain:'A gust is a sudden strong burst of wind — stronger than a gentle breeze.'},
      {context:`"Most everyone in the world feels bliss"`, prompt:'What does bliss mean here?',
        options:['Great happiness','Sadness','Boredom','Worry'], answer:0,
        explain:'Bliss is a feeling of great happiness — the opposite of how Clint feels about the yard work ahead.'},
      {context:`"Black mold masks the shed."`, prompt:'What does mold mean here?',
        options:['A fungus that grows in damp places','A type of paint','A garden tool','A kind of insect'], answer:0,
        explain:'Mold is a fungus that grows where things stay damp and dirty, like an untended shed.'},
      {context:`"Clint finds sticks and globs of rank sod everywhere."`, prompt:'What does sod mean here?',
        options:['Chunks of grass and dirt (turf)','Piles of leaves','Wet mud puddles','Garden rocks'], answer:0,
        explain:'Sod is turf — chunks of grass and the dirt attached to its roots, found scattered around a messy yard.'},
      {context:`"this is too much stress and filth!"`, prompt:'What does filth mean here?',
        options:['Dirtiness or grime','Excitement','Quietness','Softness'], answer:0,
        explain:'Filth means dirtiness — paired with "stress," it captures how overwhelming and grimy the yard work feels.'},
      {context:`"Clint tempts himself with a snack and a nap"`, prompt:'What does tempts mean here?',
        options:['Strongly attracts someone to do something','Forces someone to do something','Forbids something','Ignores something'], answer:0,
        explain:'To tempt is to strongly attract someone toward doing something — here, Clint is drawn toward resting instead of working.'},
      {context:`"Clint grasps that he should not be such a grump."`, prompt:'What does grasps mean here?',
        options:['Understands or realizes','Forgets','Denies','Questions'], answer:0,
        explain:'To grasp an idea means to understand or realize it — Clint comes to understand his attitude wasn\'t helpful.'},
      {context:`"he should not be such a grump"`, prompt:'What does grump mean here?',
        options:['A person who complains a lot or is in a bad mood','A cheerful person','A hard worker','A quiet person'], answer:0,
        explain:'A grump is someone who complains or is grouchy — which Clint realizes he has been acting like.'},
      {context:`"He lugs the trash out back"`, prompt:'What does lugs mean here?',
        options:['Carries something heavy with effort','Throws something quickly','Drops something gently','Hides something'], answer:0,
        explain:'Lugging means carrying something heavy with visible effort — fitting for hauling out a full load of trash.'},
      {context:`"sprints to have a bath and grill some lunch"`, prompt:'What does sprints mean here?',
        options:['Runs quickly for a short distance','Walks slowly','Sits down','Waits patiently'], answer:0,
        explain:'Sprinting is running quickly — showing how eager Clint is to finally relax after all his work.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'sprung', sentence:'Spring has sprung, so his tasks are at hand.'},
      {word:'stress', sentence:'This is too much stress and filth.'},
      {word:'scrubs', sentence:'He scrubs the swing and the two benches.'},
      {word:'grasps', sentence:'Clint grasps that he should not be such a grump.'},
      {word:'sprints', sentence:'He sprints to have a bath and grill lunch.'},
      {word:'trim', sentence:'Clint has to trim the shrubs.'},
      {word:'trash', sentence:'He lugs the trash out back.'},
      {word:'frost', sentence:'When all the cold and frost ends.'},
      {word:'fresh', sentence:'When everything is fresh, Clint feels better.'},
      {word:'grump', sentence:'He should not be such a grump.'},
      {word:'mulch', sentence:'Clint has to fix up the mulch bed.'},
      {word:'splash', sentence:'He splashes the bulbs with water.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is all about 3-letter blends. Mark the blends and welded chunks to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'sprung', prompt:'Which letters form the beginning 3-letter blend?', options:['spr','pru','run','ung'], answer:0,
        explain:'You can hear /s/ /p/ /r/ blended together at the start of sprung.'},
      {context:'stress', prompt:'Which letters form the beginning 3-letter blend?', options:['str','tre','res','ess'], answer:0,
        explain:'You can hear /s/ /t/ /r/ blended together at the start of stress.'},
      {context:'scrubs', prompt:'Which letters form the beginning 3-letter blend?', options:['scr','cru','rub','ubs'], answer:0,
        explain:'You can hear /s/ /k/ /r/ blended together at the start of scrubs.'},
      {context:'grasps', prompt:'Which letters form the beginning blend?', options:['gr','ra','as','ps'], answer:0,
        explain:'You can still hear /g/ and /r/ blended together at the start of grasps.'},
      {context:'sprints', prompt:'Which letters form the beginning 3-letter blend?', options:['spr','pri','int','nts'], answer:0,
        explain:'You can hear /s/ /p/ /r/ blended together at the start of sprints.'},
      {context:'frost', prompt:'Which letters form the welded chunk at the end?', options:['fr','ro','ost','st'], answer:2,
        explain:'"Ost" is a closed-syllable exception taught as one chunk — you can hear it stay together in frost.'},
      {context:'fresh', prompt:'Which letters form the ending digraph?', options:['fr','re','es','sh'], answer:3,
        explain:'S and h together make one new sound, /sh/, at the end of fresh.'},
      {context:'mulch', prompt:'Which letters form the ending digraph?', options:['mu','ul','lc','ch'], answer:3,
        explain:'C and h together make one new sound, /ch/, at the end of mulch.'},
      {context:'splash', prompt:'How many sounds are in this word? (spl / a / sh)', options:['3','4','5','6'], answer:2,
        explain:'Count each sound: /s/ /p/ /l/ /a/ /sh/ — the spl blend is 3 sounds, plus the vowel and the sh digraph, for 5 total.'},
      {context:'trash', prompt:'Which letters form the beginning blend?', options:['tr','ra','as','sh'], answer:0,
        explain:'You can still hear /t/ and /r/ blended together at the start of trash.'},
    ]},
];

/* =========================================================
   STORY 5: HELP FROM CHAN — WRS Substep 2.5 B
   ========================================================= */

STORY_PACKS['spring_job'] = {
  id: 'spring_job',
  title: "The Spring Job",
  substep: '2.5B',
  blurb: 'A grumpy spring cleanup day packed with three-letter blends.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_SPRING_JOB,
  paragraphs: STORY_PARAGRAPHS_SPRING_JOB,
  rounds: ROUNDS_SPRING_JOB,
};
STORY_ORDER.push('spring_job');
