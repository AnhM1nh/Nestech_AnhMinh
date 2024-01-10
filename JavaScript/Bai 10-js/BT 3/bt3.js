function alertMessage() {
    alert('Xin chào');
}


let result_bai_2 = 0;

function Bai2() {
    let number_bai_2 = parseInt(document.getElementById('number_bai_2').value);
    if (!isNaN(number_bai_2)) {
        result_bai_2 = number_bai_2 + 1;
        document.getElementById("result_bai_2").innerText = "Kết quả là: " + result_bai_2;
    }
}

function Bai3() {
    let number_bai_3a = parseInt(document.getElementById('number_bai_3a').value);
    let number_bai_3b = parseInt(document.getElementById('number_bai_3b').value);

    if (number_bai_3a > number_bai_3b) {
        document.getElementById("result_bai_3").innerText = "Số " + number_bai_3a + " lớn hơn số " + number_bai_3b;
    } else {
        let sumBai3 = number_bai_3a + number_bai_3b;
        document.getElementById("result_bai_3").innerText = "Tổng 2 số là: " + sumBai3;
    }
}


//BAI 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    //Vị trí 1
    alert(result);
    return result;
}
result = 0;
//Vị trí 2
alert(result);
result = addNumbers();


//BAI 5

let stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let constellations = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
let constellation = constellations[i];

function Bai5() {
    let star = document.getElementById('star').value;

    if (stars.indexOf(star) >= 0) {
        for (let i = 0; i <= stars.indexOf(star); i++) {
            document.getElementById('result_bai_5').innerText = "Tên ngôi sao là: " + constellations[i];
        }
    }
}