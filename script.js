// Assignment code here
// WINDOW PROMPTS
var numberCharacters = parseInt(window.prompt("how many characters would you like your password to contain?"));
if (numberCharacters < 8) {
    numberCharacters = 8;
}

if (numberCharacters > 128) {
    numberCharacters = 128;
}

var wantsSpecialCharacters = window.confirm("click OK to confirm including special characters.");

var wantsNumericCharacters = window.confirm("click OK to confirm including numeric characters.");

var wantsLowerCase = window.confirm("click OK to confirm including lower case characters.");

var wantsUpperCase = window.confirm("click OK to confirm including upper case characters.");

//ARRRAYS
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "";

    // Start of pw generations
    for (var i = 0; i < numberCharacters; i++) {
        if (wantsSpecialCharacters === true) {
            password += getRandomSpecialCharacter();
            continue;
        } else if (wantsNumericCharacters === true) {
            password += getNumericCharacters();
            continue;
        } else if (wantsLowerCase === true) {
            password += getLowerCase();
            continue;
        } else if (wantsUpperCase === true) {
            password += getUpperCase();
            continue;
        }
    }

    // End of pw generation

    // Return fully generated password
    return password;
}

// Write password to the #password input
function getRandomSpecialCharacter() {
    var index = Math.floor(Math.random() * specialCharacters.length - 1) + 1;
    return specialCharacters[index];
}

function getNumericCharacters() {
    var index = Math.floor(Math.random() * numericCharacters.length - 1) + 1;
    return numericCharacters[index];
}

function getLowerCase() {
    var index = Math.floor(Math.random() * lowerCase.length - 1) + 1;
    return lowerCase[index];
}

function getUpperCase() {
    var index = Math.floor(Math.random() * upperCase.length - 1) + 1;
    return upperCase[index];
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);