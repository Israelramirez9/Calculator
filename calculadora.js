
let operandoA;
let operandoB;
let operacion;

function init() {
    //variables
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let plus = document.getElementById("plus");
    let subtration = document.getElementById("subtraction");
    let multiplication = document.getElementById("multiplication");
    let division = document.getElementById("division");
    let equal = document.getElementById("equal");
    let one = document.getElementById("uno");
    let two = document.getElementById("dos");
    let three = document.getElementById("tres");
    let four = document.getElementById("cuatro");
    let five = document.getElementById("cinco");
    let six = document.getElementById("seis");
    let seven = document.getElementById("siete");
    let eigth = document.getElementById("ocho");
    let nine = document.getElementById("nueve");
    let zero = document.getElementById("cero");
    //eventos

    one.onclick = function (e) {
        resultado.textContent += "1";
    }
    two.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    three.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    four.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    five.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    six.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    seven.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    eigth.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nine.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    zero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function (e) {
        resetear();
    }
    plus.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    subtration.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    division.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplication.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    equal.onclick = function (e) {
        operandoB = resultado.textContent;

        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {

    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
    }
    resetear();
    console.log(res);
    resultado.textContent = res;

}

