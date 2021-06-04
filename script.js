const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerCharacter = document.querySelector(".player-character");
      const computerCharacter = document.querySelector(".computer-character");
      const choices = document.querySelectorAll(".choices img");
  
      choices.forEach(choices => {
        choices.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compareCharacters
            compareCharacters(this.textContent, computerChoice);
            //Update Images
            playerCharacter.src = `assets/${this.textContent}.png`;
            computerCharacter.src = `assets/${computerChoice}.png`;
          }, 2000);

          //animation to move characters when chosen
          playerCharacter.style.animation = "shakePlayer 0.5s";
          computerCharacter.style.animation = "shakeComputer 0.5s";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareCharacters = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Tie!";
        return;
      }
      //Check for Rock
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
      //Check for Paper
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
      //Check for Scissors
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
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();

// music for the page
  window.onload = function() {
    document.getElementById("assets/conker.mp3").play();
}