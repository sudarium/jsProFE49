
let display = document.getElementById("display");

let pressedButtons = document.querySelectorAll('.button');
for (let pressedButton of pressedButtons) {
    pressedButton.addEventListener('click', press);
}

let presedEqualsButton = document.querySelector('.buttonEquals');
presedEqualsButton.addEventListener('click', calculate);

let pressedClearButton = document.querySelector('.buttonClear');
pressedClearButton.addEventListener('click', clearDisplay);

function calculate() {
    display.value = math.evaluate(display.value);
}

function clearDisplay() {
    display.value = "";
}

function press() {
    display.value += this.value;
}