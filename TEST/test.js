function reverse(text) {
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].split('').reverse().join('');
    }
    return text;
}
let text = ['anh', 'minh'];
let result = reverse(text);
console.log(result);