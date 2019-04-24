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
    var questionTwo = {
        "question": "Who is fluffy?",
        "answerOne": "Hermione's cat",
        "answerTwo": "Harry's owl",
        "answerThree": "A three-headed dog",
        "answerFour": "A giant spider",
        "correctAnswer": "answer-three",
        "correctAnswerMessage": "Fluffy is a three-headed dog!",
        "image": "https://media1.tenor.com/images/1ff9e3ab280f3fcd04718f9b630f8546/tenor.gif?itemid=12912138"
    }

    // jQuery variables

    var questionAnswerSpaceDiv = $("#question-answer-space");
    var startDiv = $("#start-button");
    var timerDiv = $("#timer");
    var questionDiv;
    var answersDiv;
    var answerOneDiv;
    var answerTwoDiv;
    var answerThreeDiv;
    var answerFourDiv;

    var imageDiv;
    var pictureDiv;

    // variables and arrays
    var questionsArray = [questionOne, questionTwo];
    var numberOfQuestions = questionsArray.length;
    var currentQuestion = 0;
    var intervalId;
    var firstAnswer;
    var secondAnswer;
    var thirdAnswer;
    var fourthAnswer;
    var chosenAnswer;
    var time = 15;
    var minutes;
    var seconds;

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
        buildQuestions(questionsArray[currentQuestion]);
    }

    // build questions
    function buildQuestions(thisQuestion) {

        question = thisQuestion.question;
        firstAnswer = thisQuestion.answerOne;
        secondAnswer = thisQuestion.answerTwo;
        thirdAnswer = thisQuestion.answerThree;
        fourthAnswer = thisQuestion.answerFour;
        correctAnswer = thisQuestion.correctAnswer;

        answerOneDiv = $("<li>", { id: "answer-one", text: firstAnswer })
        answerTwoDiv = $("<li>", { id: "answer-two", text: secondAnswer })
        answerThreeDiv = $("<li>", { id: "answer-three", text: thirdAnswer })
        answerFourDiv = $("<li>", { id: "answer-four", text: fourthAnswer })

        questionDiv = $("<h1>", { class: "question-space" });
        answersDiv = $("<ol>");

        questionDiv.hide();
        answersDiv.hide();

        questionDiv.html(question).fadeIn();
        questionAnswerSpaceDiv.append(questionDiv);
        answersDiv.append(answerOneDiv).fadeIn();
        answersDiv.append(answerTwoDiv).fadeIn();
        answersDiv.append(answerThreeDiv).fadeIn();
        answersDiv.append(answerFourDiv).fadeIn();
        questionAnswerSpaceDiv.append(answersDiv);


        intervalId = setInterval(count, 1000)
        // set a timeout
        setTimeout(function () {
            timeUp(intervalId, thisQuestion);
        }, 15000);

        $(document).on('click', '#answer-one', function () {
            chosenAnswer = "answer-one";
            stopTimer(intervalId);
            checkAnswer(chosenAnswer, thisQuestion);
            next(questionsArray);
        });
        $(document).on('click', '#answer-two', function () {
            chosenAnswer = "answer-two";
            stopTimer(intervalId);
            checkAnswer(chosenAnswer, thisQuestion);
            next(questionsArray);
        });
        $(document).on('click', '#answer-three', function () {
            chosenAnswer = "answer-three";
            stopTimer(intervalId);
            checkAnswer(chosenAnswer, thisQuestion);
            next(questionsArray);
        });
        $(document).on('click', '#answer-four', function () {
            chosenAnswer = "answer-four";
            stopTimer(intervalId);
            checkAnswer(chosenAnswer, thisQuestion);
            next(questionsArray);
        });
    }

    // display if the answer was correct or wrong
    function checkAnswer(chosenAnswer, question) {
        console.log("chosenAnswer" + chosenAnswer);
        console.log("correctAnswer" + question.correctAnswer);
        if (chosenAnswer === question.correctAnswer) {
            questionDiv.html("<h1>That is Correct! " + question.correctAnswerMessage + "</h1>")
        }
        else {
            questionDiv.html("<h1>Wrong! " + question.correctAnswerMessage + "</h1>")
        }
        imageDiv = $("<img>", { src: question.image });
        answersDiv.empty();
        answersDiv.append(imageDiv);
    }

    function next(questionsArray) {
        time = 15;
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        questionDiv.fadeOut();
        answersDiv.fadeOut();
        //increment the current question by one
        currentQuestion++;

        //if there are no more questions do stuff
        if (currentQuestion < numberOfQuestions) {
            //otherwise show the next question
            buildQuestions(questionsArray[currentQuestion]);
        } else {
            // results
            console.log("in here");
        }
    }

    // time is up
    function timeUp(intervalId, question) {
        timerDiv.html("<h2>Time Left: 00:00</h2>");
        clearInterval(intervalId);
        questionDiv.html("<h1>Time's Up! " + question.correctAnswerMessage + "</h1>");
        answersDiv.empty();
        pictureDiv = $("<img>", { src: question.image });
        answersDiv.append(pictureDiv);
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

        minutes = Math.floor(t / 60);
        seconds = t - (minutes * 60);

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