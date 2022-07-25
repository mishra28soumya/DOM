console.log(document.getElementById("exampleBody").childElementCount) //1
console.log(document.getElementById("myHeading").childElementCount) //0

console.log(document.getElementById("myDiv").firstChild) // \n Hello\n Bye\n
console.log(document.getElementById("myDiv").firstElementChild) //<h1 id="myHeading">

console.log(document.getElementById("myHeading").innerHTML) // Welcome to today's session

function showAlert(){
    alert("Button Clicked")
}
