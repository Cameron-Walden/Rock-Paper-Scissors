function playSound() {
    const buttonpress = document.querySelector("#introButtonSound");
    buttonpress.play();
introButton = document.querySelector("#introButton").addEventListener('click', playSound);
};


const game = () => {
    let pScore = 0;
    let cScore = 0;

   //Starts the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Plays a match
    function playMatch() {
        const options = document.querySelectorAll(".options button");
        const playerSelection = document.querySelector(".playerSelection");
        const computerSelection = document.querySelector(".computerSelection");
        const selections = document.querySelectorAll(".selections img");

        selections.forEach(selections => {
            selections.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareChar(this.textContent, computerChoice);
                    playerSelection.src = `assets/${this.textContent}.png`;
                    computerSelection.src = `assets/${computerChoice}.png`;
                }, 1000);

                playerSelection.style.animation = "shakePlayer 0.5s ease";
                computerSelection.style.animation = "shakeComputer 0.5s ease";
            });
        });
    }
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareChar = (playerChoice, computerChoice) => {
     
      const winner = document.querySelector(".winner");
      
      if (playerChoice === computerChoice) {
        winner.textContent = "Tie!";
        return;
      }
      
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "You win!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins! You suck!";
          cScore++;
          updateScore();
          return;
        }
      }
    
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins! You suck!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You Win!";
          pScore++;
          updateScore();
          return;
        }
      }
      
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins! You suck!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You Win!";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    startGame();
    playMatch();
  };
  
  game();
