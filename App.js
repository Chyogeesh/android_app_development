JavaScript
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Question from './Question';
import Result from './Result';

const questions = [
  // Define your MCQ questions here, following the structure:
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1, // Index of the correct answer option
  },
  // ... add more questions
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Router>
      <Routes>
        {questions.map((question, index) => (
          <Route key={index} path={`/${index + 1}`} element={<Question question={question} onAnswer={handleAnswer} />} />
        ))}
        <Route path="/result" element={<Result score={score} totalQuestions={questions.length} />} />
      </Routes>
    </Router>
  );
}

export default App;
