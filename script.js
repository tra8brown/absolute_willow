// Assignment code here
var numberCharacters = window.confirm("how many characters would you like your password to contain?");
console.log()
if (numberCharacters === true) {
    window.alert();
} else {
    window.alert();
}

var specialCharacters = window.confirm("click OK to confirm including special characters.");
console.log()
if (numberCharacters === true) {
    window.alert();
} else {
    window.alert();
}

var numericCharacters = window.confirm("click OK to confirm including numeric characters.");
console.log()
if (numberCharacters === true) {
    window.alert();
} else {
    window.alert();
}

var lowerCase = window.confirm("click OK to confirm including lower case characters.");
console.log()
if (numberCharacters === true) {
    window.alert();
} else {
    window.alert();
}

var upperCase = window.confirm("click OK to confirm including upper case characters.");
console.log()
if (numberCharacters === true) {
    window.alert();
} else {
    window.alert();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "password";
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);