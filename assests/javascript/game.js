
//make array a-z
var array = ["a", "b", "c", ""]
var wins = 0
var losses = 0
var trys = 9
//make comp pick a random let
var compPick = array[Math.floor(Math.random()* array.length)]

//make keyup listen
document.addEventListener('keyup', function(event){
    compareValue(compPick, event.key)
})


//make function to compare value of comp to the value of on click
function compareValue(computerPick, key){
    console.log(computerPick, key)
    if (computerPick === key){
        wins++
        trys = 9
        compPick = array[Math.floor(Math.random()* array.length)]
        document.getElementById("writeWins").innerText = wins
        
    } else {
        document.getElementById("writeLeft").innerText = trys
        trys--
        document.getElementById("writeGuess").innerText += key
        
        
    } 
    if (trys === 0){
        losses++
        trys = 9
        compPick = array[Math.floor(Math.random()* array.length)]
        document.getElementById("writeLosses").innerText = losses
        document.getElementById("writeGuess").innerText = ""

    }
    console.log(wins, losses, trys)
    
}










