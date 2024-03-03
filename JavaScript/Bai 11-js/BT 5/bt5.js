let Rectangle = function(length, width) {
    this.length = length;
    this.width = width;
    this.area = function() {
        return length * width;
    }
    this.perimeter = function() {
        return (length + width) * 2;
    }
}

let rectangle = new Rectangle(2, 4);
let area = rectangle.area();
let perimeter = rectangle.perimeter();

alert('Diện tích bằng : ' + area + ' và chu vi bằng: ' + perimeter);