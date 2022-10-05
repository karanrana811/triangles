const quizform = document.querySelector(".quizform");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");

const correctAnswers = ["35°", "Right", "Equilateral", "25", "178°", "Equilateral", "3,4,5", "Three", "300 units square","0.5"];

function calculateScore() {
    const formSubmission = new FormData(quizform);
    let score = 0;
    let i = 0;
    for (let value of formSubmission.values()) {
        if (value === correctAnswers[i]) {
            score = score + 1;
        }
        i = i + 1;
    }   
    message.innerText = "Your score is: " + score;
}



submit.addEventListener("click", calculateScore);