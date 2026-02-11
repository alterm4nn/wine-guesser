// Wine grape varieties data
const grapeVarieties = [
    {
        name: "Cabernet Sauvignon",
        characteristics: [
            "Full-bodied with firm tannins",
            "High acidity",
            "Dark purple color",
            "Age-worthy wines",
            "Often aged in oak barrels"
        ],
        aromas: [
            "Blackcurrant",
            "Black cherry",
            "Cedar",
            "Tobacco",
            "Green bell pepper",
            "Mint"
        ]
    },
    {
        name: "Merlot",
        characteristics: [
            "Medium to full-bodied",
            "Soft, velvety tannins",
            "Medium acidity",
            "Fruit-forward profile",
            "Approachable when young"
        ],
        aromas: [
            "Plum",
            "Black cherry",
            "Chocolate",
            "Vanilla",
            "Clove",
            "Bay leaf"
        ]
    },
    {
        name: "Pinot Noir",
        characteristics: [
            "Light to medium-bodied",
            "Low to medium tannins",
            "High acidity",
            "Translucent ruby color",
            "Delicate and elegant"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Cherry",
            "Mushroom",
            "Truffle",
            "Rose petals"
        ]
    },
    {
        name: "Syrah",
        characteristics: [
            "Full-bodied and bold",
            "Medium to high tannins",
            "Medium to high acidity",
            "Deep purple color",
            "Varies by climate"
        ],
        aromas: [
            "Blackberry",
            "Blueberry",
            "Black pepper",
            "Smoke",
            "Grilled meat",
            "Olive"
        ]
    },
    {
        name: "Malbec",
        characteristics: [
            "Full-bodied and rich",
            "Medium to high tannins",
            "Medium acidity",
            "Inky dark color",
            "Jammy fruit character"
        ],
        aromas: [
            "Blackberry",
            "Plum",
            "Black cherry",
            "Cocoa",
            "Leather",
            "Violet"
        ]
    },
    {
        name: "Zinfandel",
        characteristics: [
            "Medium to full-bodied",
            "Medium tannins",
            "Medium acidity",
            "Often high alcohol",
            "Bold and fruity"
        ],
        aromas: [
            "Blackberry",
            "Raspberry",
            "Cherry",
            "Licorice",
            "Black pepper",
            "Tobacco"
        ]
    },
    {
        name: "Sangiovese",
        characteristics: [
            "Medium to full-bodied",
            "High tannins",
            "High acidity",
            "Bright red color",
            "Savory notes"
        ],
        aromas: [
            "Cherry",
            "Strawberry",
            "Tomato leaf",
            "Herbs",
            "Balsamic",
            "Tea"
        ]
    },
    {
        name: "Tempranillo",
        characteristics: [
            "Medium to full-bodied",
            "Medium to high tannins",
            "Medium to high acidity",
            "Responds well to oak",
            "Spain's noble grape"
        ],
        aromas: [
            "Cherry",
            "Plum",
            "Tomato",
            "Leather",
            "Vanilla",
            "Tobacco"
        ]
    },
    {
        name: "Grenache",
        characteristics: [
            "Medium to full-bodied",
            "Low to medium tannins",
            "Medium acidity",
            "Fruity and spicy",
            "Excellent for blending"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Cherry",
            "White pepper",
            "Herbs",
            "Orange peel"
        ]
    },
    {
        name: "Nebbiolo",
        characteristics: [
            "Full-bodied and powerful",
            "Very high tannins",
            "Very high acidity",
            "Pale garnet color",
            "Exceptional aging potential"
        ],
        aromas: [
            "Rose",
            "Tar",
            "Cherry",
            "Truffle",
            "Leather",
            "Anise"
        ]
    }
];

// Game state
let currentQuestionIndex = 0;
let score = 0;
let questionsAsked = 0;
let shuffledGrapes = [];
let currentGrape = null;
let answered = false;

// DOM elements
const questionCard = document.getElementById('question-card');
const resultsCard = document.getElementById('results-card');
const characteristicsList = document.getElementById('characteristics-list');
const aromasList = document.getElementById('aromas-list');
const optionButtons = document.querySelectorAll('.option-btn');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const totalDisplay = document.getElementById('total');
const finalScoreDisplay = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');
const playAgainBtn = document.getElementById('play-again-btn');

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize game
function initGame() {
    score = 0;
    questionsAsked = 0;
    currentQuestionIndex = 0;
    shuffledGrapes = shuffleArray(grapeVarieties);
    
    questionCard.classList.remove('hidden');
    resultsCard.classList.add('hidden');
    
    updateScore();
    loadQuestion();
}

// Update score display
function updateScore() {
    scoreDisplay.textContent = score;
    totalDisplay.textContent = questionsAsked;
}

// Load a question
function loadQuestion() {
    if (currentQuestionIndex >= shuffledGrapes.length) {
        showResults();
        return;
    }

    answered = false;
    currentGrape = shuffledGrapes[currentQuestionIndex];
    
    // Display characteristics
    characteristicsList.innerHTML = '';
    currentGrape.characteristics.forEach(char => {
        const li = document.createElement('li');
        li.textContent = char;
        characteristicsList.appendChild(li);
    });

    // Display aromas
    aromasList.innerHTML = '';
    currentGrape.aromas.forEach(aroma => {
        const li = document.createElement('li');
        li.textContent = aroma;
        aromasList.appendChild(li);
    });

    // Create answer options
    const options = createOptions(currentGrape);
    optionButtons.forEach((btn, index) => {
        btn.textContent = options[index];
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
        btn.onclick = () => checkAnswer(options[index], btn);
    });

    // Hide feedback and next button
    feedbackDiv.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

// Create answer options (1 correct + 3 random)
function createOptions(correctGrape) {
    const options = [correctGrape.name];
    const otherGrapes = grapeVarieties.filter(g => g.name !== correctGrape.name);
    const shuffledOthers = shuffleArray(otherGrapes);
    
    for (let i = 0; i < 3; i++) {
        options.push(shuffledOthers[i].name);
    }
    
    return shuffleArray(options);
}

// Check answer
function checkAnswer(selectedAnswer, button) {
    if (answered) return;
    
    answered = true;
    questionsAsked++;
    
    const isCorrect = selectedAnswer === currentGrape.name;
    
    if (isCorrect) {
        score++;
        button.classList.add('correct');
        feedbackDiv.textContent = `✓ Correct! This is ${currentGrape.name}.`;
        feedbackDiv.classList.remove('incorrect');
        feedbackDiv.classList.add('feedback', 'correct');
    } else {
        button.classList.add('incorrect');
        feedbackDiv.textContent = `✗ Incorrect. The correct answer is ${currentGrape.name}.`;
        feedbackDiv.classList.remove('correct');
        feedbackDiv.classList.add('feedback', 'incorrect');
        
        // Highlight correct answer
        optionButtons.forEach(btn => {
            if (btn.textContent === currentGrape.name) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Disable all buttons
    optionButtons.forEach(btn => btn.disabled = true);
    
    feedbackDiv.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    updateScore();
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Show results
function showResults() {
    questionCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');
    
    const percentage = Math.round((score / questionsAsked) * 100);
    finalScoreDisplay.textContent = `${score}/${questionsAsked} (${percentage}%)`;
    
    let message = '';
    if (percentage === 100) {
        message = 'Perfect score! You\'re a true wine connoisseur! 🏆';
    } else if (percentage >= 80) {
        message = 'Excellent! You have great knowledge of wine grapes! 🌟';
    } else if (percentage >= 60) {
        message = 'Good job! Keep learning and tasting! 👍';
    } else if (percentage >= 40) {
        message = 'Not bad! There\'s room for improvement. Keep exploring! 📚';
    } else {
        message = 'Keep learning! Check out the reference guide below. 🍷';
    }
    
    finalMessage.textContent = message;
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);
playAgainBtn.addEventListener('click', initGame);

// Start the game on page load
initGame();
