// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const dashboardSection = document.getElementById('dashboard-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const quizListContainer = document.getElementById('quiz-list');

// Quiz DOM
const questionsContainer = document.getElementById('questions-container');
const navGrid = document.getElementById('question-nav-grid');
const progressText = document.getElementById('progress-text');
const viewModeToggle = document.getElementById('view-mode-toggle');
const autoAdvanceToggle = document.getElementById('auto-advance-toggle');
const autoAdvanceWrap = document.getElementById('auto-advance-wrap');
const categoryFilterWrap = document.getElementById('category-filter-wrap');
const categorySelect = document.getElementById('category-select');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const mainPrevBtn = document.getElementById('main-prev-btn');
const mainNextBtn = document.getElementById('main-next-btn');
const questionIndicator = document.getElementById('question-indicator');
const quizBottomNav = document.getElementById('quiz-bottom-nav');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const exitReviewBtn = document.getElementById('exit-review-btn');
const backBtn = document.getElementById('back-btn');
const currentModeBadge = document.getElementById('current-mode-badge');

// Result DOM
const finalScoreEl = document.getElementById('final-score');
const scoreTotalEl = document.querySelector('.score-total');
const scorePercentageEl = document.getElementById('score-percentage');
const resultBadgeText = document.getElementById('result-badge-text');
const resultSubtitle = document.getElementById('result-subtitle');
const categoryBreakdownContainer = document.getElementById('category-breakdown-container');
const categoryBreakdownList = document.getElementById('category-breakdown-list');
const reviewBtn = document.getElementById('review-btn');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

// Mode Select Modal DOM
const modeSelectModal = document.getElementById('mode-select-modal');
const modeModalTitle = document.getElementById('mode-modal-title');
const closeModeModal = document.getElementById('close-mode-modal');
const modePracticeCard = document.getElementById('mode-practice-card');
const modeExamCard = document.getElementById('mode-exam-card');
const shuffleQuestionsToggle = document.getElementById('shuffle-questions-toggle');
const shuffleOptionsToggle = document.getElementById('shuffle-options-toggle');

// Resume Modal DOM
const resumeModal = document.getElementById('resume-modal');
const resumeModalDesc = document.getElementById('resume-modal-desc');
const modalRestart = document.getElementById('modal-restart');
const modalResume = document.getElementById('modal-resume');

// State Variables
let currentQuizId = null;
let currentQuizMode = 'practice'; // 'practice' | 'exam' | 'review'
let currentCategory = 'all';
let quizData = null;
let currentQuestionIndex = 0;
let userAnswers = []; // Store selected index or array of indices for each question
let flaggedQuestions = [];
let score = 0;
let pendingQuizMeta = null;
let pendingQuizMode = null;
let currentMultipleSelections = {}; // mapping questionIndex -> array of selections (used in practice mode)
let isAutoAdvance = localStorage.getItem('autoAdvance') !== 'false';
let shouldShuffleQuestions = localStorage.getItem('shuffleQuestions') !== 'false';
let shouldShuffleOptions = localStorage.getItem('shuffleOptions') !== 'false';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAutoAdvance();
    initShuffleSettings();
    loadQuizzes();
});

function initAutoAdvance() {
    if (autoAdvanceToggle) {
        autoAdvanceToggle.checked = isAutoAdvance;
        autoAdvanceToggle.addEventListener('change', () => {
            isAutoAdvance = autoAdvanceToggle.checked;
            localStorage.setItem('autoAdvance', isAutoAdvance);
        });
    }
}

function initShuffleSettings() {
    if (shuffleQuestionsToggle) {
        shuffleQuestionsToggle.checked = shouldShuffleQuestions;
        shuffleQuestionsToggle.addEventListener('change', () => {
            shouldShuffleQuestions = shuffleQuestionsToggle.checked;
            localStorage.setItem('shuffleQuestions', shouldShuffleQuestions);
        });
    }
    if (shuffleOptionsToggle) {
        shuffleOptionsToggle.checked = shouldShuffleOptions;
        shuffleOptionsToggle.addEventListener('change', () => {
            shouldShuffleOptions = shuffleOptionsToggle.checked;
            localStorage.setItem('shuffleOptions', shouldShuffleOptions);
        });
    }
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Load Quizzes List
async function loadQuizzes() {
    if (!quizListContainer) return;
    quizListContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem;">Đang quét các bài thi...</p>';
    const quizzes = [];
    let i = 1;
    let keepScanning = true;

    while (keepScanning) {
        try {
            const fileName = `data/quiz${i}.json`;
            const response = await fetch(fileName);
            
            if (response.ok) {
                const data = await response.json();
                quizzes.push({
                    id: `quiz_${i}`,
                    title: data.title || `Bộ câu hỏi ${i}`,
                    description: data.description || 'Không có mô tả',
                    file: fileName
                });
                i++;
            } else {
                keepScanning = false;
            }
        } catch (error) {
            keepScanning = false;
        }
    }

    if (quizzes.length === 0) {
        quizListContainer.innerHTML = `<p style="color: var(--danger); font-size: 0.9rem;">Không tìm thấy bài thi nào trong thư mục data/.</p>`;
    } else {
        renderQuizList(quizzes);
    }
}

function renderQuizList(quizzes) {
    quizListContainer.innerHTML = '';
    quizzes.forEach(quiz => {
        const card = document.createElement('div');
        card.className = 'quiz-list-item';
        
        // Check progress for exam mode
        const examKey = `quizProgress_exam_${quiz.id}`;
        let savedExam = null;
        try {
            savedExam = JSON.parse(localStorage.getItem(examKey));
        } catch (e) {}

        let badgeHtml = '';
        if (savedExam && savedExam.completed) {
            badgeHtml = `<span class="quiz-progress-badge" style="color: var(--success); border-color: rgba(16,185,129,0.3); background: var(--success-subtle)">Điểm KT: ${savedExam.bestScore}</span>`;
        }

        card.innerHTML = `
            <div class="quiz-info">
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
            </div>
            <div class="quiz-meta">
                ${badgeHtml}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-subtle)"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
        `;

        card.addEventListener('click', () => openModeSelectModal(quiz));
        quizListContainer.appendChild(card);
    });
}

// Mode Selection Modal
function openModeSelectModal(quizMeta) {
    pendingQuizMeta = quizMeta;
    if (modeModalTitle) modeModalTitle.textContent = quizMeta.title;
    if (shuffleQuestionsToggle) shuffleQuestionsToggle.checked = shouldShuffleQuestions;
    if (shuffleOptionsToggle) shuffleOptionsToggle.checked = shouldShuffleOptions;
    if (modeSelectModal) modeSelectModal.classList.remove('hidden');
}

if (closeModeModal) {
    closeModeModal.addEventListener('click', () => {
        if (modeSelectModal) modeSelectModal.classList.add('hidden');
    });
}

if (modePracticeCard) {
    modePracticeCard.addEventListener('click', () => {
        if (modeSelectModal) modeSelectModal.classList.add('hidden');
        handleModeSelect('practice');
    });
}

if (modeExamCard) {
    modeExamCard.addEventListener('click', () => {
        if (modeSelectModal) modeSelectModal.classList.add('hidden');
        handleModeSelect('exam');
    });
}

function handleModeSelect(mode) {
    pendingQuizMode = mode;
    const progressKey = `quizProgress_${mode}_${pendingQuizMeta.id}`;
    let savedProgress = null;
    try {
        savedProgress = JSON.parse(localStorage.getItem(progressKey));
    } catch (e) {}

    if (savedProgress && !savedProgress.completed && savedProgress.userAnswers && savedProgress.userAnswers.some(a => a !== null)) {
        if (resumeModalDesc) {
            resumeModalDesc.textContent = `Bạn có bài làm dở ở chế độ ${mode === 'practice' ? 'Học tập' : 'Kiểm tra'}. Bạn muốn tiếp tục hay làm lại từ đầu?`;
        }
        if (resumeModal) resumeModal.classList.remove('hidden');
    } else {
        startQuiz(pendingQuizMeta, mode, false);
    }
}

if (modalRestart) {
    modalRestart.addEventListener('click', () => {
        if (resumeModal) resumeModal.classList.add('hidden');
        startQuiz(pendingQuizMeta, pendingQuizMode, false);
    });
}

if (modalResume) {
    modalResume.addEventListener('click', () => {
        if (resumeModal) resumeModal.classList.add('hidden');
        startQuiz(pendingQuizMeta, pendingQuizMode, true);
    });
}

// Shuffle Utilities
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function prepareShuffledQuiz(data, shuffleQuestions = true, shuffleOptions = true) {
    if (!data || !data.questions) return;
    
    if (shuffleQuestions) {
        shuffleArray(data.questions);
    }
    
    if (shuffleOptions) {
        data.questions.forEach(q => {
            const originalOptions = [...q.options];
            const isMultiple = Array.isArray(q.answer);
            
            const optionsWithIndex = originalOptions.map((opt, i) => ({ text: opt, originalIndex: i }));
            shuffleArray(optionsWithIndex);
            q.options = optionsWithIndex.map(o => o.text);
            
            if (isMultiple) {
                q.answer = q.answer.map(origAns => optionsWithIndex.findIndex(o => o.originalIndex === origAns));
            } else {
                q.answer = optionsWithIndex.findIndex(o => o.originalIndex === q.answer);
            }
        });
    }
}

// Category Filter & Helpers
function populateCategoryFilter() {
    if (!categorySelect || !quizData || !quizData.questions) return;
    
    const categoriesMap = {};
    quizData.questions.forEach(q => {
        const cat = q.category || 'Chung';
        categoriesMap[cat] = (categoriesMap[cat] || 0) + 1;
    });

    categorySelect.innerHTML = `<option value="all">Tất cả chủ đề (${quizData.questions.length})</option>`;
    
    Object.keys(categoriesMap).sort().forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = `${cat} (${categoriesMap[cat]})`;
        categorySelect.appendChild(opt);
    });

    categorySelect.value = currentCategory;
}

if (categorySelect) {
    categorySelect.addEventListener('change', () => {
        currentCategory = categorySelect.value;
        handleCategoryChange();
    });
}

function getFilteredQuestionIndices() {
    if (!quizData || !quizData.questions) return [];
    if (currentCategory === 'all') {
        return quizData.questions.map((_, i) => i);
    }
    const list = [];
    quizData.questions.forEach((q, i) => {
        const cat = q.category || 'Chung';
        if (cat === currentCategory) list.push(i);
    });
    return list;
}

function handleCategoryChange() {
    const filtered = getFilteredQuestionIndices();
    if (filtered.length > 0 && !filtered.includes(currentQuestionIndex)) {
        currentQuestionIndex = filtered[0];
    }
    updateViewMode();
}

// Start Quiz Logic
async function startQuiz(quizMeta, mode, resume) {
    try {
        currentQuizId = quizMeta.id;
        currentQuizMode = mode;
        currentCategory = 'all';
        const progressKey = `quizProgress_${currentQuizMode}_${currentQuizId}`;
        
        const response = await fetch(quizMeta.file);
        if (!response.ok) throw new Error('Không thể tải file câu hỏi');
        const freshData = await response.json();

        let savedProgress = null;
        if (resume) {
            try {
                savedProgress = JSON.parse(localStorage.getItem(progressKey));
            } catch (e) {}
        }

        if (resume && savedProgress && savedProgress.shuffledQuizData && savedProgress.shuffledQuizData.questions) {
            quizData = savedProgress.shuffledQuizData;
            currentQuestionIndex = savedProgress.currentQuestionIndex || 0;
            userAnswers = savedProgress.userAnswers || new Array(quizData.questions.length).fill(null);
            flaggedQuestions = savedProgress.flaggedQuestions || [];
            score = savedProgress.score || 0;
        } else {
            quizData = JSON.parse(JSON.stringify(freshData));
            
            const doShuffleQ = (mode === 'exam') 
                ? (shuffleQuestionsToggle ? shuffleQuestionsToggle.checked : true)
                : shouldShuffleQuestions;
            const doShuffleO = (mode === 'exam') 
                ? (shuffleOptionsToggle ? shuffleOptionsToggle.checked : true)
                : shouldShuffleOptions;

            prepareShuffledQuiz(quizData, doShuffleQ, doShuffleO);
            currentQuestionIndex = 0;
            userAnswers = new Array(quizData.questions.length).fill(null);
            flaggedQuestions = [];
            score = 0;
            saveProgress();
        }

        currentMultipleSelections = {};
        
        populateCategoryFilter();
        updateModeBadge();
        showSection(quizSection);
        renderAllQuestions();
        updateViewMode();
    } catch (error) {
        console.error('Lỗi khi bắt đầu bài thi:', error);
        alert('Lỗi: ' + error.message);
    }
}

function updateModeBadge() {
    if (!currentModeBadge) return;
    if (currentQuizMode === 'practice') {
        currentModeBadge.textContent = 'Chế độ Học tập';
        currentModeBadge.className = 'mode-badge practice';
        if (submitQuizBtn) submitQuizBtn.textContent = 'Hoàn thành bài học';
        if (submitQuizBtn) submitQuizBtn.classList.remove('hidden');
        if (exitReviewBtn) exitReviewBtn.classList.add('hidden');
    } else if (currentQuizMode === 'exam') {
        currentModeBadge.textContent = 'Chế độ Kiểm tra';
        currentModeBadge.className = 'mode-badge exam';
        if (submitQuizBtn) submitQuizBtn.textContent = 'Nộp bài';
        if (submitQuizBtn) submitQuizBtn.classList.remove('hidden');
        if (exitReviewBtn) exitReviewBtn.classList.add('hidden');
    } else if (currentQuizMode === 'review') {
        currentModeBadge.textContent = 'Xem lại đáp án';
        currentModeBadge.className = 'mode-badge review';
        if (submitQuizBtn) submitQuizBtn.classList.add('hidden');
        if (exitReviewBtn) exitReviewBtn.classList.remove('hidden');
    }
}

// Render All Questions
function renderAllQuestions() {
    if (!questionsContainer || !navGrid || !quizData || !quizData.questions) return;
    
    questionsContainer.innerHTML = '';
    navGrid.innerHTML = '';

    quizData.questions.forEach((qData, qIndex) => {
        const isMultiple = Array.isArray(qData.answer);
        const requiredCount = isMultiple ? qData.answer.length : 1;
        currentMultipleSelections[qIndex] = Array.isArray(userAnswers[qIndex]) ? [...userAnswers[qIndex]] : [];

        // 1. Navigation Button in Sidebar
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.textContent = qIndex + 1;
        navBtn.id = `nav-btn-${qIndex}`;
        navBtn.addEventListener('click', () => {
            currentQuestionIndex = qIndex;
            updateViewMode();
            if (viewModeToggle && viewModeToggle.checked) {
                const targetBlock = document.getElementById(`qblock-${qIndex}`);
                if (targetBlock) {
                    targetBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        navGrid.appendChild(navBtn);

        // 2. Question Block
        const block = document.createElement('div');
        block.className = `question-block ${qIndex === currentQuestionIndex ? 'active' : ''}`;
        block.id = `qblock-${qIndex}`;

        // Header
        const qHeader = document.createElement('div');
        qHeader.className = 'q-header';
        
        const titleWrap = document.createElement('div');
        titleWrap.className = 'q-title-wrap';

        // Meta tags: Question tag + Category badge
        const metaTags = document.createElement('div');
        metaTags.className = 'q-meta-tags';

        const qTag = document.createElement('span');
        qTag.className = 'q-tag';
        
        if (currentQuizMode === 'practice') {
            qTag.textContent = isMultiple ? `Câu ${qIndex + 1} • Chọn ${requiredCount} đáp án` : `Câu ${qIndex + 1} • Chọn 1 đáp án`;
        } else if (currentQuizMode === 'review') {
            qTag.textContent = isMultiple ? `Câu ${qIndex + 1} • ${requiredCount} đáp án đúng` : `Câu ${qIndex + 1} • 1 đáp án đúng`;
        } else {
            qTag.textContent = isMultiple ? `Câu ${qIndex + 1} • Chọn nhiều đáp án` : `Câu ${qIndex + 1} • Chọn 1 đáp án`;
        }
        metaTags.appendChild(qTag);

        if (qData.category) {
            const catTag = document.createElement('span');
            catTag.className = 'q-category-tag';
            catTag.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg><span>${qData.category}</span>`;
            metaTags.appendChild(catTag);
        }
        
        const title = document.createElement('h3');
        title.textContent = qData.question;
        
        titleWrap.appendChild(metaTags);
        titleWrap.appendChild(title);

        const flagBtn = document.createElement('button');
        flagBtn.className = `flag-btn ${flaggedQuestions.includes(qIndex) ? 'flagged' : ''}`;
        flagBtn.innerHTML = '🚩';
        flagBtn.title = "Đánh dấu câu hỏi này";
        flagBtn.addEventListener('click', () => {
            const idx = flaggedQuestions.indexOf(qIndex);
            if (idx > -1) {
                flaggedQuestions.splice(idx, 1);
                flagBtn.classList.remove('flagged');
            } else {
                flaggedQuestions.push(qIndex);
                flagBtn.classList.add('flagged');
            }
            updateNavStyles();
            saveProgress();
        });

        qHeader.appendChild(titleWrap);
        qHeader.appendChild(flagBtn);
        block.appendChild(qHeader);

        // Options List
        const optsContainer = document.createElement('div');
        optsContainer.className = 'options-list';
        
        // Multiple Choice Footer for Practice Mode
        let qFooter = null;
        let hintEl = null;
        let checkBtn = null;

        if (currentQuizMode === 'practice' && isMultiple) {
            qFooter = document.createElement('div');
            qFooter.className = 'q-footer';
            
            hintEl = document.createElement('span');
            hintEl.className = 'q-selection-hint';
            
            if (userAnswers[qIndex] !== null) {
                const isCorrect = Array.isArray(userAnswers[qIndex]) && qData.answer.length === userAnswers[qIndex].length && qData.answer.every(a => userAnswers[qIndex].includes(a));
                hintEl.textContent = isCorrect ? '✓ Trả lời chính xác' : '✕ Chưa chính xác';
                hintEl.style.color = isCorrect ? 'var(--success)' : 'var(--danger)';
                hintEl.style.fontWeight = '600';
                qFooter.appendChild(hintEl);
            } else {
                hintEl.textContent = `Chọn đúng ${requiredCount} đáp án...`;
                
                checkBtn = document.createElement('button');
                checkBtn.className = 'primary-btn check-mc-btn';
                checkBtn.disabled = true;
                checkBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Chốt đáp án</span>`;
                
                checkBtn.addEventListener('click', () => {
                    handlePracticeMultipleSelect(qIndex, optsContainer, qFooter);
                });
                
                qFooter.appendChild(hintEl);
                qFooter.appendChild(checkBtn);
            }
        }

        qData.options.forEach((opt, optIndex) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.optIndex = optIndex;
            
            const letter = String.fromCharCode(65 + optIndex);
            const optContent = document.createElement('div');
            optContent.className = 'opt-content';
            optContent.innerHTML = `<span class="opt-key">${letter}</span>`;
            
            const span = document.createElement('span');
            span.className = 'opt-text';
            span.textContent = opt;
            optContent.appendChild(span);
            btn.appendChild(optContent);

            // Render according to mode
            if (currentQuizMode === 'review') {
                btn.disabled = true;
                const isSelected = isMultiple ? (Array.isArray(userAnswers[qIndex]) && userAnswers[qIndex].includes(optIndex)) : (userAnswers[qIndex] === optIndex);
                const isCorrectChoice = isMultiple ? qData.answer.includes(optIndex) : (qData.answer === optIndex);

                if (isCorrectChoice) {
                    btn.classList.add('correct');
                    btn.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--success);flex-shrink:0"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
                } else if (isSelected && !isCorrectChoice) {
                    btn.classList.add('incorrect');
                    btn.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--danger);flex-shrink:0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
                }
            } else if (currentQuizMode === 'practice') {
                if (userAnswers[qIndex] !== null) {
                    btn.disabled = true;
                    const isSelected = isMultiple ? (Array.isArray(userAnswers[qIndex]) && userAnswers[qIndex].includes(optIndex)) : (userAnswers[qIndex] === optIndex);
                    const isCorrectChoice = isMultiple ? qData.answer.includes(optIndex) : (qData.answer === optIndex);

                    if (isCorrectChoice) {
                        btn.classList.add('correct');
                        btn.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--success);flex-shrink:0"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
                    } else if (isSelected && !isCorrectChoice) {
                        btn.classList.add('incorrect');
                        btn.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--danger);flex-shrink:0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
                    }
                } else {
                    btn.addEventListener('click', () => {
                        if (isMultiple) {
                            const selIdx = currentMultipleSelections[qIndex].indexOf(optIndex);
                            if (selIdx > -1) {
                                currentMultipleSelections[qIndex].splice(selIdx, 1);
                                btn.classList.remove('selected');
                            } else {
                                currentMultipleSelections[qIndex].push(optIndex);
                                btn.classList.add('selected');
                            }
                            
                            const selCount = currentMultipleSelections[qIndex].length;
                            if (checkBtn) {
                                checkBtn.disabled = (selCount === 0);
                            }
                            if (hintEl) {
                                if (selCount === 0) {
                                    hintEl.textContent = `Chọn đúng ${requiredCount} đáp án...`;
                                } else if (selCount === requiredCount) {
                                    hintEl.textContent = `Đã chọn đủ: ${selCount}/${requiredCount} đáp án`;
                                } else if (selCount > requiredCount) {
                                    hintEl.textContent = `Đã chọn: ${selCount}/${requiredCount} đáp án (thừa ${selCount - requiredCount})`;
                                } else {
                                    hintEl.textContent = `Đã chọn: ${selCount}/${requiredCount} đáp án`;
                                }
                            }
                        } else {
                            handlePracticeSingleSelect(qIndex, optIndex, optsContainer);
                        }
                    });
                }
            } else if (currentQuizMode === 'exam') {
                const isSelected = isMultiple ? (Array.isArray(userAnswers[qIndex]) && userAnswers[qIndex].includes(optIndex)) : (userAnswers[qIndex] === optIndex);
                if (isSelected) {
                    btn.classList.add('selected');
                }

                btn.addEventListener('click', () => {
                    handleExamOptionSelect(qIndex, optIndex, isMultiple, optsContainer);
                });
            }

            optsContainer.appendChild(btn);
        });

        block.appendChild(optsContainer);
        if (qFooter) {
            block.appendChild(qFooter);
        }

        // Explanation Box
        if (qData.explanation) {
            const isAnswered = userAnswers[qIndex] !== null && userAnswers[qIndex] !== undefined;
            const showExp = (currentQuizMode === 'review') || (currentQuizMode === 'practice' && isAnswered);
            
            const expBox = document.createElement('div');
            expBox.className = `q-explanation-box ${showExp ? '' : 'hidden'}`;
            expBox.id = `explanation-${qIndex}`;
            expBox.innerHTML = `
                <div class="explanation-header">
                    <div class="explanation-title-wrap">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <span>Giải thích chi tiết</span>
                    </div>
                    <span class="explanation-cat-pill">${qData.category || 'Chung'}</span>
                </div>
                <div class="explanation-content">${qData.explanation}</div>
            `;
            block.appendChild(expBox);
        }

        questionsContainer.appendChild(block);
    });

    updateNavStyles();
}

// Practice Mode Selection Handlers
function handlePracticeSingleSelect(qIndex, optIndex, optsContainer) {
    userAnswers[qIndex] = optIndex;
    const qData = quizData.questions[qIndex];
    
    const allOptions = optsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.disabled = true);

    const btnElement = allOptions[optIndex];

    if (optIndex === qData.answer) {
        score++;
        btnElement.classList.add('correct');
        btnElement.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--success);flex-shrink:0"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
    } else {
        btnElement.classList.add('incorrect');
        btnElement.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--danger);flex-shrink:0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
        
        if (allOptions[qData.answer]) {
            allOptions[qData.answer].classList.add('correct');
            allOptions[qData.answer].insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--success);flex-shrink:0"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
        }
    }

    // Reveal explanation in practice mode
    const expBox = document.getElementById(`explanation-${qIndex}`);
    if (expBox) {
        expBox.classList.remove('hidden');
    }

    updateNavStyles();
    saveProgress();
    
    const isAll = viewModeToggle ? viewModeToggle.checked : false;
    const filtered = getFilteredQuestionIndices();
    if (isAutoAdvance && !isAll && filtered.length > 1) {
        setTimeout(() => {
            goToNextQuestion();
        }, 500);
    }
}

function handlePracticeMultipleSelect(qIndex, optsContainer, qFooter) {
    const qData = quizData.questions[qIndex];
    const selection = currentMultipleSelections[qIndex] || [];
    userAnswers[qIndex] = [...selection];
    
    const correctAnswers = qData.answer || [];
    const isAllCorrect = correctAnswers.length === selection.length && 
                         correctAnswers.every(ans => selection.includes(ans));
                         
    if (isAllCorrect) {
        score++;
    }
    
    const allOptions = optsContainer.querySelectorAll('.option-btn');
    allOptions.forEach((btn, index) => {
        btn.disabled = true;
        btn.classList.remove('selected');
        
        const isSelected = selection.includes(index);
        const isCorrectChoice = correctAnswers.includes(index);
        
        if (isCorrectChoice) {
            btn.classList.add('correct');
            btn.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--success);flex-shrink:0"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
        } else if (isSelected && !isCorrectChoice) {
            btn.classList.add('incorrect');
            btn.insertAdjacentHTML('beforeend', `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--danger);flex-shrink:0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
        }
    });
    
    if (qFooter) {
        qFooter.innerHTML = isAllCorrect 
            ? `<span class="q-selection-hint" style="color:var(--success); font-weight:600">✓ Trả lời chính xác</span>` 
            : `<span class="q-selection-hint" style="color:var(--danger); font-weight:600">✕ Chưa chính xác</span>`;
    }
    
    // Reveal explanation in practice mode
    const expBox = document.getElementById(`explanation-${qIndex}`);
    if (expBox) {
        expBox.classList.remove('hidden');
    }

    updateNavStyles();
    saveProgress();

    const isAll = viewModeToggle ? viewModeToggle.checked : false;
    const filtered = getFilteredQuestionIndices();
    if (isAutoAdvance && !isAll && filtered.length > 1) {
        setTimeout(() => {
            goToNextQuestion();
        }, 500);
    }
}

// Exam Mode Selection Handler
function handleExamOptionSelect(qIndex, optIndex, isMultiple, optsContainer) {
    const allOptions = optsContainer.querySelectorAll('.option-btn');

    if (isMultiple) {
        if (!Array.isArray(userAnswers[qIndex])) {
            userAnswers[qIndex] = [];
        }
        const existingIdx = userAnswers[qIndex].indexOf(optIndex);
        if (existingIdx > -1) {
            userAnswers[qIndex].splice(existingIdx, 1);
            if (userAnswers[qIndex].length === 0) userAnswers[qIndex] = null;
        } else {
            userAnswers[qIndex].push(optIndex);
        }

        allOptions.forEach((btn, idx) => {
            if (Array.isArray(userAnswers[qIndex]) && userAnswers[qIndex].includes(idx)) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
    } else {
        if (userAnswers[qIndex] === optIndex) {
            userAnswers[qIndex] = null; // deselect
            allOptions[optIndex].classList.remove('selected');
        } else {
            userAnswers[qIndex] = optIndex;
            allOptions.forEach((btn, idx) => {
                if (idx === optIndex) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            // Auto-advance in single mode if enabled
            const isAll = viewModeToggle ? viewModeToggle.checked : false;
            const filtered = getFilteredQuestionIndices();
            if (isAutoAdvance && !isAll && filtered.length > 1) {
                setTimeout(() => {
                    goToNextQuestion();
                }, 300);
            }
        }
    }

    updateNavStyles();
    saveProgress();
}

function updateNavStyles() {
    if (!quizData || !quizData.questions) return;
    let answeredCount = 0;
    const isPracticeOrReview = (currentQuizMode === 'practice' || currentQuizMode === 'review');
    const filtered = getFilteredQuestionIndices();
    
    quizData.questions.forEach((qData, idx) => {
        const navBtn = document.getElementById(`nav-btn-${idx}`);
        if (!navBtn) return;
        
        navBtn.className = 'nav-btn';
        if (idx === currentQuestionIndex) navBtn.classList.add('active');
        
        if (!filtered.includes(idx)) {
            navBtn.classList.add('category-dimmed');
        }

        const uAns = userAnswers[idx];
        if (uAns !== null && uAns !== undefined) {
            answeredCount++;
            
            if (isPracticeOrReview) {
                let isCorrect = false;
                if (Array.isArray(qData.answer)) {
                    isCorrect = Array.isArray(uAns) && qData.answer.length === uAns.length && qData.answer.every(a => uAns.includes(a));
                } else {
                    isCorrect = (uAns === qData.answer);
                }

                if (isCorrect) {
                    navBtn.classList.add('nav-correct');
                } else {
                    navBtn.classList.add('nav-incorrect');
                }
            } else {
                navBtn.classList.add('answered');
            }
        }
        
        if (flaggedQuestions.includes(idx)) navBtn.classList.add('flagged');
    });
    
    if (progressText) {
        if (currentCategory === 'all') {
            progressText.textContent = `${answeredCount}/${quizData.questions.length}`;
        } else {
            const filteredAnswered = filtered.filter(i => userAnswers[i] !== null && userAnswers[i] !== undefined).length;
            progressText.textContent = `${filteredAnswered}/${filtered.length}`;
        }
    }

    const navLegend = document.querySelector('.nav-legend');
    if (navLegend) {
        if (isPracticeOrReview) {
            navLegend.innerHTML = `
                <div class="legend-item"><span class="box"></span> Chưa làm</div>
                <div class="legend-item"><span class="box correct"></span> Trả lời đúng</div>
                <div class="legend-item"><span class="box incorrect"></span> Trả lời sai</div>
                <div class="legend-item"><span class="box flagged"></span> Đánh dấu</div>
            `;
        } else {
            navLegend.innerHTML = `
                <div class="legend-item"><span class="box"></span> Chưa làm</div>
                <div class="legend-item"><span class="box answered"></span> Đã chọn</div>
                <div class="legend-item"><span class="box flagged"></span> Đánh dấu</div>
            `;
        }
    }
}

// View Mode Toggle
if (viewModeToggle) {
    viewModeToggle.addEventListener('change', () => {
        updateViewMode();
    });
}

function updateViewMode() {
    if (!questionsContainer || !quizData || !quizData.questions) return;
    const isAll = viewModeToggle ? viewModeToggle.checked : false;
    const filtered = getFilteredQuestionIndices();
    
    if (isAll) {
        questionsContainer.classList.remove('single-mode');
        if (prevBtn) prevBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
        if (autoAdvanceWrap) autoAdvanceWrap.classList.add('hidden');
        if (quizBottomNav) quizBottomNav.classList.add('hidden');
        
        const blocks = questionsContainer.querySelectorAll('.question-block');
        blocks.forEach((b, idx) => {
            b.classList.remove('active');
            if (filtered.includes(idx)) {
                b.classList.remove('category-hidden');
            } else {
                b.classList.add('category-hidden');
            }
        });
    } else {
        questionsContainer.classList.add('single-mode');
        if (prevBtn) prevBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');
        if (autoAdvanceWrap) autoAdvanceWrap.classList.remove('hidden');
        if (quizBottomNav) quizBottomNav.classList.remove('hidden');
        
        const hasMultiple = filtered.length > 1;

        if (prevBtn) prevBtn.disabled = !hasMultiple;
        if (nextBtn) nextBtn.disabled = !hasMultiple;
        if (mainPrevBtn) mainPrevBtn.disabled = !hasMultiple;
        if (mainNextBtn) mainNextBtn.disabled = !hasMultiple;
        
        if (questionIndicator) {
            if (filtered.length === 0) {
                questionIndicator.textContent = 'Không có câu hỏi';
            } else if (currentCategory === 'all') {
                questionIndicator.textContent = `Câu ${currentQuestionIndex + 1} / ${quizData.questions.length}`;
            } else {
                const pos = filtered.indexOf(currentQuestionIndex) + 1;
                questionIndicator.textContent = `Câu ${pos} / ${filtered.length} (Tổng ${quizData.questions.length})`;
            }
        }
        
        const blocks = questionsContainer.querySelectorAll('.question-block');
        blocks.forEach((b, idx) => {
            if (idx === currentQuestionIndex) {
                b.classList.add('active');
                b.classList.remove('category-hidden');
            } else {
                b.classList.remove('active');
                if (filtered.includes(idx)) {
                    b.classList.remove('category-hidden');
                } else {
                    b.classList.add('category-hidden');
                }
            }
        });
    }
    
    updateNavStyles();
    saveProgress();
}

// Next/Prev Buttons Handlers (Duyệt theo danh mục đã lọc)
function goToPrevQuestion() {
    if (!quizData || !quizData.questions.length) return;
    const filtered = getFilteredQuestionIndices();
    if (filtered.length === 0) return;
    
    const currPos = filtered.indexOf(currentQuestionIndex);
    if (currPos === -1) {
        currentQuestionIndex = filtered[0];
    } else {
        const newPos = (currPos - 1 + filtered.length) % filtered.length;
        currentQuestionIndex = filtered[newPos];
    }
    updateViewMode();
}

function goToNextQuestion() {
    if (!quizData || !quizData.questions.length) return;
    const filtered = getFilteredQuestionIndices();
    if (filtered.length === 0) return;
    
    const currPos = filtered.indexOf(currentQuestionIndex);
    if (currPos === -1) {
        currentQuestionIndex = filtered[0];
    } else {
        const newPos = (currPos + 1) % filtered.length;
        currentQuestionIndex = filtered[newPos];
    }
    updateViewMode();
}

if (prevBtn) prevBtn.addEventListener('click', goToPrevQuestion);
if (nextBtn) nextBtn.addEventListener('click', goToNextQuestion);
if (mainPrevBtn) mainPrevBtn.addEventListener('click', goToPrevQuestion);
if (mainNextBtn) mainNextBtn.addEventListener('click', goToNextQuestion);

// Save Progress to localStorage
function saveProgress() {
    if (!currentQuizId || !quizData || currentQuizMode === 'review') return;
    const progressKey = `quizProgress_${currentQuizMode}_${currentQuizId}`;
    let existing = {};
    try {
        existing = JSON.parse(localStorage.getItem(progressKey)) || {};
    } catch (e) {}
    
    const data = {
        ...existing,
        currentQuestionIndex,
        userAnswers,
        flaggedQuestions,
        score,
        completed: false,
        shuffledQuizData: quizData
    };
    try {
        localStorage.setItem(progressKey, JSON.stringify(data));
    } catch (e) {}
}

// Submit Quiz
if (submitQuizBtn) {
    submitQuizBtn.addEventListener('click', () => {
        if (!userAnswers) return;
        const unanswered = userAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            const confirm = window.confirm(`Bạn còn ${unanswered} câu chưa hoàn thành. Bạn có chắc chắn muốn nộp bài không?`);
            if (!confirm) return;
        }
        finishQuiz();
    });
}

function finishQuiz() {
    // Calculate final score
    score = 0;
    quizData.questions.forEach((q, idx) => {
        const uAns = userAnswers[idx];
        if (uAns === null || uAns === undefined) return;
        
        if (Array.isArray(q.answer)) {
            if (Array.isArray(uAns) && q.answer.length === uAns.length && q.answer.every(a => uAns.includes(a))) {
                score++;
            }
        } else {
            if (uAns === q.answer) {
                score++;
            }
        }
    });

    const progressKey = `quizProgress_${currentQuizMode}_${currentQuizId}`;
    let savedProgress = {};
    try {
        savedProgress = JSON.parse(localStorage.getItem(progressKey)) || {};
    } catch (e) {}
    
    const bestScore = savedProgress.bestScore !== undefined ? Math.max(savedProgress.bestScore, score) : score;
    
    const data = {
        completed: true,
        bestScore: bestScore,
        lastScore: score,
        userAnswers: userAnswers,
        shuffledQuizData: quizData
    };
    try {
        localStorage.setItem(progressKey, JSON.stringify(data));
    } catch (e) {}

    // Show result screen
    showSection(resultSection);
    if (finalScoreEl) finalScoreEl.textContent = score;
    if (scoreTotalEl && quizData && quizData.questions) {
        scoreTotalEl.textContent = `/${quizData.questions.length}`;
        const pct = Math.round((score / quizData.questions.length) * 100);
        if (scorePercentageEl) scorePercentageEl.textContent = `Đạt: ${pct}%`;
    }

    if (resultBadgeText) {
        resultBadgeText.textContent = currentQuizMode === 'practice' ? 'Kết quả học tập' : 'Kết quả kiểm tra';
    }

    renderCategoryBreakdown();
}

function renderCategoryBreakdown() {
    if (!categoryBreakdownList || !quizData || !quizData.questions) return;
    categoryBreakdownList.innerHTML = '';
    
    const catStats = {};
    quizData.questions.forEach((q, idx) => {
        const cat = q.category || 'Chung';
        if (!catStats[cat]) {
            catStats[cat] = { total: 0, correct: 0 };
        }
        catStats[cat].total++;
        
        const uAns = userAnswers[idx];
        if (uAns !== null && uAns !== undefined) {
            let isCorrect = false;
            if (Array.isArray(q.answer)) {
                isCorrect = Array.isArray(uAns) && q.answer.length === uAns.length && q.answer.every(a => uAns.includes(a));
            } else {
                isCorrect = (uAns === q.answer);
            }
            if (isCorrect) {
                catStats[cat].correct++;
            }
        }
    });

    Object.keys(catStats).sort().forEach(cat => {
        const stat = catStats[cat];
        const pct = Math.round((stat.correct / stat.total) * 100);
        let badgeClass = 'poor';
        if (pct >= 80) badgeClass = 'good';
        else if (pct >= 50) badgeClass = 'medium';

        const item = document.createElement('div');
        item.className = 'category-breakdown-item';
        item.innerHTML = `
            <div class="category-breakdown-header">
                <span class="category-breakdown-name">${cat}</span>
                <span class="category-breakdown-score">
                    <span>${stat.correct}/${stat.total}</span>
                    <span class="category-pct-badge ${badgeClass}">${pct}%</span>
                </span>
            </div>
            <div class="category-progress-track">
                <div class="category-progress-bar ${badgeClass}" style="width: ${pct}%"></div>
            </div>
        `;
        categoryBreakdownList.appendChild(item);
    });
}

// Review Mode
if (reviewBtn) {
    reviewBtn.addEventListener('click', () => {
        currentQuizMode = 'review';
        updateModeBadge();
        showSection(quizSection);
        renderAllQuestions();
        updateViewMode();
    });
}

if (exitReviewBtn) {
    exitReviewBtn.addEventListener('click', () => {
        showSection(resultSection);
    });
}

// Navigation Events
if (backBtn) {
    backBtn.addEventListener('click', () => {
        showSection(dashboardSection);
        loadQuizzes();
    });
}

if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        showSection(dashboardSection);
        loadQuizzes();
    });
}

if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        startQuiz(pendingQuizMeta, currentQuizMode === 'review' ? 'exam' : currentQuizMode, false);
    });
}

function showSection(sectionToShow) {
    [dashboardSection, quizSection, resultSection].forEach(sec => {
        if (!sec) return;
        if (sec === sectionToShow) {
            sec.classList.remove('hidden');
            sec.classList.remove('fade-in');
            void sec.offsetWidth;
            sec.classList.add('fade-in');
        } else {
            sec.classList.add('hidden');
        }
    });
}
