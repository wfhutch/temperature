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

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (e) {

  if (document.getElementById("celsiusButton") === true); {
    var fahtemp = toFahrenheit(tempInput.value);
    newTemp.innerHTML = "Temperature in fahrenheit = " + fahtemp + "&deg";
    }
    if (document.getElementById("fahrenheitButton") === true); {
      var celsiusTemp = toCelsius(tempInput.value);
      newTemp.innerHTML = "Temperature in celsius = " + celsiusTemp + "&deg";
    }
  }

//THIS WORKS BUT HAVE TO REFRESH PAGE EVERY TIME.  NEED TO FIX SO THAT DOESN'T HAPPEN
//TRY TO FIGURE OUT HOW TO USE EXISTING TEMPLATE.


  // {
  //   document.getElementById("answer").innerHTML = "Converts to " + toFahrenheit(tempInput) + " degrees Fahrenheit";
  //   } else {
  //   document.getElementById("answer").innerHTML = "Converts to " + toCelsius(tempInput) + " degrees Celsius";
  //   }
  // }

  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  // var optionChosen = document.getElementsByName("conversion_type");

  // for loop
    // if (?.checked && ?.value === 'celsius') {

    //}
  // end for loop


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;
