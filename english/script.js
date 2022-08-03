/* DATA */

    /* playing phrases settings */

let delayBeforeTranslation = 10
let cycleDuration = 10

    /* end playing phrases settings */

let allPhrases = {
   
    'A2': {
        1: {
            'Я невероятно устал в последнее время': 
                'I\'ve been incredibly tired lately',
            'Я трачу так много денег в последнее время': 
                'I\'ve been spending so much money lately',
            'Я невероятно занят в последнее время': 
                'I\'ve been incredibly busy lately',
            'Я пытаюсь разобраться во всем этом беспорядке последние два дня': 
                'I\'ve been trying to sort out all this mess for the last two days',
            'Я пытаюсь расчистить весь этот беспорядок со вчерашнего дня': 
                'I\'ve been trying to clear up all this mess since yesterday',
            'Как долго ты учишь английский? ': 
                'How long have you been learning English?',
            'Я учу английский пару лет': 
                'I\'ve been learning English for a couple of years',
            'Я изучаю английский около года': 
                'I\'ve been learning English for about a year',
            'Как долго ты изучаешь испанский? Около шести месяцев': 
                'How long have you been learning Spanish? For about six months',
            'Когда ты начал изучать английский? Я начал учить английский два года назад': 
                'When did you start learning English? I started learning English two years ago',
            'Как долго ты меня ждешь? Около десяти минут':
                'How long have you been waiting for me? For about ten minutes',
            'Я жду тебя полчаса':
                'I\'ve been waiting for you for half an hour',  
                'Как долго ты здесь находишься?':
                'How long have you been staying here?',
                'Как давно ты здесь?':
                'How long have you been here?',
                'Я всегда был верен своим принципам':
                'I\'ve always been faithful to my principles',
                'Он всегда был верен своим принципам и убеждениям':
                'He\'s always been faithful to his principles and beliefs',
                'Насколько я помню, я учу английский около двух лет':
                'As far as I remember, I\'ve been learning English for about two years',
                'Я должен сказать, что мы знаем друг друга очень давно':
                'I have to say that we\'ve known each other for a very long time',
                'Я должен добавить, что мы знаем друг друга с детства':
                'I have to add that we\'ve known each other since childhood',
                'Мы знаем друг друга с детства, поэтому я могу положиться на него':
                'We\'ve known each other since childhood so I can rely on him',
                'Я занимаюсь этим весь день':
                'I\'ve been doing it all day',
                'Я занят этой рутиной с утра':
                'I\'ve been busy with this routine since morning',
                'Я читал книгу весь день':
                'I was reading a book all day',
                'Я весь день смотрю разные ролики на ютубе':
                'I\'ve been watching different videos on YouTube all day',
                'Это невероятно трудный день, и я никогда не чувствовал себя таким истощенным':
                'It\'s an incredibly difficult day and I\'ve never felt so exhausted',
                'Они загрузили меня таким количеством заданий сегодня, что я никогда не был так истощен':
                'They\'ve loaded me with so many tasks today that I\'ve never been so exhausted',
                'Я живу здесь почти десять лет':
                'I\'ve been living here for almost ten years',
                'Как долго они женаты?':
                'How long have they been married?',
                'Они женаты около пяти лет':
                'They\'ve been married for about five years',
                'Что ты делал все это время? Ничего, я только что пришел':
                'What have you been doing all this time? Nothing, I\'ve just come',
                'Что ты делал все это время? Я пытался найти решение такой сложной проблемы':
                'What have you been doing all this time? I\'ve been trying to find a solution to such a complicated problem',
                'Я пытаюсь найти решение такой сложной проблемы последние два часа':
                'I\'ve been trying to find a solution to such a complicated problem for the last two hours',
                'Я пытаюсь сделать карьеру с тех пор, как окончил университет':
                'I\'ve been trying to make a career since I graduated from university',
                'Я очень интенсивно изучаю английский с тех пор, как наткнулся на этот канал':
                'I\'ve been learning English very intensively since I came across this channel',
                'Я улучшил свой английский значительно с тех пор, как наткнулся на этот революционный метод изучения английского':
                'I\'ve improved my English significantly since I came across this revolutionary method of learning English',
                'Откровенно говоря, я сделал заметный прогресс в этой области с тех пор, как начал тренироваться на регулярной oснове':
                'Frankly speaking, I\'ve made a noticeable progress in this area since I started training on a regular basis',
                'Я буду ждать твоего сообщения':
                'I\'ll be waiting for your message',
                'Я буду ждать твоего ответа':
                'I\'ll be waiting for your answer',
                'Я буду ждать тебя':
                'I\'ll be waiting for you',
                'Я буду ждать твоего имейла':
                'I\'ll be waiting for your email',
                'Я буду ждать твоего звонка':
                'I\'ll be waiting for your call',
                'Я буду ждать последних новостей':
                'I\'ll be waiting for the latest news',
                'Пока он будет сидеть дома, я буду играть со своими друзьями':
                'While he\'s staying at home, I\'ll be playing with my friends',
                'В то время как они будут отдыхать, я буду работать':
                'While they\'re having a rest, I\'ll be working',
                'Я буду отдыхать, в то время как он будет готовиться к этому экзамену':
                'I\'ll be having a rest while he\'s preparing for this exam',
                'Пока он будет писать этот отчет, я буду анализировать некоторые другие цифры':
                'While he\'s writing this report, I\'ll be analyzing some other figures',
                'Я достигну среднего уровня к следующему месяцу':
                'I will have reached an Intermediate level by next month',
                'Он закончит школу к следующему году':
                'He will have finished school by next year',
                'Она окончит университет к следующему году':
                'She will have graduated from university by next year',
                'Самолет приземлится к тому времени':
                'The plane will have landed by that time',
                'Он придет в офис к десяти':
                'He will have come to the office by ten',
                'Я закончу все к следующей неделе':
                'I will have finished everything by next week',
                'Я закончу смотреть это видео к тому времени, как она придет':
                'I will have finished watching this video by the time she comes',
                'Я закончу писать этот отчет к тому времени, как он придет домой':
                'I will have finished writing this report by the time he comes home',
                'Я предполагаю, они построят мост к следующему лету':
                'I suppose they will have built the bridge by next summer',
                'Я ожидаю, они закончат сооружать мост к следующему сезону':
                'I expect they will have finished constructing the bridge by next season',
                'Когда она пришла домой, я смотрел тот фильм около часа':
                'When she came home, I had been watching that movie for about an hour',
                'Когда он мне позвонил, я смотрел то видео около получаса':
                'When he called me, I had been watching that video for about half an hour',
                'Я готовил около часа, когда зазвонил телефон':
                'I had been cooking for about an hour when the phone rang',
                'Я работал три часа, когда он пришел в офис':
                'I had been working for three hours when he came to the office',
                'Я искал свои ключи около двадцати минут, прежде чем я нашел их':
                'I had been looking for my keys for about twenty minutes before I found them',
                'Она искала свою сумку почти два часа, прежде чем я ее нашел':
                'She had been looking for her bag for almost two hours before I found it',
                'Я учил английский два года, прежде чем достиг среднего уровня':
                'I had been learning English for two years before I reached an Intermediate level',
                'Я буду учиться в университете два года к следующему году':
                'I will have been studying at university for two years by next year',
                'Я проработаю здесь около двух месяцев к следующему году':
                'I will have been working here for about two months by next year',
                'Она будет учиться в университете три года к следующему году':
                'She will have been studying at university for three years by next year',
                'Я буду работать здесь год к следующей неделе':
                'I will have been working here for a year by next week',
                'Я буду находиться здесь два дня к следующей неделе':
                'I will have been staying here for two days by next week',
                'Я буду здесь три дня к следующей неделе':
                'I will have been here for three days by next week',
                'Я буду путешествовать два дня к тому времени, когда она увидит нас':
                'I will have been travelling for two days by the time she sees us',
                'Я буду учиться здесь два года к тому времени':
                'I will have been studying here for two years by that time',
                'Я буду проходить этот курс в течение трех месяцев к тому времени':
                'I will have been doing this course for three months by that time',
                'Я уже проходил тот курс две недели к тому времени':
                'I had already been doing that course for two weeks by that time',
                'Я жду этого час. Я больше не могу ждать этого':
                'I\'ve been waiting for it for an hour. I can\'t wait for it anymore',
                'Я так долго жду это':
                'I\'ve been waiting for it for so long',
                'Я жду очень долго':
                'I\'ve been waiting for a very long time',
                'Когда он позвонил мне, я занимался той работой около пятнадцати минут':
                'When he called me, I had been doing that work for about fifteen minutes',
                'Он очень интенсивно изучал английский язык в течение трех лет, прежде чем достиг продвинутого уровня в английском':
                'He had been learning English very intensively for three years before he reached an Advanced level in English',
                'Он невероятно усердно занимался пару недель, прежде чем сдал свой последний экзамен':
                'He had been studying incredibly hard for a couple of weeks before he passed his final exam',
                'Я достигну следующего уровня к тому времени, как закончу этот курс':
                'I will have reached the next level by the time I finish this course',
                'Он ожидает, что заработает эту сумму денег к следующему году':
                'He expects that he will have earned this sum of money by next year',
                'Они будут жить в Америке пять лет к концу этого месяца':
                'They will have been living in America for five years by the end of this month',
                'Я буду работать здесь год к августу':
                'I will have been working here for a year by August',
                'Они будут жить вместе четыре года к следующему месяцу':
                'They will have been living together for four years by next month',
                'Он достигнет следующего уровня к тому времени, как он закончит изучать этот курс':
                'He will have reached the next level by the time he finishes studying this course',
                'К тому времени, как он пришел домой, она готовила два часа':
                'By the time he came home, she had been cooking for two hours',
                'Я ожидаю, что заработаю эту сумму денег к следующему году':
                'I expect that I will have earned this sum of money by next year',
                'Как долго ты здесь учишься?':
                'How long have you been studying here?'
        },
    
    },

    'My': {
        1: 
        {"Это находится за пределами человеческого понимания":
        "It exceeds the power of human understanding'",
        "Стоимость превысила наши оценки.":
        "The cost exceeded our estimate",
        "Это противоречило бы краткости, которой я собирался придерживаться":
        "It would contradict my intended brevity",
        "Его имя не разглашается из уважения к её родителям":
        "His name has not been released, out of consideration for her parents",
        "Они сразу признали свою ошибку":
        "They readily acknowledged their mistake",
        "Его заказ товара имеет приоритет, поскольку мы получили его первым":
        "His merchandise order takes precedence because we received it first",
        "Закон требует равных прав для всех, независимо от расы, религии или пола":
        "The law requires equal treatment for all, regardless of race, religion, or sex",
        "Вы должны постепенно увеличивать продолжительность тренировки":
        "'You should gradually increase the duration of your workout",
        "Постепенно, моей лодыжке стало лучше":
        "'Gradually, my ankle got better",
        "Нам потребуется достаточное количество времени, чтобы разобраться с этой проблемой":
        "We need sufficient time to deal with the problem",
        }
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
