// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variables values:
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  // Prompts for user input
  var passwordLength = window.prompt("Choose a length between 8 and 128 characters");
  // No value entered or cancel clicked - returns to main screen
  if (!passwordLength) {
    window.alert("This needs a value. Click 'OK' and try again");
    return;
    // Incorrect value entered. Will return to main screen
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Value must be between 8 and 128. Click 'OK' and try again");
    return;
  }

    // Generating password using concat method- pull values from the arrays 
  var availableCharacters = []
  var isLowercaseRequired = window.confirm("Will this contain lowercase letters?");
  if (isLowercaseRequired) {
    availableCharacters= availableCharacters.concat(letterLower)
  }
  var isUppercaseRequired = window.confirm("Will this contain uppercase letters?");
  if (isUppercaseRequired) {
    availableCharacters = availableCharacters.concat(letterUpper)
  }
  var isNumbersRequired = window.confirm("Will this contain numbers?");
  if (isNumbersRequired) {
    availableCharacters = availableCharacters.concat(number)
  }
  var isSpecialCharacterRequired = window.confirm("Will this contain special characters?");
  if (isSpecialCharacterRequired) {
    availableCharacters = availableCharacters.concat(specialCharacter)
  }

 // If no conditions were chosen - provide an alert
  if (!isLowercaseRequired && !isNumbersRequired && !isSpecialCharacterRequired && !isUppercaseRequired) {
    window.alert("Choose at least one type")
  }

  // Randomly select variables
  var passwordArray = []

  for (var i = 0; i < passwordLength; i++) {
    var character = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    passwordArray.push(character);
  }
  
// Joins the password array and converts to a string without commas
  function generatePassword(unformatedPassword) {
    return unformatedPassword.join("");
  }

//Generate password
  var password = generatePassword(passwordArray);
  var passwordText = document.querySelector("#password"); {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 