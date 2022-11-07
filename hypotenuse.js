const input = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

function calculateSumofSquares(a,b) {
    sumOfSquares = a*a + b*b;
}

function calculateHypotenuse() {
    if (Number(input[0].value) > 0 && Number(input[1].value) > 0) {    
        calculateSumofSquares(Number(input[0].value), Number(input[1].value))
        lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
        message.innerHTML = "The length of hypotenuse is: " + lengthOfHypotenuse;
    } else { 
        message.innerText = "Please enter valid inputs."
    }

}   

button.addEventListener("click", calculateHypotenuse);