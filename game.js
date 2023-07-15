const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choice-text'));

const progressText = document.querySelector('#progressText');

const scoreText = document.querySelector('#score');

const progressBarFull = document.querySelector('#progressBarFull');

const audio = document.getElementById('audio')

let currentQuestion = {}

let acceptingAnswers = true

let score = 0

let questionCounter = 0
let availableQuestions = []




let questions = [
    {
        audio: 'Gotye.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Bon Iver',
        choice2: 'Gotye',
        choice3: 'Glass Animals',
        choice4: 'James Blake',
        answer: 2,
    },
    {
        audio: 'AGrande&SHouse.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Arianna Grande & Social House',
        choice2: 'Dua Lipa',
        choice3: 'Halsey',
        choice4: 'Kehlani',
        answer: 1,
    },
    {
        audio: 'BlindingLights.mp3',
        question: 'What is the name of this song?',
        choice1: 'Bulletproof',
        choice2: 'Love Again',
        choice3: 'Dynamite',
        choice4: 'Blinding Lights',
        answer: 4,
    },
    {
        audio: 'CallOutMyName.mp3',
        question: 'What is the name of this song?',
        choice1: 'Elastic Heart',
        choice2: 'Call Out My Name',
        choice3: 'Reminder',
        choice4: 'Take Us There',
        answer: 2,
    },
    {
        audio: 'DojaCat.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Doja Cat',
        choice2: 'Rhianna',
        choice3: 'idKali Uchisk',
        choice4: 'Kehlani',
        answer: 1,
    },
    {
        audio: 'Eminem.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Drake',
        choice2: 'Dr. Dre',
        choice3: 'Eminem',
        choice4: '50 Cent',
        answer: 3,
    },
    {
        audio: 'HeatWaves.mp3',
        question: 'What is the name of this song?',
        choice1: 'Hate Me',
        choice2: 'Life Goes On',
        choice3: 'Heat Waves',
        choice4: 'Loverboy',
        answer: 3,

    },
    {
        audio: 'Hurricane.mp3',
        question: 'What is the name of this song?',
        choice1: 'Hurricane',
        choice2: 'Come to Life',
        choice3: 'Junya',
        choice4: 'Heaven and Hell',
        answer: 1,

    },
    {
        audio: 'JBalvin&WillyWilliam.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Drake',
        choice2: 'Logic & Deep House',
        choice3: 'Maluma & Daddy Yankee',
        choice4: 'J Balvin & Willy William',
        answer: 4,

    },
    {
        audio: 'LetMeLoveYou.mp3',
        question: 'What is the name of this song?',
        choice1: 'Hold Me Close',
        choice2: 'Stay With Me',
        choice3: 'Embrace My Heart',
        choice4: 'Let Me Love You',
        answer: 4,

    },
    {
        audio: 'LiftMeUp.mp3',
        question: 'What is the name of this song?',
        choice1: 'I Will Fly',
        choice2: 'Lift Me Up',
        choice3: 'Hold Me Down',
        choice4: 'Lemonade',
        answer: 2,

    },
    {
        audio: 'LilTjay&6lack.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Post Malone & 21 Savage',
        choice2: 'NBA Youngboy & MGK',
        choice3: 'J. Cole & A Boogie Wit da Hoodie',
        choice4: 'Lil Tjay & 6LACK',
        answer: 4,

    },
    {
        audio: 'LMFAO.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'LMFAO',
        choice2: 'Party Rock House',
        choice3: 'Black Eyed Peas',
        choice4: 'Party Rock Anthem',
        answer: 1,

    },
    {
        audio: 'M5&CardiB.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Bruno Mars & Nicki Minaj',
        choice2: 'Maroon5 & Cardi B',
        choice3: 'Bruno Mars & Dua Lipa',
        choice4: 'Bruno Mars & DNCE',
        answer: 2,

    },
    {
        audio: 'Marshmellow&anne-marie.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Zara Larsson & Martin Jensen',
        choice2: 'Bebe Rexha',
        choice3: 'Marshmellow & Anne-Marie',
        choice4: 'Dua Lipa',
        answer: 3,

    },
    {
        audio: 'PSY.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'G-Dragon',
        choice2: 'Redfoo',
        choice3: 'PSY',
        choice4: 'PSY & Redfoo',
        answer: 3,

    },
    {
        audio: 'Rihanna.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Beyoncé',
        choice2: 'Rhianna',
        choice3: 'Ariana Grande',
        choice4: 'Dua Lipa',
        answer: 2,

    },
    {
        audio: 'SAD!.mp3',
        question: 'What is the name of this song?',
        choice1: 'SAD!',
        choice2: 'Trippie Red',
        choice3: 'Jocelyn Flores',
        choice4: 'NUMB',
        answer: 1,

    },
    {
        audio: 'Solo.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'So Low',
        choice2: 'Dance the Night',
        choice3: 'One Kiss',
        choice4: 'Solo',
        answer: 4,

    },
    {
        audio: 'Stromae.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Orelsan',
        choice2: 'Stromae',
        choice3: 'Yelle',
        choice4: 'MHD',
        answer: 2,

    },
    {
        audio: 'SmokinOuttheWindow.mp3',
        question: 'What is the name of this song?',
        choice1: 'Smokin Out the Window',
        choice2: 'Midnight Melodies',
        choice3: 'Neon Nights',
        choice4: 'Bruno Mars',
        answer: 1,

    },
    {
        audio: 'TimesLikeThese.mp3',
        question: 'What is the name of this song?',
        choice1: 'Drake',
        choice2: 'Times Like These',
        choice3: 'idk',
        choice4: 'hmm4',
        answer: 2,

    },
    {
        audio: 'TooGood.mp3',
        question: 'What is the name of this song?',
        choice1: 'Drake',
        choice2: 'Rhianna',
        choice3: 'idk',
        choice4: 'Too Good',
        answer: 4,

    },
    {
        audio: 'TravisScott.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Drake',
        choice2: 'ASAP Rocky & Drake',
        choice3: 'Travis Scott',
        choice4: 'Drake & Travis Scott',
        answer: 3,

    },
    {
        audio: 'Sigala,EllaEyre&MeghanTrainor.mp3',
        question: 'What is the name of the artist of this song?',
        choice1: 'Clean Bandit & Jess Glynne',
        choice2: 'Sigala, Ella Eyre & Meghan Trainor',
        choice3: 'Charlie Puth & Jess Glynne',
        choice4: 'Clean Bandit, Jess Glynne & Charlie Puth',
        answer: 2,

    },
    
]



const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
   
  
    
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS + 1}`

    progressBarFull.style.width = `${(questionCounter /(MAX_QUESTIONS+1)) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    var currentAudio = new Audio(currentQuestion.audio);

    currentAudio.play();
   
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score

}

startGame()