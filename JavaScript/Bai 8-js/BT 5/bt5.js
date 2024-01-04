function typeTextarea() {
    let textChange = ["", "B", "ạ", "n", " ", "t", "h", "ậ", "t", " ", "l", "à", " ", "x", "i", "n", "h", " ", "đ", "ẹ",
        "p"
    ];
    let text = document.getElementById("text").value;
    let index = text.length;
    let texts = "";
    console.log(index);

    if (index >= 0) {
        for (let i = 1; i <= index; i++) {
            texts = texts + textChange[i];
            if (i == 20) {
                text = "";
                textChange == "";
            }
        }
    }

    document.getElementById("text").value = texts;
    // return false;
}