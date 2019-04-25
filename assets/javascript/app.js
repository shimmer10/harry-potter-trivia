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
                "answerOne": "A giant spider",
                "answerTwo": "Harry's owl",
                "answerThree": "A three-headed dog",
                "answerFour": "Hermione's cat",
                "correctAnswer": "answer-three",
                "correctAnswerMessage": "Fluffy is a three-headed dog!",
                "image": "https://media1.tenor.com/images/1ff9e3ab280f3fcd04718f9b630f8546/tenor.gif?itemid=12912138"
            },
            questionThree = {
                "question": "Who poses as Mad-Eye Moddy, Harry's 4th year Defense Against the Dark Arts professor?",
                "answerOne": "Voldemort",
                "answerTwo": "Siruius Black",
                "answerThree": "Peter Pettigrew",
                "answerFour": "Barty Crouch Jr.",
                "correctAnswer": "answer-four",
                "correctAnswerMessage": "Barty Crouch Jr did!",
                "image": "https://thumbs.gfycat.com/InfamousPepperyDassie-size_restricted.gif"
            },
            questionFour = {
                "question": "How did Hermione take extra lessons her third year?",
                "answerOne": "The Time-Turner",
                "answerTwo": "Weekend Classes",
                "answerThree": "The Pensieve",
                "answerFour": "She made a clone",
                "correctAnswer": "answer-one",
                "correctAnswerMessage": "The Time-Turner!",
                "image": "https://66.media.tumblr.com/b049d2cca1c7207aa669c425603fac84/tumblr_ogjlazpzHs1rnx2kbo1_400.gif"
            },
            questionFive = {
                "question": "Who caused Harry many problems while trying to \"help\" him in his second year at Hogwarts?",
                "answerOne": "Gilderoy Lockhart",
                "answerTwo": "Severus Snape",
                "answerThree": "Dobby the House Elf",
                "answerFour": "Ron Weasley",
                "correctAnswer": "answer-three",
                "correctAnswerMessage": "Dobby the House Elf did!",
                "image": "https://media.giphy.com/media/53fbxZjD18mTC/giphy.gif"
            },
            questionSix = {
                "question": "Which is not a method of transport for wizards?",
                "answerOne": "Aparecium",
                "answerTwo": "Apparition",
                "answerThree": "A Portkey",
                "answerFour": "Floo Powder",
                "correctAnswer": "answer-one",
                "correctAnswerMessage": "Aparecium is a revealing charm!",
                "image": "https://www.linternaute.com/homme/images/buzz/130912/harry-potter-colo.gif"
            },
            questionSeven = {
                "question": "Who was the Seeker for the Bulgarian Team that played in the Quidditch World Cup against the Irish?",
                "answerOne": "Viktor Krum",
                "answerTwo": "Igor Karkaroff",
                "answerThree": "Ivan Vulchanov",
                "answerFour": "Cedric Diggory",
                "correctAnswer": "answer-one",
                "correctAnswerMessage": "It was Viktor Krum!",
                "image": "https://66.media.tumblr.com/fc5c3a2d36ccb35fb19dc2f60390c25a/tumblr_nvnrg8r1hn1thu2vbo1_500.gif"
            },
            questionNine = {
                "question": "What is a thestral?",
                "answerOne": "A half giant",
                "answerTwo": "A pixie",
                "answerThree": "A dragon",
                "answerFour": "An invisible winged horse",
                "correctAnswer": "answer-four",
                "correctAnswerMessage": "A thestral is an invisible winged horse!",
                "image": "https://i.imgur.com/N9I4omF.gif?noredirect"
            },
            questionTen = {
                "question": "What makes a person feel better after seeing a Dementor?",
                "answerOne": "A Nap",
                "answerTwo": "Chocolate",
                "answerThree": "Chicken Soup",
                "answerFour": "Treacle Pudding",
                "correctAnswer": "answer-two",
                "correctAnswerMessage": "Chocolate makes you feel better after a Demntor attack!",
                "image": "https://abcfapps.blob.core.windows.net/funday/2016/277/d3896ce5-0ff6-4bea-8af5-6ee6740eb550.gif"
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

    var buttonDiv;
    var imageDiv;
    var pictureDiv;

    // variables and arrays
    var numberOfQuestions = questionsArray.questions.length;
    var currentQuestion = 0;
    var intervalId;
    var chosenAnswer;
    var time;
    var minutes;
    var seconds;
    var t;
    var nextCount = false;
    var lastQuestionCount = false;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    //  This code will run as soon as the page loads
    window.onload = function () {
        startDiv.on("click", startGame);
    };

    // setup answer button functionality
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

    // set up reset button functionality
    $(document).on('click', '#reset', function () {
        reset();
    });

    // start game 
    function startGame() {
        // clear start button out of div
        questionAnswerSpaceDiv.empty();

        // // set timer attributes on start
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        timerDiv.addClass("appear");

        //build question
        buildQuestions(questionsArray.questions[currentQuestion]);
    }

    // build questions
    function buildQuestions(thisQuestion) {
        time = 15;

        question = thisQuestion.question;

        answerOneDiv = $("<li>", { id: "answer-one", text: thisQuestion.answerOne })
        answerTwoDiv = $("<li>", { id: "answer-two", text: thisQuestion.answerTwo })
        answerThreeDiv = $("<li>", { id: "answer-three", text: thisQuestion.answerThree })
        answerFourDiv = $("<li>", { id: "answer-four", text: thisQuestion.answerTwo })

        questionDiv = $("<h1>", { class: "question-space" });
        answersDiv = $("<ol>");


        questionDiv.html(question);
        answersDiv.append(answerOneDiv);
        answersDiv.append(answerTwoDiv);
        answersDiv.append(answerThreeDiv);
        answersDiv.append(answerFourDiv);
        questionAnswerSpaceDiv.append(questionDiv);
        questionAnswerSpaceDiv.append(answersDiv);


        // debugger;
        intervalId = setInterval(count, 1000)
        // set a timeout
        t = setTimeout(function () {
            timeUp(intervalId, thisQuestion);
        }, 15000);
    }

    // display if the answer was correct or wrong
    function checkAnswer(intervalId, t, chosenAnswer) {
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
        if (currentQuestion < numberOfQuestions) {
            nextCount = true;
            time = 5;
            intervalId = setInterval(count, 1000)
            // set transition time for next question
            timerDiv.html("<h2>Next Question: 00:05</h2>");
            t = setTimeout(function () {
                nextQuestion(questionsArray)
                clearTimeout(t);
                clearInterval(intervalId);
                nextCount = false;
            }, 5000);
        }
        else {
            // clearTimeout(t);
            lastQuestionCount = true;
            time = 5;
            intervalId = setInterval(count, 1000)
            timerDiv.html("<h2>Mischeif Managed</h2>");
            t = setTimeout(function () {
                questionDiv.html("<h1> Correct Answers: " + correct + "</h1>"
                    + "<h1> Wrong Answers: " + wrong + "</h1>"
                    + "<h1> Unanswered: " + unanswered + "</h1>");
                answersDiv.empty();
                clearInterval(intervalId);
                buttonDiv = $("<button>", { id: "reset", class: "btn btn-lg", text: "RESET" })
                answersDiv.append(buttonDiv);
            }, 5000);
        }
    }

    // next question
    function nextQuestion(questionsArray) {
        questionDiv.empty();
        answersDiv.empty();
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        time = 15;
        buildQuestions(questionsArray.questions[currentQuestion]);
    }

    // reset
    function reset() {
        currentQuestion = 0;
        nextCount = false;
        lastQuestionCount = false;
        correct = 0;
        wrong = 0;
        time = 15;
        stopTimer(intervalId);
        clearInterval(intervalId);
        clearTimeout(t);
        startGame();
    }

    // time is up
    function timeUp(intervalId, question) {
        unanswered++;
        questionDiv.empty();
        answersDiv.empty();
        timerDiv.html("<h2>Time Left: 00:00</h2>");
        clearInterval(intervalId);
        questionDiv.html("<h1>Time's Up! " + question.correctAnswerMessage + "</h1>");
        answersDiv.empty();
        pictureDiv = $("<img>", { src: question.image });
        answersDiv.append(pictureDiv);

        // increment currentQuestion
        currentQuestion++;

        // determine if there is another question to build
        if (currentQuestion < numberOfQuestions) {
            nextCount = true;
            time = 5;
            intervalId = setInterval(count, 1000)
            // set transition time for next question
            timerDiv.html("<h2>Next Question: 00:05</h2>");
            t = setTimeout(function () {
                nextQuestion(questionsArray)
                clearTimeout(t);
                clearInterval(intervalId);
                nextCount = false;
            }, 5000);
        }
        else {
            clearTimeout(t);
            lastQuestionCount = true;
            time = 5;
            intervalId = setInterval(count, 1000)
            timerDiv.html("<h2>Mischeif Managed</h2>");
            t = setTimeout(function () {
                questionDiv.html("<h1> Correct Answers: " + correct + "</h1>"
                    + "<h1> Wrong Answers: " + wrong + "</h1>"
                    + "<h1> Unanswered: " + unanswered + "</h1>");
                answersDiv.empty();
                clearInterval(intervalId);
                buttonDiv = $("<button>", { id: "reset", class: "btn btn-lg", text: "RESET" })
                answersDiv.append(buttonDiv);
            }, 5000);
        }
    }

    // stop the timer when they choose an answer
    function stopTimer(intervalId) {
        clearTimeout(t);
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
        else if (nextCount) {
            timerDiv.html("<h2>Next Question: " + currentTime + "</h2>");
        }

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