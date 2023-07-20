const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
   {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Mercury", "Jupiter"],
      correctAnswer: "Mars",
    },
     {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
      correctAnswer: "William Shakespeare",
    },
     {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
   {
      question: "Which programming language is often used for web development and runs in the browser?",
      options: ["Java", "Python", "JavaScript", "C++"],
      correctAnswer: "JavaScript",
    }
  ]
  
const Question = document.getElementById("question");
const Buttons =  document.getElementById("row");
const Nextbtn = document.getElementById("next");

let Index =0;
let Score=0;

startquiz();
function startquiz() {
  Index = 0;
  Score = 0;
  Nextbtn.innerText = "Next";
  Showquestion();
  
}


function Showquestion(params) {

  Question.innerHTML = 1+Index + ") " + quizData[Index].question;
  
}