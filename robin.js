const playButton = document.getElementById("play-button");
const dialogueBox = document.getElementById("dialogue-box");
const dialogueText = document.getElementById("dialgoeu-text");
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
  "sewing3.png", "stars.png", "stars2.png"
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
