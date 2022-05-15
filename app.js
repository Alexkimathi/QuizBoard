//create quiz class
class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionsIndex === this.questions.length;

    }
}

// question classs//

class Question{
    constructor(text ,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer

    }
    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

//Display Question
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();

    }else{
        //show question

        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" +i, choices[i]);
        }

        showProgress();

    }
}; 

//guess function

function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
}

// show quiz progress

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//show scores

function showScores(){
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2> id="score"> you scored: ${quiz.score} of ${quiz.questions.length} </h2>
    <div class = " quiz-repeat">
    <a href="index.html">Take Quiz Again</a>
    
    </div
    `;
    let quizElement = document.getElementById("quiz")
    quizElement.innerHTML = quizEndHTML;  
}

// create quiz questions

let questions = [
    new Question(
    "What does HTML stand for?",
   [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ], "Hyper Text Markup Language",

    ),

    new Question(
        "Which is a javascript library?",
       [
          "React",
          "Django",
          "laravel",
          "php"
        ], "React",
    
        ),

        new Question(
            "What does css stand for?",
           [
              "Hyper Text Preprocessor",
              "Hyper Text Markup Language",
              "Cascading Style Sheet",
              "Hyper Tool Multi Language"
            ], "Cascading Style Sheet",
        
            ),
];
let quiz = new  Quiz(questions);

//display questions
displayQuestion();


// ADD COUNTDOWN

let time = 5;
let quizTimeInMinutes = time * 60* 60;
quizTime = quizTimeInMinutes / 60;
let counting = document.getElementById("count-down");

function startCountdown(){
    let quizTimer = setInterval(function(){
        if(quizTime <= 0){
            clearInterval(quizTimer);
            showScores();

        }else{
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime /60)% 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;

        }
    }, 1000)
}

startCountdown();