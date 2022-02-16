function didIWin(givenNumber) {
    if (givenNumber < 22) { 
        alert("Plus grand")
    }
    else if (givenNumber > 22) { 
        alert("Plus petit")
    }
    else 
        alert("Bravo! You guessed the number.")  
}

function askNumber() {
    let givenNumber = prompt("Please provide a number", "Enter number here");
    return givenNumber
}

function gamePlay() {
    let givenNumber = askNumber()
    didIWin(givenNumber)
}

gamePlay()