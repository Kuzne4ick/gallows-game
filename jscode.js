const wordsList = [
  "elaborate",
  "technology",
  "beautiful",
  "cracker",
  "computer",
  "taxi",
  "building",
];

const wordSelect = wordsList[Math.floor(Math.random() * wordsList.length)];

const button = document.querySelector("#submit");
let guess;
let wordField = document.querySelector("#word");
let message = document.querySelector("#message");
let attemptsLimitNotifier = document.querySelector("#attempts");
let winLose = document.querySelector("#victory-lose-notify");
let answerArray = [];
let counter = 1;
let img = document.querySelector(".image");
let attemptsLimit = 5;
attemptsLimitNotifier.textContent = "Attempts remaining: " + attemptsLimit;
console.log(answerArray);
let remainLetters = wordSelect.length;
for (let i = 0; i < wordSelect.length; i++) {
  answerArray[i] = "_";
}
wordField.textContent = answerArray.join(" ");

button.addEventListener(
  "click",
  function gallows() {
    attemptsLimitNotifier.textContent = "Attempts remaining: " + attemptsLimit;
    guess = document.querySelector("#guess").value;
    console.log("attempts", attemptsLimit);
    console.log(guess, "guess");
    console.log("remain letters", remainLetters);

    let guessLower = guess.toLowerCase();
    if (guess == "") {
      message.textContent = "You didn't enter anything";
      return;
    } else if (guessLower.length > 1) {
      message.textContent = "You entered more than one letter!";
    } else {
      message.textContent = "";
      for (let j = 0; j < wordSelect.length; j++) {
        if (wordSelect[j] == guessLower) {
          console.log("wordSelect[j]", wordSelect[j]);
          console.log("guessLower", guessLower);
          console.log("result ", wordSelect[j] == guessLower);
          if (answerArray[j] != guessLower) {
            remainLetters--;
          }
          answerArray[j] = guessLower;
        }
      }
      wordField.textContent = answerArray.join(" ");

      if (wordSelect.includes(guessLower) == false) {
        attemptsLimit = attemptsLimit - 1;
        counter += 1;
        attemptsLimitNotifier.textContent =
          "Attempts remaining: " + attemptsLimit;
        img.src = `image${counter}.jpg`;
      }
    }
    if (remainLetters == 0) {
      winLose.textContent = "Congrats! You guessed the word " + wordSelect;
      this.removeEventListener("click", gallows);
    } else if (attemptsLimit == 0) {
      winLose.textContent = "You lost! Good luck next time!";
      button.disabled = true;
      this.removeEventListener("click", gallows);
    }
  }
  // console.log(document.querySelector("#guess").value);
);

// while (remainLetters > 0 && attemptsLimit != 0 && answerArray.includes("_")) {

