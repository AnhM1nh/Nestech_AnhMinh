function buttonBai1() {
    let number_bai_1 = parseInt(document.getElementById('number_bai_1').value);

    if (isNaN(number_bai_1) || number_bai_1 <= 0 || number_bai_1 > 100) {
        console.log("Vui lòng nhập số nguyên dương từ 1 đến 100.");
        return;
    }

    let a = 1,
        b = 1,
        nextFibonacci = 1;
    console.log(a);

    for (let i = 3; nextFibonacci <= number_bai_1; i++) {
        console.log(nextFibonacci);
        nextFibonacci = a + b;
        if (nextFibonacci <= number_bai_1) {
            a = b;
            b = nextFibonacci;
        }
    }
}

function buttonBai2() {
    let number_bai_2 = parseInt(document.getElementById('number_bai_2').value);
    let factorial = 1;

    if (isNaN(number_bai_2) || number_bai_2 <= 0) {
        console.log("Vui lòng nhập số nguyên dương");
        return;
    }

    for (i = 1; i <= number_bai_2; i++) {
        factorial = factorial * i;
    }
    console.log(factorial);
}

function buttonHinh1() {
    for (i = 1; i < 6; i++) {
        let triangle = '* ';
        for (j = 1; j < i; j++) {
            triangle += '* ';
        }
        console.log(triangle);
    }
}

function buttonHinh2() {
    for (i = 6; i > 1; i--) {
        let triangle = '';
        for (j = 1; j < i; j++) {
            triangle += '* ';
        }
        console.log(triangle);
    }
}

function buttonHinh3() {
    for (i = 1; i < 6; i++) {
        let triangle = '';
        for (j = 4; j >= i; j--) {
            triangle += '  ';
        }
        for (z = 1; z <= i; z++) {
            triangle += '* ';
        }
        console.log(triangle);
    }
}

function buttonHinh4() {
    for (i = 1; i < 6; i++) {
        let triangle = '';
        for (j = 1; j <= i; j++) {
            triangle += '  ';
        }
        for (z = 5; z >= i; z--) {
            triangle += '* ';
        }
        console.log(triangle);
    }
}