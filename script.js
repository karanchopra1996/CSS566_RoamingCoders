const targetWord = "apple";
let remainingGuesses = 5;

function checkGuess() {
    const inputField = document.getElementById("inputField");
    const guessWord = inputField.value.toLowerCase();
    const resultText = document.getElementById("result");
    const checkButton = document.getElementById("wordle-btn");

    let hintText = "";
    let incorrectPositions = 0;
    let matchedPositions = [];
    let unmatchedGuess = [];
    let unmatchedTarget = [];

    if (guessWord.length !== targetWord.length) {
        resultText.textContent = "Incorrect guess. Guesses must be " + 
        targetWord.length + " characters long. ";
        resultText.style.color = "red";
        inputField.value = "";
        return;
    }

    for (let i = 0; i < targetWord.length; i++) {
        if (guessWord[i] === targetWord[i]) {
            matchedPositions.push(i);
        } else {
            unmatchedGuess.push(guessWord[i]);
            unmatchedTarget.push(targetWord[i]);
        }
    }

    for (let i = 0; i < targetWord.length; i++) {
        if (matchedPositions.includes(i)) {
            hintText += '<span class="green-letter">' + guessWord[i] + '</span>';
        }
        else if (unmatchedTarget.includes(guessWord[i])) {
            incorrectPositions++;
            hintText += '<span class="yellow-letter">' + guessWord[i] + '</span>';
            const charIndex = unmatchedGuess.indexOf(guessWord[i]);
            unmatchedGuess = unmatchedGuess.slice(0, charIndex).concat(unmatchedGuess.slice(charIndex + 1));
            
            const wordIndex = unmatchedTarget.indexOf(guessWord[i]);
            unmatchedTarget = unmatchedTarget.slice(0, wordIndex).concat(unmatchedTarget.slice(wordIndex + 1));
        }
        else {
            hintText += '<span class="grey-letter">' + guessWord[i] + '</span>';
        }
    }

    if (matchedPositions.length === targetWord.length) {
        resultText.innerHTML = "Congratulations! You guessed the word!";
        resultText.style.color = "green";
        inputField.disabled = true;
        checkButton.disabled = true;
    } else if (remainingGuesses > 1) {
        remainingGuesses--;
        resultText.innerHTML =
            "Incorrect guess. You have " + remainingGuesses +
            " guesses remaining.<br>Correct positions: " + matchedPositions.length +
            ".<br>Letters with incorrect position: " + incorrectPositions +
            ".<div  style='padding-top:10px;'>Hint: " + hintText + "</div>";
        resultText.style.color = "red";
        inputField.value = "";
    } else {
        resultText.innerHTML =
            "Out of guesses. <br>The target word was: " + 
            targetWord + ".<br> Better luck next time!";
        resultText.style.color = "red";
        inputField.disabled = true;
        checkButton.disabled = true;
    }

    inputField.value = "";
}