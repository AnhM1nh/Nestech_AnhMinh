calc = (cal) => {


    var number1 = parseFloat(document.getElementById('inNumber1').value);
    var number2 = parseFloat(document.getElementById('inNumber2').value);

    switch (cal) {
        case 1:
            result = number1 + number2
            break

        case 2:
            result = number1 - number2
            break

        case 3:
            result = number1 * number2
            break

        case 4:
            result = number1 / number2
            break
    }


    document.getElementById("result").innerHTML = "Result Division: " + result;
    event.preventDefault();
}