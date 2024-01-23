// ROCK, PAPER SCISSORS GAME

let request = confirm("Shall we play rock, paper or scissor?");
if (request === true){
    let playerChoice = prompt("Please enter rock, paper or scissor.");
    if (playerChoice){
        let player = playerChoice.trim().toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissor"){
        let computerChoice = Math.ceil(Math.random()*3);
        let computer = computerChoice===1 ? "rock" : computerChoice===2 ? "paper" : "scissor";
        let result = player === computer ? `Player: ${player}\nComputer: ${computer}\n Tie!` 
        : player === "rock" && computer === "paper" ? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "rock" && computer === "scissor"?`Player: ${player}\nComputer: ${computer}\nPlayer wins!`
        : player === "paper" && computer === "scissor"?`Player: ${player}\nComputer: ${computer}\nComputer wins!`
        : `Player: ${player}\nComputer: ${computer}\nPlayer wins!`;
        alert(result);
        let playAgain = confirm("Do you want to play again?");
        playAgain ? location.reload() : alert("OK, Thanks for playing!");
    }
    else{
        alert("You didn't enter rock, paper or scissor. Spelling is incorrect!!");
    }
    }
    else{
        alert("I guess you have changed your mind. Maybe next time!");
    }
}
else{
    console.log(alert("OK, Thank You!"));
}

// location.reload() --> It is used to refresh the whole page and start again from the first



/* let random = Math.ceil(Math.random()*3);
if (random === 1){
    console.log("rock");
}
else if (random === 2){
    console.log("paper");
}
else{
    console.log("scissor");
} */

    
/* if (player === random){
    console.log(alert("Tie!"));
}
else if((player = "rock") && (random = "paper")){
    console.log(alert("You lose!"));
}
else if ((player = "rock")&&(random = "scissor")){
    console.log(alert("You win!"));
}
else if ((player = "paper")&&(random = "scissor")){
    console.log(alert("You lose!"));
}
else{
    console.log(alert("You win!"));
} */