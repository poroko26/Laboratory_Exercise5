let userPassword = prompt("Enter your password:");

let lengthResponse = '';
if (userPassword.length < 6) {
    lengthResponse = "Weak: Password should be at least 6 characters long.";
} else if (userPassword.length < 10) {
    lengthResponse = "Medium: Password length is acceptable.";
} else {
    lengthResponse = "Strong: Password length is good.";
}

let uppercasePattern = /[A-Z]/;
let lowercasePattern = /[a-z]/;
let numberPattern = /[0-9]/;
let specialCharPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
let hasUppercaseChar = uppercasePattern.test(userPassword);
let hasLowercaseChar = lowercasePattern.test(userPassword);
let hasNumberChar = numberPattern.test(userPassword);
let hasSpecialCharacter = specialCharPattern.test(userPassword);

let passwordStrength = '';
if (hasUppercaseChar && hasLowercaseChar && hasNumberChar && hasSpecialCharacter && userPassword.length >= 10) {
    passwordStrength = "Very Strong";
} else if ((hasUppercaseChar || hasLowercaseChar) && hasNumberChar && userPassword.length >= 8) {
    passwordStrength = "Strong";
} else if ((hasUppercaseChar || hasLowercaseChar) && userPassword.length >= 6) {
    passwordStrength = "Moderate";
} else {
    passwordStrength = "Weak";
}

console.log("Password Strength:", passwordStrength);
console.log("Feedback:", lengthResponse);
console.log("Contains Uppercase:", hasUppercaseChar);
console.log("Contains Lowercase:", hasLowercaseChar);
console.log("Contains Number:", hasNumberChar);
console.log("Contains Special Character:", hasSpecialCharacter);
