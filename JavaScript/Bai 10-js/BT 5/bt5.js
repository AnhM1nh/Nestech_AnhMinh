function Bai1() {
    let number_bai_1 = parseInt(document.getElementById("number_bai_1").value);
    document.getElementById("result_bai_1").innerText = "Kết quả là: " + number_bai_1 * number_bai_1;
}

function Bai2() {
    let number_bai_2 = parseInt(document.getElementById("number_bai_2").value);
    document.getElementById("result_bai_2a").innerText = "Diện tích bằng: " + Math.Pi * (number_bai_2 * number_bai_2);
    document.getElementById("result_bai_2b").innerText = "Chu vi bằng: " + Math.Pi * (number_bai_2 * 2);

}