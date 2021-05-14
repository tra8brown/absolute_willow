// Assignment code here
// var numberCharacters = window.confirm("how many characters would you like your password to contain?");
var numberCharacters = parseInt(window.prompt("how many characters would you like your password to contain?"));

// console.log() 
// if (numberCharacters === true) {
//         window.alert();
//     } else {
//         window.alert();
//     }

var specialCharacters = window.confirm("click OK to confirm including special characters.");
// console.log()
// if (specialCharacters === true) {
//     window.alert();
// } else {
//     window.alert();
// }

var numericCharacters = window.confirm("click OK to confirm including numeric characters.");
// console.log()
// if (numericCharacters === true) {
//     window.alert();
// } else {
//     window.alert();
// }

var lowerCase = window.confirm("click OK to confirm including lower case characters.");
// console.log()
// if (lowerCase === true) {
//     window.alert();
// } else {
//     window.alert();
// }

var upperCase = window.confirm("click OK to confirm including upper case characters.");
// console.log()
// if (upperCase === true) {
//     window.alert();
// } else {
//     window.alert();
// }

//function generatePassword (passwordLength, includeNumbers) {

var numberCharacters = [];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var upperCase = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];


//function specialCharacters() {
//   const symbols = '!@#$%^&*()';
// return symbols[Math.floor(Math.random() * symbols.length)];
//}


//function numberCharacters() {
//  return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
//}


//function lowerCase() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}


//function upperCase() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}

//for (let i = 65; i < 91; i++) {
//  var specialCharacters
//var numberCharacters = String.fromCharCode(1 + );
// var lowerCase = String.fromCharCode(i + 32);
// var upperCase = String.fromCharCode(i);

//   lowerCase.push(lowerCaseLetter);
//    upperCase.push(upperCaseLetter);
//}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "temp-password";
    return password;
}

// Write password to the #password input
function writePassword() {
    // step 1 - generate password
    var password = generatePassword();

    // step 2 - get reference to TextArea box
    var passwordText = document.querySelector("#password");

    // step 3 - Set TextArea box value with new password
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);