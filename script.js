// script.js - Lógica de Fila, Embaralhamento e Estatísticas em Tempo Real

// VARIÁVEIS DE ESTADO
let currentQuestionIndex = 0; 
let score = 0;
let incorrectCount = 0; 
let totalAnswered = 0; 
let quizActive = true;
let questionPool = []; 
let answeredQuestions = []; 

// ELEMENTOS DOM
const questionTextEl = document.getElementById('question-text');
const optionsAreaEl = document.getElementById('options-area');
const nextButtonEl = document.getElementById('next-button');
const feedbackMessageEl = document.getElementById('feedback-message');
const currentQEl = document.getElementById('current-q');
const totalQEl = document.getElementById('total-q');

// ELEMENTOS DOM DE ESTATÍSTICAS
const statTotalEl = document.getElementById('stat-total');
const statCorrectEl = document.getElementById('stat-correct');
const statIncorrectEl = document.getElementById('stat-incorrect');
const statPercentageEl = document.getElementById('stat-percentage');


// --- 1. FUNÇÕES DE UTILIDADE ---

/**
 * Algoritmo Fisher-Yates para embaralhamento perfeito.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Converte variável CSS para valor RGB para uso em JS.
 */
function var_to_rgb(cssVar) {
    const root = getComputedStyle(document.documentElement);
    // Remove o espaço em branco ao redor do valor retornado
    return root.getPropertyValue(cssVar).trim(); 
}

/**
 * Recalcula e atualiza o painel de estatísticas em tempo real.
 */
function updateStatsDisplay() {
    if (totalAnswered === 0) {
        statTotalEl.textContent = 0;
        statCorrectEl.textContent = 0;
        statIncorrectEl.textContent = 0;
        statPercentageEl.textContent = '0.0%';
        return;
    }

    const percentage = ((score / totalAnswered) * 100).toFixed(1);

    statTotalEl.textContent = totalAnswered;
    statCorrectEl.textContent = score;
    statIncorrectEl.textContent = incorrectCount;
    statPercentageEl.textContent = `${percentage}%`;
}


// --- 2. GERENCIAMENTO DA FILA DE QUESTÕES ---

/**
 * Cria a fila inicial de questões (ou recicla após um ciclo).
 */
function initializeQuestionPool() {
    if (questionPool.length === 0) {
        // Se a fila está vazia (início do jogo ou fim de um ciclo)
        if (answeredQuestions.length > 0) {
            // Recicla e reembaralha o pool para o próximo ciclo
            questionPool = [...answeredQuestions];
            answeredQuestions = [];
            console.log("[FILA] Ciclo de questões concluído. Reiniciando pool com nova ordem aleatória.");
        } else {
            // Início do jogo: Carrega todas as questões
            questionPool = [...QUIZ_QUESTIONS];
            console.log(`[FILA] Iniciando quiz com ${questionPool.length} questões.`);
        }
        
        // Embaralha a fila (regra de ordem aleatória)
        shuffleArray(questionPool);
    }
}


// --- 3. FUNÇÕES DE INICIALIZAÇÃO E RENDERIZAÇÃO ---

/**
 * Inicia o Quiz, popula as opções e carrega a primeira questão.
 */
function initializeQuiz() {
    // 1. Configura a fila de questões
    initializeQuestionPool();
    
    // 2. Renderiza as 13 opções de imagem (uma única vez)
    renderPresidentOptions();
    
    // 3. Carrega a primeira pergunta
    loadQuestion();
    
    // 4. Adiciona o Listener para o botão "Próxima Questão"
    nextButtonEl.addEventListener('click', handleNextQuestion);
    
    // 5. O total de questões reflete o total do acervo
    totalQEl.textContent = QUIZ_QUESTIONS.length;
    
    // 6. Inicializa o painel de estatísticas
    updateStatsDisplay();
}

/**
 * Cria os 13 cartões de imagem no Grid.
 */
function renderPresidentOptions() {
    optionsAreaEl.innerHTML = ''; 
    const presidents = [...ALL_PRESIDENTS];
    
    presidents.forEach(president => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.setAttribute('data-id', president.id);
        
        card.innerHTML = `
            <img src="${president.id}.jpg" alt="Foto de ${president.nome}">
            <p>${president.nome}</p>
        `;
        
        card.addEventListener('click', handleOptionClick);
        optionsAreaEl.appendChild(card);
    });
}


// --- 4. LÓGICA DO JOGO ---

/**
 * Carrega a próxima pergunta aleatória do pool.
 */
function loadQuestion() {
    if (questionPool.length === 0) {
        // Fim do ciclo, inicia o próximo e exibe uma mensagem
        initializeQuestionPool();
        questionTextEl.textContent = `Ciclo Concluído! Reiniciando o quiz com 90 perguntas embaralhadas.`;
    }
    
    const currentQuestion = questionPool[0]; 
    
    quizActive = true;
    
    // Reseta o estado visual
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('correct', 'incorrect');
        card.style.pointerEvents = 'auto'; 
    });
    
    feedbackMessageEl.style.display = 'none';
    nextButtonEl.disabled = true;
    
    questionTextEl.textContent = currentQuestion.question;
    // O contador visual agora é: (total do acervo - total_no_pool + 1)
    currentQEl.textContent = QUIZ_QUESTIONS.length - questionPool.length + 1;
}

/**
 * Lida com o clique na imagem do presidente.
 */
function handleOptionClick(event) {
    if (!quizActive) return; 

    const clickedCard = event.currentTarget;
    const selectedId = clickedCard.getAttribute('data-id');
    const currentQuestion = questionPool[0];
    const correctId = currentQuestion.answerId;
    
    quizActive = false; 
    
    document.querySelectorAll('.option-card').forEach(card => {
        card.style.pointerEvents = 'none'; 
    });

    if (selectedId === correctId) {
        score++;
        clickedCard.classList.add('correct');
        feedbackMessageEl.textContent = "Correto! Associação histórica precisa.";
        // Adiciona a classe success para animação
        feedbackMessageEl.classList.add('success');
        
    } else {
        incorrectCount++; // Incrementa o contador de erros
        
        clickedCard.classList.add('incorrect');
        const correctCard = document.querySelector(`.option-card[data-id="${correctId}"]`);
        correctCard.classList.add('correct');
        
        feedbackMessageEl.textContent = "Incorreto. A resposta correta foi destacada em verde.";
        feedbackMessageEl.classList.remove('success'); // Garante que a animação não rode no erro
    }
    
    totalAnswered++; // Incrementa o total de questões feitas
    updateStatsDisplay(); // Atualiza o painel de estatísticas
    
    feedbackMessageEl.style.display = 'block';
    nextButtonEl.disabled = false;
}

/**
 * Avança para a próxima questão, movendo a questão atual para o pool de respondidas.
 */
function handleNextQuestion() {
    // 1. Move a questão atual (que está na posição 0 do pool) para o array de respondidas
    const completedQuestion = questionPool.shift(); 
    answeredQuestions.push(completedQuestion);
    
    // 2. Remove a classe success da mensagem antes de ir para a próxima pergunta
    feedbackMessageEl.classList.remove('success'); 

    // 3. Carrega a próxima
    loadQuestion();
}


// --- INICIALIZAÇÃO DA APLICAÇÃO ---

document.addEventListener('DOMContentLoaded', initializeQuiz);
