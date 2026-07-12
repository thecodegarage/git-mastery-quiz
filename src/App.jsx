import { useState, useEffect } from 'react';
import './App.css';
import { questions, topics, difficulties } from './data/questions';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState(Object.keys(topics));
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const filterQuestions = () => {
    let filtered = questions.filter(q => {
      const topicMatch = selectedTopics.includes(q.topic);
      const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      return topicMatch && difficultyMatch;
    });
    
    filtered = filtered.sort(() => Math.random() - 0.5);
    setFilteredQuestions(filtered);
    return filtered;
  };

  const startQuiz = () => {
    const filtered = filterQuestions();
    if (filtered.length === 0) {
      alert('No questions match your criteria. Please select at least one topic.');
      return;
    }
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const selectAllTopics = () => {
    setSelectedTopics(Object.keys(topics));
  };

  const deselectAllTopics = () => {
    setSelectedTopics([]);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const currentQ = filteredQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQ.correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, {
      question: currentQ,
      userAnswer: answerIndex,
      correct: isCorrect
    }]);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const getDifficultyColor = (diff) => {
    const colors = {
      'Beginner': '#10b981',
      'Intermediate': '#f59e0b',
      'Advanced': '#ef4444',
      'Expert': '#8b5cf6'
    };
    return colors[diff] || '#6b7280';
  };

  if (!quizStarted) {
    return (
      <div className="app">
        <header className="header">
          <h1>🎮 Git Mastery Quiz</h1>
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>

        <div className="setup-container">
          <section className="setup-section">
            <h2>Select Topics</h2>
            <div className="topic-controls">
              <button onClick={selectAllTopics} className="btn-secondary">Select All</button>
              <button onClick={deselectAllTopics} className="btn-secondary">Deselect All</button>
            </div>
            <div className="topic-grid">
              {Object.entries(topics).map(([key, name]) => (
                <button
                  key={key}
                  className={`topic-btn ${selectedTopics.includes(key) ? 'active' : ''}`}
                  onClick={() => toggleTopic(key)}
                >
                  {name}
                  <span className="question-count">
                    ({questions.filter(q => q.topic === key).length})
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="setup-section">
            <h2>Select Difficulty</h2>
            <div className="difficulty-grid">
              <button
                className={`difficulty-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('all')}
              >
                All Levels
              </button>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  className={`difficulty-btn ${selectedDifficulty === diff ? 'active' : ''}`}
                  onClick={() => setSelectedDifficulty(diff)}
                  style={{
                    borderColor: selectedDifficulty === diff ? getDifficultyColor(diff) : undefined
                  }}
                >
                  {diff}
                </button>
              ))}
            </div>
          </section>

          <button className="btn-primary start-btn" onClick={startQuiz}>
            Start Quiz
          </button>

          <div className="info-box">
            <p>
              <strong>{questions.filter(q => {
                const topicMatch = selectedTopics.includes(q.topic);
                const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
                return topicMatch && difficultyMatch;
              }).length}</strong> questions match your selection
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    
    return (
      <div className="app">
        <header className="header">
          <h1>🎮 Git Mastery Quiz</h1>
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>

        <div className="results-container">
          <h2>Quiz Complete! 🎉</h2>
          <div className="score-display">
            <div className="score-circle" style={{
              background: `conic-gradient(#10b981 ${percentage * 3.6}deg, var(--bg-secondary) 0deg)`
            }}>
              <div className="score-inner">
                <span className="score-percentage">{percentage}%</span>
                <span className="score-fraction">{score}/{filteredQuestions.length}</span>
              </div>
            </div>
          </div>

          <div className="results-summary">
            <h3>Performance by Difficulty</h3>
            {difficulties.map(diff => {
              const diffQuestions = answeredQuestions.filter(aq => aq.question.difficulty === diff);
              if (diffQuestions.length === 0) return null;
              
              const diffCorrect = diffQuestions.filter(aq => aq.correct).length;
              const diffPercentage = Math.round((diffCorrect / diffQuestions.length) * 100);
              
              return (
                <div key={diff} className="diff-result">
                  <span style={{ color: getDifficultyColor(diff) }}>{diff}</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${diffPercentage}%`,
                        backgroundColor: getDifficultyColor(diff)
                      }}
                    />
                  </div>
                  <span>{diffCorrect}/{diffQuestions.length}</span>
                </div>
              );
            })}
          </div>

          <div className="action-buttons">
            <button className="btn-primary" onClick={startQuiz}>New Quiz</button>
            <button className="btn-secondary" onClick={restartQuiz}>Back to Setup</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  return (
    <div className="app">
      <header className="header">
        <h1>🎮 Git Mastery Quiz</h1>
        <div className="header-right">
          <span className="score-display-header">Score: {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}</span>
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="quiz-container">
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
          </span>
        </div>

        <div className="question-card">
          <div className="question-header">
            <span className="topic-badge">{topics[currentQuestion.topic]}</span>
            <span 
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(currentQuestion.difficulty) }}
            >
              {currentQuestion.difficulty}
            </span>
          </div>

          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="answers-grid">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correct;
              const isSelected = index === selectedAnswer;
              
              let className = 'answer-btn';
              if (showExplanation) {
                if (isCorrect) className += ' correct';
                else if (isSelected) className += ' incorrect';
                else className += ' disabled';
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="answer-text">{option}</span>
                  {showExplanation && isCorrect && <span className="answer-icon">✓</span>}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`explanation ${selectedAnswer === currentQuestion.correct ? 'correct' : 'incorrect'}`}>
              <h3>
                {selectedAnswer === currentQuestion.correct ? '✓ Correct!' : '✗ Incorrect'}
              </h3>
              <p>{currentQuestion.explanation}</p>
              {currentQuestion.additional_details && (
                <div className="additional-details">
                  <h4>📚 Learn More:</h4>
                  <p>{currentQuestion.additional_details}</p>
                </div>
              )}
              <button className="btn-primary next-btn" onClick={nextQuestion}>
                {currentQuestionIndex + 1 < filteredQuestions.length ? 'Next Question →' : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>

        <button className="btn-secondary quit-btn" onClick={restartQuiz}>
          Quit Quiz
        </button>
      </div>
    </div>
  );
}

export default App;
