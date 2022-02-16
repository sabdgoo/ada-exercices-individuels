function didIWin(givenNumber) {
    if (givenNumber < 22) { 
        alert("Plus grand")
        return false
    }
    else if (givenNumber > 22) { 
        alert("Plus petit")
        return false
    }
    else {
        alert("Bravo! You guessed the number.")  
        return true
    }    
}

function askNumber() {
    let givenNumber = prompt("Please provide a number", "Enter number here");
    return givenNumber
}

function gamePlay() {
    let a

    do {
        a = askNumber()
    }
    while (didIWin(a) === false)
}

gamePlay()