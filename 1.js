/**JavaScript Foundation Assignment Questions*/

/**Oue1) Password Validator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleK*/


const password = "password123"; // change this to the password entered by the user
const confirmedPassword = "password123"; // change this to the confirmed password entered by the user

if (password === confirmedPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}

/** Output: Password Matched. Password validation Successful.*/