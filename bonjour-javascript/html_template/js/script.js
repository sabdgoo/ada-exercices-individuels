var student = prompt ("Please enter your name", "Your name") 
var year = prompt ("Please enter your birth year", "YYYY")
if (student != null) {
var greeting = "Yo " + student + ", welcome to Ada Tech School!" + " You were born in " + year ;
    
    document.getElementById("Coucou").innerHTML = greeting ;    

}
 else {
 alert ("Please enter your name here")
}
var today = new Date().getFullYear()

var age = "You are " + (today - year) + " years old."

document.getElementById("Age").innerHTML = age 