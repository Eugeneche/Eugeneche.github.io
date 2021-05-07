/* DATA */

    /* playing phrases settings */

let delayBeforeTranslation = 4
let cycleDuration = 4

    /* end playing phrases settings */

let allPhrases = {
   
    'English Prases': {
        1: {      
            'Я начал изучать JavaScript, потому что раньше меня интересовала разработка веб-страниц.': 
                'I started learning JavaScript because I as previously interested in web page development',      
            'И я бы хотел в этом продвинуться': 
                'And I would like to make an advance in it',      
            'Я изучаю Frontend около двух лет и изучаю его как на онлайн-курсах, так и самостоятельно': 
                'I have been learning Frontend about two years, and I study it  both through online courses and on my own',      
            'Создание и размещение веб-контента на русском и украинском языках': 
                'Creation and placement of web content in Russian and Ukrainian', 
            'Подготовка базовой графики к содержанию. Редактирование видео.': 
                'Preparation of basic graphics for content. Video editing.', 
            'До этой работы я работал менеджером по работе с клиентами - общение с клиентами': 
                'Before this job, I worked as account manager – communication with customers', 
            'от первоначального общения с постоянным или новым клиентом до выполненной работы': 
                'from initial communication with a permanent or new customer to completed work', 
            'определение требований заказчика': 
                'identifying customer requirements',
            'определение необходимых мер по выполнению заказа': 
                'identifying the necessary order fulfillment measures', 
            'составление бюджета, планирование и распределение обязанностей': 
                'budgeting, planning and assigning responsibilities',  
        },
    
    },
    'Prasal verbs': {
        1: {      
            'Я начал изучать JavaScript, потому что раньше меня интересовала разработка веб-страниц.': 
                'I started learning JavaScript because I as previously interested in web page development',      
            'И я бы хотел в этом продвинуться': 
                'And I would like to make an advance in it',      
            'Я изучаю Frontend около двух лет и изучаю его как на онлайн-курсах, так и самостоятельно': 
                'I have been learning Frontend about two years, and I study it  both through online courses and on my own',      
            'Создание и размещение веб-контента на русском и украинском языках': 
                'Creation and placement of web content in Russian and Ukrainian', 
            'Подготовка базовой графики к содержанию. Редактирование видео.': 
                'Preparation of basic graphics for content. Video editing.', 
            'До этой работы я работал менеджером по работе с клиентами - общение с клиентами': 
                'Before this job, I worked as account manager – communication with customers', 
            'от первоначального общения с постоянным или новым клиентом до выполненной работы': 
                'from initial communication with a permanent or new customer to completed work', 
            'определение требований заказчика': 
                'identifying customer requirements',
            'определение необходимых мер по выполнению заказа': 
                'identifying the necessary order fulfillment measures', 
            'составление бюджета, планирование и распределение обязанностей': 
                'budgeting, planning and assigning responsibilities',  
        },
    
    },

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
        h1.innerText = `${currentMenuPoint}`       
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

/* EVENTS */

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

    /* function playAudio(){
        let audio = document.createElement('div')
        audio.classList.add('audio')
        audio.innerHTML = `<div><audio src="audio/1.mp3" controls></audio></div>` 
        return audio  
    } */

    function showPhrase(){
        document.querySelector('.phrase-ru').appendChild(createPhraseDiv(currentKeyPhrase))

        setTimeout(() => { 
            document.querySelector('.phrase-translated').appendChild(createPhraseDiv(obj[currentKeyPhrase])) 
            //document.querySelector('.phrase-translated').appendChild(playAudio())
        }, delayBeforeTranslation * 1000) 

        hidePhrase()
    }

    function hidePhrase(){
        setTimeout(() => { 
            
            document.querySelector('.phrase-ru').removeChild(document.querySelector('.phrase-block')) 
            document.querySelector('.phrase-translated').removeChild(document.querySelector('.phrase-block')) 
            //document.querySelector('.phrase-translated').removeChild(document.querySelector('.audio')) 
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