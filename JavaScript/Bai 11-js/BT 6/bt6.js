let Temperature = function(celsius) {
    this.celsius = celsius;
    this.toFahrenheit = function() {
        return celsius * 9 / 5 + 32;
    }
    this.toKenvin = function() {
        return celsius + 273.15;
    }
}

let celsiusObject = new Temperature(25);
let toFahrenheit = celsiusObject.toFahrenheit();
let toKenvin = celsiusObject.toKenvin();

alert(celsiusObject.celsius + ' độ C bằng: ' + toFahrenheit + ' độ F và ' + toKenvin + ' độ Kenvin')