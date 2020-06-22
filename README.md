# 03 JavaScript: Password Generator
> Generate a random password!

---

## Description
The HTML & CSS create a web page that displays a card with a button that the user will click to begin the Generate Password process.


Our Javascript is laid out as such:
- 1. Created arrays of all the characters that could potentially be used for the password. (specialCharacters, numericCharacters, lowerCasedCharacters & upperCasedCharacters)
- 2. Created a function where the user will be asked to confirm what kind of characters they want to use in their generated password.
- 3. Then I created if/while statements to tell the browser what the user selected. The if statement says if the user confirms (characters) we want to push all the values of the array and assign it to the variable. So basically we collect all the possible characters the user chose for their password. 
- 4. If no character options are selected an alert will tell them they need at choose least one.

---

- 5. I created a function to prompt the user for a length of the password.. aka how many characters will this password be?
- 6. If they choose no numbers or a number less than 1, they get an alert that says the input was invalid.

---

- 7. OK, now we generate the password. We check the length & create the desired character array.
- 8. The code is then written to get random characters from the desired character array, give the number of characters equal to the requested length, and then checks to see if the password contains at least one of the character types.
---
- 9. Now we have to display the generated password to the user.


