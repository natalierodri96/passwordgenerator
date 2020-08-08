// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

  passwordText.value = password;

}

var confirmLength;
var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperArr = confirmUpper.split("");
var confirmLower = "abcdefghijklmnopqrstuv"
var lowerArr = confirmLower.split("");
var confirmNumber = "1234567890";
var numberArr = confirmNumber.split("");
var confirmChar = "!@#$%^&*()_+=:;'{()}~/,.<>"
var charArr = confirmChar.split("");
var confirmPrompt = [];
var charParameters = [];

function generatePassword() {

  var confirmLength = (prompt("Choose password length between 8-128"));
  
  if (confirmLength >= 8 && confirmLength <=128) {
    alert("Password will contain" + confirmLength + "  characters.");
    console.log(confirmLength);
  } else {
    alert("Select between 8-128");
    return;
  }
  confirmUpper = confirm("OK to confirm UPPERCASE characters");

  if (confirmUpper === true) {
    charParameters
  }


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


