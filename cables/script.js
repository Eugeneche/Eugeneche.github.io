let childElement, parentElement, back, thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7;
let totalSum = 0;

/* buttons */

init = function() {
    document.querySelector('.main-menu').style.display = 'block';
    document.querySelector('.search').style.display = 'none';
    document.querySelector('.daily-program').style.display = 'none';
}

document.querySelector('.btn-daily-program').onclick = function() {
    document.querySelector('.main-menu').style.display = 'none';
    document.querySelector('.daily-program').style.display = 'block';
}

document.querySelector('.btn-catalog').onclick = function() {
    document.querySelector('.main-menu').style.display = 'none';
    document.querySelector('.search').style.display = 'block';
}

back = document.querySelectorAll('.back');
for(let i = 0; i < back.length; i++) {
    back[i].onclick = function() {
        init();
    }
} 

/* Daily program */
/* ---- output info ---- */

document.getElementById('one').addEventListener('change', () => outputData('one', 'data-out-one'));
document.getElementById('two').addEventListener('change', () => outputData('two', 'data-out-two'));
document.getElementById('three').addEventListener('change', () => outputData('three', 'data-out-three'));
document.getElementById('four').addEventListener('change', () => outputData('four', 'data-out-four'));
document.getElementById('five').addEventListener('change', () => outputData('five', 'data-out-five'));
document.getElementById('six').addEventListener('change', () => outputData('six', 'data-out-six'));
document.getElementById('seven').addEventListener('change', () => outputData('seven', 'data-out-seven'));

function outputData(idEl, idOut) {
    let selectValue = document.getElementById(idEl).value;
    
    if(selectValue === 'null') {
        document.getElementById(idOut).innerHTML = '';
        document.getElementById(idOut).style.background = 'none';
    } else {
        document.getElementById(idOut).innerHTML = `
    <span class="cabel-info">${allRefs[selectValue].cable}</span><span class="cabel-info">${allRefs[selectValue].oko}</span><span class="cabel-info">${allRefs[selectValue].tool}</span>`;
    document.getElementById(idOut).style.background = '#7FFF00';
    }
}

/* ---- counting ---- */


document.querySelector('.quant-one').addEventListener('change', function() {
    thisValue1 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

document.querySelector('.quant-two').addEventListener('change', function() {
    thisValue2 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

document.querySelector('.quant-three').addEventListener('change', function() {
    thisValue3 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

document.querySelector('.quant-four').addEventListener('change', function() {
    thisValue4 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

document.querySelector('.quant-five').addEventListener('change', function() {
    thisValue5 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

document.querySelector('.quant-six').addEventListener('change', function() {
    thisValue6 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

document.querySelector('.quant-seven').addEventListener('change', function() {
    thisValue7 = parseInt(this.value);
    sum(thisValue1, thisValue2, thisValue3, thisValue4, thisValue5, thisValue6, thisValue7);
});

function sum(...terms) {
    for(let term in terms) 
        if(isNaN(terms[term])) {
            terms[term] = 0;
        console.log(terms);
        }
        totalSum = terms.reduce(function(sum, current) {
        return sum + current;
        }, 0);
    
    document.querySelector('.total-value').innerHTML = `${totalSum}`;
}

/* cables catalogue */

function addHTMLBlock(obj, childDivClass, parentDivClass) {
    childElement = document.createElement('div');
    childElement.classList.add(childDivClass);
    for (let key in obj) {
        childElement.innerHTML += `${key} ${obj[key]}</br>`;
    }
    parentElement = document.querySelector(parentDivClass);
    parentElement.appendChild(childElement);
}

/* Hledaní podle refence */

document.querySelector('#ref').onchange = () => {
    if (childElement) {
        parentElement.removeChild(childElement);      
    } 

    let refNumber = document.querySelector('#ref').value;
    addHTMLBlock(allRefs[refNumber], 'ref-card', '.ref-search-res');
}

/* Hledaní podle čísla oka */

document.querySelector('#oko').onchange = () => {
    if (childElement) {
        parentElement.removeChild(childElement);   
    }
    let okoNumber = document.querySelector('#oko').value;
    addHTMLBlock(allRefs[okoNumber], 'ref-card', '.oko-search-res');
}

/* Hledaní podle čísla kabelu */

document.querySelector('#cable').onchange = () => {
    if (childElement) {
        parentElement.removeChild(childElement);   
    }
    let cableNumber = document.querySelector('#cable').value;
    addHTMLBlock(allRefs[cableNumber], 'ref-card', '.cable-search-res');
}

init();