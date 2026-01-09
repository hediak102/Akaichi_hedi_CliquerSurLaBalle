let score=0;
      let timer=0;
      let timeleft=3;
      let gameOver=false;
      let msg;
      let highScore=localStorage.getItem('basketballHighScore') || 0;
      
      //to start the timer :

      function StartTimer(){
      const timerDisplay= document.querySelector(".timer");
      clearInterval(timer);

      gameActive=true; // to prevent unwanted alerts from function gameover
      timeleft=3;
      timerDisplay.textContent="Time-left:" + timeleft +"s";
      timer=setInterval(()=>{
        timeleft--;
        timerDisplay.textContent="Time-left:" + timeleft +"s";
        if(timeleft<0 && gameActive){
          clearInterval(timer);
          timeleft=0;
          timerDisplay.textContent="Time-left:" + timeleft +"s";
          GameOver();
          gameActive=false;
        }
      },600);
      }
      function GameOver(){
        gameOver=true;
        alert("“Tick… tick… tock… that’s the sound of your time running out. 😈 ”");
        const ball = document.querySelector(".game");
        if (ball) {ball.remove()};
        msg=document.createElement("p");
        msg.textContent="GAME OVER !";
        msg.classList.add("message");      
        document.querySelector(".score-display").after(msg);  
      }
      function switchBoutton(){
        const name =document.getElementById("label");
        if(name.value===""){
          alert("please enter your name before starting ")
          return;
          }
          document.getElementById("startBtn").remove();
          document.getElementById("label").remove();
          
          //creating the players name input; 

          NAME=name.value.toUpperCase();
          const displayName=document.createElement("p");
          displayName.textContent="playersName : "+ NAME ;
          displayName.classList.add("PlayersName");
          document.querySelector(".score-display").after(displayName);
          
          //creating the display label of the high score
          
           const highScoreDisplay = document.createElement("p");
           highScoreDisplay.textContent = "High Score: " + highScore;
           highScoreDisplay.classList.add("high-score");
           document.querySelector(".score-display").after(highScoreDisplay);

           //Creating the reset score button 
          
          const resetHScore= document.createElement("button");
          resetHScore.textContent="RESET-HIGH-SCORE ";
          resetHScore.classList.add("resetScore");
          resetHScore.addEventListener("click", () => {
              if(confirm("Are you sure you want to reset the high score to 0?")) {
                  highScore = 0;
                  localStorage.setItem('basketballHighScore', highScore);
                  highScoreDisplay.textContent = "High Score: " + highScore;
            
                  // Effet visuel de confirmation
                  highScoreDisplay.style.animation = "fadeIn 0.5s";
                  setTimeout(() => {
                     highScoreDisplay.style.animation = "";
                     }, 500);
               }
                setTimeout(() => {
                  restart.click(); 
                }, 200);
          });

          //creating the ballgame btn;

          const BallGame = document.createElement('button');
          BallGame.textContent="🏀";
          BallGame.classList.add("game");

          //creating the restart btn;

          const restart = document.createElement('button');
          restart.textContent="restart";
          restart.classList.add("restar");

          //timer display ;

          const timerDisplay = document.createElement("p");
          timerDisplay.classList.add("timer");
          timerDisplay.textContent = "Time left: 10s";
          document.querySelector(".score-display").after(timerDisplay);

          //ball game button ;

          BallGame.onclick= function(){
            if(gameOver){return;}  
            const scoreDisplay = document.querySelector(".score-display");
            score++;
            scoreDisplay.textContent = "Score: " + score;

            //updating high score if needed 

            if(score>highScore){
              highScore=score;
              localStorage.setItem('basketballHighScore',highScore);
              highScoreDisplay.textContent= "High Score: "+ highScore;
              highScoreDisplay.style.animation = "Glow 1s infinite";
            }

            const x = Math.random() * (window.innerWidth - BallGame.offsetWidth);
            const y = Math.random() * (window.innerHeight - BallGame.offsetHeight);
            BallGame.style.left = `${x}px`;
            BallGame.style.top = `${y}px`;
            StartTimer();
          
          };
          //the function of the restart btn;

          restart.addEventListener("click", ()=>{
            gameActive=false;
            const adjustDiv=document.querySelector(".adjust");
            const scoreDisplay=document.querySelector(".score-display");
            const playerName=document.querySelector(".PlayersName");
            const ball=document.querySelector(".game");
            const restartBtn=document.querySelector(".restar");
            const highScoreElement = document.querySelector(".high-score");
            const resetHighScoreBtn = document.querySelector(".resetScore")

            adjustDiv.classList.add("fade-out");
            scoreDisplay.classList.add("fade-out");
            if(playerName) {playerName.classList.add("fade-out");}
            if(ball) {ball.classList.add("fade-out");}
            if(restartBtn) {restartBtn.classList.add("fade-out");}
            if(msg){msg.classList.add("fade-out")};
            timerDisplay.classList.add("fade-out");
            if(highScoreElement) { highScoreElement.classList.add("fade-out"); }
            if(resetHighScoreBtn) { resetHighScoreBtn.classList.add("fade-out"); }

            setTimeout(()=>{
              clearInterval(timer);
              gameOver=false;
              score=0;
              scoreDisplay.textContent="Score: 0";

              if(playerName) {playerName.remove();}
              if(ball) {ball.remove();}
              if(restartBtn) {restartBtn.remove();}
              if(msg) {msg.remove();}
              timerDisplay.remove();
              if(highScoreElement) { highScoreElement.remove(); }
              if(resetHighScoreBtn) { resetHighScoreBtn.remove(); }

              adjustDiv.innerHTML = `<button id="startBtn" class="btn2" onclick="switchBoutton()">click to start</button>
              <br><br> <input id="label" type="text" placeholder="Player's Name" class="name">`;
              adjustDiv.classList.remove("fade-out");
              scoreDisplay.classList.remove("fade-out");
              restartBtn.classList.remove("fade-out");
              playerName.remove();
              ball.remove();
              msg.remove();
              timerDisplay.remove();

              adjustDiv.classList.add("fade-in");
              scoreDisplay.classList.add("fade-in");

              setTimeout(() => {
                adjustDiv.classList.remove("fade-in");
                scoreDisplay.classList.remove("fade-in");
              }, 600);
              clearInterval(timer);
              StartTimer();
            },600);
          } );
          document.querySelector(".adjust").appendChild(BallGame);
          StartTimer();
          document.querySelector(".adjust").appendChild(restart);
          document.querySelector(".adjust").appendChild(resetHScore);
        } 