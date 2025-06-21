// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl);
// Create two variables (name & greeting) that contains your name
let name = "Abnv"
let Greeting = "hi there this is " + name+ " your friend to listen "
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = Greeting 
welcomeEl.innerText+="🖐️"
 