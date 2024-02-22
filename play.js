const questions = [
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
        answer: "Avocado",
        points: 10
    },
    {
        question: "Which country is known for producing the most chocolate?",
        options: ["Switzerland", "Belgium", "USA", "Germany"],
        answer: "Belgium",
        points: 10
    },
    {
    question: "What is the primary ingredient in hummus?",
        options: ["Chickpeas", "Lentils", "Black beans", "Kidney beans"],
        answer: "Chickpeas",
        points: 10
    },
    {
        question: "Which of the following vegetables is a key ingredient in the traditional French dish ratatouille?",
        options: ["Zucchini", "Eggplant", "Bell pepper", "All of the above"],
        answer: "All of the above",
        points: 10

    },

    {
        question: "Which Lebanese dessert consists of layers of phyllo pastry filled with chopped nuts and sweetened with syrup or honey?",
        options: ["Baklava", "Kunafa", "Halawet el-jibn", "Ma'amoul"],
        answer: "Baklava",
        points: 10

    },

    {
        question: "What is the name of the Filipino dish made from a mixture of ground pork, vegetables, and spices, wrapped in a thin dough wrapper and deep-fried to a golden crisp?",
        options: ["Lumpia", "Adobo", "Kare-Kare", "Sinigang"],
        answer: "Lumpia",
        points: 10

    },

    {
        question: "What is the name of the popular Indonesian fried rice dish cooked with a variety of ingredients such as shallots, garlic, tamarind, chili, and sweet soy sauce, often topped with a fried egg?",
        options: ["Nasi Goreng", "Rendang", "Satay", "Gado-gado"],
        answer: "Nasi Goreng",
        points: 10

    },

    {
        question: "Which country is known for its famous dish kimchi, a traditional side dish made from fermented vegetables, typically napa cabbage and Korean radishes, seasoned with chili pepper, garlic, ginger, and other spices?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        answer: "South Korea",
        points: 10

    },
    {
        question: "What is the main ingredient in the Italian dish risotto?",
        options: ["Pasta", "Rice", "Potatoes", "Bread"],
        answer: "Rice",
        points: 10

    },
   
    {
        question: "What is the national dish of Morocco, a savory stew made with meat (often lamb or chicken), vegetables, and a mix of spices, typically served with couscous?",
        options: ["Falafel", "Shawarma", "Tagine", "Hummus"],
        answer: "Tagine",
        points: 10

    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let playerName;

const playerNameInput = document.getElementById('playerNameInput');
const startQuizButton = document.getElementById('startQuizButton');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score-value');

startQuizButton.addEventListener('click', startQuiz);

function startQuiz() {
    playerName = playerNameInput.value;
    playerNameInput.style.display = 'none';
    startQuizButton.style.display = 'none';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'flex';
    scoreElement.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, currentQuestion);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, currentQuestion) {
    if (selectedOption === currentQuestion.answer) {
        score += currentQuestion.points;
        scoreElement.textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = 'Quiz Over!';
    optionsElement.innerHTML = '';
    scoreElement.style.display = 'none';
}

let scoreboard = [];

    function updateScoreboard() {
        const playerScore = {
            name: playerName,
            score: score
        };
        scoreboard.push(playerScore);
        scoreboard.sort((a, b) => b.score - a.score);
        const scoreList = document.getElementById('score-list');
        scoreList.innerHTML = '';
        scoreboard.forEach((player, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${player.name}: ${player.score}`;
            scoreList.appendChild(listItem);
        });
    }

    // Modify the endQuiz function to display the scoreboard
    function endQuiz() {
        questionElement.textContent = 'Quiz Over!';
        optionsElement.innerHTML = '';
        scoreElement.style.display = 'none';
        document.getElementById('scoreboard').style.display = 'block';
        updateScoreboard();
    }