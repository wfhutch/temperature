/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

var tempInput = document.getElementById("tempField");
var newTemp = document.getElementById("answer");

function toCelsius (temp) {
  return Math.round((temp  -  32) * 5 / 9);
}

function toFahrenheit (temp) {
  return Math.round(temp * 9 / 5 + 32);
}

function clearInput() {
  return (tempInput.value = "");
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (e) {
  var optionChosen = document.getElementsByName("conversion_type");
    for (i = 0; i < optionChosen.length; i++) {

      if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
        var fahAnswer = toFahrenheit(tempInput.value);
        newTemp.innerHTML = tempInput.value + "&deg" +" celsius converts to " + fahAnswer + "&deg" + " fahrenheit.";
        clearInput();
      }

      if (optionChosen[i].checked && optionChosen[i].value === 'fahrenheit') {
        var celAnswer = toCelsius(tempInput.value);
        newTemp.innerHTML = tempInput.value + "&deg" + " fahrenheit converts to " + celAnswer + "&deg" + " celsius.";
        clearInput();
      }  
    }  
  }

  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;
