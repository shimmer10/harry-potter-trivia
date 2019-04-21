/***********************************************
 * @author Jennifer Grace
 * UNHBootCamp
 * JavaScript file for Harry Potter Trivia
 ***********************************************/

$(document).ready(function () {

    var questionOne = {
        "question": "question array",
        "answerOne": "answer array",
        "answerTwo": "answer array2",
        "answerThree": "answer array3",
        "answerFour:": "answer array4",
        "correctAnswer": "answer correct one"
    }

    // jQuery variables
    var answersSpaceDiv = $("#answers-space");
    var questionSpaceDiv = $("#question-space");
    var questonAnswerSpaceDive = $("#question-answer-space");

    // variables and arrays
    var questionsArray = [questionOne];
    // var currentQuestion;
    var firstAnswer;
    var secondAnswer;
    var thirdAnswer;
    var fourthAnswer;
    var correctAnswer;

    console.log("here")
    buildQuestions(questionsArray);

    // build questions
    function buildQuestions(questionsArray) {
        $.each(questionsArray, function () {
            console.log("this" + this);
            var thisQuestion = this;
            question = thisQuestion.question;
            firstAnswer = thisQuestion.answerOne;
            secondAnswer = thisQuestion.answerTwo;
            thirdAnswer = thisQuestion.answerThree;
            fourthAnswer = thisQuestion.answerFour;
            thisCorrectAsnwer = thisQuestion.correctAnswer;
            console.log("question " + thisQuestion.question)
            var questionDiv = $("<div/>", { id: "question", text: question });
            var answerOneDiv = $("<div/>", { id: "answer-one", text: firstAnswer });
            var answerTwoDiv = $("<div/>", { id: "answer-two", text: secondAnswer });
            var answerThreeDiv = $("<div/>", { id: "answer-three", text: thirdAnswer });
            var answerFourDiv = $("<div/>", { id: "answer-four", text: fourthAnswer });

            questonAnswerSpaceDive.append(questionDiv);
            questonAnswerSpaceDive.append(answerOneDiv);
            questonAnswerSpaceDive.append(answerTwoDiv);
            questonAnswerSpaceDive.append(answerThreeDiv);
            questonAnswerSpaceDive.append(answerFourDiv);

        })
    }
})