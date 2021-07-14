const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Where are the cars of the brand &quot;Ferrari&quot; manufactured?",
        choice1: "<Italy>",
        choice2: "<Romania>",
        choice3: "<Germany>",
        choice4: "<Russia>",
        answer: 1
    },
    {
        question: "Where are the cars of the brand &quot;Ferrari&quot; manufactured?",
        choice1: "<Italy>",
        choice2: "<Romania>",
        choice3: "<Germany>",
        choice4: "<Russia>",
        answer: 1
    },
    {
        question: "Where are the cars of the brand &quot;Ferrari&quot; manufactured?",
        choice1: "<Italy>",
        choice2: "<Romania>",
        choice3: "<Germany>",
        choice4: "<Russia>",
        answer: 1
    },
];