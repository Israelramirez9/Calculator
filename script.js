function calculateFromString(mathExpression) {
    return new Function('return ' + mathExpression)();
}



function showNumber(number) {
    const resultado = document.getElementById("resultado");
    resultado.value += number;
}

function reset() {
    const resultado = document.getElementById("resultado");
    resultado.value = "";
}

function extractOperator(string) {
    const validOperators = "+-*/";
    for (i = 0; i < validOperators.length; i++) {
        let confirmOperator = string.includes(validOperators[i]);
        if (confirmOperator) {
            return validOperators[i];
        }
    }
}

function extractOperands(string) {
    return string.split(extractOperator(string));
}

function calculate(operandoA, operandoB, operador) {
    switch (operador) {
        case "+":
            return parseFloat(operandoA) + parseFloat(operandoB);
        case "-":
            return parseFloat(operandoA) - parseFloat(operandoB);
        case "/":
            return parseFloat(operandoA) / parseFloat(operandoB);
        case "*":
            return parseFloat(operandoA) * parseFloat(operandoB);
        default:
            return "error 404";
    }
}

function enterOrClick() {
    const resultado = document.getElementById("resultado");
    // const operator = extractOperator(resultado.value);
    // const [operandoA, operandoB] = extractOperands(resultado.value);
    // const finalAnswer = calculate(operandoA, operandoB, operator);
    const finalAnswer = calculateFromString(resultado.value);
    reset();
    showNumber(finalAnswer);
}
const arrayButtons = [
    {
        id: "cero",
        click: () => {
            showNumber("0")
        }
    },
    {
        id: "uno",
        click: () => {
            showNumber("1")
        }
    },
    {
        id: "dos",
        click: () => {
            showNumber("2")
        }
    },
    {
        id: "tres",
        click: () => {
            showNumber("3")
        }
    },
    {
        id: "cuatro",
        click: () => {
            showNumber("4")
        }
    },
    {
        id: "cinco",
        click: () => {
            showNumber("5")
        }
    },
    {
        id: "seis",
        click: () => {
            showNumber("6")
        }
    },
    {
        id: "siete",
        click: () => {
            showNumber("7")
        }
    },
    {
        id: "ocho",
        click: () => {
            showNumber("8")
        }
    },
    {
        id: "nueve",
        click: () => {
            showNumber("9")
        }
    },
    {
        id: "plus",
        click: () => {
            showNumber("+")
        }
    },
    {
        id: "subtraction",
        click: () => {
            showNumber("-")
        }
    },
    {
        id: "division",
        click: () => {
            showNumber("/")
        }
    },
    {
        id: "multiplication",
        click: () => {
            showNumber("*")
        }
    },
    {
        id: "reset",
        click: () => {
            reset();
        }
    },
    {
        id: "equal",
        click: () => {
            enterOrClick();
        },
        enter: () => {
            enterOrClick();
        }
    },

];


function loadAll() {

    for (let i = 0; i < arrayButtons.length; i++) {

        const button = document.getElementById(arrayButtons[i].id);

        button.onclick = arrayButtons[i].click;

    }
    /* VINCULA EL EVENTO ENTER DEL INPUT PARA ACTIVAR LA FUNCION DEL BOTON IGUAL
    URL="https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box"
     */
    document.getElementById("resultado")
        .addEventListener("keyup", function (event) {
            event.preventDefault();
            const ENTER = 13;
            if (event.keyCode === ENTER) {
                document.getElementById("equal").click();
            }
        });
}

