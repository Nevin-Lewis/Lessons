var sign = window.prompt("Let's play rock-paper-scissors. Please in put R, P, or S.");
var comp_choice = ["r", "p", "s"];
function game() {
    choice = comp_choice[Math.floor(Math.random() * comp_choice.length)];
    console.log(choice)
}
game()
// choice = window.alert("The computer chose " + computer);
window.alert(choice);
var outcome = ["win", "loss", "tie"]
function calc_outcome(){
    if (sign === "r" && comp_choice === "s"){
        return outcome[0]}
     else if (sign === "r" && comp_choice === "p"){
        return outcome[1];
    } else if (sign === "r" && comp_choice === "r"){
        return outcome[2];
    }else if (sign === "p" && comp_choice === "r"){
        return outcome[0];
    } else if (sign === "p" && comp_choice === "s"){
        return outcome[1];
    } else if (sign === "p" && comp_choice === "p"){
       return outcome[2];
} else if (sign === "s" && comp_choice === "p"){
     return outcome[0];
} else if (sign === "s" && comp_choice === "r"){
    return outcome[1];
} else if (sign === "s" && comp_choice === "s"){
   return outcome[2];
}

console.log(calc_outcome)
if (calc_outcome == outcome[0]){
    window.alert("Its a win");
}else if (calc_outcome == outcome[1]) {
    window.alert("Its a loss");

}else{
    window.alert("Its a tie");
} 