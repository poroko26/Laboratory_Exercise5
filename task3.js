let userInput = prompt("Enter a string of text:");

let charCount = userInput.length;
let wordCount = userInput.split(/\s+/).filter(word => word.length > 0).length; 
let sentenceCount = userInput.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;

let wordFreq = {};
let wordsArray = userInput.match(/\b\w+\b/g); 
if (wordsArray) {
    wordsArray.forEach(word => {
        word = word.toLowerCase();
        wordFreq[word] = (wordFreq[word] || 0) + 1;
    });
}
let mostFreqWord = '';
let maxFreq = 0;
for (let word in wordFreq) {
    if (wordFreq[word] > maxFreq) {
        mostFreqWord = word;
        maxFreq = wordFreq[word];
    }
}

let totalWordLen = wordsArray ? wordsArray.join('').length : 0;
let avgWordLen = totalWordLen / wordCount;

console.log("Number of characters:", charCount);
console.log("Number of words:", wordCount);
console.log("Number of sentences:", sentenceCount);
console.log("Most frequent word:", mostFreqWord, "with occurrence count:", maxFreq);
console.log("Average word length:", avgWordLen.toFixed(2));

