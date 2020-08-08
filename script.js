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
var uppArr = confirmUpper.split("");
var confirmLower = "abcdefghijklmnopqrstuv"
var lowArr = confirmLower.split("");
var confirmNumber = "1234567890";
var numbArr = confirmNumber.split("");
var confirmChar = "!@#$%^&*()_+=:;'{()}~/,.<>"
var charArr = confirmChar.split("");
var confirmPrompt = [];
var chParameters = [];

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
    chParameters = chParameters.concat("uppercase");
    console.log("uppercase");
    confirmPrompt = confirmPrompt.concat(uppArr);
  }
  
  confirmLower = confirm("OK to confirm lowercase characters");
  if (confirmLower === true) {
    chParameters = chParameters.concat("lowercase");
    console.log("lowercase");
    confirmPrompt = confirmPrompt.concat(lowArr);
  }

confirmNumber = confirm("OK to confirm numbers");
if (confirmNumber === true) {
  chParameters =chParameters.concat("numbers");
  console.log("numbers");
  confirmPrompt = confirmPrompt.concat(numbArr)
}

confirmChar = confirm("OK to confirm characters");
if (confirmChar ===true) {
  chParameters = chParameters.concat("characters");
  console.log("characters");
  confirmPrompt = confirmPrompt.concat(charArr);
}

if (confirmUpper === false && confirmLower === false && 
  confirmNumber === false && confirmChar === false) {
    alert("Please select at least one option");
    return;
  } else {
    alert("Password will contain" + chParameters + ".");
  }

  var password = "";
    for (var i = 1; i <= confirmLength; i++) {
     var randomPass = confirmPrompt[Math.floor(Math.random()* confirmPrompt.length)];
      password = password + randomPass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);