function button_1() {
    let numberBai1 = parseInt(document.getElementById('number_bai_1').value);
    let doF = numberBai1 * (9 / 5) + 32;

    if (numberBai1 < -273) {
        document.getElementById('result_1').innerHTML = " Nhiệt độ không thể thấp hơn -273 độ. Vui lòng nhập lại !";
    } else {
        document.getElementById('result_1').innerHTML = numberBai1 + " độ C bằng: " + doF + " độ F.";
    }
}

function button_2() {
    let numberBai2 = parseInt(document.getElementById('number_bai_2').value);
    let numberFeet = numberBai2 * 3.2808;

    if (numberBai2 < 0) {
        document.getElementById('result_2').innerHTML = " Giá trị không được < 0. Vui lòng nhập lại !";
    } else {
        document.getElementById('result_2').innerHTML = numberBai2 + " mét bằng: " + numberFeet + " feet.";
    }
}

function button_3() {
    let numberBai3 = parseInt(document.getElementById('number_bai_3').value);
    let areaSquare = numberBai3 * numberBai3;

    if (numberBai3 < 0) {
        document.getElementById('result_3').innerHTML = " Giá trị không được < 0. Vui lòng nhập lại !";
    } else {
        document.getElementById('result_3').innerHTML = "Diện tích hình vuông bằng: " + areaSquare;
    }
}

function button_4() {
    let numberABai4 = parseInt(document.getElementById('number_a_bai_4').value);
    let numberBBai4 = parseInt(document.getElementById('number_b_bai_4').value);
    let rectangularArea = numberABai4 * numberBBai4;

    if (numberABai4 < 0 || numberBBai4 < 0) {
        document.getElementById('result_4').innerHTML = " Giá trị không được < 0. Vui lòng nhập lại !";
    } else {
        document.getElementById('result_4').innerHTML = "Diện tích hình vuông bằng: " + rectangularArea;
    }
}

function button_5() {
    let numberABai5 = parseInt(document.getElementById('number_a_bai_5').value);
    let numberBBai5 = parseInt(document.getElementById('number_b_bai_5').value);

    let areaOfARightTriangle = (numberABai5 * numberBBai5) / 2;

    if (numberABai5 < 0 || numberBBai5 < 0) {
        document.getElementById('result_5').innerHTML = " Giá trị không được < 0. Vui lòng nhập lại !";
    } else {
        document.getElementById('result_5').innerHTML = " Diện tích hình tam giác vuông bằng: " + areaOfARightTriangle;
    }
}

function button_6() {
    let numberABai6 = parseFloat(document.getElementById('number_a_bai_6').value);
    let numberBBai6 = parseFloat(document.getElementById('number_b_bai_6').value);

    let resultBai6 = -numberBBai6 / numberABai6;

    if (numberABai6 === 0 && numberBBai6 === 0) {
        document.getElementById('result_6').innerHTML = " Phương trình vô nghiệm !";
    } else {
        document.getElementById('result_6').innerHTML = "X bằng: " + resultBai6;
    }
}

function button_7() {
    let numberABai7 = parseFloat(document.getElementById('number_a_bai_7').value);
    let numberBBai7 = parseFloat(document.getElementById('number_b_bai_7').value);
    let numberCBai7 = parseFloat(document.getElementById('number_c_bai_7').value);

    let deltaA = numberBBai7 * numberBBai7 - 4 * numberABai7 * numberCBai7;

    if (numberABai7 === 0) {
        document.getElementById('result_7').innerHTML = " Đây không phải là chương trình căn bậc hai !";
    } else {
        if (deltaA > 0) {
            let x1A = (-numberBBai7 + Math.sqrt(deltaA) / 2 * numberABai7);
            let x2A = (-numberBBai7 - Math.sqrt(deltaA) / 2 * numberABai7);
            document.getElementById('result_7').innerHTML = "Phương trình có 2 nghiệm x1 = " + x1A + " và x2 = " + x2A;
        } else if (deltaA = 0) {
            let xA = -numberBBai7 / (2 * numberABai7);
            document.getElementById('result_7').innerHTML = " Phương trình có nghiệm kép x = " + xA;
        } else {
            document.getElementById('result_7').innerHTML = " Phương trình vô nghiệm. ";

        }
    }
}

function button_8() {
    let checkAge = parseFloat(document.getElementById('check_age').value);

    if (checkAge < 120 && 0 < checkAge) {
        document.getElementById('result_8').innerHTML = checkAge + " là tuổi của con người. ";
    } else {
        document.getElementById('result_8').innerHTML = checkAge + " không phải tuổi của con người. ";
    }

}

function button_9() {
    let triangleEdgeA = parseFloat(document.getElementById('triangle_edge_a').value);
    let triangleEdgeB = parseFloat(document.getElementById('triangle_edge_b').value);
    let triangleEdgeC = parseFloat(document.getElementById('triangle_edge_c').value);

    let triangleEdgeAB = triangleEdgeA + triangleEdgeB;
    let triangleEdgeAC = triangleEdgeA + triangleEdgeC;
    let triangleEdgeBC = triangleEdgeB + triangleEdgeC;

    if (triangleEdgeA > 0 && triangleEdgeB > 0 && triangleEdgeC > 0) {
        if (triangleEdgeAB > triangleEdgeC && triangleEdgeAC > triangleEdgeB && triangleEdgeBC > triangleEdgeA) {
            document.getElementById('result_9').innerHTML = " Ba cạnh đủ điều kiện để thành hình tam giác. ";
        } else {
            document.getElementById('result_9').innerHTML = " Không đủ điều kiện để thành hình tam giác. ";
        }
    } else {
        document.getElementById('result_9').innerHTML = " Không đủ điều kiện do có cạnh < 0 ";
    }
}

function button_10() {
    let electricity = parseFloat(document.getElementById('electricity').value);


    switch (true) {
        case electricity < 0:
            totalElectricity = "Số < 0, vui lòng nhập lại.";
            break;
        case electricity < 50:
            totalElectricity = electricity * 1.678;
            break;
        case electricity < 100:
            totalElectricity = electricity * 1.734;
            break;
        case electricity < 200:
            totalElectricity = electricity * 2.014;
        default:
            totalElectricity = electricity * 2.927;
            break;
    }
    document.getElementById('result_10').innerHTML = "Tổng tiền điện là: " + totalElectricity;
}

function button_11() {
    let personalTax = parseFloat(document.getElementById('personal_tax').value);

    switch (true) {
        case personalTax < 0:
            totalTax = "Số < 0, vui lòng nhập lại.";
            break;
        case personalTax < 5000000:
            totalTax = personalTax * 5 / 100;
            break;
        case personalTax < 10000000:
            totalTax = personalTax * 10 / 100;
            break;
        case personalTax < 18000000:
            totalTax = personalTax * 15 / 100;
            break;
        case personalTax < 32000000:
            totalTax = personalTax * 20 / 100;
            break;
        case personalTax < 52000000:
            totalTax = personalTax * 25 / 100;
            break;
        case personalTax < 80000000:
            totalTax = personalTax * 30 / 100;
            break;
        default:
            totalTax = personalTax * 35 / 100;
            break;
    }
    document.getElementById('result_11').innerHTML = "Tổng tiền thuế là: " + totalTax;
}

function button_12() {
    let totalLoanAmount = parseFloat(document.getElementById('total_loan_amount').value);
    let interestRate = parseFloat(document.getElementById('interest_rate').value);
    let month = parseFloat(document.getElementById('month').value);


    let totalMoney = totalLoanAmount * interestRate / 100 * month;
    document.getElementById('result_12').innerHTML = "Số tiền lãi là: " + totalMoney + " khi trả trong " + month + " tháng.";

}