function askName() {
    var student_name = prompt("Please enter your name", "Your name")
    var greeting = "Yo " + student_name + ", welcome to Ada Tech School!";
    document.getElementById("Coucou").innerHTML = greeting;
}

function askBirthYear() {
    var year = prompt("Please enter your birth year", "YYYY")
    var today = new Date().getFullYear()
    var age = "You are " + (today - year) + " years old."
    document.getElementById("Age").innerHTML = age; 
}

askName()
askBirthYear()