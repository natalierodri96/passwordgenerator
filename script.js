// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var confirmLength;
var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArr = confirmUpper.split("");
var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var lowerArr = confirmLower.split("");
var confirmNumber = "1234567890";
var numberArr = confirmNumber.split("");
var confirmChar = "~!@#$%^&*(_)=+-[\]{|};:,./?";
var charArr = confirmChar.split("");
var confirmPrompt = [];
var charParameters = [];

function generatePassword () {

  var confirmLength = (prompt("Choose between 8-128 characters"));
  if (confirmLength >= 8 && confirmLength <=128) {
    alert("Password will contain" + confirmLength + "characters");
  } else {
    alert("Select between 8-128");
    return;
  }

  confirmUpper = confirm("OK to confirm uppercase characters");
  if (confirmUpper === true) {
    charParameters = charParameters.concat("uppercase");
    console.log("uppercase");
    confirmPrompt = confirmPrompt.concat(upperArr);
  }
   
  confirmLower = confirm("OK to confirm lowercase characters");
  if (confirmLower === true) {
    charParameters = charParameters.concat("lowercase");
    console.log("lowercase");
    confirmPrompt = confirmPrompt.concat(lowerArr);
  }
 confirmNumber = confirm ("Ok to confirm number");
 if (confirmNumber === true) {
   charParameters = charParameters.concat("numbers");
   console.log("numbers");
   confirmPrompt = confirmPrompt.concat (numberArr);
 }

 confirmChar = confirm("OK to confirm characters");
 if (confirmChar === true) {
   charParameters = charParameters.concat("characters");
   console.log("characters");
   confirmPrompt = confirmPrompt.concat(charArr);
 }

 if (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmChar === false) {
 alert("please select at least one option");
 return;
 } else {
   alert("Password will contain" + charParameters + ".");
}
var password ="";
for (var i = 1; i <= confirmLength; i++) {
  var randomPass = confirmPrompt[Math.floor(Math.random() * confirmPrompt.length)];
  password = password + randomPass;
  return password;
}
}