const input = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

function calculateSumofSquares(a,b) {
    sumOfSquares = a*a + b*b;
}

function calculateHypotenuse() {
    calculateSumofSquares(Number(input[0].value), Number(input[1].value))
    lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    message.innerHTML = "The length of hypotenuse is: " + lengthOfHypotenuse;
}

button.addEventListener("click", calculateHypotenuse);