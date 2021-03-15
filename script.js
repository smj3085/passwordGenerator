// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("Choose a length between 8 and 128 characters");

  if (!passwordLength) {
    return;
  }

  var availableCharacters = []

  var isLowercaseRequired = window.confirm("Do you need lowercase letters?");
  if (isLowercaseRequired) {
    availableCharacters= availableCharacters.concat(letterLower)
  }

  var isUppercaseRequired = window.confirm("Do you need uppercase letters?");
  if (isUppercaseRequired) {
    availableCharacters = availableCharacters.concat(letterUpper)
  }

  var isSpecialCharacterRequired = window.confirm("Do you need special characters?");
  if (isSpecialCharacterRequired) {
    availableCharacters = availableCharacters.concat(specialCharacter)
    console.log(availableCharacters)
  }

  var isNumbersRequired = window.confirm("Do you need numbers?");
  if (isNumbersRequired) {
    availableCharacters = availableCharacters.concat(number)
  }

  // If no conditions were chosen - provide an alert
  if (!isLowercaseRequired && !isNumbersRequired && !isSpecialCharacterRequired && !isUppercaseRequired) {
  window.alert("Choose at least one type")
  }

  // Loop when yes to all conditions
 var passwordArray = []

  for (var i = 0; i < passwordLength; i++) {
    var character = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    passwordArray.push(character);
  }

  function generatePassword(unformatedPassword) {
    return unformatedPassword.join("");
  }

  // check if all conditions are met
  
  _.includes(passwordArray)

  // Code given
  var password = generatePassword(passwordArray);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


