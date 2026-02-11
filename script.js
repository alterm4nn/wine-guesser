// Wine grape varieties data
const grapeVarieties = [
    {
        name: "Cabernet Sauvignon",
        origin: "Bordeaux, France",
        body: "Full-bodied",
        tannins: "High",
        acidity: "Medium to High",
        characteristics: [
            "Full-bodied with firm tannins",
            "High acidity",
            "Dark purple color",
            "Age-worthy wines",
            "Often aged in oak barrels",
            "Natural cross of Cabernet Franc and Sauvignon Blanc",
            "Can age 10-50 years for top examples"
        ],
        aromas: [
            "Blackcurrant",
            "Black cherry",
            "Cedar",
            "Tobacco",
            "Green bell pepper",
            "Mint"
        ],
        description: "Known as the \"king of red wine grapes,\" produces age-worthy wines with firm tannins and complex flavors"
    },
    {
        name: "Merlot",
        origin: "Bordeaux, France",
        body: "Medium to Full-bodied",
        tannins: "Medium",
        acidity: "Medium",
        characteristics: [
            "Medium to full-bodied",
            "Soft, velvety tannins",
            "Medium acidity",
            "Fruit-forward profile",
            "Approachable when young",
            "One of Bordeaux's key blending grapes",
            "Ripens earlier than Cabernet Sauvignon"
        ],
        aromas: [
            "Plum",
            "Black cherry",
            "Chocolate",
            "Vanilla",
            "Clove",
            "Bay leaf"
        ],
        description: "Softer and more approachable than Cabernet Sauvignon, with velvety texture and fruit-forward profile"
    },
    {
        name: "Pinot Noir",
        origin: "Burgundy, France",
        body: "Light to Medium-bodied",
        tannins: "Low to Medium",
        acidity: "High",
        characteristics: [
            "Light to medium-bodied",
            "Low to medium tannins",
            "High acidity",
            "Translucent ruby color",
            "Delicate and elegant",
            "Thin-skinned grape sensitive to terroir",
            "Silky, velvety mouthfeel"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Cherry",
            "Mushroom",
            "Truffle",
            "Rose",
            "Wet leaves"
        ],
        description: "Elegant and delicate, often described as the most romantic and frustrating grape to grow"
    },
    {
        name: "Syrah",
        origin: "Rhône Valley, France",
        body: "Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium to High",
        characteristics: [
            "Full-bodied and bold",
            "Medium to high tannins",
            "Medium to high acidity",
            "Deep purple color",
            "Varies by climate",
            "Known as Shiraz in Australia",
            "Cooler climates produce elegant, peppery wines"
        ],
        aromas: [
            "Blackberry",
            "Blueberry",
            "Black pepper",
            "Smoke",
            "Grilled meat",
            "Olive",
            "Lavender"
        ],
        description: "Bold and spicy, expressing different characters in cool vs warm climates"
    },
    {
        name: "Malbec",
        origin: "Cahors, France (now famous in Argentina)",
        body: "Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium",
        characteristics: [
            "Full-bodied and rich",
            "Medium to high tannins",
            "Medium acidity",
            "Inky dark color",
            "Jammy fruit character",
            "Argentina rescued it from near-extinction",
            "Known as 'Black Wine' in Cahors"
        ],
        aromas: [
            "Blackberry",
            "Plum",
            "Black cherry",
            "Cocoa",
            "Leather",
            "Tobacco",
            "Violet"
        ],
        description: "Rich and jammy with inky dark color, Argentina's signature grape"
    },
    {
        name: "Zinfandel",
        origin: "Croatia (famous in California, USA)",
        body: "Medium to Full-bodied",
        tannins: "Medium",
        acidity: "Medium",
        characteristics: [
            "Medium to full-bodied",
            "Medium tannins",
            "Medium acidity",
            "Often high alcohol",
            "Bold and fruity",
            "Genetically identical to Italian Primitivo",
            "Can produce both jammy reds and rosé"
        ],
        aromas: [
            "Blackberry",
            "Raspberry",
            "Cherry",
            "Licorice",
            "Black pepper",
            "Tobacco"
        ],
        description: "Bold and fruity, often with higher alcohol content and spicy notes"
    },
    {
        name: "Sangiovese",
        origin: "Tuscany, Italy",
        body: "Medium to Full-bodied",
        tannins: "High",
        acidity: "High",
        characteristics: [
            "Medium to full-bodied",
            "High tannins",
            "High acidity",
            "Bright red color",
            "Savory notes",
            "The primary grape in Chianti wines",
            "Produces both everyday and age-worthy wines"
        ],
        aromas: [
            "Cherry",
            "Strawberry",
            "Tomato leaf",
            "Herbs",
            "Balsamic",
            "Leather",
            "Tea"
        ],
        description: "The heart of Chianti, known for bright acidity and savory notes"
    },
    {
        name: "Tempranillo",
        origin: "Rioja, Spain",
        body: "Medium to Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium to High",
        characteristics: [
            "Medium to full-bodied",
            "Medium to high tannins",
            "Medium to high acidity",
            "Responds well to oak",
            "Spain's noble grape",
            "Name means 'early' in Spanish (early-ripening)",
            "Backbone of Rioja and Ribera del Duero wines"
        ],
        aromas: [
            "Cherry",
            "Plum",
            "Tomato",
            "Leather",
            "Vanilla",
            "Dill",
            "Tobacco"
        ],
        description: "Spain's noble grape, responds well to oak aging"
    },
    {
        name: "Grenache",
        origin: "Spain (famous in Southern Rhône, France)",
        body: "Medium to Full-bodied",
        tannins: "Low to Medium",
        acidity: "Medium",
        characteristics: [
            "Medium to full-bodied",
            "Low to medium tannins",
            "Medium acidity",
            "Fruity and spicy",
            "Excellent for blending",
            "Known as Garnacha in Spain",
            "Key component of Châteauneuf-du-Pape"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Cherry",
            "White pepper",
            "Herbs",
            "Orange peel"
        ],
        description: "Fruity and spicy, often blended but excellent on its own"
    },
    {
        name: "Nebbiolo",
        origin: "Piedmont, Italy",
        body: "Full-bodied",
        tannins: "Very High",
        acidity: "Very High",
        characteristics: [
            "Full-bodied and powerful",
            "Very high tannins",
            "Very high acidity",
            "Pale garnet color",
            "Exceptional aging potential",
            "Creates legendary Barolo and Barbaresco",
            "Name derives from 'nebbia' (fog) in Italian"
        ],
        aromas: [
            "Rose",
            "Tar",
            "Cherry",
            "Truffle",
            "Leather",
            "Anise",
            "Tobacco",
            "Dried herbs"
        ],
        description: "Creates Barolo and Barbaresco, powerful wines with incredible aging potential"
    },
    {
        name: "Cabernet Franc",
        origin: "Loire Valley & Bordeaux, France",
        body: "Medium-bodied",
        tannins: "Medium to Medium-High",
        acidity: "High",
        characteristics: [
            "Medium-bodied with zesty acidity",
            "Smoother tannins than Cabernet Sauvignon",
            "High, refreshing acidity",
            "Bright ruby to garnet color",
            "Parent grape of Cabernet Sauvignon",
            "Ripens a week earlier than Cabernet Sauvignon",
            "Excellent food-pairing wine"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Red cherry",
            "Green bell pepper",
            "Violet",
            "Graphite",
            "Tobacco",
            "Herbs"
        ],
        description: "Parent grape of Cabernet Sauvignon, known for savory aromatics and herbal notes"
    },
    {
        name: "Pinotage",
        origin: "South Africa",
        body: "Full-bodied",
        tannins: "Medium-High to High",
        acidity: "Medium to Medium-High",
        characteristics: [
            "Full-bodied and bold",
            "Medium-high to high tannins",
            "Medium to medium-high acidity",
            "Deep, dark color",
            "Uniquely South African creation",
            "Cross of Pinot Noir and Cinsault (Hermitage)",
            "Created in 1925, South Africa's signature grape"
        ],
        aromas: [
            "Blackberry",
            "Black cherry",
            "Plum",
            "Smoke",
            "Tobacco",
            "Coffee",
            "Chocolate",
            "Earth"
        ],
        description: "South Africa's signature grape, bold and smoky with unique character"
    },
    {
        name: "Mourvèdre",
        origin: "Spain (famous in Bandol, France)",
        body: "Full-bodied",
        tannins: "High",
        acidity: "Medium to Medium-Plus",
        characteristics: [
            "Full-bodied and powerful",
            "High, grippy tannins",
            "Medium to medium-plus acidity",
            "Deep, dark color",
            "Requires hot climate to ripen",
            "Known as Monastrell in Spain, Mataro in Australia",
            "Key component of GSM blends with Grenache and Syrah"
        ],
        aromas: [
            "Blackberry",
            "Black plum",
            "Blueberry",
            "Herbs",
            "Black pepper",
            "Violet",
            "Game",
            "Leather",
            "Earth"
        ],
        description: "Bold Mediterranean grape, adds structure and savory depth to blends"
    },
    {
        name: "Primitivo",
        origin: "Puglia, Italy",
        body: "Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium",
        characteristics: [
            "Full-bodied and rich",
            "Medium to high tannins",
            "Medium, balancing acidity",
            "Deeply colored",
            "High alcohol content (14-16%)",
            "Same grape as Zinfandel, Italian expression",
            "Sun-ripened southern Italian style"
        ],
        aromas: [
            "Blackberry",
            "Black cherry",
            "Plum",
            "Blueberry",
            "Dark chocolate",
            "Licorice",
            "Black pepper",
            "Sweet tobacco"
        ],
        description: "Italian cousin of Zinfandel, bold and fruit-forward from Puglia's sunshine"
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

// Render reference guide from data
function renderReferenceGuide() {
    const grapeGrid = document.querySelector('.grape-grid');
    if (!grapeGrid) return;
    
    grapeGrid.innerHTML = '';
    
    grapeVarieties.forEach(grape => {
        const card = document.createElement('div');
        card.className = 'grape-card';
        
        const aromasText = grape.aromas.join(', ');
        
        card.innerHTML = `
            <h3>${grape.name}</h3>
            <div class="grape-details">
                <p><strong>Origin:</strong> ${grape.origin}</p>
                <p><strong>Body:</strong> ${grape.body}</p>
                <p><strong>Tannins:</strong> ${grape.tannins}</p>
                <p><strong>Acidity:</strong> ${grape.acidity}</p>
                <p><strong>Key Aromas:</strong> ${aromasText}</p>
                <p><strong>Characteristics:</strong> ${grape.description}</p>
            </div>
        `;
        
        grapeGrid.appendChild(card);
    });
}

// Start the game on page load
initGame();
renderReferenceGuide();
