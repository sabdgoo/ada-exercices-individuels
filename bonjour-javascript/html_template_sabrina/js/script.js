function askName() {
    var student_name = prompt("Please enter your name", "Your name")
    var greeting = "Yo " + student_name + ", welcome to Ada Tech School!";
    document.getElementById("Coucou").innerHTML = greeting;
}

function askBirthYear() {
    var year = prompt("Please enter your birth year", "YYYY")
    var today = new Date().getFullYear()
    var age = "You are gonna be " + (today - year) + " this year."
    document.getElementById("Age").innerHTML = age;
}

function askBirthDay() {
    var birth_day = prompt("Please enter your birth month", "YYYY-MM-DD")
    var birthDate = new Date(birth_day)
    var current_date = new Date()
    var real_bd = current_date - birthDate;
    var diffAge = (real_bd / (1000 * 60 * 60 * 24 * 365))
    var accurateAge = Math.floor(diffAge)
    var true_age = "For now, you are " + (accurateAge) + " years old."
    document.getElementById("Real").innerHTML = true_age;
    
}

askName()
askBirthYear()
askBirthDay()

// what type does prompt trigger / how to convert string into date // how to sub two dates in JS 