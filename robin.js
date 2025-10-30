const playButton = document.getElementById("play-button");
const dialogueBox = document.getElementById("dialogue-box");
const dialogueText = document.getElementById("dialogue-text");
const choicesDiv = document.getElementById("choices");
const sceneImg = document.getElementById("scene-img");
const spriteRobin = document.getElementById("sprite-robin");
const background = document.getElementById("background");

let currentLine = 0;
let dialogueLines = [];
let sceneCallback = null;

function fadeTo(src) {
  background.style.opacity = 0;
  setTimeout(() => {
    background.src = src;
    background.style.opacity = 1;
  }, 400);
}


function advanceDialogue() {
  currentLine++;
  if (currentLine < dialogueLines.length) {
    const line = dialogueLines[currentLine];
    dialogueText.innerHTML = line.text;

    if (line.background) {
      if (line.text.includes("You bumped into someone.")) {
        fadeTo(line.background);        
      } else {
        background.src = line.background;
      }
    }

    if (line.Robin) {
      spriteRobin.src = line.Robin;
      spriteRobin.style.display = "block";
    } else spriteRobin.style.display = "none";

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
  dialogueLines = [
    {text:"*huff, huff, huff*", background: "black.png"},
    {text:"You're panting, finally reaching the dressing room, costume tight in your hands", background: "1.png"},
    {text:"Being a costume designer is exhausting. Every stitch has to be perfect, every fold precise.", background: "2.png"},
    {text:"You're nervous, but excited. This is the first time you've worked with an idol. A very famous one, nontheless. You were proud of yourself.", background: "2.png"},
    {text:"You tell yourself to stay calm, straighten up, and reach for the door.", background: "3.png"},
    {text:"But fate, as always, had other plans.", background: "black.png"},
    {text:"You bumped into someone.", background: "black.png"},
    {text:"You: Ow!, you yelp, falling straight on the tile.", background: "4.png"},
    {text: "...", background: "5.png"},
    {text:"A soft voice gasps.", background: "6.png"},
    {text:"Oh no! I'm so sorry!", background: "black.png"},
    {text:"You blink up to see a radiant girl with a concerned look.", background: "7.png"},
    {text:"You force a polite smile out of professionalism, brushing off your embarrasment. No, no, it's my fault. I wasn't looking where I was going...", Robin: "8.png"},
    {text:"But then you see her face. The pink hair. The dazzling eyes. The very same girl from every magazine you've seen.", background: "9.png"},
    {text:"Wait... Miss Robin?! Like, the Robin?! Oh my gosh, I love your music!", background: "11.png"},
    {text:"She laughs softly, her voice melodic even off stage.", background:"13.png" },
    {text: "and offers her hand.", background: "14.png"},
    {text:"You're as red as a tomato now.", background: "15.png"},
    {text: "You take her hand, cheeks burning.", background: "16.png"},
    {text:"See? It's alright. No harm done.", Robin: "pigtail_5.png", background: "hallway_sprite.png"},
    {text:"Then she glances at the floor.", Robin: "pigtail_2.png", background: "hallway_sprite.png"},
    {text:"You freeze. The costume. Torn from the fall.", Robin: "pigtail_2.png", background: "hallway_sprite.png"},
    {text:"Um... oh my gosh. This was for you. I think it got ruined when it fell. Um... I... you stammer, looking down at the torn fabric.", Robin: "pigtail_2.png", background: "hallway_sprite.png"},
    {text:"You felt your face heat up, your heart pounding. How did you mess up on your first meet that badly?", background: "black.png"},
    {text:"Hey, it's okay. Accidents happen, she says, smiling reassuringly. The concert is in a few days, right? Is that plenty of time for you?", Robin: "pigtail_8.png", background: "hallway_sprite.png"},
    {text:"Y-yes! Absolutely! I can.. fix it, you say quickly, clutching the torn fabric tightly against your chest as if you could hide your shame.", Robin: "pigtail_4.png", background: "hallway_sprite.png"},
    {text:"Good! she says, beaming. I've always wanted to see how you work. I've tried working with dresses, but could never get it right.", Robin: "pigtail_6.png" , background:"hallway_sprite.png"},
    {text:"You freeze. You... you sew?", Robin: "pigtail_4.png", background:"hallway_sprite.png" },
    {text:"Sometimes, she giggles, Come on, before I change my mind.", Robin: "pigtail_3.png", background: "hallway_sprite.png"},
    {text:"And somehow, you end up following a pop star down the hallway, your heart pouding like a drum.", background: "black.png"}
  ];
  currentLine = 0;
  dialogueText.innerHTML = dialogueLines[currentLine].text;
  sceneCallback = startSewingScene;
  dialogueBox.onclick = advanceDialogue;
}

function startSewingScene() {
  dialogueLines = [
    {text:"As you placed the fabric down, ready to start fixing it, you take a deep breath, trying to calm your nerves.", background: "17.png"},
    {text:"Okay... I'll get started now... you say, fumbling with the needle.", background: "18.png"},
    {text:"The hum of the sewing machine fills the air, soft and rythmic.", Robin: "17.png"},
    {text:"Your hands are so steady, Robin says. You move like you've done this a million times.", Robin: "21.png"},
    {text:"You laugh shyly, eyebrows knit in concentration. Kind of. I've been doing it since I was a kid. Sewing feels... peaceful.", Robin:"19.png"},
    {text:"Safe?", Robin: "20.png"},
    {text:"You nod. Yeah, when everything's neat and in place, it's like the world makes sense for a bit.", Robin: "22.png"},
    {text:"That's beautiful, she murmurs.", Robin: "23.png"},
    {text:"Silence falls again, but it's not awkward. Just soft and warm, and it stayed that way once you finished.", background: "24.png"},
  ];
  currentLine = 0;
  dialogueText.innerHTML = dialogueLines[currentLine].text;
  sceneCallback = startPhoneCallScene;
  dialogueBox.onclick = advanceDialogue;
}

function startPhoneCallScene() {
 dialogueLines = [
    {text:"A couple of days passed after that conversation with Robin. You two had become closer, and you were starting to feel more comfortable around her and yourself.", background: "black.png"},
    {text:"And after one of my clients introduced me to your music, I became a big fan.", background: "25.png"},
    {text:"She laughed, dragging the brush across her eyelid.", Robin: "26.png"},
    {text:"Seriously... and I don't even listen to music that much.", Robin: "29.png"},
    {text:"I feel like, really special hearing that, she said.", Robin: "28.png"},
    {text:"It's really cool how you do your makeup yourself. I thought all idols had makeup artists.", Robin:"29.png"},
    {text:"She smiles. I like the idea of doing it myself. It makes me feel more connected to my performances.", Robin:"30.png"},
    {text:"Plus, she says, I get to test my creativity and artistic skills.", Robin:"31.png"},
    {text:"If I'm going to be honest, you say, you're so creative.", Robin:"29.png" },
    {text:"A few hours before your performance starts, and you're doing everything by yourself.", Robin:"25.png"},
    {text:"...", Robin:"25.png"},
    {text:"Thank you, you're always so sweet.", Robin:"25.png"}
  ];
  currentLine = 0;
  dialogueText.innerHTML = dialogueLines[currentLine].text;
  sceneCallback = startConcert;
  dialogueBox.onclick = advanceDialogue;
}


function startConcert() {
  dialogueLines = [
    {text:"And before I knew it, the concert began.", background:"black.png"},
    {text:"It was like a dream come true. You were in the front row, watching her perform live.", Robin:"concert1.png"},
    {text: "She was radiant, her voice powerful and clear, every note hitting perfectly.", Robin:"concert1.png"},
    {text: "and in a flash, she brought you on stage.", Robin:"concert2.png"},
    {text: "!", background:"black.png"},
    {text: "You were on stage, heart pounding. She smiled at the audience.", Robin: "concert3.png"},
    {text: "This is my costume dessigner. Everyone, give her a big round of applause!", Robin:"concert4.png"},
    // after concert

    {text:"Afterwards, you and Robin went backstage.", background: "black.png"},
    {text:"It's so quiet out here compared to the stage, you whisper.", background: "concert_3"},
    {text:"She tilts her head, 'Yeah... it's nice to just breathe sometimes.'", Robin: "concert_3.png"},
    {text:"You looked radiant out there... and I've never had so much fun before on stage.", Robin: "concert_5.png"},
    {text:"She chuckles softly, Agreed.", Robin: "concert_3.png"},
    {text:"I like nights like this.", background: "concert_7.png"},
    {text:"No stage lights, no cameras in my face", Robin: "concert_5.png"},
    {text:"I can be me", Robin: "concert_5.png"},
    {text:"I was expecting you to be more... lively, you say, breaking the silence. Not like you aren't lively of course, but... I'm sorry. I shouldn't have said that.", Robin: "sewing3.png"},
    {text:"A moment passes before she responds into a geniune, laugh. Not the kind of one you hear on stage and just now. The kind that seemed so real.", Robin: "sewing1.png"},
    {text:"Haha! No, no, it's okay. I get that a lot. People always think I'm super energetic all the time because of my job.", Robin: "sewing3.png"},
    {text:"When I'm off stage, I'm like this. Quiet, reserved...", Robin: "sewing3.png"},
    {text:"You turn to look at her, surprised. Oh, really? I would have never guessed.", Robin: "sewing3.png"},
    {text:"She smiles at you softly, Yeah. But if I'm being honest... the reason why I was being silent in this particular moment was because I didn't want to distract you.", Robin: "sewing3.png"},
    {text:"You laugh with her, Oh I see. I appreciate that a lot.", Robin: "sewing3.png"},
    {text:"But, you know, I also was thinking the same about you.", Robin: "sewing3.png"},
    {text:"You tilt your head, confused.", Robin: "sewing3.png"},
    {text:"You're always so confident in your pieces despite not being the one walking on the runway, she says, eyes sparkling. And everytime you make a public appearance...", Robin: "sewing3.png"},
    {text:"You have such a profound energy about you. It's really inspriring to see.", Robin: "sewing3.png"},
    {text:"But here, you're really shy and clumsy. It's very endearing.", Robin: "sewing3.png"},
    {text:"You feel your face heat up again, and lay down, admiring the stars to distract yourself.", Robin: "black.png"},
    {text:"Seriously...? I try not to be like myself when I'm working. I don't want to mess things up, especially when I hardly show myself.", Robin: "32.png"},
    {text:"It's difficult when you never make public appearances, and then just show up. I get really nervous, and always want to put on an act.", Robin: "34.png"},
    {text:"Then maybe, she says, voice gentle, we're not so different after all.", Robin: "35.png"},
    {text:"Which is a good thing.", Robin: "36.png"},
    {text:"...", Robin: "stars1.png"},
    {text:"If I ever disappear from the stage, promise you’ll still hum my song sometimes.", Robin: "stars2.png"},
  ];
  currentLine = 0;
  dialogueText.innerHTML = dialogueLines[currentLine].text;
  sceneCallback = null;
  dialogueBox.onclick = advanceDialogue;
}

// start button
playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  startIntro();
});
