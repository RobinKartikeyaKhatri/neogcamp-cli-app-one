const readlineSync = require("readline-sync");

const userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " DO YOU KNOW Robin?");

let score = 0;

function play(question, answer) {
  const userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!");
    score++;
  } else {
    console.log("You are wrong!");
    score--;
  }

  console.log("Your score is: " + score);
}

const questionOne = {
  question: "Where do I live? ",
  answer: "Barmer",
};

const questionTwo = {
  question: "My superhero would be? ",
  answer: "Superman",
};

const questionThree = {
  question: "Where do I work? ",
  answer: "Halliburton",
};

const questionFour = {
  question: "Who is my favorite teacher? ",
  answer: "Tanay Pratap",
};

const questionFive = {
  question: "What is my favorite food? ",
  answer: "Garibaldi",
};

const questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your final score is: " + score);
