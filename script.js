//Array of questions to pull from//
var questions = [
    {
        title: "Inside which HTML tag do we put the JavaScript?",
        choices: ["javascript", "script", "js"],
        answer: "script"
    },
    {
        title: "Where is the correct place to insert the JavaScript tag?",
        choices: ["head section", "body section", "both"],
        answer: "both"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'script.js'",
        choices: ["script src='script.js'", "script name='script.js'", "script href='script.js'"],
        answer: "script src='script.js'"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
        answer: "function myFunction()"
    },
    {
        title: "JavaScript is the same as Java.",
        choices: ["True", "False"],
        answer: "False"
    },

]

//Import elements from DOM//
var startScreenEl = document.querySelector("#start-screen-zone")
var questionScreenEl = document.querySelector("#question-screen-zone")
var endScreenEl = document.querySelector("#end-screen-zone")
var startBtn = document.querySelector("#start-button")
var timerEl = document.querySelector("#timer")
var timeEl = document.querySelector("#time")
var questionEl = document.querySelector("#question")
var answerEl = document.querySelector("#answer")
var finalScore = document.querySelector("#final-score")
var submitBtn = document.querySelector("#submit")

//Declare variables/
var timeRemaining = 180
var timerId;
var questionNum = 0
var numCorrect = 0
var totalQuestions = 0


questionScreenEl.style.display = "none"
endScreenEl.style.display = "none"
answerEl.style.display = "none"

//Starts the quiz, hides start screen and displays question screen, starts the timer//
function startQuiz() {
    startScreenEl.style.display = "none"
    questionScreenEl.style.display = "block"
    timerId = setInterval(clockTick, 1000)
    showQuestion()
}



function showQuestion() {
    var ochoices = document.querySelector("#choices")
    var q1 = questions[questionNum]
    var o1 = q1.choices
    ochoices.innerHTML = ""
    questionEl.innerHTML = ""
    answerEl.innerHTML = ""

    //Test to see if the question number that we are on is greater than the length of the array, if so, get out//
    if (questionNum > o1.length) {
        questionScreenEl.style.display = "none"
        timerEl.style.display = "none"
        endScreenEl.style.display = "block"

        finalScore.innerHTML = numCorrect

        return
    }
    //Loop through the array and dynamically build radio buttons//
    totalQuestions = o1.length
    questionEl.innerHTML = q1.title
    answerEl.innerHTML = q1.answer
    for (var x = 0; x < o1.length; x++) {
        var name = o1[x]
        var oRadio = '<input type="radio" id="radio' + x + '" name="radio_choice" value="' + name + '" onclick="testvalue(this.value)"> ' + name + '<br>'
        ochoices.innerHTML += oRadio

    }

}

function testvalue(svalue) {
    questionNum++
    if (svalue == answerEl.innerHTML) {
        numCorrect++
    }
    else {
        //Answer was wrong, so subtract time//
        timeRemaining = timeRemaining - 50
    }
    //Advance to next question//
    showQuestion()
}

function clockTick() {
    timeRemaining--
    timeEl.textContent = timeRemaining
}


function logInput() {
  console.log(initials.value);
}





startBtn.onclick = startQuiz
submitBtn.onclick = logInput


function logInput() {

}