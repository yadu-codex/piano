🎹 Piano Project (CSS + DOM)
📌 Overview
This project is a simple virtual piano built using HTML, CSS, and JavaScript DOM manipulation. Users can play notes either by pressing keyboard keys or by clicking directly on the piano keys in the UI. It’s a fun way to explore interactive web design and event handling.

⚙️ Features
Play notes by pressing mapped keyboard keys.

Click on piano keys to trigger sounds.

Responsive design styled with CSS for a realistic piano look.

Smooth DOM event handling for both mouse and keyboard input.

🛠️ Technologies Used
HTML – for piano structure

CSS – for styling keys and layout

JavaScript (DOM) – for event listeners and sound playback

🚀 How It Works
Piano keys are created in HTML and styled with CSS.

Each key is mapped to a sound file (e.g., .mp3 or .wav).

JavaScript listens for:

Keyboard events (keydown) to play notes.

Mouse events (click) to play notes.

The DOM updates the UI (e.g., highlighting pressed keys) while the sound plays.

📂 Example Code
html
<div class="piano">
  <div class="key" data-note="C"></div>
  <div class="key" data-note="D"></div>
  <div class="key" data-note="E"></div>
</div>

<script>
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("click", () => playSound(key.dataset.note));
});

document.addEventListener("keydown", e => {
  const key = document.querySelector(`.key[data-note="${e.key.toUpperCase()}"]`);
  if (key) playSound(key.dataset.note);
});

function playSound(note) {
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.play();
}
</script>

<style>
.piano {
  display: flex;
}
.key {
  width: 60px;
  height: 200px;
  border: 1px solid #000;
  background: white;
  cursor: pointer;
}
.key:active {
  background: lightgray;
}
</style>
🎯 Learning Goals
Practice DOM event handling (click, keydown).

Learn how to connect UI elements with audio playback.

Explore CSS styling for interactive components.
