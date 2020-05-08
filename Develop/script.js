// Array of special characters to be included in password
let specialCharacters = [
  “@”,
  “%”,
  “+”,
  “\\“,
  “/”,
  “’”,
  “!”,
  “#”,
  “$”,
  “^”,
  “?”,
  “:”,
  “,”,
  “)”,
  “(”,
  “}”,
  “{”,
  “]”,
  “[”,
  “~”,
  “-”,
  “_”,
  “.”,
];
// Array of numeric characters to be included in password
let numericCharacters = [
  “0",
  “1”,
  “2",
  “3”,
  “4",
  “5”,
  “6",
  “7”,
  “8",
  “9”,
];
// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  “a”,
  “b”,
  “c”,
  “d”,
  “e”,
  “f”,
  “g”,
  “h”,
  “i”,
  “j”,
  “k”,
  “l”,
  “m”,
  “n”,
  “o”,
  “p”,
  “q”,
  “r”,
  “s”,
  “t”,
  “u”,
  “v”,
  “w”,
  “x”,
  “y”,
  “z”,
];
// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  “A”,
  “B”,
  “C”,
  “D”,
  “E”,
  “F”,
  “G”,
  “H”,
  “I”,
  “J”,
  “K”,
  “L”,
  “M”,
  “N”,
  “O”,
  “P”,
  “Q”,
  “R”,
  “S”,
  “T”,
  “U”,
  “V”,
  “W”,
  “X”,
  “Y”,
  “Z”,
];
// Write password to the #password input
function passwordSelection() {
  let allCharacters = [];
  do {
    let specialChars = confirm(
      “Click OK to confirm including special characters”
    );
    let numericChars = confirm(
      “Click OK to confirm including numeric characters”
    );
    let lowerChars = confirm(
      “Click OK to confirm including lowercase characters”
    );
    let upperChars = confirm(
      “Click OK to confirm including uppercase characters”
    );
    if (specialChars) {
      allCharacters.push(...specialCharacters);
      console.log(...specialCharacters);
    }
    if (numericChars) {
      allCharacters.push(...numericCharacters);
      console.log(...numericCharacters);
    }
    if (lowerChars) {
      allCharacters.push(...lowerCasedCharacters);
      console.log(...lowerCasedCharacters);
    }
    if (upperChars) {
      allCharacters.push(...upperCasedCharacters);
      console.log(...upperCasedCharacters);
    }
    if (allCharacters.length < 1) {
      alert(“You need to select at least one!“);
    }
  } while (allCharacters.length < 1)
  return allCharacters;
}
function generatePassword() {
  // Prompt user for password
  let length;
  let lengthCheck;
  do {
    length = parseInt(prompt(“How long would you like your password to be (8 - 128 characters)?“));
    lengthCheck = length > 7 && length < 129;
    if (!length) {
      alert(“That is not a valid number, please try again”);
      return “”;
    }
    if (!lengthCheck) {
      alert(“Invalid length”);
    }
  } while (!lengthCheck);
  //Creates desired character array
  let charSelect = passwordSelection();
  let password = “”;
  //Will be used to validate that generated password contains at least one of each specified characters
  let numericBool;
  let lowerBool;
  let upperBool;
  let specialBool;
  do {
    numericBool = true;
    lowerBool = true;
    upperBool = true;
    specialBool = true;
    /*
    Gets random characters from desired character array.
    Gives the number of characters equal to the requested length
    */
    for (let i = 0; i < length; i++) {
      password += getRandom(charSelect);
    }
    /*
    This checks to see if a certain character is in the
    desired character array and if so will check that the password contains at least
    one character of that character type (numeric, lower, upper, special)
    */
    if (charSelect.indexOf(‘0’) !== -1) {
      numericBool = numericCharacters;
    }
    if (charSelect.indexOf(‘a’) !== -1) {
      lowerBool = lowerCasedCharacters;
    }
    if (charSelect.indexOf(‘A’) !== -1) {
      upperBool = upperCasedCharacters;
    }
    if (charSelect.indexOf(‘!’) !== -1) {
      specialBool = specialCharacters;
    }
  }
  while (
    !(numericBool &&
      lowerBool &&
      upperBool &&
      specialBool)
  )
  return password;
}
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
// Assignment Code
let generateBtn = document.querySelector(“#generate”);
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector(“#password”);
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener(“click”, writePassword);

