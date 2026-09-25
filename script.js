const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

function modulus(a, b) {

    if (b === 0) {
        throw new Error("Cannot perform modulus by zero");
    }

    return a % b;
}

function calcoperator(a, operator, b) {

    switch (operator) {

        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);

        case "%":
            return modulus(a, b);

        default:
            throw new Error("Invalid Operator");
    }
}

function getprecedence(operator) {

    if (
        operator === "*" ||
        operator === "/" ||
        operator === "%"
    ) {
        return 2;
    }

    if (
        operator === "+" ||
        operator === "-"
    ) {
        return 1;
    }

    return 0;
}

function calculateevaluatexpresion(expression) {

    const tokens = expression.match(/\d*\.?\d+|[+\-*/%]/g);

    if (!tokens) {
        throw new Error("Invalid Expression");
    }

    const numbers = [];
    const operators = [];

    for (let token of tokens) {

        if (!isNaN(token)) {

            numbers.push(Number(token));

        } else {

            while (
                operators.length > 0 &&
                getprecedence(operators[operators.length - 1]) >=
                getprecedence(token)
            ) {

                const operator = operators.pop();

                const b = numbers.pop();
                const a = numbers.pop();

                if (a === undefined || b === undefined) {
                    throw new Error("Invalid Expression");
                }

                const result = calcoperator(a, operator, b);

                numbers.push(result);
            }

            operators.push(token);
        }
    }

    while (operators.length > 0) {

        const operator = operators.pop();

        const b = numbers.pop();
        const a = numbers.pop();

        if (a === undefined || b === undefined) {
            throw new Error("Invalid Expression");
        }

        const result = calcoperator(a, operator, b);

        numbers.push(result);
    }

    if (numbers.length !== 1) {
        throw new Error("Invalid Expression");
    }

    return numbers[0];
}

function handle(value) {

    if (value === "AC") {

        display.value = "";

    } else if (value === "BackSpace") {

        display.value = display.value.slice(0, -1);

    } else if (value === "Enter") {

        if (display.value === "") {
            return;
        }

        try {

            const result = calculateevaluatexpresion(display.value);

            display.value = result;

        } catch (error) {

            alert(error.message);

            display.value = "";
        }

    } else {

        display.value += value;
    }
}

buttons.forEach(function(button){

    button.addEventListener("click" , function(){

        const value = button.dataset.value;
        handle(value);
    });
});

document.addEventListener("keydown" , function(event){
    const key = event.key;
    if("0123456789+-*/%.".includes(key)){
        event.preventDefault();
        handle(key);
    }
    else if(key === "Backspace"){
        event.preventDefault();
        handle("BackSpace");
    }
    else if(key === "Enter"){
        event.preventDefault();
        handle("Enter")

    }
    else{
        event.preventDefault();
        alert("Invalid Key Use:Numbers,Operators,Enter&backspace Or Try Again ")
    }

})
