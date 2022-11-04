/* var minutesLabel = document.getElementById("minutes");
 var secondsLabel = document.getElementById("seconds");
 var endOfTimer = document.getElementById("timerEnd");
 var totalSeconds = 5;

 function start(runOnce, totalSeconds) {
     setInterval(setTime(totalSeconds), 1000);
 }

 function setTime(totalSeconds) {
     if(totalSeconds > 0 && runOnce == true) {
         --totalSeconds;
         secondsLabel.innerHTML = pad(totalSeconds % 60);
         minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60)); 
     } else if(totalSeconds < 0) {
         return timerEnd(false);
     }
   console.log('totalsecondds', totalSeconds);

 } 

 function timerEnd(runOnce) {
    if(confirm('You have run out of time.  Would you like to start again?') == true) {
         console.log(runOnce);
         start(true, 5);
     } else {
         start(false, -1);
     }
 }

 function pad(val) {
   var valString = val + "";
   if (valString.length < 2) {
     return "0" + valString;
   } else {
     return valString;
   }
 }

 var timerEl = document.getElementById('countdown');
 var mainEl = document.getElementById('main');

 var displayMessage = "Your time has run out!  Would you like to try again?";
  

  Timer that counts down from 5
 function countdown() {
   var timeLeft = 5;

    Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
   var timeInterval = setInterval(function () {
      As long as the `timeLeft` is greater than 1
     if (timeLeft > 1) {
        Set the `textContent` of `timerEl` to show the remaining seconds
       timerEl.textContent = timeLeft + ' seconds remaining';
        Decrement `timeLeft` by 1
       timeLeft--;
     } else if (timeLeft === 1) {
        When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
       timerEl.textContent = timeLeft + ' second remaining';
       timeLeft--;
     } else {
        Once `timeLeft` gets to 0, set `timerEl` to an empty string
       timerEl.textContent = '';
        Use `clearInterval()` to stop the timer
       clearInterval(timeInterval);
        Call the `displayMessage()` function
       displayMessage("Your time has run out!  Would you like to try again?");
     }
   }, 1000);
 }

 Displays the message one word at a time
 function displayMessage() {
   var wordCount = 0;
 }

Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
   var msgInterval = setInterval(function () {
      If there are no more words left in the message
     if (words[wordCount] === undefined) {
       Use `clearInterval()` to stop the timer
       clearInterval(msgInterval);
      } else {
        Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
     }
   }, 1000);

 countdown();*/

//Questions will be asked

var timer;
var timerCount;
var timerElement = document.querySelector('#clock-timer');
var timerText = document.querySelector('#timer-text');
function startTimer() {
  // Sets timer
  timerCount = 5;
  timer = setInterval(function() {
    timerCount--;
    timerText.textContent = timerCount;

    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
   
  }, 1000);
}

startTimer();

const Questions = [
  {
    id: 0,
    q: "How do you call the function named myFunction?",
    a: [
      { text: "call myFunction()", isCorrect: false },
      { text: "call function myFunction()", isCorrect: false },
      { text: "myFunction()", isCorrect: true },
      { text: "myFunction[]", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What will the code return?  Boolean(3 < 7)",
    a: [
      { text: "false", isCorrect: false, isSelected: false },
      { text: "NaN", isCorrect: false },
      { text: "SyntaxError", isCorrect: false },
      { text: "True", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    a: [
      { text: "if i =! 5 then", isCorrect: false },
      { text: "if(i < > 5)", isCorrect: false },
      { text: "if( i != 5 )", isCorrect: true },
      { text: "if i < > 5", isCorrect: false },
    ],
  },
];

console.log(Questions.length);

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  //Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  //Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  //Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  //Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  //Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  //Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  //Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");
  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

//Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;

  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }
});
