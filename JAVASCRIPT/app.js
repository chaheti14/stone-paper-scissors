let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper" , "scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("game was draw.");
    msg.innerText = "game was draw. play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,choiceId,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        console.log("you win!");
        msg.innerText = `you win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
} else {
    console.log("you lose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose! Your ${compChoice} beats ${choiceId}`;
    msg.style.backgroundColor = "red";
 }
};

const playGame=(choiceId) => {
    console.log("user choice = ", choiceId);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(choiceId === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (choiceId === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else {
            userWin = compChoice === "rock" ? false:true;
        }

        showWinner(userWin,choiceId,compChoice);
    }
};

choices.forEach((choice) => {

    console.log(choice);
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");
    playGame(choiceId);
    })
})
