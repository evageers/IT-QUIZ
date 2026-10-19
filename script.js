const questions = [
  {
    question: "Was ist ein Algorithmus?",
    answers: [
      "Eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems",
      "Ein Computervirus",
      "Ein Speichermedium"
    ],
    correct: 0
  },
  {
    question: "Wofür steht HTML?",
    answers: [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Was ist eine Variable?",
    answers: [
      "Ein benannter Speicherplatz für einen Wert",
      "Ein Fehler im Programm",
        "Ein Bildschirmformat"
    ],
    correct: 0
  },
  {
    question: "Welcher Datentyp passt zu 42?",
    answers: [
      "Integer (Ganzzahl)",
      "String (Text)",
      "Boolean"
    ],
    correct: 0
  },
  {
    question: "Was macht eine Schleife?",
    answers: [
      "Sie wiederholt Code mehrfach",
      "Sie löscht Variablen",
      "Sie startet den Computer neu"
    ],
    correct: 0
  },
  {
    question: "Was ist ein Bug?",
    answers: [
      "Ein Fehler im Programm",
      "Ein neues Feature",
      "Eine Programmiersprache"
    ],
    correct: 0
  },
  {
    question: "Wofür wird Git benutzt?",
    answers: [
      "Versionsverwaltung für Code",
      "Bilder bearbeiten",
      "Webseiten ansehen"
    ],
    correct: 0
  },
  {
    question: "Was beschreibt CSS?",
    answers: [
      "Das Aussehen einer Webseite",
      "Die Datenbank",
      "Die Internetverbindung"
    ],
    correct: 0
  },
  {
    question: "Was ist Visual Studio Code?",
    answers: [
      "Eine Entwicklungsumgebung (IDE)",
      "Ein Browser",
      "Ein Betriebssystem"
    ],
    correct: 0
  },
  {
    question: "Welcher Wert ist ein Boolean?",
    answers: [
      "true oder false",
      '"Hallo"',
      "3,14"
      ],
    correct: 0
  }
];

let current = 0;
let score = 0;

const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[current];
  progressEl.textContent = "Frage " + (current + 1) + " von " + questions.length;
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  nextBtn.textContent = "Weiter";

  const options = q.answers.map(function (text, index) {
    return { text: text, isCorrect: index === q.correct };
  });
  options.sort(function () {
    return Math.random() - 0.5;
  });

  options.forEach(function (option) {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "answer";
    button.dataset.correct = option.isCorrect;
    button.addEventListener("click", function () {
      checkAnswer(button);
    });
    answersEl.appendChild(button);
  });
}

function checkAnswer(clickedButton) {
  const allButtons = document.querySelectorAll(".answer");
  allButtons.forEach(function (button) {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  if (clickedButton.dataset.correct === "true") {
    score++;
  } else {
    clickedButton.classList.add("wrong");
  }

  nextBtn.style.display = "block";
  if (current === questions.length - 1) {
    nextBtn.textContent = "Ergebnis zeigen";
  }
}

nextBtn.addEventListener("click", function () {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
      }
});

function showResult() {
  progressEl.textContent = "";
  questionEl.textContent = "Fertig!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = "Du hast " + score + " von " + questions.length + " Punkten.";
}

showQuestion();