    let userScore = 0;
    let compScore = 0;

    const choices =document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const user = document.querySelector("#user-score");
    const comp = document.querySelector("#computer-score");

    const genComputerChoice = () =>{
        const option =["rock","paper","scissor"];
        const randomIdx = Math.floor(Math.random() *3); //floor is used to get only integer and 3 is used for range
        return option[randomIdx];
    }

    const gameDraw = () =>{
            console.log("Game Draw");
            msg.innerText= "Game Draw. Play Again!!";
            msg.style.backgroundColor = "#0b2243"
    };
    const showWinner = (userWin, userChoice , compChoice) =>{
        if(userWin){
            console.log("You Win")
            msg.innerText=`You Win !! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            user.innerText = `${userScore}`;
        }
        else{
            console.log("You Lose")
            msg.innerText= `You Lose !! ${compChoice} beats your ${userChoice}`; 
            msg.style.backgroundColor = "red";
            compScore++; 
            comp.innerText = `${compScore}`;   
        }
}

const playGame =(userChoice)=>{
    console.log("User Choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genComputerChoice();
    console.log("comp Choice = " ,compChoice)

    if(compChoice === userChoice){
        //Game Draw
        gameDraw();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper"?false :true;
             
        }
        else if(userChoice ==="paper"){
            userWin = compChoice ==="scissor" ?false : true;
            
        }
        else if(userChoice==="scisssor"){
            userWin = compChoice ==="rock" ?false : true;
             
        }  
        showWinner(userWin ,userChoice,compChoice);
    }


}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});