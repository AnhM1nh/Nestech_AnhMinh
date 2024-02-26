function isPalindrome(s) {
    s = s.toLowerCase();
    console.log(s);
    if (s.length <= 1) {
        return true;
    }

    if (s[0] === s[s.length - 1]) {
        return isPalindrome(s.slice(1, -1));
    } else {
        return false;
    }
}

function checkPalindrome() {
    let text_test = document.getElementById("text_test").value;
    let result = document.getElementById("result");

    if (isPalindrome(text_test)) {
        result.innerText = "True";
    } else {
        result.innerText = "False"
    }

}