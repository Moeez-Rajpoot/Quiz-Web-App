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
let button;
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

  if (Index < quizData.length) {
    Question.innerHTML = 1+Index + ") " + quizData[Index].question;
  
  //Very Important Concept for dynamic button and onclick on them
  quizData[Index].options.forEach( value => {
    button = document.createElement("button");
    button.innerText = value;
    button.classList.add("bt");
    button.value = value;
    Buttons.appendChild(button);
    button.addEventListener("click", (e)=>{
      Selectbtn(e.target);

    });
  })
    
  }

  else{

    while (Buttons.firstChild) {                    //imp concept of removing previous elements 
      Buttons.removeChild(Buttons.firstChild);
    }
    Index=  quizData.length + 10;
    Question.innerHTML =" Your Score is " + Score;
    Question.style.color="white";
    Nextbtn.style.display="block";
    Nextbtn.innerHTML="Play Again 😄";
  }
}

function Selectbtn(selectedAnswer) {
  // Disable all buttons to prevent further clicks
  const allButtons = Buttons.querySelectorAll(".bt");
  allButtons.forEach((button) => {
    button.disabled = true;
    button.cures
  });

  const correctAnswer = quizData[Index].correctAnswer;
  const selectedValue = selectedAnswer.innerText;

  if (selectedValue === correctAnswer) {
    selectedAnswer.classList.add("correct");
    Score++;
  } else {
    selectedAnswer.classList.add("Incorrect");
    // Highlight the correct option
    quizData[Index].options.forEach((value) => {
      if (value === correctAnswer) {
        const correctButton = Buttons.querySelector(`button[value="${value}"]`);
        correctButton.classList.add("correct");
      }
    });
  }
  Nextbtn.style.display="block";
}

Nextbtn.addEventListener("click" ,()=>{

  if (Index > quizData.length) {

    startquiz();
  }
  else{


    Index++;
    Nextbtn.style.display="none";
    while (Buttons.firstChild) {                    //imp concept of removing previous elements 
      Buttons.removeChild(Buttons.firstChild);
    }
    Showquestion();
  

  }
  
 

})
