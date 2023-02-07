const elementGuess = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  guess = e.results[0][0].transcript.replace(".", "");
  yourGuessOnScreen(guess);
  checksValidValue(guess);
  console.log(e);
}

function yourGuessOnScreen(guess) {
  elementGuess.innerHTML = `
    <div>Você disse</div>
    <span class="box">${guess}</span>
    `;
}

recognition.addEventListener("end", () => recognition.start());
