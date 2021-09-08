// get HTML elements
let typedText = document.getElementById('textInput').value
typedText = typedText.toLowerCase()
typedText = typedText.replace(/[^a-z'\s]+/g, "")

const countButton = document.getElementById('countButton')
countButton.addEventListener('click', () => {    
    letterCounter();
    wordCounter();    
});

// function to count and display the frequency of each letter
function letterCounter() {
    const letterCounts = {}

    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i]
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1
        } else {
            letterCounts[currentLetter]++
        }
    }

    for (let letter in letterCounts) {
        const span = document.createElement('span');
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById('lettersDiv');
        letters.appendChild(span);
    }

    return letterCounts
}

//function to count and display the frequency of each word
function wordCounter() {
    const wordCounts = {}
    let words = typedText.split(/\s/);

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1
        } else {
            wordCounts[currentWord]++
        }
    }

    for (let word in wordCounts) {
        const span = document.createElement('span')
        const textContent = `"${word}": ${wordCounts[word]}, `
        span.innerText = textContent
        const wordsDiv = document.getElementById('wordsDiv')
        wordsDiv.appendChild(span)
    }
    return wordCounts
}