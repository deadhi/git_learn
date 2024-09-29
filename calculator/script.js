let display = document.getElementById("display");

function appendSymbol(symbol) {
    display.value += symbol;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// This function restricts the input to only numbers and calculator operators
function validateInput(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter'];
    if (!allowedKeys.includes(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
    
    // If Enter is pressed, calculate the result
    if (event.key === 'Enter') {
        calculate();
    }
}
