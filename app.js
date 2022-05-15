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
