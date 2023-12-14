var inNumber1
var inNumber2


function number1() {
    inNumber1 = parseFloat(document.getElementById('inNumber1').value);
}

function number2() {
    inNumber2 = parseFloat(document.getElementById('inNumber2').value);
}
console.log(inNumber1, inNumber2);

function addition() {
    var additionN = inNumber1 + inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + additionN;
    event.preventDefault();
}

function subtraction() {
    var subtractionN = inNumber1 - inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + subtractionN;
    event.preventDefault();
}

function multiplication() {
    var multiplicationN = inNumber1 * inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + multiplicationN;
    event.preventDefault();
}

function division() {
    var divisionN = inNumber1 / inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + divisionN;
    event.preventDefault();
}