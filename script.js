// Assignment code here
// WINDOW PROMPTS
var numberCharacters = parseInt(window.prompt("how many characters would you like your password to contain?"));
if (numberCharacters < 8) {
    numberCharacters = 8;
}

if (numberCharacters > 128) {
    numberCharacters = 128;
}

var specialCharacters = window.confirm("click OK to confirm including special characters.");
// console.log()
// if (specialCharacters === true) {


var numericCharacters = window.confirm("click OK to confirm including numeric characters.");
// console.log()
// if (numericCharacters === true) {


var lowerCase = window.confirm("click OK to confirm including lower case characters.");
// console.log()
// if (lowerCase === true) {


var upperCase = window.confirm("click OK to confirm including upper case characters.");
// console.log()
// if (upperCase === true) {


//ARRRAYS
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "";

    var i;
    for (i = 0; i < numberCharacters; i++) {
        password += getRandomSpecialCharacter()
    }

    return password;

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function getRandomSpecialCharacter() {
    var index = Math.floor(Math.random() * specialCharacters.length - 1) + 1;
    return specialCharacters[index];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);