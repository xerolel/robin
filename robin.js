const playButton = document.getElementById("play-button");
const dialogueBox = document.getElementById("dialogue-box");
const dialogueText = document.getElementById("dialogue-text");
const choicesDiv = document.getElementById("choices");
const sceneImg = document.getElementById("scene-img");
const spriteRobin = document.getElementById("sprite-robin");
const background = document.getElementById("background");

const imageFiles = ["concert_1.png", "concert_2.png", "concert_3.png",
  "concert_4.png", "concert_5.png", "concert_8.png", "concert1.png", 
  "concert2.png", "dressing.png", "concerned.png", "eyeliner.png", "eyeliner2.png",
  "eyeliner3.png", "eyeliner4.png", "eyeliner5.png", "eyeliner6.png", 
  "hallway_sprite.png", "hallway.png", "concert3.png", "concert4.png",
  "liptsick.png", "night.png", "pigtail_1.png", "pigtail_2.png",
  "pigtail_3.png", "pigtail_4.png", "pigtail_5.png", "pigtail_6.png",
  "pigtail_7.png", "pigtail_8.png", "sewing1.png", "sewing2.png",
  "sewing3.png", "stars.png", "stars2.png", "black.png"
];

const images = {};
imageFiles.forEach(file => {
  images[file] = new Image();
  images[file].src = file;
});

// pkay button 
playButton.addEventListener("click", () => {
  playButton.style.display = "none";
})

let currentLine = 0;
let dialogueLines = [];
let sceneCallback = null;

function advanceDialogue() {
  currentLine++;
  if (currentLine < dialogueLines.length) {
    const line = dialogueLines[currentLine];
    dialogueText.innerHTML = line.text;

    if (line.background !== undefined) {
      background.src = line.background;
      background.style.display = "block";
    } else {
      background.style.display = "none";
    }

    if (line.scene) {
      sceneImg.src = line.scene;
    }
     
    if (line.robin !== undefined) {
      if (line.robin === "") {
        spriteRobin.style.display = "none";
      } else {
        spriteRobin.style.display = "none";
        spriteRobin.src = line.robin;
      }
    } else {
      spriteRobin.style.display = "none";
    }
  } else {
    if (sceneCallback) sceneCallback();
    }
  }

  function showChoices(options) {
    choicesDiv.innerHTML = "";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = opt.text;
      btn.onclick = () => {
        opt.action();
        choicesDiv.innerHTML = "";
      };
      choicesDiv.appendChild(btn);
    });
  }

  function startIntro() {
    spriteRobin.style.display = "none";
    spriteRobin.src = "";
    sceneImg.src = "";
    background.style.display = "none";
    background.src = "";

    dialogueBox.style.display = "block";

    dialogueLine = [
    {text:"*huff, huff, huff*"},
    {text:"You're panting, finally reaching the dressing room, costume tight in your hands."},
    {text:"Being a costume designer is exhausting. Every stitch has to be perfect, every fold precise."},
    {text:"You're nervous, but excited. This is the first time you've worked with an idol. A very famous one, nontheless. You were proud of yourself."},
    {text:"You tell yourself to stay calm, straighten up, and reach for the door."},
    {text:"But fate, as always, had other plans."},
    {text:"You bumped into someone."},
    {text:"You: Ow!, you yelp, falling straight on the tile."},
    {text:"scene: black.png"},
    {text:"A soft voice gasps."},
    {text:"Oh no! I'm so sorry!"},
    {text:"You blink up to see a radiant girl with a concerned look."},
    {text:"You force a polite smile out of professionalism, brushing off your embarrasment. No, no, it's my fault. I wasn't looking where I was going..."},
    {text:"But then you see her face. The pink hair. The dazzling eyes. The very same girl from every billboard you've seen."},
    {text:"Wait... Miss Robin?! Like, the Robin?! Oh my gosh, I love your music!"},
    {text:"She laughs softly, her voice melodic even off stage, and offers her hand."},
    {text:"You're as red as a tomato now. You take her hand, cheeks burning."},
    {text:"See? It's alright. No harm done."},
    {text:"Then she glances at the floor. Oh wait, what's this fabric?"},
    {text:"You freeze. The costume. Torn from the fall."},
    {text:"Um... oh my gosh. This was for you. I think it got ruined when it fell. Um... I... you stammer, looking down at the torn fabric."},
    {text:"You felt your face heat up, your heart pounding. How did you mess up on your first meet that badly?"},
    {text:"Hey, it's okay. Accidents happen, she says, smiling reassuringly. The concert is in a few days, right? Is that plenty of time for you?"},
    {text:"Y-yes! Absolutely! I can.. fix it, you say quickly, clutching the torn fabric tightly against your chest as if you could hide your shame."},
    {text:"Good! she says, beaming. I've always wanted to see how you work. I've tried working with dresses, but could never get it right."},
    {text:"You freeze. You... you sew?"},
    {text:"Sometimes, she giggles, Come on, before I change my mind."},
    {text:"And somehow, you end up following a pop star down the hallway, your heart pouding like a drum."}
    ];

    currentLine = 0;
    dialogueText.innerHTML = dialogyeLines[currentLine].text;
    sceneCallback = startClassTime;
    dialogueBox.onclick = advanceDialogue;
  }

  function startSewingScene() {
    spriteRobin.style.display = "none";
    spriteRobin.src = "";
    sceneImg.src = "";
    background.style.display = "none";
    background.src = "";

    dialogueLines=[
    {text:"As you placed the fabric down, ready to start fixing it, you take a deep breath, trying to calm your nerves."},
    {text:"Robin watches intently, her chin resting in her palms, eyes sparkling with curiosity."},
    {text:"Okay... I'll get started now... you say, fumbling with the needle, you can sit right here if you want to get a better look, you say, gesturing to the chair right next to you."},
    {text:"She nods, sitting down gracefully."},
    {text:"The hum of the sewing machine fills the air, soft and rythmic."},
    {text:"Your hands are so steady, Robin says. You move like you've done this a million times."},
    {text:"You laugh shyly, eyebrows knit in concentration. Kind of. I've been doing it since I was a kid. Sewing feels... peaceful."},
    {text:"She tilts her head. Safe?"},
    {text:"You nod. Yeah, when everything's neat and in place, it's like the world makes sense for a bit."},
    {text:"That's beautiful, she murmurs."},
    {text:"Silence falls again, but it's not awkward. Just soft and warm."},
    {text:"I was expecting you to be more... lively, you say, breaking the silence. Not like you aren't lively of course, but... I'm sorry. I shouldn't have said that."},
    {text:"A moment passes before she responds into a geniune, laugh. Not the kind of one you hear on stage and just now. The kind that seemed so real."},
    {text:"Haha! No, no, it's okay. I get that a lot. People always think I'm super energetic all the time because of my job."},
    {text:"When I'm off stage, I'm like this. Quiet, reserved..."},
    {text:"You turn to look at her, surprised. Oh, really? I would have never guessed."},
    {text:"She smiles at you softly, Yeah. But if I'm being honest... the reason why I was being silent in this particular moment was because I didn't want to distract you."},
    {text:"You laugh with her, Oh I see. I appreciate that a lot."},
    {text:"But, you know, I also was thinking the same about you."},
    {text:"You tilt your head, confused."},
    {text:"You're always so confident in your pieces despite not being the one walking on the runway, she says, eyes sparkling. And everytime you make a public appearance..."},
    {text:"You have such a profound energy about you. It's really inspriring to see."},
    {text:"But here, you're really shy and clumsy. It's very endearing."},
    {text:"You feel your face heat up again, looking down at your hands."},
    {text:"Seriously...? I try not to be like myself when I'm working. I don't want to mess things up, especially when I hardly show myself."},
    {text:"It's difficult when you never make public appearances, and then just show up. I get really nervous, and always want to put on an act."},
    {text:"Then maybe, she says, voice gentle, we're not so different after all."},
  ];


  currentLine = 0;
  dialogueText.innerHTML = dialogueLines[currentLine].text;
  sceneCallback = afterSewingTransition;
  dialogueBox.onclick = advanceDialogue;
}

function PhoneCallScene() {

    spriteRobin.style.display = "none";
    spriteRobin.src = "";
    sceneImg.src = "";
    background.style.display = "none";
    background.src = "";

  dialogueLines=[
    {text:"A couple of days passed after that conversation with Robin. You two had become closer, and you were starting to feel more comfortable around her and yourself."},
    {text:"And after one of my clients introduced me to your music, I became a big fan."},
    {text:"She laughed, dragging the eyeliner pencil across her eyelid."},
    {text:"Seriously... and I don't even listen to music that much."},
    {text:"I feel like, really special hearing that, she said."},
    {text:"It's really cool how you do your makeup yourself. I thought all idols had makeup artists."},
    {text:"She smiles, rubbing the eyeshadow across her lids. I like the idea of doing it myself. It makes me feel more connected to my performances."},
    {text:"Plus, she says with a wink, I get to test my creativity and artistic skills."},
    {text:"If I'm going to be honest, you say, you're so creative."},
    {text:"A few hours before your performance starts, and you're doing everything by yourself."},
    {text:"She looks at the camera, applying her lipstick. Thank you, you're always so sweet."}
  ];
}


// concert
function startConcert(){

    spriteRobin.style.display = "none";
    spriteRobin.src = "";
    sceneImg.src = "";
    background.style.display = "none";
    background.src = "";
    
  dialogueLines=[
    {text:"It was like a dream come true. You were in the front row, watching her perform live."},
    {text: "she was radiant, her voice powerful and clear, every note hitting perfectly."},
    {text: "and in a flash, she brought you on stage."},
    {text: "!"},
    {text: "You were on stage, heart pounding. She smiled at the audience."},
    {text: "This is my costume dessigner. Everyone, give her a big round of applause!"},

    // after concert

    {text:"Afterwards, you and Robin went out for dinner to celebrate, shopping luxurious clothes and accessories, then headed back to her place."},
    {text:"You had such a great time, and then you found yourself watching the stars with her."},
    {text:"That was... amazing, you say, looking up at the sky. I've never had so much fun before."},
    {text:"Agreed, she smiles."},
    // add some more dialogue here
    {text:"If I ever disappear from the stage, promise you’ll still hum my song sometimes."},
  ];
  currentLine=0;
  dialogueText.innerHTML = dialogueLines[currentLine].text;
  sceneCallback=null;
  dialogueBox.onclick=advanceDialogue;
}