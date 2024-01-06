let numbers_1 = [];

function Bai1() {
    let number_1 = parseInt(document.getElementById('number_1').value);
    let count = 0;

    if (!isNaN(number_1)) {
        numbers_1.push(number_1);
    }

    for (let i = 0; i < numbers_1.length; i++) {
        if (numbers_1[i] > 10) {
            count++;
        }
    }
    console.log(numbers_1);
    document.getElementById("result_bai_1").innerText = 'Số lượng số lớn hơn 10 là:' + count;

}


let numbers_2 = [];
let index_number_2 = 0;

function Bai2() {
    let number_2 = parseInt(document.getElementById('number_2').value);

    if (!isNaN(number_2)) {
        numbers_2.push(number_2);
    }
    let max_number_2 = numbers_2[0];
    for (let i = 1; i < numbers_2.length; i++) {
        if (numbers_2[i] > max_number_2) {
            max_number_2 = numbers_2[i];
            index_number_2 = i;
        }

    }
    console.log(numbers_2);
    document.getElementById("result_bai_2").innerText = 'Giá trị lớn nhất là: ' + max_number_2 + ' nằm ở vị trí ' + index_number_2;
}

let numbers_3 = [];

function Bai3() {
    let number_3 = parseInt(document.getElementById('number_3').value);
    if (!isNaN(number_3)) {
        numbers_3.push(number_3);
    }

    let average_number_3 = numbers_3[0] / 2;
    console.log(average_number_3);

    let max_number_3 = numbers_3[0];
    for (let i = 1; i < numbers_3.length; i++) {
        if (numbers_3[i] > max_number_3) {
            max_number_3 = numbers_3[i];
            index_number_3 = i;
        }

        average_number_3 = +numbers_3[i] / 2;
    }

    console.log(numbers_3);
    document.getElementById("result_bai_3").innerText = 'Giá trị lớn nhất là: ' + max_number_3 + ' và tổng trung bình là ' + average_number_3;
}

let numbers_4 = [];

function Bai4() {
    let number_4 = parseInt(document.getElementById('number_4').value);
    if (!isNaN(number_4)) {
        numbers_4.push(number_4);
    }

    let reverse_number_4 = numbers_4.reverse();
    document.getElementById("result_bai_4").innerText = 'Các phần tử đảo ngược là: ' + reverse_number_4;

}

let numbers_5 = [];

function Bai5() {
    let number_5 = parseInt(document.getElementById('number_5').value);
    let count = 0;

    if (!isNaN(number_5)) {
        numbers_5.push(number_5);
    }

    for (let i = 0; i < numbers_5.length; i++) {
        if (numbers_5[i] < 0) {
            count++;
        }
    }
    console.log(numbers_5);
    document.getElementById("result_bai_5").innerText = 'Số lượng số lớn hơn 50 là: ' + count;

}

function Bai6() {
    let numbers_6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number_6 = parseInt(document.getElementById('number_6').value);

    if (numbers_6.includes(number_6)) {
        document.getElementById("result_bai_6").innerText = 'V is in the array';
    } else {
        document.getElementById("result_bai_6").innerText = 'V is in not in the array';
    }
}

function Bai7() {
    let numbers_7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number_7 = parseInt(document.getElementById('number_7').value);

    if (numbers_7.includes(number_7)) {
        for (let i = 0; i < numbers_7.length - 1; i++) {
            if (numbers_7[i] == number_7) {
                numbers_7.splice(i, 1);
            }
        }
        document.getElementById("result_bai_7").innerText = number_7 + ' có trong phần tử nên bị xoá và giá trị còn lại là: ' + numbers_7;
    } else {
        document.getElementById("result_bai_7").innerText = number_7 + ' không thuộc phần tử của mảng';
    }
}


let numbers_8 = [];

function Bai8() {
    let number_8 = parseInt(document.getElementById('number_8').value);

    if (numbers_8.length <= 10) {
        numbers_8.push(number_8);
        numbers_8.sort((a, b) => b - a);
        document.getElementById("result_bai_8").innerText = 'Đã nhập ' + number_8 + " các phần tử đã sắp xếp là: " + numbers_8;
    } else {
        document.getElementById("result_max").innerText = ' Đã đủ 10 phần tử';
    }
}

let numbers_a = [];
let numbers_b = [];
let numbers_c = [];

function Bai9() {
    let number_a = parseInt(document.getElementById('number_a').value);
    let number_b = parseInt(document.getElementById('number_b').value);

    if (!isNaN(number_a) && !isNaN(number_b)) {

        if (numbers_a.length <= 10) {
            numbers_a.push(number_a);
            document.getElementById("result_a").innerText = 'Đã nhập ' + number_a + " các phần tử mảng a là: " + numbers_a;
        } else {
            alert(' Đã đủ 10 phần tử a');
        }

        if (numbers_b.length <= 10) {
            numbers_b.push(number_b);
            document.getElementById("result_b").innerText = 'Đã nhập ' + number_b + " các phần tử mảng b là: " + numbers_b;
        } else {
            alert(' Đã đủ 10 phần tử b');
        }
    } else {
        alert('Vui lòng nhập đủ 2 số');
    }


    numbers_c = numbers_a.concat(numbers_b);
    document.getElementById("result_c").innerText = " các phần tử mảng a và b là: " + numbers_c;
}