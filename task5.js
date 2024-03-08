let userInputString = prompt("Enter the string to be encrypted:");

function encryptWithCaesarCipher(input, shift) {
    let encryptedResult = '';
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encryptedResult += String.fromCharCode((charCode - 65 + shift) % 26 + 65); 
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedResult += String.fromCharCode((charCode - 97 + shift) % 26 + 97); 
        } else {
            encryptedResult += input[i]; 
        }
    }
    return encryptedResult;
}

function decryptWithCaesarCipher(encrypted, shift) {
    return encryptWithCaesarCipher(encrypted, (26 - shift) % 26); 
}

let shiftAmount = 3;
let encryptedText = encryptWithCaesarCipher(userInputString, shiftAmount);

console.log("Encrypted String:", encryptedText);

let decryptChoice = prompt("Do you want to decrypt the encrypted string? (y/n)").toLowerCase();
if (decryptChoice === 'y') {
    let decryptedText = decryptWithCaesarCipher(encryptedText, shiftAmount);
    console.log("Decrypted String:", decryptedText);
} else {
    console.log("Encryption complete. Exiting.");
}
