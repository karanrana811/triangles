const angles = document.querySelectorAll(".angle-input");
const button = document.querySelector(".checktriangle");
const message = document.querySelector(".message");




button.addEventListener("click", function istriangle(a, b, c) {
    a = Number(angles[0].value);
    b = Number(angles[1].value);
    c = Number(angles[2].value);
    const sumofAngles = a + b + c;
    console.log(sumofAngles);
    if (a > 0 && b > 0 && c > 0) {
        if (sumofAngles === 180) {
            message.innerText = "Angles form a triangle!"
        } else {
            message.innerText = "Angles do not form a triangle!"
        }
    } else {
        message.innerText = "Please input valid angles!"
    }
});