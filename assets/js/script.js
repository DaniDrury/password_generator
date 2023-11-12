// Assignment Code

//Request User Parameters - function returns an object with parameters as keys
function getParameters(length, lower, upper, numbers, symbols) {
  
  //create the object with keys but no values yet
  var pwParameters = {length, lower, upper, numbers, symbols}

  pwParameters.length = prompt('Choose a password length from 8 to 128 characters:');
  var isLongEnough = false;
  while (isLongEnough == false) {
    if (pwParameters.length < 8 || pwParameters.length > 128) {
      pwParameters.length = prompt('Your password length must be between 8 to 128 characters.\nPlease select password length (8-128):');
    } else {
      isLongEnough = true;
    }
  }
  pwParameters.lower = confirm('Would you like to include lowercase letters in your password?\nClick OK for Yes or Cancel for No');
  pwParameters.upper = confirm('Would you like to include uppercase letters in your password?\nClick OK for Yes or Cancel for No');
  pwParameters.numbers = confirm('Would you like to include numbers in your password?\nClick OK for Yes or Cancel for No');
  pwParameters.symbols = confirm('Would you like to include symbols in your password?\nClick OK for Yes or Cancel for No');
  return pwParameters;
}

//Request parameters from user and generate a random password
function generatePassword() {
  var parameters = getParameters(); //calls function getting user selected password parameters storing them in object "parameters"
  //For loop that randomly selects if the character will be a lowercase letter, uppercase letter, number or symbol, then randomly selects a
  //character of that type. Repeats equal to parameter.length
  
  // for(let i=0; i<parameters.length-1; i++) {
    
  // }

  // console.log(parameters);
  // console.log(typeof[parameters]);
  // return password; //returns the randomly generated password
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
