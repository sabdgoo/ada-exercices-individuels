function didIWin(guessNumberPlayer2, enterNumber1ByPlayer1) {
    console.log ("player2")
    console.log (guessNumberPlayer2)
    console.log ("player1")
    console.log (enterNumber1ByPlayer1)
    if (guessNumberPlayer2 === enterNumber1ByPlayer1) { 
        alert("Bravo! You guessed the number.")
        console.log('bravo')
        return true
    }
    else {
        alert("Try another number between 0-50")  
        console.log('try again')
        return false
    }    
}

function player1() {
    let enterNumber1ByPlayer1 = prompt ("Define number between 0-50","Enter number here");
    return enterNumber1ByPlayer1
}

function player2() {
    let guessNumberPlayer2 = prompt("Please guess a number between 0-50", "Enter number here");
    return guessNumberPlayer2
}

function gamePlay() {  

    let b 

    do {
        b = player1()
        console.log(b)
        console.log (((b > 50 || (b <0))))
        
    } while ((b > 50 || (b <0))) ;
    
    //(guessNumberPlayer2 != enterNumber1ByPlayer1);
 

    let a

    do {
        a = player2()
    }
    while (didIWin(a, b) === false)
}


gamePlay()


