const sideone = document.querySelector("#inputone");
const sidetwo = document.querySelector("#inputtwo");
const sidethree = document.querySelector("#inputthree");
const button = document.querySelector(".calculate");
const message = document.querySelector(".message");

function calculateArea() {
    const a = Number(sideone.value);
    const b = Number(sidetwo.value);
    const c = Number(sidethree.value);

    if (a + b > c &&
        b + c > a &&
        a + c > b) {
            const semiPerimeter = (a + b + c) / 2;
            const areaOfTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)).toFixed(2);
            message.innerText = "The area of the specified triangle is " + areaOfTriangle;
        } else {
            message.innerText = "Please enter valid lengths such that the line segments form a triangle when joined at vertices"
        }
}

button.addEventListener("click", calculateArea);