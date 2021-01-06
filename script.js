             
    const playBtn = document.querySelector('#play-button');
    playBtn.addEventListener('click', choose);

    const audioOffBtn = document.querySelector('#audio-button');
    audioOffBtn.addEventListener('click', audioOff);

    let userPoints = document.querySelector('#user-score');
    let compPoints = document.querySelector('#comp-score');

    let gameStatus = document.querySelector('.game-status');
    

    let playerScore = 0;
    let compScore = 0;
      
      
      //this function generates randomly Rock, Paper, or Scissors
       //@return moves[index], which is the random move.
       function computerPlay() {
        let moves = ["rock", "paper", "scissors"];
        let index = Math.floor(Math.random()*3);
        
        return moves[index];
    }

    function audioOff() {
        const audio = document.querySelector('#mc-start');
        if (audio) {
            audio.muted = true;
        }
    }

    function choose() {


        //play Mortal Combat intro
        const audio = document.querySelector('#mc-start');
        if (!audio) {
            console.log("NO audio!!");
            return;
        }
        audio.currentTime = 0;
        audio.play();
        
        const buttons = document.querySelectorAll('button');

        const audioImg = document.getElementById('audio-button');
        audioImg.classList.toggle('hidden');

        buttons.forEach((button) => {
            button.classList.toggle('hidden');
        });

        var reply_click = function()
        {
            console.log("Button clicked, id "+this.id+", text"+this.innerHTML);
            //starts game
                game(this.id);
            
            
        }
        document.getElementById('rock').onclick = reply_click;
        document.getElementById('paper').onclick = reply_click;
        document.getElementById('scissors').onclick = reply_click;

    }
       
       function game(playerSelection) {
           if (noWinner()) {

           let resultStr = "";
        
           let computerSelection = computerPlay();
               
              resultStr = playRound(playerSelection, computerSelection);
              console.log(resultStr);
               
              if (resultStr.includes("win")) {
                  playerScore += 1;
                  userPoints.textContent = playerScore;
              } else if (resultStr.includes("lose")) {
                  compScore += 1;
                  compPoints.textContent = compScore;
              }


              if (playerScore == 5) {
                  gameStatus.textContent = "YOU WIN!!!";
                  resetGame();
              } else if (compScore == 5) {
                  gameStatus.textContent = "YOU LOST!!!";
                  resetGame();
              } else {
                  gameStatus.textContent = resultStr;
              }
              
           }
           
       }

       function noWinner() {
           if (playerScore == 5 || compScore == 5) {
                return false;
           } else {
               return true;
           }
       }

       function resetGame() {
           console.log("Resetting...");
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.classList.toggle('hidden');
        });
            playBtn.setAttribute('style', 'width: 450px; font-size: 70px');
            playBtn.textContent = "Play Again";
            playBtn.addEventListener('click', () => window.location.reload());


       }
       
       function playRound(playerSelection, computerSelection) {
           //TODO: remove this
           console.log("Computer chooses " + computerSelection);
           
           let result = "";
           
           switch (playerSelection) {
               case "rock":
                   result = rockOutcomes(computerSelection);
                   break;
               case "paper":
                   result = paperOutcomes(computerSelection);
                   break;
               case "scissors":
                   result = scissorsOutcomes(computerSelection);
                   break;
           }
           
           return result;
           
       }
       
       function rockOutcomes(compSelection) {
           //player's choice is rock
           let resultStr = "";
           switch (compSelection) {
               case "rock":
                   resultStr = "A tie! You both chose rock.";
                   break;
               case "paper":
                   resultStr = "You lose! Paper beats rock.";
                   break;
               case "scissors":
                   resultStr = "You win! Rock beats scissors."
                   break;
           }
           
           return resultStr;
       }
       
        function paperOutcomes(compSelection) {
           //player's choice is paper
           let resultStr = "";
           switch (compSelection) {
               case "rock":
                   resultStr = "You win! Paper beats " + compSelection + ".";
                   break;
               case "paper":
                   resultStr = "A tie! You both chose paper.";
                   break;
               case "scissors":
                   resultStr = "You lose! Scissors beats paper."
                   break;
           }
           
           return resultStr;
       }
       
        function scissorsOutcomes(compSelection) {
           //player's choice is scissors
           let resultStr = "";
           switch (compSelection) {
               case "rock":
                   resultStr = "You lose! Rock beats scissors.";
                   break;
               case "paper":
                   resultStr = "You win! Scissors beats paper.";
                   break;
               case "scissors":
                   resultStr = "A tie! You both chose scissors."
                   break;
           }
           
           return resultStr;
       }