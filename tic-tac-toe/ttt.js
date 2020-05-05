let count, countX, countO;
let field = document.querySelector('.field');

document.querySelector('.reset').addEventListener('click', init);
field.addEventListener('click', clickHandler);
document.querySelector('.new-game').addEventListener('click', clearField);

function init() {
    count = 0, countX = 0, countO = 0; 
    document.querySelector('.eks').innerText = countX;
    document.querySelector('.zero').innerText = countO;
    clearField();
}

function clickHandler(event) {
    if(event.target.innerText == '') {    
        count % 2 == 0 ? event.target.innerText = 'X' : event.target.innerText = 'O';
        count++;
    } else {
        return false;
    }

    if(isWin() === true) {
        field.removeEventListener('click', clickHandler);  
    } else {
        isDraw();
    }   
}

function isActive(sign) {
    sign === 'X' ? (function() {
        document.querySelector('span.eks').classList.remove('active');
        document.querySelector('span.zero').classList.add('active');  
        console.log(1); 
        })()    
      : (function() {
        document.querySelector('span.zero').classList.remove('active');
        document.querySelector('span.eks').classList.add('active');  
        console.log(2);      
    })();
}

function isWin() {
    let squaresArray = document.querySelectorAll('.square');   
    let squaresValue = Array(9).fill(null);     
    let winnerLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0 ,4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < winnerLine.length; i++) {
        
        let line = winnerLine[i];
        for(let j = 0; j < squaresValue.length; j++) {
            let sign = (count - 1) % 2 == 0 ? event.target.innerText = 'X' : event.target.innerText = 'O';
            isActive(sign);
            squaresValue[j] = squaresArray[j].innerText;

            if(squaresValue[line[0]] === sign &&
                squaresValue[line[1]] === sign &&
                squaresValue[line[2]] === sign) {
                    
                    sign === 'X' ? countX++ : countO++;
                    document.querySelector('.eks').innerText = countX;
                    document.querySelector('.zero').innerText = countO;
                    createChips(`${sign} WIN!`, 'green', 3000);
                    document.querySelector('.new-game').outerHTML = '<button class="new-game">New Game</button>';
                    document.querySelector('.new-game').addEventListener('click', function() {
                        clearField();
                        return setTimeout(() => {
                            document.querySelector('.new-game').outerHTML = '<button class="new-game" disabled>New Game</button>';
                        }, 1000);
                    });
                    return true;
                    
            } 
        }          
    }   
}

function isDraw() {
    if(count == 9) {
        createChips('DRAW', 'yellow', 3000);
        document.querySelector('.new-game').outerHTML = '<button class="new-game">New Game</button>';
        document.querySelector('.new-game').addEventListener('click', function() {
            clearField();
            return setTimeout(() => {
                document.querySelector('.new-game').outerHTML = '<button class="new-game" disabled>New Game</button>';
            }, 1000);
        });
    }
}

function clearField() {
    let squaresArray = document.querySelectorAll('.square'); 
    for(let i = 0; i < squaresArray.length; i++) {
        squaresArray[i].innerText = '';
    }
    field.addEventListener('click', clickHandler);
    document.querySelector('span.eks').classList.add('active'); 
    document.querySelector('span.zero').classList.remove('active');
    count = 0;
}

init();