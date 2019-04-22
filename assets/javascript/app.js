/***********************************************
 * @author Jennifer Grace
 * UNHBootCamp
 * JavaScript file for Harry Potter Trivia
 ***********************************************/


$(document).ready(function () {

    var questionOne = {
        "question": "What house at Hogwarts does Harry belong to?",
        "answerOne": "Hufflepuff",
        "answerTwo": "Gryffindor",
        "answerThree": "Ravenclaw",
        "answerFour": "Slytherin",
        "correctAnswer": "Gryffindor"
    }

    // jQuery variables

    var questionAnswerSpaceDiv = $("#question-answer-space");
    var startDiv = $("#start-button");

    // variables and arrays
    var questionsArray = [questionOne];
    // var currentQuestion;
    var firstAnswer;
    var secondAnswer;
    var thirdAnswer;
    var fourthAnswer;
    // var correctAnswer;
    var time = 15;

    //  This code will run as soon as the page loads.
    window.onload = function () {
        startDiv.on("click", startGame);
    };


    // start game 
    function startGame() {
        // clear start button out of div
        questionAnswerSpaceDiv.empty();

        var intervalId = setInterval(count, 1000)
        buildQuestions(questionsArray);
        setTimeout(function () {
            timeUp(intervalId);
        }, 15000);
    }


    // build questions
    function buildQuestions(questionsArray) {
        $.each(questionsArray, function () {
            var thisQuestion = this;
            question = thisQuestion.question;
            firstAnswer = thisQuestion.answerOne;
            secondAnswer = thisQuestion.answerTwo;
            thirdAnswer = thisQuestion.answerThree;
            fourthAnswer = thisQuestion.answerFour;
            thisCorrectAsnwer = thisQuestion.correctAnswer;
            questionSpaceDiv = $("<div>", { class: "question-space" });
            var questionDiv = $("<h1>", { id: "question", text: question });
            var answersDiv = $("<ol>");
            answerSpaceDiv = $("<div>", { class: "answer-space" });
            var answerOneDiv = $("<li>", { id: "answer-one", text: firstAnswer });
            var answerTwoDiv = $("<li>", { id: "answer-two", text: secondAnswer });
            var answerThreeDiv = $("<li>", { id: "answer-three", text: thirdAnswer });
            var answerFourDiv = $("<li>", { id: "answer-four", text: fourthAnswer });

            questionSpaceDiv.append(questionDiv);
            questionAnswerSpaceDiv.append(questionSpaceDiv);
            answersDiv.append(answerOneDiv);
            answersDiv.append(answerTwoDiv);
            answersDiv.append(answerThreeDiv);
            answersDiv.append(answerFourDiv);
            answerSpaceDiv.append(answersDiv);
            questionAnswerSpaceDiv.append(answerSpaceDiv);
        })
    }

    function count() {

        time--

        currentTime = timeConverter(time);
        var timerDiv = $("<div>", { id: "timer", html: "Time Left: " + currentTime });
        $("#timer-col").html(timerDiv);
    }


    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    function timeUp(intervalId) {
        $("#timer-col").empty();
        clearInterval(intervalId);
        questionAnswerSpaceDiv.html("<h2>Time's Up</h2>");
    }
})