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
                "answerOne": "A Giant Spider",
                "answerTwo": "Harry's Owl",
                "answerThree": "A Three-Headed Dog",
                "answerFour": "Hermione's Cat",
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
                "answerFour": "She Made a Clone",
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
            questionEight = {
                "question": "What is a thestral?",
                "answerOne": "A Half Giant",
                "answerTwo": "A Pixie",
                "answerThree": "A Dragon",
                "answerFour": "An Invisible Winged Horse",
                "correctAnswer": "answer-four",
                "correctAnswerMessage": "A thestral is an invisible winged horse!",
                "image": "https://i.imgur.com/N9I4omF.gif?noredirect"
            },
            questionNine = {
                "question": "What makes a person feel better after seeing a Dementor?",
                "answerOne": "A Nap",
                "answerTwo": "Chocolate",
                "answerThree": "Chicken Soup",
                "answerFour": "Treacle Pudding",
                "correctAnswer": "answer-two",
                "correctAnswerMessage": "Chocolate makes you feel better after a Demntor attack!",
                "image": "https://abcfapps.blob.core.windows.net/funday/2016/277/d3896ce5-0ff6-4bea-8af5-6ee6740eb550.gif"
            },
            questionTen = {
                "question": "When Dumbledore and Harry first visit Horace Slughorn, what is Horace disguised as?",
                "answerOne": "A Lampshade",
                "answerTwo": "A Table",
                "answerThree": "An Armchair",
                "answerFour": "A Boat",
                "correctAnswer": "answer-three",
                "correctAnswerMessage": "Horace was disguised as an armchair!",
                "image": "https://i.gifer.com/8ZHl.gif"
            },
            questionEleven = {
                "question": "Which of the following is not one of Voldemort's horcruxes?",
                "answerOne": "The Sword of Gryffindor",
                "answerTwo": "Nagini",
                "answerThree": "Tom Riddle's Diary",
                "answerFour": "Helga Hufflepuff's Cup",
                "correctAnswer": "answer-one",
                "correctAnswerMessage": "The Sword of Gryffindor was not a horcrux!",
                "image": "https://media3.giphy.com/media/6HAvZnZJXpOG4/giphy.gif"
            },
            questionTwelve = {
                "question": "Who is the Half-Blood Prince?",
                "answerOne": "Tom Riddle",
                "answerTwo": "Lucius Malfoy",
                "answerThree": "Severus Snape",
                "answerFour": "Eileen Prince",
                "correctAnswer": "answer-three",
                "correctAnswerMessage": "Severus Snape was the Half-Blood Prince!",
                "image": "https://media2.giphy.com/media/7wRxeRCPGqMZa/giphy.gif"
            },
            questionThirteen = {
                "question": "What position does Harry play on his Quidditch team?",
                "answerOne": "Bludger",
                "answerTwo": "Chaser",
                "answerThree": "Seeker",
                "answerFour": "Keeper",
                "correctAnswer": "answer-three",
                "correctAnswerMessage": "Harry is a Seeker!",
                "image": "https://media.giphy.com/media/DDOvL9Aq3ip32/giphy.gif"
            },
            questionFourteen = {
                "question": "What does the Imperius Curse do?",
                "answerOne": "Controls",
                "answerTwo": "Kills",
                "answerThree": "Tortures",
                "answerFour": "Tickles",
                "correctAnswer": "answer-one",
                "correctAnswerMessage": "It controls!",
                "image": "https://media1.giphy.com/media/ZlxH3WiLzEs00/giphy.gif"
            },
            questionFifteen = {
                "question": "How does Harry catch his first snitch?",
                "answerOne": "In His Hands",
                "answerTwo": "With His Shoe",
                "answerThree": "With His Mind",
                "answerFour": "In His Mouth",
                "correctAnswer": "answer-four",
                "correctAnswerMessage": "He caught it in his mouth!",
                "image": "https://thumbs.gfycat.com/ImpeccableSharpChanticleer-size_restricted.gif"
            }
        ]
    }

    // jQuery variables
    var questionAnswerSpaceDiv = $("#question-answer-space");
    var startDiv = $("#start-button");
    var timerColumn = $("#timer-col");
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
    var lastQuestion = false;
    var nextCount = false;
    var currentQuestion = 0;
    var correct = 0;
    var unanswered = 0;
    var wrong = 0;
    var chosenAnswer;
    var intervalId;
    var timer;
    var time;
    var minutes;
    var seconds;

    //  This code will run as soon as the page loads
    window.onload = function () {
        startDiv.on("click", startGame);
    };

    // setup answer button functionality
    $(document).on('click', '.answers', function () {
        thisQuestion = questionsArray.questions[currentQuestion];
        clearTimeout(timer);
        chosenAnswer = this.id;
        checkAnswer(intervalId, chosenAnswer, thisQuestion);
    });

    // set up reset button functionality
    $(document).on('click', '#reset', function () {
        reset();
    });

    // start game 
    function startGame() {
        // clear start button out of div
        questionAnswerSpaceDiv.empty();

        // // set timer on start
        timerDiv.html("<h2>Time Left: 00:15</h2>")
        .addClass("appear btn btn-light");

        //build question
        buildQuestions(questionsArray.questions[currentQuestion]);
    }

    // build questions
    function buildQuestions(thisQuestion) {
        time = 15;

        question = thisQuestion.question;

        answerOneDiv = $("<h2>", { class: "answers", id: "answer-one", text: "1. " + thisQuestion.answerOne })
        answerTwoDiv = $("<h2>", { class: "answers", id: "answer-two", text: "2. " + thisQuestion.answerTwo })
        answerThreeDiv = $("<h2>", { class: "answers", id: "answer-three", text: "3. " + thisQuestion.answerThree })
        answerFourDiv = $("<h2>", { class: "answers", id: "answer-four", text: "4. " + thisQuestion.answerFour })

        questionDiv = $("<h1>", { class: "question-space" });
        answersDiv = $("<div>");


        questionDiv.html(question);
        answersDiv.append(answerOneDiv);
        answersDiv.append(answerTwoDiv);
        answersDiv.append(answerThreeDiv);
        answersDiv.append(answerFourDiv);
        questionAnswerSpaceDiv.append(questionDiv);
        questionAnswerSpaceDiv.append(answersDiv);


        intervalId = setInterval(count, 1000)
        // set a timeout
        timer = setTimeout(function () {
            timeUp(intervalId, thisQuestion);
        }, 15000);
    }

    // display if the answer was correct or wrong
    function checkAnswer(intervalId, chosenAnswer, thisQuestion) {
        clearInterval(intervalId);

        var answer = thisQuestion.correctAnswer;
        var correctMessage = thisQuestion.correctAnswerMessage;
        var image = thisQuestion.image;

        questionDiv.empty();
        if (chosenAnswer === answer) {
            questionDiv.html("<h1>That is Correct! <br>" + correctMessage + "</h1>")
            correct++;
        }
        else {
            questionDiv.html("<h1>Wrong! <br>" + correctMessage + "</h1>")
            wrong++;
        }
        imageDiv = $("<img>", { src: image });
        answersDiv.empty();
        answersDiv.append(imageDiv);

        determineNextAction(intervalId);
    }

    function determineNextAction(intervalId) {
        // increment currentQuestion
        currentQuestion++;

        // next transition time
        time = 5;

        // determine if there is another question to build
        if (currentQuestion < numberOfQuestions) {
            nextCount = true;
            intervalId = setInterval(count, 1000)
            timerDiv.html("<h2>Next Question: 00:05</h2>");
            timer = setTimeout(function () {
                nextQuestion(questionsArray)
                clearInterval(intervalId);
                nextCount = false;
            }, 5000);
        }
        else {
            nextIntervalId = setInterval(count, 1000)
            timerDiv.html("<p>Mischief    Managed</p>");
            lastQuestion = true;
            setTimeout(function () {
                questionDiv.html("<h1> Correct Answers: " + correct + "</h1>"
                    + "<h1> Wrong Answers: " + wrong + "</h1>"
                    + "<h1> Unanswered: " + unanswered + "</h1>");
                answersDiv.empty();
                clearInterval(nextIntervalId);
                buttonDiv = $("<button>", { id: "reset", class: "btn btn-lg", text: "PLAY AGAIN" })
                answersDiv.append(buttonDiv);
            }, 5000);
        }
    }

    // next question
    function nextQuestion(questionsArray) {
        questionDiv.empty();
        answersDiv.empty();
        timerDiv.html("<h2>Time Left: 00:15</h2>");
        buildQuestions(questionsArray.questions[currentQuestion]);
    }

    // reset
    function reset() {
        currentQuestion = 0;
        nextCount = false;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        clearInterval(intervalId);
        startGame();
    }

    // time is up
    function timeUp(intervalId, question) {
        unanswered++;
        questionDiv.empty();
        answersDiv.empty();
        clearInterval(intervalId);
        questionDiv.html("<h1>Time's Up! " + question.correctAnswerMessage + "</h1>" );
        answersDiv.empty();
        pictureDiv = $("<img>", { src: question.image });
        answersDiv.append(pictureDiv);

        determineNextAction(intervalId);
    }

    // count down functionality
    function count() {

        time--

        currentTime = timeConverter(time);
        if (lastQuestion){
            timerDiv.html("<p>Mischief   Managed</p>");

        }
        else if (!nextCount) {
            timerDiv.html("<h2>Time Left: " + currentTime + "</h2>");
        }
        else if (nextCount) {
            timerDiv.html("<h2>Next Question: " + currentTime + "</h2>");
        }

        timerColumn.html(timerDiv);
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