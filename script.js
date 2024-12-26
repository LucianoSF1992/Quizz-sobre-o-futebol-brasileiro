const quizData = [
    {
        question: "Qual é o time com mais títulos do Campeonato Brasileiro?",
        a: "Flamengo",
        b: "Palmeiras",
        c: "São Paulo",
        d: "Santos",
        correct: "b"
    },
    {
        question: "Quem é o maior artilheiro da história da Seleção Brasileira?",
        a: "Ronaldo",
        b: "Pelé",
        c: "Romário",
        d: "Neymar",
        correct: "d"
    },
    {
        question: "Qual clube é conhecido como 'O Peixe'?",
        a: "Fluminense",
        b: "Santos",
        c: "Corinthians",
        d: "Bahia",
        correct: "b"
    },
    {
        question: "Em que ano o Brasil ganhou sua primeira Copa do Mundo?",
        a: "1958",
        b: "1950",
        c: "1930",
        d: "1938",
        correct: "a"
    },
    {
        question: "Qual é o estádio mais famoso do Brasil?",
        a: "Maracanã",
        b: "Mineirão",
        c: "Morumbi",
        d: "Arena Corinthians",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function calculateScore() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });

    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

submitButton.addEventListener('click', () => {
    calculateScore();
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        resultContainer.innerHTML = `
            <h2>Você acertou ${score} de ${quizData.length} perguntas!</h2>
            <h3>Gabarito:</h3>
            <ul>
                ${quizData.map((q, index) => `<li>${index + 1}. ${q.correct}</li>`).join('')}
            </ul>
        `;
        submitButton.style.display = 'none';
    }
});

// Carregar a primeira pergunta
loadQuestion();