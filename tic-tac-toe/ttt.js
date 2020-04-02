let count = 0;

let field = document.createElement('div');
field.classList.add('field');
document.body.insertAdjacentElement('afterbegin', field);

for(let i = 0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList.add('square'); 
    field.appendChild(square);
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

field.addEventListener('click', clickHandler);

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
            squaresValue[j] = squaresArray[j].innerText;

            if(squaresValue[line[0]] === sign &&
                squaresValue[line[1]] === sign &&
                squaresValue[line[2]] === sign) {

                    alert(sign + ' win!');
                    return true;
            } 
        }          
    }   
}

function isDraw() {
    if(count == 9) {
        alert('Draw');
    }
}

document.querySelector('.new-game').onclick = function() {
    let squaresArray = document.querySelectorAll('.square'); 
    for(let i = 0; i < squaresArray.length; i++) {
        squaresArray[i].innerText = '';
    }
    field.addEventListener('click', clickHandler);
    count = 0;
}