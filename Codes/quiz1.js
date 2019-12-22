
(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    alert(`${numCorrect} out of ${myQuestions.length}`);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  var arrayQuestions = [
    {
      question: "Venacontracta is at a distance of _____ times the diameter of the orifice",
      answers: {
        a: "One",
        b: "Half",
        c: "1.5",
        d: "Two",
      },
      correctAnswer: "b"
    },
    {
      question: "The orifice diameter is ______ times the diameter of the pipe",
      answers: {
        a: "2",
        b: "1",
        c: "0.5",
        d: "1.5",
      },
      correctAnswer: "c"
    },
    {
      question: "The principle of orifice meter is different from that of the venturimeter",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
        {
      question: "The approximate distance of venacontracta from the centre of orifice is ______ ? (Where d is the diameter of orifice).",
      answers: {
        a: "d",
        b: "2d",
        c: "0.5d",
        d: "1.5d",
      },
      correctAnswer: "c"
    },
            {
      question: "How far is the Upstream tap from the orifice plate? (Where D is the diameter of the pipe)",
      answers: {
        a: "D",
        b: "1.5D",
        c: "2D",
        d: "Both b and c",
      },
      correctAnswer: "d"
    },
    {
          question: "Which is the cheapest device for measuring flow / discharge rate.",
      answers: {
        a: "Venturi Meter",
        b: "Pitot Tube",
        c: "Orifice Meter",
        d: "None of the above",
      },
      correctAnswer: "c"
    },

    {
      question: "The Orificemeter readings are more accurate than Pitot tube readings",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
       {
      question: "Which of the following  statement is true?",
      answers: {
        a: "Orifice meter is used to find viscosity of the fluid",
        b: "Orifice meter is used to find Coefficient of discharge.",
        c: "The principle of orifice meter is same as that of the venturimeter",
        d: "Both a & c",
      },
      correctAnswer: "d"
    }

  ];



function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
  const myQuestions = getRandom(arrayQuestions, 5);
  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();