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
    let fibonacci_bai3 = [0, 1];

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
    let firstFibonacci = 0;
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