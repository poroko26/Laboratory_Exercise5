let inputString1 = prompt("Enter the first string:");
let inputString2 = prompt("Enter the second string:");

let concatenatedString = inputString1 + inputString2;

let lengthOfInputString1 = inputString1.length;
let upperCasedString2 = inputString2.toUpperCase();
let lowerCasedConcatenated = concatenatedString.toLowerCase();
let subStringOfConcatenated = concatenatedString.substring(1, 4); 

let interpolatedResult = `${inputString1} and ${inputString2} are concatenated to form: ${concatenatedString}`;

let areStringsEqual = (inputString1 === inputString2) ? "The strings are equal." : "The strings are not equal.";

let splitConcatenatedString = concatenatedString.split(" "); 

console.log("Concatenated String:", concatenatedString);
console.log("Length of InputString1:", lengthOfInputString1);
console.log("Uppercase String2:", upperCasedString2);
console.log("Lowercase Concatenated:", lowerCasedConcatenated);
console.log("Substring of Concatenated:", subStringOfConcatenated);
console.log("Interpolated String:", interpolatedResult);
console.log("String Comparison:", areStringsEqual);
console.log("Split Concatenated String:", splitConcatenatedString);
