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

            game(this.id);
        }
        document.getElementById('rock').onclick = reply_click;
        document.getElementById('paper').onclick = reply_click;
        document.getElementById('scissors').onclick = reply_click;

    }
       
       function game(playerSelection) {

           let playerScore = 0;
           let compScore = 0;
       
           
           let resultStr = "";
        
           let computerSelection = computerPlay();

           const img = document.getElementById(playerSelection + '-img');
           img.classList.toggle('hidden');
           setTimeout(function(){ console.log("setTimeout"); 
                img.classList.toggle('hidden');}, 3300);
           
               
              resultStr = playRound(playerSelection, computerSelection);
              console.log(resultStr);
               
              if (resultStr.includes("win")) {
                  playerScore += 1;
              } else if (resultStr.includes("lose")) {
                  compScore += 1;
              }
           
           if (playerScore > compScore) {
              console.log("You win!"); 
           } else if (compScore > playerScore) {
              console.log("You lose.");  
           } else {
              console.log("You tied!"); 
           }
           
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
       
       const playBtn = document.querySelector('#play-button');
       playBtn.addEventListener('click', choose);

       const audioOffBtn = document.querySelector('#audio-button');
       audioOffBtn.addEventListener('click', audioOff);
