const wordsList = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "компьютер",
  "кровать",
  "квартира",
];

const wordSelect = wordsList[Math.floor(Math.random() * wordsList.length)];
console.log(wordSelect);
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
attemptsLimitNotifier.textContent = "Осталось попыток: " + attemptsLimit;
console.log(answerArray);
let remainLetters = wordSelect.length;
for (let i = 0; i < wordSelect.length; i++) {
  answerArray[i] = "_";
}
wordField.textContent = answerArray.join(" ");

button.addEventListener(
  "click",
  function gallows() {
    attemptsLimitNotifier.textContent = "Осталось попыток: " + attemptsLimit;
    guess = document.querySelector("#guess").value;
    console.log("attempts", attemptsLimit);
    console.log(guess, "guess");
    console.log("remain letters", remainLetters);

    let guessLower = guess.toLowerCase();
    if (guess == "") {
      message.textContent = "вы ничего не ввели";
      return;
    } else if (guessLower.length > 1) {
      message.textContent = "Вы ввели больше одной буквы!";
    } else {
      message.textContent = "";
      for (let j = 0; j < wordSelect.length; j++) {
        if (wordSelect[j] == guessLower) {
          console.log("wordSelect[j]", wordSelect[j]);
          console.log("guessLower", guessLower);
          console.log("result ", wordSelect[j] == guessLower);
          answerArray[j] = guessLower;
          if (answerArray.includes("_") && answerArray[j] == guessLower) {
            remainLetters--;

            continue;
          }
        }
      }
      wordField.textContent = answerArray.join(" ");

      if (wordSelect.includes(guessLower) == false) {
        attemptsLimit = attemptsLimit - 1;
        counter += 1;
        attemptsLimitNotifier.textContent =
          "Осталось попыток: " + attemptsLimit;
        img.src = `image${counter}.jpg`;
      }
    }
    if (remainLetters == 1) {
      winLose.textContent = "Победа! Вы угадали слово " + wordSelect;
    } else if (attemptsLimit == 0) {
      winLose.textContent = "Вы проиграли!";
      button.disabled = true;
      this.removeEventListener("click", gallows);
    }
  }
  // console.log(document.querySelector("#guess").value);
);

// while (remainLetters > 0 && attemptsLimit != 0 && answerArray.includes("_")) {
