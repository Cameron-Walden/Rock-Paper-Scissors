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
        const playerChar = document.querySelector(".player-character");
        const computerChar = document.querySelector(".computer-character");
        const characters = document.querySelectorAll(".characters img");

        characters.forEach(characters => {
            characters.addEventListener("animationend", function () {
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
                    //Here is where we call comparechar
                    compareChar(this.textContent, computerChoice);
                    //Update Images
                    playerChar.src = `assets/${this.textContent}.png`;
                    computerChar.src = `assets/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerChar.style.animation = "shakePlayer 0.5s ease";
                computerChar.style.animation = "shakeComputer 0.5s ease";
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

  

  