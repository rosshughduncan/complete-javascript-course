/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, wasPreviousRoll6, dice0, dice1;

init();

// Anonymous function - doesn't have a name and cannot be reused
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Check if game is playing
    if (gamePlaying) {
        dice0 = randNum();
        dice1 = randNum();
        resetScore();
        // Was one of the previous dice rolls a 6 and is there currently a 6?
        if (wasPreviousRoll6 && isEitherDice(6)) {
            // Reset that player's score
            document.querySelector('#current-' + activePlayer).textContent = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            scores[activePlayer] = 0;
            roundScore = 0;
            wasPreviousRoll6 = false;
            nextPlayer();
        }
        // If the player rolls a six but did not have a six in the previous round
        else if (!wasPreviousRoll6 && isEitherDice(6)) {
            roundScore += (dice0 + dice1);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            // Flag this round as having a 6
            wasPreviousRoll6 = true;
        }
        else if (isEitherDice(1)) { // If dice is different from one, no type coercion with ==
            // If the player rolls a 1
            // Next player
            wasPreviousRoll6 = false;
            nextPlayer();
        }
        else { 
            // Add score
            // 3. Update the round score if the rolled number was not a 1
            wasPreviousRoll6 = false;
            roundScore += (dice0 + dice1);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        // Update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Retrieve highest score set by user, set to 100 by default
        var highestScore = highScoreInput();
        if (highScoreInput()) {
            // highScoreInput returns TRUE if the input box is empty, otherwise it returns the input value
            highestScore = 100;
            alert('Please enter a valid number into the Highest Score box. The Highest Score has been set by default to 100.');
        }
        // Check if player won game
        if (scores[activePlayer] >= highestScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
            gamePlaying = false;
        }
        // If the game hasn't been won
        else {
        // Next player
        nextPlayer();
        }
    }
});

function nextPlayer() {
    resetScore();
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    setCurrentTo0();
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    wasPreviousRoll6 = false;
    
    gamePlaying = true;
    
    // Hiding dice upon game loading
    hideDice();
    
    document.getElementById('score-0').textContent = '0'; // NOT using the CSS format when using getElementById
    document.getElementById('score-1').textContent = '0';
    
    setCurrentTo0();
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); // Be sure that there is no active class set, then set Player 1 to active to start the game
    document.querySelector('.player-1-panel').classList.remove('active');
}

function highScoreInput() {
    var value = document.querySelector('.highest-score-input').value;
    // An undefined, 0 null or '' are coerced to false
    if (!value || isNaN(value)) {
        // If input box is empty
        return true;
    }
    else {
        return value;
    }
}

function randNum() {
    // Floor removes decimal places from number
    return Math.floor(Math.random() * 6) + 1;
}

function isEitherDice(input) {
    return (dice0 === input || dice1 === input);
}

function resetScore() {
    var diceDOM0 = document.querySelector('.dice0');
    var diceDOM1 = document.querySelector('.dice1');
    diceDOM0.style.display = 'block';
    diceDOM1.style.display = 'block';
    diceDOM0.src = 'dice-' + dice0 + '.png'; // Changing number of dice image selected
    diceDOM1.src = 'dice-' + dice1 + '.png';
}

function hideDice() {
    document.querySelector('.dice0').style.display = 'none'; // . is CSS class selector
    document.querySelector('.dice1').style.display = 'none';
}

function setCurrentTo0() {
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

// Demo lines of code
/*
//document.querySelector('#current-' + activePlayer).textContent = dice; // Assign dice value to display on page, # is the CSS ID selector
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // <em> puts text in italics

//var x = document.querySelector('#score-0').textContent;

// Callback function
//function btn() {
//    // Do something here
//}
//btn();

//document.querySelector('.btn-roll').addEventListener('click', btn); // The event listener is calling the function for us (callback function - passes into another function as an argument)

document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
*/