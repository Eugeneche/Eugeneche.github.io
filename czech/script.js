/* DATA */

    /* playing phrases settings */

let delayBeforeTranslation = 5
let cycleDuration = 5

    /* end playing phrases settings */

let allPhrases = {
/*     'DOMU': {    
    }, */   
    'Sloveso Být': {
        1: {      
            'Я в комнате': 'Jsem v pokoji', 
            'Я не на кухне': 'Nejsem v kuchyni',     
            'Она в школе': 'Ona je ve škole',  
            'Пани Новакова не наша учительница': 'Paní Nováková není náše učitelka',    
            'Мы в магазине': 'Jsme v obchodě',   
            'Мы с моей сестрой не в кинотеатре': 'Moje sestra a já nejsme v kině',   
            'Они на улице': 'Oni jsou venku',
            'Ленка и Томаш - на работе': 'Lenka a Tomáš jsou v práci', 
            'Мой брат не дома': 'Můj bratr není doma',
            'Иржи в гостях': 'Jiří je na návštěvě',
            'Мои родители в ресторане': 'Moji rodiče jsou v restauraci',
            'Яна и Катержина не в театре': 'Jana a Kateřina nejsou v divadle',
        },
        2: {      
            'Где вы?': 'Kde jste?',      
            'Ты не в школе?': 'Nejsi ve škole?',
            'Все ученики в классе': 'Všichni žáci jsou v učebně',
            'Я студент': 'Jsem student',
            'Мы друзья': 'Jsme kamarádi',
            'Мы подруги': 'Jsme kamarádky',
            'Вы наш учитель?': 'Jste náš učitel?',
            'Мой велосипед новый': 'Moje kolo je nové',
            'Эта машина старая': 'Toto auto je staré',
        }      
    },
    'Sloveso Mít': {
        1: {      
            'У меня есть рюкзак': 'Mám batoh',      
            'Марек и Гонза хотят пить': 'Marek a Honza mají žízeň',      
            'Мы хотим есть': 'Máme hlad',      
            'У тебя есть ручка?': 'Máš propisku?',  
        },
        2: {      
            'Ты голоден?': 'Máš hlad?', 
            'Ты прав!': 'Máš pravdu!',     
            'Ты свободен': 'Máš volno',
        },
        3: {      
            'Что у тебя есть?': 'Co máš?', 
        },  
    },
    'Sloveso Chtít': {
        1: {      
            'У меня есть рюкзак': 'Mám batoh',      
            'Марек и Гонза хотят пить': 'Marek a Honza mají žízeň',      
            'Мы хотим есть': 'Máme hlad',      
            'У тебя есть ручка?': 'Máš propisku?',  
        },
    },
    'Sloveso Jít': {
        1: {      
            'У меня есть рюкзак': 'Mám batoh',      
            'Марек и Гонза хотят пить': 'Marek a Honza mají žízeň',      
            'Мы хотим есть': 'Máme hlad',      
            'У тебя есть ручка?': 'Máš propisku?',  
        },
    }
}

const menuPoints = Object.keys(allPhrases).reverse()
let currentMenuPoint = menuPoints[menuPoints.length - 1]
let currentLevel = 1

document.querySelector('.homepage').style.display = 'none'
document.querySelector('.learning').style.display = 'block'

/* CREATING H1 */

function createH1(){
    const h1 = document.querySelector('h1')
    currentMenuPoint === 'DOMU' || currentMenuPoint === 'undefined' ? 
        h1.innerText = `Trenér českého jazyka` :
        h1.innerText = `Hodina: ${currentMenuPoint}`       
}
createH1()

/* END CREATING H1 */

/* CREATING LEFT MENU */

function addMenuPoint(parent){
    menuPoints.map(point => {
        document.querySelector(parent).insertAdjacentHTML(
            'afterbegin', `<li><button>${point}</button></li>`)
    })
}
addMenuPoint('.left-menu.desktop ul')

function getCurrentMenuPoint(){
    let menuPointsArray = document.querySelectorAll('.left-menu ul li button')
    menuPointsArray.forEach(point => {
        point.addEventListener('click', () => {
            currentMenuPoint = point.innerText
            currentLevel = 1
            createH1() 
            addLevels()         
        })
    }) 
}
getCurrentMenuPoint()

/* END CREATING LEFT MENU */

/* CREATING LEVELS */

function addLevels(){
    if (currentMenuPoint === 'DOMU') {
        document.querySelector('.homepage').style.display = 'block'
        document.querySelector('.learning').style.display = 'none'
    } else {
        document.querySelector('.homepage').style.display = 'none'
        document.querySelector('.learning').style.display = 'block'
        document.querySelector('.levels').innerHTML = `<div></div>`
        Object.keys(allPhrases[currentMenuPoint]).reverse().map(point => {
            document.querySelector('.levels').insertAdjacentHTML(
                'afterbegin',     
                    currentLevel == point ? 
                    `<button class="level active"> ${point} </button>` : 
                    `<button class="level"> ${point} </button>`
            )
        })
    }   
    getCurrentLevel()
}
addLevels()

function getCurrentLevel(){
    let levelsArray = document.querySelectorAll('.level')
    levelsArray.forEach(point => {      
        point.addEventListener('click', () => {
            point.classList.remove('active')
            currentLevel = point.innerText  
            addLevels()
        })
    })  
}
 

/* END CREATING LEVELS */

/* LEARNING */

   /* start */
let start = function(){
    return startLearning(allPhrases[currentMenuPoint][currentLevel])
}

document.querySelector('.start-learning').addEventListener('click', start)
  
function startLearning(obj){

    document.querySelector('.start-learning').removeEventListener('click', start)
    let arrayKeys = Object.keys(obj)
    
    let currentKeyPhrase = ''
    randomPhrase(arrayKeys)
    
    function randomPhrase(arr){
        let randomIndex = Math.floor(Math.random() * arr.length) 
        currentKeyPhrase = arr[randomIndex]
        if (arr.length > 0) {
            showPhrase()
            arr.splice(randomIndex, 1) 
        }    
    }

    function createPhraseDiv(phrase){    
        let printedPhrase = document.createElement('div')   
        printedPhrase.classList.add('phrase-block') 
        printedPhrase.innerHTML = `<span>${phrase}</span>`  
        return printedPhrase
    }

    function playAudio(phrase){
        let audio = document.createElement('div')
        audio.classList.add('audio')
        //check if phrase contains '?' or '!'
        if ((phrase[phrase.length - 1] === '?') || 
        (phrase[phrase.length - 1] === '!')) {
            phrase = phrase.slice(0, length - 1)
        } 
        audio.innerHTML = `<div><audio src="audio/${phrase}.mp3" autoplay></audio></div>` 
        return audio  
    }

    function showPhrase(){
        document.querySelector('.phrase-ru').appendChild(createPhraseDiv(currentKeyPhrase))

        setTimeout(() => { 
            document.querySelector('.phrase-translated').appendChild(createPhraseDiv(obj[currentKeyPhrase])) 
            document.querySelector('.phrase-translated').appendChild(playAudio(obj[currentKeyPhrase]))
        }, delayBeforeTranslation * 1000) 

        hidePhrase()
    }

    function hidePhrase(){
        setTimeout(() => { 
            
            document.querySelector('.phrase-ru').removeChild(document.querySelector('.phrase-block')) 
            document.querySelector('.phrase-translated').removeChild(document.querySelector('.phrase-block')) 
            document.querySelector('.phrase-translated').removeChild(document.querySelector('.audio')) 
            randomPhrase(arrayKeys)

            
        }, (delayBeforeTranslation + cycleDuration) * 1000) 
    }

    /* restore event listener after its remove */
    setTimeout(() => {
        document.querySelector('.start-learning').addEventListener('click', start)

    }, (delayBeforeTranslation + cycleDuration) * 1000 * Object.keys(allPhrases[currentMenuPoint][currentLevel]).length)
}

/* MOBILE */

document.querySelector('.show-mobile-menu').addEventListener('click', () => {
    document.querySelector('.left-menu.mobile').style.left = '0'

})

addMenuPoint('.left-menu.mobile ul')
getCurrentMenuPoint()
 
document.querySelector('.close-mobile-menu').addEventListener('click', () => {
    document.querySelector('.left-menu.mobile').style.left = '-250px'
})