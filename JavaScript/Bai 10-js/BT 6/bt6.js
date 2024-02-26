function Bai1() {
    let number_bai_1 = parseInt(document.getElementById("number_bai_1").value);
    document.getElementById("result_bai_1").innerText = "Kết quả là: " + number_bai_1 * number_bai_1;
}

function Bai2() {
    let number_bai_2 = parseInt(document.getElementById("number_bai_2").value);
    document.getElementById("result_bai_2a").innerText = "Diện tích bằng: " + Math.PI * (number_bai_2 * number_bai_2);
    document.getElementById("result_bai_2b").innerText = "Chu vi bằng: " + Math.PI * (number_bai_2 * 2);

}

function Bai3() {
    let number_bai_3 = parseInt(document.getElementById("number_bai_3").value);

    let j = number_bai_3;
    for (let i = 1; i < number_bai_3; i++) {
        j = j * i;
        document.getElementById("result_bai_3").innerText = "Kết quả là: " + j;
    }
}

function Bai4() {
    let text_bai_4 = document.getElementById("text_bai_4").value;

    for (i = 0; i < text_bai_4.length; i++) {
        if (!isNaN(text_bai_4[i])) {
            document.getElementById("result_bai_4").innerText = "True";
        } else {
            document.getElementById("result_bai_4").innerText = "False";

        }
    }

}

function Bai5() {
    let number_bai_5a = parseInt(document.getElementById("number_bai_5a").value);
    let number_bai_5b = parseInt(document.getElementById("number_bai_5b").value);
    let number_bai_5c = parseInt(document.getElementById("number_bai_5c").value);

    let result_bai_5;

    if (number_bai_5a >= number_bai_5b && number_bai_5a >= number_bai_5c) {
        result_bai_5 = number_bai_5a;
    } else if (number_bai_5b >= number_bai_5a && number_bai_5b >= number_bai_5c) {
        result_bai_5 = number_bai_5b;
    } else {
        result_bai_5 = number_bai_5c;
    }

    document.getElementById("result_bai_5").innerHTML = "Số nguyên nhỏ nhất là: " + result_bai_5;
}

function Bai6() {
    let number_bai_6 = parseInt(document.getElementById("number_bai_6").value);

    if (number_bai_6 > 0) {
        document.getElementById("result_bai_6").innerText = "True";
    } else {
        document.getElementById("result_bai_6").innerText = "False";
    }

}

function Bai7() {
    let number_bai_7a = parseInt(document.getElementById("number_bai_7a").value);
    let number_bai_7b = parseInt(document.getElementById("number_bai_7b").value);

    [number_bai_7a, number_bai_7b] = [number_bai_7b, number_bai_7a];

    document.getElementById("result_bai_7").innerText = "Kết quả là: " + number_bai_7a + " và " + number_bai_7b;

    return [number_bai_7a, number_bai_7b];
}

numbers_bai_8 = [];

function Bai8() {
    let number_bai_8 = parseInt(document.getElementById("number_bai_8").value);

    if (isNaN(number_bai_8)) {
        document.getElementById("result_bai_8").innerText = "Vui lòng nhập giá trị";
    } else {
        numbers_bai_8.push(number_bai_8);
        reversedBai8 = numbers_bai_8.slice().reverse();
        document.getElementById("number_bai_8").value = "";
        document.getElementById("result_bai_8").innerText = "Kết quả là: " + reversedBai8;
    }
}

function Bai9() {
    let texts_bai_9 = ["a", "b", "c", "d", "e", "d", "f", "o"];
    let text_bai_9 = document.getElementById("text_bai_9").value.toLowerCase();

    let texts = [];
    let value = 0;
    for (i = 0; i < text_bai_9.length; i++) {
        if (texts_bai_9.includes(text_bai_9[i])) {
            texts.push(text_bai_9[i]);
            value++;
        }
    }

    if (value > 0) {
        document.getElementById("result_bai_9").innerText = "Các giá trị xuất hiện là: " + texts + " xuất hiện " + value + " lần.";
    } else {
        document.getElementById("result_bai_9").innerText = "-1";
    }

}