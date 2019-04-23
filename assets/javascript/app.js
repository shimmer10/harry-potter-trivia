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
        "correctAnswer": "answer-two",
        "correctAnswerMessage": "Harry was placed in Gryffindor!",
        "image": "https://media.giphy.com/media/Tl2AK8HOHj7SU/giphy.gif"
    }

    // jQuery variables

    var questionAnswerSpaceDiv = $("#question-answer-space");
    var startDiv = $("#start-button");
    var timerDiv = $("#timer");

    // variables and arrays
    var questionsArray = [questionOne];
    var currentQuestion;
    var firstAnswer;
    var secondAnswer;
    var thirdAnswer;
    var fourthAnswer;
    var chosenAnswer;
    var time = 15;

    //  This code will run as soon as the page loads.
    window.onload = function () {
        startDiv.on("click", startGame);
    };

    // start game 
    function startGame() {
        // clear start button out of div
        questionAnswerSpaceDiv.empty();

        // set timer attributes on start
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        timerDiv.addClass("appear");
        //build question
        buildQuestions(questionsArray);

    }

    // build questions
    function buildQuestions(questionsArray) {
        $.each(questionsArray, function () {
            currentQuestion = this;
            question = currentQuestion.question;
            firstAnswer = currentQuestion.answerOne;
            secondAnswer = currentQuestion.answerTwo;
            thirdAnswer = currentQuestion.answerThree;
            fourthAnswer = currentQuestion.answerFour;
            correctAsnwer = currentQuestion.correctAnswer;
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

            var intervalId = setInterval(count, 1000)
            // set a timeout
            setTimeout(function () {
                timeUp(intervalId, currentQuestion);
            }, 15000);

            $(document).on('click', '#answer-one', function () {
                chosenAnswer = "answer-one";
                stopTimer(intervalId);
                checkAnswer(chosenAnswer, currentQuestion);
            });
            $(document).on('click', '#answer-two', function () {
                chosenAnswer = "answer-two";
                stopTimer(intervalId);
                checkAnswer(chosenAnswer, currentQuestion)
            });
            $(document).on('click', '#answer-three', function () {
                chosenAnswer = "answer-three";
                stopTimer(intervalId);
                checkAnswer(chosenAnswer, currentQuestion);
            });
            $(document).on('click', '#answer-four', function () {
                chosenAnswer = "answer-four";
                stopTimer(intervalId);
                checkAnswer(chosenAnswer, currentQuestion);
            });
        })
    }

    // display if the answer was correct or wrong
    function checkAnswer(chosenAnswer, currentQuestion) {
        if (chosenAnswer === currentQuestion.correctAnswer) {
            questionSpaceDiv.html("<h1>That is Correct! " + currentQuestion.correctAnswerMessage + "</h1>")
        }
        else {
            questionSpaceDiv.html("<h1>Wrong! " + currentQuestion.correctAnswerMessage + "</h1>")
        }
        var imageDiv = $("<img>", { src: currentQuestion.image });
        answerSpaceDiv.empty();
        answerSpaceDiv.append(imageDiv);
    }

    // time is up
    function timeUp(intervalId, currentQuestion) {
        timerDiv.html("<h2>Time Left: 00:00</h2>");
        clearInterval(intervalId);
        questionSpaceDiv.html("<h1>Time's Up! " + currentQuestion.correctAnswerMessage + "</h1>");
        answerSpaceDiv.empty();
        var pictureDiv = $("<img>", { src: currentQuestion.image });
        answerSpaceDiv.append(pictureDiv);
    }

    // stop the timer when they choose an answer
    function stopTimer(intervalId) {
            clearInterval(intervalId);
            answerTime = timeConverter(time);
            timerDiv.html("<h2>Time Left: " + answerTime + "</h2>");
    }

    // count down functionality
    function count() {

        time--

        currentTime = timeConverter(time);
        timerDiv.html("<h2>Time Left: " + currentTime + "</h2>");
        $("#timer-col").html(timerDiv);
    }


    // convert time
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
})