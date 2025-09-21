  let scores = {
        wins: 0,
        losses: 0,
        ties: 0
    } 

    
    resetButton ()

    function computerMove() {
        let num = Math.random();
        let comp = '';

        if (num >= 0 && num < 1/3) {
            comp = 'Rock';

        } else if (num >= 1/3 && num < 2/3) {
            comp = 'Paper';
        } else {
            comp = 'Scissors';
        }

        return comp;
    }

    function myMove (name) {
        let comp = computerMove();
        let result = '';

        if (name === 'Rock') {
            
            if (comp === 'Rock') {
                result = "It's a Tie!"

            } else if (comp === 'Paper') {
                result = "Computer wins!";

            } else if (comp === 'Scissors') {
                result = "You win!"

            }

        } else if (name === 'Paper') {

            if (comp === 'Rock') {
                result = "You win!"

            } else if (comp === 'Paper') {
                result = "It's a Tie!";

            } else if (comp === 'Scissors') {
                result = "Computer wins!";

            }

        } else if (name === 'Scissors') {

            if (comp === 'Rock') {
                result = "You win!"

            } else if (comp === 'Paper') {
                result = "It's a Tie!";

            } else if (comp === 'Scissors') {
                result = "Computer wins!";

            }

        }
        
        

        if (result === 'You win!') {
            scores.wins += 1;
            
        } else if (result ===  "Computer wins!") {
             scores.losses += 1;

        }   else if (result === "It's a Tie!") {
             scores.ties += 1;
        }

        resetButton ()
         
        document.querySelector('.js-result').innerHTML = `${result}`;
        document.querySelector('.js-moves').innerHTML = `You pick: <img class="pic" src= "images/${name}.png"> and Computer picks 
        <img class="pic" src = "images/${comp}.png">`;


       
    }

    function subscribeButton () {
        let subBtn = document.querySelector('.js-sub');

        if (subBtn.innerHTML === "Subscribe") {
            subBtn.innerHTML = 'Subscribed';
            subBtn.classList.add('after-sub')
        } else {
            subBtn.innerHTML = 'Subscribe';
            subBtn.classList.remove('after-sub')
        }
    }

    function resetButton () {
        document.querySelector('.js-update')
        .innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`
    
    }
