function getComputerChoice(){
    let value = Math.random();
    if (value < 0.33){
        return "Rock"
    }
    else if(value < 0.66){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}



function getHumanChoice(input){
    if (input.toLowerCase() == "rock"){
        return "Rock"
    }
    else if (input.toLowerCase() == "paper"){
        return "Paper"
    }
    else if (input.toLowerCase() == "scissors"){
        return "Scissors"
    }
    else{
        return "Invalid Input"
    }
}

let humanScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++){

    let input = prompt("Rock, Paper, Scissors?")

    
    while(getHumanChoice(input) == "Invalid Input"){
        input = prompt("Ivalid input, Rock, Paper, Scissors?")
    }
    

    const humanSelection = getHumanChoice(input);
    const computerSelection = getComputerChoice();
    
    function playRound(humanChoice,computerChoice){
        if (humanChoice == computerChoice){
            return `It's a tie! You both selected ${humanChoice}`
        }
    
        else if (humanChoice == "Rock"){
            if (computerChoice == "Scissors"){
                humanScore = humanScore + 1;
                return "1 more point for you"
            }
            if (computerChoice == "Paper"){
                computerScore = computerScore + 1;
                return "1 more point for the puter"
            }
        }
    
        else if (humanChoice == "Paper"){
            if (computerChoice == "Scissors"){
                humanScore = humanScore + 1;
                return "1 more point for you"
            }
            if (computerChoice == "Rock"){
                computerScore = computerScore + 1;
                return "1 more point for the puter"
            }
        }
    
        else if (humanChoice == "Scissors"){
            if (computerChoice == "Paper"){
                humanScore = humanScore + 1;
                return "1 more point for you"
            }
            if (computerChoice == "Rock"){
                computerScore = computerScore + 1;
                return "1 more point for the puter"
            }
        }
    }

    console.log(playRound(humanSelection,computerSelection))
}

let winner = "You"

if (humanScore < computerScore){
    winner = "Puter"
}

console.log(`Game done! The winner is ${winner}`)