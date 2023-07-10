function convert() {
  var input = parseFloat(document.getElementById("input").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  var convertedValue;

  if (from === "celsius") {
    if (to === "fahrenheit") {
      convertedValue = (input * 9/5) + 32;
    } else if (to === "kelvin") {
      convertedValue = input + 273.15;
    } else {
      convertedValue = input;
    }
  } else if (from === "fahrenheit") {
    if (to === "celsius") {
      convertedValue = (input - 32) * 5/9;
    } else if (to === "kelvin") {
      convertedValue = (input - 32) * 5/9 + 273.15;
    } else {
      convertedValue = input;
    }
  } else if (from === "kelvin") {
    if (to === "celsius") {
      convertedValue = input - 273.15;
    } else if (to === "fahrenheit") {
      convertedValue = (input - 273.15) * 9/5 + 32;
    } else {
      convertedValue = input;
    }
  }

  var resultElement = document.getElementById("result");
  resultElement.value =  convertedValue.toFixed(2) + " " + to;
}
