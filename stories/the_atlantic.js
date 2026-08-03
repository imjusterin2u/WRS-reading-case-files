/* ---------------------------------------------------------------
   STORY: The Atlantic  (WRS Substep 3.4AB)
   An ocean under threat, and how people can help — multisyllabic closed syllables.
   Auto-split from the original single-file build — safe to hand-edit.
   To add a NEW story, copy this whole file, rename the three consts
   and the STORY_PACKS key/id, then add a <script src="stories/yourfile.js">
   line in index.html (order in that list = order in the case picker).
   Set type to 'authentic' for real-world (non-controlled) passages — this only
   changes the badge shown on the picker card, not how rounds are built.
--------------------------------------------------------------- */
const KEY_TERMS_THE_ATLANTIC = ['day','may','people','our','away','say','today','ocean','these','need','found','remove'];

const STORY_PARAGRAPHS_THE_ATLANTIC = [
  `The Atlantic is so big and vast! In fact, it is the second biggest ocean in the world. Most of the Atlantic is cold, but some is in the subtropics and hot! The strong Atlantic winds can affect the lands right next to the water. These winds can also be a problem for transatlantic trips.`,
  `The Atlantic is not as it was back in the day. In the past, it was the best spot for fishing, but now there are not as many wild fish in the Atlantic. Fish are a common dish, so they are at risk and may vanish. But, there is a fix for this problem - people need to be strict and not overfish.`,
  `Trash and toxins in the Atlantic are another big problem. The trash and toxins in the water can be found all over the world. Why is this bad? Some Atlantic mammals get very sick from all this rubbish.`,
  `Also, there are fishing nets that get left in the Atlantic waters. These nets can imprison and kill the mammals and then their numbers drop. It is sad, but we can all help to remove the junk from the water. We can collect our nets and put our trash away. What do you say? Let's all plan to help the fantastic Atlantic today!`,
];

const ROUNDS_THE_ATLANTIC = [
  { id:'sequence', tab:'Timeline', title:"Case File 1 — Timeline Reconstruction", icon:'🗺️',
    intro:"Drag the evidence into the correct order to rebuild the Atlantic's story.",
    type:'sequence', points:5,
    sets:[
      { label:'First half — put these in order', events:[
          "The Atlantic is described as the second biggest ocean in the world.",
          "The story explains the Atlantic used to be the best spot for fishing.",
          "Now there are not as many wild fish in the Atlantic.",
          "People are told they need to be strict and not overfish.",
      ]},
      { label:'Second half — put these in order', events:[
          "Trash and toxins in the Atlantic are described as another big problem.",
          "Some Atlantic mammals get sick from the rubbish.",
          "Fishing nets left in the water can imprison and kill mammals.",
          "Readers are asked to help remove the junk from the water.",
      ]},
    ]},
  { id:'inference', tab:'Inference', title:"Case File 2 — Detective Inference", icon:'🧠',
    intro:"Read between the lines to solve these.",
    type:'mc', points:12,
    questions:[
      {context:`"The Atlantic is so big and vast!"`, prompt:'Why does the author mention this at the start?',
        options:['To help the reader understand its scale before describing its problems','To say the Atlantic is not important','To confuse the reader','To describe a small pond'], answer:0,
        explain:'Establishing the ocean\'s huge size first helps the reader appreciate the scale of the problems described afterward.'},
      {context:`"These winds can also be a problem for transatlantic trips."`, prompt:'What does this line suggest?',
        options:['The winds are strong enough to make ocean crossings difficult','The winds never affect ships','Transatlantic trips are always easy','The winds only affect land'], answer:0,
        explain:'Calling the winds "a problem" for crossing trips shows they can genuinely disrupt travel.'},
      {context:`"now there are not as many wild fish in the Atlantic"`, prompt:'Why is this a problem, based on the story?',
        options:['Fish populations are declining, likely from overfishing','There are too many fish now','Fish are no longer needed','The ocean is too small for fish'], answer:0,
        explain:'The story links the decline directly to fishing pressure, right before recommending people "not overfish."'},
      {context:`"people need to be strict and not overfish"`, prompt:'What does this suggest is needed to fix the fishing problem?',
        options:['Stronger self-control about how much fish people catch','More boats to catch fish','Bigger fishing nets','No fishing rules at all'], answer:0,
        explain:'Being "strict" about not overfishing means people need to limit how much they catch.'},
      {context:`"Some Atlantic mammals get very sick from all this rubbish."`, prompt:'Why might trash and toxins be especially harmful to ocean mammals?',
        options:['The text says mammals "get very sick" from the rubbish in the water','Mammals are immune to trash','Trash makes mammals stronger','Mammals eat the trash for food'], answer:0,
        explain:'The text states directly that mammals get sick from the rubbish — trash and toxins are harmful to them.'},
      {context:`"These nets can imprison and kill the mammals and then their numbers drop."`, prompt:'What can you infer from this line?',
        options:['Abandoned fishing nets directly cause mammal deaths and population decline','Nets help protect mammals','Mammal populations are increasing','Nets have no effect on mammals'], answer:0,
        explain:'The cause-and-effect chain — nets imprison/kill mammals, then numbers drop — shows nets are a direct cause of decline.'},
      {context:`"It is sad, but we can all help to remove the junk from the water."`, prompt:'Why does the author call it "sad" that nets can trap and kill mammals?',
        options:['To show genuine concern for the harm being caused to ocean life','To end the story on a random note','Because nets are expensive','Because fishing is illegal'], answer:0,
        explain:'Calling it "sad" reflects real concern for how this harm affects ocean animals.'},
      {context:`"We can collect our nets and put our trash away."`, prompt:'What solution does the story offer for the trash and net problem?',
        options:['People collecting their nets and putting trash away instead of leaving it in the ocean','Banning all fishing forever','Building walls around the ocean','Ignoring the problem'], answer:0,
        explain:'The story offers a simple, practical solution: collecting nets and properly disposing of trash.'},
      {context:'Think about the whole story.', prompt:'What is the overall theme of this story?',
        options:['The ocean faces real problems, but people\'s actions can help fix them','The ocean cannot be helped','Fishing should be banned entirely','The Atlantic has no problems'], answer:0,
        explain:'The story describes real problems (overfishing, trash, nets) alongside real solutions people can take.'},
      {context:'"Let\'s all plan to help the fantastic Atlantic today!"', prompt:'Why does the story end this way?',
        options:['To call the reader to take action, ending on a hopeful and motivating note','To end the story sadly','To ask for money','To describe more problems'], answer:0,
        explain:'This closing call to action leaves the reader motivated to help rather than just informed about problems.'},
    ]},
  { id:'vocab', tab:'Vocab', title:"Case File 3 — Vocabulary Clues", icon:'🔍',
    intro:"Every good detective reads for clues hidden in context. Figure out what each word means the way it's used in the story.",
    type:'mc', points:10,
    questions:[
      {context:`"The Atlantic is so big and vast!"`, prompt:'What does vast mean here?',
        options:['Extremely large in area','Extremely small','Average-sized','Narrow'], answer:0,
        explain:'Vast means extremely large — fitting a description right after calling the Atlantic "so big."'},
      {context:`"some is in the subtropics and hot!"`, prompt:'What does subtropics mean here?',
        options:['Regions near the tropics with warm climates','The coldest regions on Earth','Mountain regions only','Desert regions only'], answer:0,
        explain:'Subtropics refers to warm regions near the tropics, explaining why some of the Atlantic is hot.'},
      {context:`"a problem for transatlantic trips"`, prompt:'What does transatlantic mean here?',
        options:['Crossing or spanning the Atlantic Ocean','Staying within one country','Underwater only','Only by air'], answer:0,
        explain:'Transatlantic describes travel that crosses the Atlantic Ocean, like a ship voyage.'},
      {context:`"they are at risk and may vanish"`, prompt:'What does vanish mean here?',
        options:['To disappear completely','To grow larger','To multiply quickly','To change color'], answer:0,
        explain:'Vanish means to disappear entirely — the risk facing fish populations if overfishing continues.'},
      {context:`"people need to be strict and not overfish"`, prompt:'What does overfish mean here?',
        options:['To catch too many fish, more than is sustainable','To protect fish','To study fish','To release fish'], answer:0,
        explain:'Overfishing means catching more fish than the population can sustain.'},
      {context:`"These nets can imprison and kill the mammals"`, prompt:'What does imprison mean here?',
        options:['To trap or hold captive','To free','To feed','To count'], answer:0,
        explain:'Imprison means to trap something, holding it captive — exactly what nets do to trapped mammals.'},
      {context:`"Some Atlantic mammals get very sick"`, prompt:'What does mammals mean here?',
        options:['Warm-blooded animals with fur or hair, like dolphins or whales','Fish with scales','Plants','Rocks'], answer:0,
        explain:'Mammals are warm-blooded animals like dolphins and whales that live in the Atlantic.'},
      {context:`"get very sick from all this rubbish"`, prompt:'What does rubbish mean here?',
        options:['Trash or garbage','Clean fresh water','Healthy food','Safe shelter'], answer:0,
        explain:'Rubbish is another word for trash or garbage, harmful to ocean mammals.'},
      {context:`"help the fantastic Atlantic today!"`, prompt:'What does fantastic mean here?',
        options:['Wonderful, amazing','Terrible','Boring','Average'], answer:0,
        explain:'Fantastic means wonderful — the author\'s positive feeling toward the Atlantic despite its problems.'},
      {context:`"people need to be strict and not overfish"`, prompt:'What does strict mean here?',
        options:['Firm and careful about following rules','Relaxed and careless','Confused','Generous'], answer:0,
        explain:'Being strict means being firm about following limits, here about how much fish to catch.'},
    ]},
  { id:'spelling', tab:'Spelling', title:"Case File 4 — Spelling Forensics", icon:'✏️',
    intro:"A detective's notes have to be exact. Listen to each word and spell it correctly to file it as evidence.",
    type:'spell', points:15,
    questions:[
      {word:'Atlantic', sentence:'The Atlantic is so big and vast.'},
      {word:'subtropics', sentence:'Some of the Atlantic is in the subtropics.'},
      {word:'vanish', sentence:'The fish are at risk and may vanish.'},
      {word:'overfish', sentence:'People need to be strict and not overfish.'},
      {word:'mammals', sentence:'Some Atlantic mammals get very sick.'},
      {word:'imprison', sentence:'These nets can imprison the mammals.'},
      {word:'fantastic', sentence:'Let\'s help the fantastic Atlantic today.'},
      {word:'rubbish', sentence:'Mammals get sick from all this rubbish.'},
      {word:'remove', sentence:'We can all help to remove the junk.'},
      {word:'strict', sentence:'People need to be strict and not overfish.'},
    ]},
  { id:'structure', tab:'Structure', title:"Case File 5 — Structure Analysis", icon:'🧩',
    intro:"This story is full of welded chunks and multisyllabic words. Mark them to crack the code.",
    type:'mc', points:10,
    questions:[
      {context:'Atlantic', prompt:'Which letters form the welded chunk in this word?', options:['at','an','ic','la'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in Atlantic.'},
      {context:'vanish', prompt:'Which letters form the welded chunk in this word?', options:['va','an','is','sh'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in vanish.'},
      {context:'mammals', prompt:'Which letters form the welded chunk in this word?', options:['ma','am','al','ls'], answer:1,
        explain:'"Am" is a welded sound taught as one unit — you can hear it stay together in mammals.'},
      {context:'fantastic', prompt:'Which letters form the welded chunk in this word?', options:['fa','an','ta','ic'], answer:1,
        explain:'"An" is a welded sound taught as one unit — you can hear it stay together in fantastic.'},
      {context:'vanish', prompt:'Which letters form the ending digraph?', options:['va','ni','is','sh'], answer:3,
        explain:'S and h together make one new sound, /sh/, at the end of vanish.'},
      {context:'overfish', prompt:'Which letters form the ending digraph?', options:['ov','er','fi','sh'], answer:3,
        explain:'S and h together make one new sound, /sh/, at the end of overfish.'},
      {context:'rubbish', prompt:'Which letters form the ending digraph?', options:['ru','bi','sh','bb'], answer:2,
        explain:'S and h together make one new sound, /sh/, at the end of rubbish.'},
      {context:'subtropics', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Subtropics breaks into three syllable chunks: sub-trop-ics.'},
      {context:'imprison', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:1,
        explain:'Imprison breaks into three syllable chunks: im-pris-on.'},
      {context:'transatlantic', prompt:'How many syllables does this word have?', options:['2','3','4','5'], answer:2,
        explain:'Transatlantic breaks into four syllable chunks: trans-at-lan-tic.'},
    ]},
];

/* =========================================================
   STORY 14: THE FOSSIL EXHIBIT — WRS Substep 3.4 B
   ========================================================= */

STORY_PACKS['the_atlantic'] = {
  id: 'the_atlantic',
  title: "The Atlantic",
  substep: '3.4AB',
  blurb: 'An ocean under threat, and how people can help — multisyllabic closed syllables.',
  type: 'controlled', // 'controlled' (WRS-decodable) or 'authentic' (real-world text)
  keyTerms: KEY_TERMS_THE_ATLANTIC,
  paragraphs: STORY_PARAGRAPHS_THE_ATLANTIC,
  rounds: ROUNDS_THE_ATLANTIC,
};
STORY_ORDER.push('the_atlantic');
