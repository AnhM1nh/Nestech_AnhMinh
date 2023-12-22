function buttonBai1() {
    let numberA = parseInt(document.getElementById('number_a').value);
    let numberB = parseInt(document.getElementById('number_b').value);

    if (numberA % numberB == 0) {
        document.getElementById('result_1').innerHTML = ('- A chia hết cho B');
    } else {
        document.getElementById('result_1').innerHTML = ('- A không chia hết cho B');
    }
}

function buttonBai2() {
    let ageStudent = parseInt(document.getElementById('age_student').value);

    switch (ageStudent) {
        case 15:
        case 16:
            document.getElementById('result_2').innerHTML = ('- Học sinh đủ tuổi vào lớp 10');
            break;
        default:
            document.getElementById('result_2').innerHTML = ('- Học sinh không đủ tuổi vào lớp 10');

    }
}

function buttonBai3() {
    let integer = parseInt(document.getElementById('integer').value);
    let isIntegerNumber = Number.isInteger(integer);

    if (isIntegerNumber) {
        if (integer < 0) {
            document.getElementById('result_3').innerHTML = '- Số ' + integer + ' nhỏ hơn 0. ';
        } else {
            document.getElementById('result_3').innerHTML = ('- Số ' + integer + ' lớn hơn 0.');
        }
    } else {
        document.getElementById('result_3').innerHTML = ('- Vui lòng nhập số nguyên');

    }
}

function buttonBai4() {
    let integerA = parseInt(document.getElementById('integer_a').value);
    let integerB = parseInt(document.getElementById('integer_b').value);
    let integerC = parseInt(document.getElementById('integer_c').value);

    let isIntA = Number.isInteger(integerA);
    let isIntB = Number.isInteger(integerB);
    let isIntC = Number.isInteger(integerC);

    if (isIntA && isIntB && isIntC) {
        let maxValue = Math.max(integerA, integerB, integerC);
        document.getElementById('result_4').innerHTML = "Giá trị lớn nhất trong ba số là: " + maxValue;
    } else {
        document.getElementById('result_4').innerHTML = "Vui lòng nhập số nguyên.";
    }
}

function buttonBai5() {
    let pointA = parseInt(document.getElementById('point_a').value);
    let pointB = parseInt(document.getElementById('point_b').value);
    let pointC = parseInt(document.getElementById('point_c').value);

    let totalPoint = ((pointA + pointB + pointC) / 3);
    if (totalPoint >= 8) {
        document.getElementById('result_5').innerHTML = "Tổng điểm trung bình là: " + totalPoint + " Là học sinh Giỏi.";
    } else if (totalPoint >= 6.5) {
        document.getElementById('result_5').innerHTML = "Tổng điểm trung bình là: " + totalPoint + " Là học sinh Khá.";
    } else if (totalPoint >= 3.5) {
        document.getElementById('result_5').innerHTML = "Tổng điểm trung bình là: " + totalPoint + " Là học sinh Trung Bình.";
    } else {
        document.getElementById('result_5').innerHTML = "Tổng điểm trung bình là: " + totalPoint + " Không đậu.";
    }
}

function buttonBai6() {
    let percentNumber = parseInt(document.getElementById('percent_number').value);
    let profitFigure = parseInt(document.getElementById('profit_figure').value);

    let totalMoney = profitFigure * (percentNumber / 100);

    document.getElementById('result_6').innerHTML = "Tổng tiền hoa hồng nhận được là: " + totalMoney;

}

function buttonBai7() {
    let totalNumber = parseInt(document.getElementById('total_number').value);
    let netWork = document.getElementById('net_work').value;

    let netWorkMoney = 0;

    if (netWork === "mobifone") {
        netWorkMoney = 1580;
    }
    if (netWork === "vinaphone") {
        netWorkMoney = 1180;
    }

    let totalNetWork = totalNumber * netWorkMoney;

    document.getElementById('result_7').innerHTML = "Tổng tiền là: " + totalNetWork;



}