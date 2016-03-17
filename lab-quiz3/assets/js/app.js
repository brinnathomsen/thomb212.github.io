var color = "blue";
var wallet = 2000;
var converted_wallet = 0;
var conversion_rate = [1.13, 0.0090, 1.4];


function convert_currency(amount, converter) {
  converted_wallet = amount / converter;
  document.getElementById("currency").innerHTML = converted_wallet;
}
