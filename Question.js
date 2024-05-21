import React from 'react';

function Question({ question, options, onAnswer }) {
  const handleOptionClick = (index) => {
    onAnswer(index);
  };

  return (
    <div className="question">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
