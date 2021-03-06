var scores, roundScore, activePlayer, gamePlaying;


init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice + '</em>';
//var x = document.querySelector('#score-1').textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click',function(){

  if(gamePlaying){

    //1.random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //display result
    var disDom =document.querySelector('.dice');
    disDom.style.display = 'block';
    disDom.src = 'dice-' + dice + '.png';

    //update the round score if the rolled number is not a 1.

    if(dice !== 1){
       //addScore
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
      //next player
       nextPlayer();
    }
  }
});


    

document.querySelector('.btn-hold').addEventListener('click',function(){

  if(gamePlaying){
    //update score to global score
    scores[activePlayer] += roundScore;
    
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = roundScore;

    //check if player won the game

    if(scores[activePlayer] >= 20){

      document.querySelector('#name-'+activePlayer).textContent='Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      gamePlaying = false;
    }
    else{

      nextPlayer();
    }

  }

    
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){

  scores = [0,0];
  roundScore = 0;
  activePlayer =0;
  gamePlaying = true;
  

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent ='0';
  document.getElementById('score-1').textContent ='0';
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
  document.querySelector('.player-0-panel').classList.remove('Winner!');
  document.querySelector('.player-1-panel').classList.remove('Winner!');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}