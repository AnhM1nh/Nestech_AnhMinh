function buttonBai1() {
    let number_bai_1 = document.getElementById('number_bai_1').value;

    for (let i = 0; i < number_bai_1; i++) {
        console.log(i);
    }
}

function buttonBai2() {
    let number_bai_2;
    do {
        number_bai_2 = parseInt(prompt('Nhập nhiệt độ hiện tại'));

        if (number_bai_2 > 100) {
            alert("Nhiệt độ quá cao, vui lòng giảm nhiệt độ.");
        } else if (number_bai_2 < 20) {
            alert("Nhiệt độ quá thấp, vui lòng tăng nhiệt độ.");
        } else {
            alert("Nhiệt độ OKE LA.");
        }
    } while (number_bai_2 > 100 || number_bai_2 < 20);
}

function fibonacciBai3(count) {
    let fibonacci_bai3 = [1, 1];

    for (let i = 2; i < count; i++) {
        let nextFibonacci = fibonacci_bai3[i - 1] + fibonacci_bai3[i - 2];
        fibonacci_bai3.push(nextFibonacci);
    }
    return fibonacci_bai3;
}

function buttonBai3() {
    let resultBai3 = fibonacciBai3(20);
    console.log(" Danh sách các số: ", resultBai3);
}

function buttonBai4() {
    let firstFibonacci = 1;
    let secondFibonacci = 1;
    let nextFibonacci = firstFibonacci + secondFibonacci;

    while (true) {
        if (nextFibonacci % 5 === 0) {
            console.log("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là:", nextFibonacci);
            break;
        }
        firstFibonacci = secondFibonacci;
        secondFibonacci = nextFibonacci;
        nextFibonacci = firstFibonacci + secondFibonacci;
    }
}

function buttonBai5() {
    fibonacci_bai3 = fibonacciBai3(20);
    let sum = fibonacci_bai3.reduce((acc, val) => acc + val, 0);
    console.log("Tổng của 20 số Fibonacci đầu tiên:", sum);
}

function sumBai6() {
    let sum_number_bai_6 = 0;
    let count = 0;
    let number_bai_6 = 7;

    while (count < 30) {
        sum_number_bai_6 += number_bai_6;
        number_bai_6 += 7;
        count++;
    }
    return sum_number_bai_6;
}

function buttonBai6() {
    resultBai6 = sumBai6();
    console.log(resultBai6);
}

function buttonBai7() {
    let number_bai_7 = parseInt(document.getElementById('number_bai_7').value);

    for (let i = 1; i <= number_bai_7; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log('FizzzzzzzzBuzzzzzzz');
            } else {
                console.log('Fizzzzzzzz');
            }
        } else if (i % 5 === 0) {
            console.log('Buzzzzzzzz');
        } else {
            console.log(i);
        }
    }
}

function buttonStartBai8() {
    let value_1_bai_8 = parseInt(prompt("Nhập số 1 để bắt đầu"));
    let value_2_bai_8 = parseInt(prompt("Nhập số 2 để bắt đầu"));
    let count = 1;

    if (isNaN(value_1_bai_8) || isNaN(value_2_bai_8) || value_1_bai_8 > value_2_bai_8) {
        alert("Vui lòng nhập lại ('Số 1 nhỏ hơn số 2')");
        return;
    };

    let randomNumberBai8 = Math.floor(Math.random() * (value_2_bai_8 - value_1_bai_8)) + value_1_bai_8;

    while (count < 4) {
        let userChoice = parseInt(prompt("Nhập số để đoán"));

        if (isNaN(userChoice)) {
            alert('Vui lòng nhập số');
        } else if (userChoice == randomNumberBai8) {
            alert('Xin chúc mừng ' + userChoice + ' là số chính xác');
            break;
        } else if (userChoice < randomNumberBai8) {
            alert('Số nhỏ hơn gòi, nhập lại');
        } else {
            alert('Số lớn hơn gòi, nhập lại');
        }

        count++
    }
    alert('Hết lượt chơi òi, bấm bắt đầu để chơi lại');
}