import React from 'react';

function Result({ score, totalQuestions }) {
  return (
    <div className="result">
      <h1>You scored {score} out of {totalQuestions}!</h1>
      <p>Thank you for playing the MCQ game!</p>
    </div>
  );
}

export default Result;
