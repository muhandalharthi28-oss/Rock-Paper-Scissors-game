

function getComputerChoice() {
    let ComputerChoice =  Math.floor(Math.random() * 3 ) + 1;
    console.log(ComputerChoice)
    if (ComputerChoice == 3) {
        console.log("Rock");     
    }else if(ComputerChoice ==2){
         console.log("Paper");
    }else{
         console.log("Scissors");
    }
}

console.log(getComputerChoice());
