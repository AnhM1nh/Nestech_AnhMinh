function addition() {
    var inNumber1 = parseFloat(document.getElementById('inNumber1').value);
    var inNumber2 = parseFloat(document.getElementById('inNumber2').value);

    var additionN = inNumber1 + inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + additionN;
    event.preventDefault();
}

function subtraction() {
    var inNumber1 = parseFloat(document.getElementById('inNumber1').value);
    var inNumber2 = parseFloat(document.getElementById('inNumber2').value);

    var subtractionN = inNumber1 - inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + subtractionN;
    event.preventDefault();
}

function multiplication() {
    var inNumber1 = parseFloat(document.getElementById('inNumber1').value);
    var inNumber2 = parseFloat(document.getElementById('inNumber2').value);

    var multiplicationN = inNumber1 * inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + multiplicationN;
    event.preventDefault();
}

function division() {
    var inNumber1 = parseFloat(document.getElementById('inNumber1').value);
    var inNumber2 = parseFloat(document.getElementById('inNumber2').value);

    var divisionN = inNumber1 / inNumber2;
    document.getElementById('result').innerHTML = "Result Division : " + divisionN;
    event.preventDefault();
}