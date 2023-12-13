function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerHTML = amount;
    }
    if (fromCurrency == "vnd" && toCurrency == "usd") {
        document.getElementById('result').innerHTML = "Result: " +
            amount / 24281 + " USD";
    }
    if (fromCurrency == "usd" && toCurrency == "vnd") {
        document.getElementById('result').innerHTML = "Result: " +
            amount * 24281 + " VND";
    }

    event.preventDefault();
}