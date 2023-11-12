//Request User Parameters Fuction - returns an object with selected parameters as keys
function getParameters(length, lower, upper, numbers, symbols) {
  //create the object with keys but no values yet
  var pwParameters = { length, lower, upper, numbers, symbols }
  //force user to set password length between 8-128 characters
  pwParameters.length = prompt('Choose a password length from 8 to 128 characters:');
  var isLongEnough = false;
  while (isLongEnough == false) {
    if (pwParameters.length < 8 || pwParameters.length > 128) {
      pwParameters.length = prompt('Your password length must be between 8 to 128 characters.\nPlease select password length (8-128):');
    } else {
      isLongEnough = true;
    }
  }
  //user picks what character types to use in password - force user to select at least one character type
  var minCharTypes = 0;
  while (minCharTypes == 0) {
    if (pwParameters.lower = confirm('Would you like to include lowercase letters in your password?\nClick OK for Yes or Cancel for No.')) {
      minCharTypes++;
    }
    if (pwParameters.upper = confirm('Would you like to include uppercase letters in your password?\nClick OK for Yes or Cancel for No.')) {
      minCharTypes++;
    }
    if (pwParameters.numbers = confirm('Would you like to include numbers in your password?\nClick OK for Yes or Cancel for No.')) {
      minCharTypes++;
    }
    if (pwParameters.symbols = confirm('Would you like to include symbols in your password?\nClick OK for Yes or Cancel for No.')) {
      minCharTypes++;
    }
    if (minCharTypes == 0) {
      alert('You must select at least one character type for your password.');
    }
  }

  return pwParameters;
}

//calls getParameters function and uses inputs to generate random password according to chosen parameters
function generatePassword() {
  var parameters = getParameters(); //calls function getting user selected password parameters storing them in object "parameters"
  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numChars = '013456789';
  var symbChars = '~!@#$%^&*()-_=+`[{]};:<>?/.,';
  var chars = '';
  if (parameters.lower) {
    chars += lowerChars;
  }
  if (parameters.upper) {
    chars += upperChars;
  }
  if (parameters.numbers) {
    chars += numChars;
  }
  if (parameters.symbols) {
    chars += symbChars;
  }

console.log(chars);

  //random string generator - code from https://attacomsian.com/blog/javascript-generate-random-string
  var password = '';
  for (let i = 0; i < parameters.length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
