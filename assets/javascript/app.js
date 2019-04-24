/***********************************************
 * @author Jennifer Grace
 * UNHBootCamp
 * JavaScript file for Harry Potter Trivia
 ***********************************************/


$(document).ready(function () {

    var questionsArray = {
        questions: [
            questionOne = {
                "question": "What house at Hogwarts does Harry belong to?",
                "answerOne": "Hufflepuff",
                "answerTwo": "Gryffindor",
                "answerThree": "Ravenclaw",
                "answerFour": "Slytherin",
                "correctAnswer": "answer-two",
                "correctAnswerMessage": "Harry was placed in Gryffindor!",
                "image": "https://media.giphy.com/media/Tl2AK8HOHj7SU/giphy.gif"
            },
            questionTwo = {
                "question": "Who is fluffy?",
                "answerOne": "Hermione's cat",
                "answerTwo": "Harry's owl",
                "answerThree": "A three-headed dog",
                "answerFour": "A giant spider",
                "correctAnswer": "answer-three",
                "correctAnswerMessage": "Fluffy is a three-headed dog!",
                "image": "https://media1.tenor.com/images/1ff9e3ab280f3fcd04718f9b630f8546/tenor.gif?itemid=12912138"
            }
        ]
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
    // var questionsArray = [questionOne, questionTwo];
    console.log("questionsArray length: " + questionsArray.questions.length)
    var numberOfQuestions = questionsArray.questions.length;
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
    var t;
    var nextCount = false;
    var lastQuestionCount = false;
    var correct = 0;
    var wrong = 0;

    //  This code will run as soon as the page loads.
    window.onload = function () {
        startDiv.on("click", startGame);
    };

    $(document).on('click', '#answer-one', function () {
        chosenAnswer = "answer-one";
        checkAnswer(intervalId, t, chosenAnswer, questionsArray);
    });
    $(document).on('click', '#answer-two', function () {
        chosenAnswer = "answer-two";
        checkAnswer(intervalId, t, chosenAnswer, questionsArray);
    });
    $(document).on('click', '#answer-three', function () {
        chosenAnswer = "answer-three";
        checkAnswer(intervalId, t, chosenAnswer, questionsArray);
    });
    $(document).on('click', '#answer-four', function () {
        chosenAnswer = "answer-four";
        checkAnswer(intervalId, t, chosenAnswer, questionsArray);
    });

    // start game 
    function startGame() {
        // clear start button out of div
        questionAnswerSpaceDiv.empty();

        // set timer attributes on start
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        timerDiv.addClass("appear");

        //build question
        buildQuestions(questionsArray.questions[currentQuestion]);
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
        t = setTimeout(function () {
            timeUp(intervalId, thisQuestion);
        }, 15000);
    }

    // display if the answer was correct or wrong
    function checkAnswer(intervalId, t, chosenAnswer, question) {
        stopTimer(intervalId);
        clearTimeout(t);

        var answer = questionsArray.questions[currentQuestion].correctAnswer;
        var correctMessage = questionsArray.questions[currentQuestion].correctAnswerMessage;
        var image = questionsArray.questions[currentQuestion].image;
        if (chosenAnswer === answer) {
            questionDiv.html("<h1>That is Correct! " + correctMessage + "</h1>")
            correct++;
        }
        else {
            questionDiv.html("<h1>Wrong! " + correctMessage + "</h1>")
            wrong++;
        }
        imageDiv = $("<img>", { src: image });
        answersDiv.empty();
        answersDiv.append(imageDiv);
        chosenAnswer = "";

        // increment currentQuestion
        currentQuestion++;

        // determine if there is another question to build

        console.log("currentQuestion: " + currentQuestion);
        console.log("numberOfQuestions: " + numberOfQuestions);
        if (currentQuestion < numberOfQuestions) {
            nextCount = true;
            time = 5;
            intervalId = setInterval(count, 1000)
            // set transition time for next question
            timerDiv.html("<h2>Next Question: 00:05</h2>");
            setTimeout(function () {
                next(questionsArray)
                clearTimeout(t);
                clearInterval(intervalId);
                nextCount = false;

            }, 5000);
        }
        else {
            // results
            lastQuestionCount = true;
            time = 5;
            intervalId = setInterval(count, 1000)
            timerDiv.html("<h2>Mischeif Managed</h2>");
            setTimeout(function () {
                questionDiv.html("<h1> Correct Answers: " + correct);
                questionDiv.append("<h1> Wrong Answers: " + wrong);
                answersDiv.empty();
                clearInterval(intervalId);
            }, 5000);


        }

    }

    function next(questionsArray) {
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        time = 15;
        questionDiv.fadeOut();
        answersDiv.fadeOut();

        buildQuestions(questionsArray.questions[currentQuestion]);
    }

    // time is up
    function timeUp(intervalId, question) {
        questionDiv.empty();
        answersDiv.empty();
        timerDiv.html("<h2>Time Left: 00:00</h2>");
        clearInterval(intervalId);
        questionDiv.html("<h1>Time's Up! " + question.correctAnswerMessage + "</h1>");
        answersDiv.empty();
        pictureDiv = $("<img>", { src: question.image });
        answersDiv.append(pictureDiv);
        currentQuestion++;
        next(questionsArray);
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
        if (lastQuestionCount) {
            timerDiv.html("<h2>Mischeif Managed</h2>");
        }
        else if (!nextCount) {
            timerDiv.html("<h2>Time Left: " + currentTime + "</h2>");
        }
        else if(nextCount) {
            timerDiv.html("<h2>Next Question: " + currentTime + "</h2>");
        }

        $("#timer-col").html(timerDiv);
    }

    // function nextQuestionCount() {
    //     nextQuestionTime--

    //     currentTime = timeConverter(nextQuestionTime);
    //     console.log("nextQuestionCount");
    //     timerDiv.html("<h2>Next Question: " + currentTime + "</h2>");
    //     $("#timer-col").html(timerDiv);
    // }


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