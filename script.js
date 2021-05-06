document.getElementById("button").addEventListener("click", comparison)
let userInput = 0
function comparison(){
  userInput = document.getElementById("input").value
  userInput = parseInt(userInput)
  
  if (userInput < 0) {
    document.getElementById("answer").innerHTML = "this number is: NEGATIVE"
  } else {
    document.getElementById("answer").innerHTML = "this number is: POSITIVE"
    }
}