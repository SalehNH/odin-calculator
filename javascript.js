const screen = document.querySelector('.screen');
let num1 = "";
let num2 = "";
let result = "";
let operator = "";

function dot() {
    if (result != "")
        clearResult();

    if (num1.length == 10) {
        alert("only numbers that are less or equal to 10 digits.");
        return;
    }

    if (num1 == "") {
        num1 = '0.';
        screen.textContent = num1;
        return;
    }
    if (operator == "") {
        if (num1.includes(".")) {
            return;
        }
        num1 = num1 + '.';
        screen.textContent = num1;
    } else {
        if (num2 == "") {
            num2 = '0.';
            screen.textContent = num2;
        } else {
            if (num2.includes(".")) {
                return;
            }
            num2 = num2 + '.';
            screen.textContent = num2;
        }
    }
}
function zero() {
    if (result != "")
        clearResult();

    if (num1.length >= 10) {
        alert("only numbers that are less or equal to 10 digits.");
        return;
    }

    if (num1 == "") {
        num1 = '0';
        screen.textContent = num1;
        return;
    }
    if (operator == "") {
        if (num1 != "0") {
            num1 = num1 + '0';
            screen.textContent = num1;
        }
    } else {
        if (num2 == "") {
            num2 = '0';
            screen.textContent = num2;
        } else {
            if (num2 != "0") {
                num2 = num2 + '0';
                screen.textContent = num2;
            }
        }
    }
}
function one() {
    all('1');
}
function two() {
    all('2');
}
function three() {
    all('3');
}
function four() {
    all('4');
}
function five() {
    all('5');
}
function six() {
    all('6');
}
function seven() {
    all('7');
}
function eight() {
    all('8');
}
function nine() {
    all('9');
}

function divide() {
    operatorFunction("divi");
}
function multiply() {
    operatorFunction("mul");
}
function minus() {
    operatorFunction("minus")
}
function plus() {
    operatorFunction("plus");
}
function mod() {
    operatorFunction("mod")
}
function equal() {
    const oprs = document.querySelectorAll('.operators');
    for (let i = 0; i < oprs.length; i++) {
        oprs[i].style.backgroundColor = 'lightsalmon';
    }
    if (operator == "" || num2 == "") {
        alert("please enter two numbers & an operator in between");
        clearResult();
        return;
    }
    equation(num1, num2, operator);
}

function equation(n1, n2, op) {
    if (op == "plus")
        result = parseFloat(n1) + parseFloat(n2) + "";

    if (op == "minus")
        result = parseFloat(n1) - parseFloat(n2) + "";

    if (op == "divi") {
        if (n2 == "0") {
            alert("Error! You cannot divide on ZERO");
            clearResult();
            return;
        }
        result = parseFloat(n1) / parseFloat(n2) + "";
    }
    if (op == "mul")
        result = parseFloat(n1) * parseFloat(n2) + "";

    if (op == "mod")
        result = parseFloat(n1) % parseFloat(n2) + "";

    if (result.length > 10)
        result = result.slice(0, 11)

    screen.textContent = result;
}

function clearResult() {
    const oprs = document.querySelectorAll('.operators');
    for (let i = 0; i < oprs.length; i++) {
        oprs[i].style.backgroundColor = 'lightsalmon';
    }
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    screen.textContent = "";
}

function all(number) {
    if (result != "")
        clearResult();

    if (num1.length == 10) {
        alert("only numbers that are less or equal to 10 digits.");
        return;
    }

    if (num1 == "") {
        num1 = number;
        screen.textContent = num1;
        return;
    }
    if (operator == "") {
        if (num1 == "0") {
            num1 = number;
        } else {
            num1 = num1 + number;
        }
        screen.textContent = num1;
    } else {
        if (num2 == "") {
            num2 = number;
            screen.textContent = num2;
        } else {
            if (num2 == "0") {
                num2 = number;
            } else {
                num2 = num2 + number;
            }
            screen.textContent = num2;
        }
    }
}

function operatorFunction(oper) {
    if (num1 == "")
        return;

    const oprs = document.querySelectorAll('.operators');
    for (let i = 0; i < oprs.length; i++) {
        oprs[i].style.backgroundColor = 'lightsalmon';
    }
    const op = document.querySelector('.' + oper);
    op.style.backgroundColor = "rgb(201 124 93)";
    if (result != "") {
        num1 = result;
        num2 = "";
        result = "";
    }
    operator = oper;
}