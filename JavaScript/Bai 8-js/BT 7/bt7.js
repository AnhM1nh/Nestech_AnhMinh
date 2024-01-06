// BAI 1:
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (var i in a) {
    console.log("row " + i);
    for (var j in a[i]) {
        console.log(" " + a[i][j]);
    }
}

let texts_2 = [];

function Bai2() {
    let text_2 = document.getElementById('text_2').value;

    for (i = 0; i < text_2.length; i++) {
        a = text_2[i];
        texts_2.push(a);
    }
    reverse_number_2 = texts_2.reverse().join('');
    document.getElementById('result_bai_2').innerText = "Các từ bị đảo ngược là " + reverse_number_2;
}

let texts_3 = [];

function Bai3() {
    let number_text_3 = 0;
    let text_3 = document.getElementById('text_3').value;

    for (i = 0; i < text_3.length; i++) {
        a = text_3[i];
        texts_3.push(a);

        if (!isNaN(text_3[i])) {
            number_text_3++;
        }
    }
    document.getElementById('result_bai_3').innerText = "Có " + number_text_3 + " kí tự số và dài " + text_3.length + " kí tự.";
}

let texts_4 = [];

function Bai4() {
    let number_text_4 = 0;
    let text_4 = document.getElementById('text_4').value;

    for (i = 0; i < text_4.length; i++) {
        a = text_4[i];
        texts_4.push(a);

        if (!isNaN(text_4[i])) {
            number_text_4++;
        }
    }
    result_4 = text_4.length - number_text_4;
    document.getElementById('result_bai_4').innerText = "Có " + result_4 + " kí tự chữ và dài " + text_4.length + " kí tự.";
    return;
}


// BAI 5

// text_a = ['a', 'b', 'c', 212, 'e', 'f'];
// text_b = ['a', 'b', 'c', 212, 'e', 'f'];
// text_c = ['b', 'c', 'd', 2, 'f', 'l'];

// for (i = 0; i < text_a.length; i++) {
//     if (text_a[i] == text_b[i]) {
//         console.log('2 mảng này giống nhau là: ' + text_a[i]);

//     } else {
//         console.log('2 mảng này khác nhau là: ' + text_a[i] + ' và ' + text_b[i]);

//     }
// }

// for (i = 0; i < text_a.length; i++) {
//     if (text_a[i] == text_c[i]) {
//         console.log('2 mảng này giống nhau là: ' + text_a[i]);

//     } else {
//         console.log('2 mảng này khác nhau là: ' + text_a[i] + ' và ' + text_c[i]);

//     }
// }

function Bai5() {
    let text_a = document.getElementById('text_a').value;
    let text_b = document.getElementById('text_b').value;

    if (text_a == text_b) {
        document.getElementById("result_bai_5").innerText = '2 chuỗi này giống nhau là: ' + text_a;
    } else {
        document.getElementById("result_bai_5").innerText = '2 chuỗi này khác nhau là: ' + text_a + ' và ' + text_b;
    }
}



function Bai6() {
    texts_6 = [];
    let text_6 = document.getElementById('text_6').value;

    for (i = 0; i < text_6.length; i++) {
        a = text_6[i];
        texts_6.push(a);
        if (text_6[i] == '-') {
            texts_6.splice(i, 1, '_');
        }

    }
    document.getElementById("result_bai_6").innerText = 'Các ký tự là: ' + texts_6;

}