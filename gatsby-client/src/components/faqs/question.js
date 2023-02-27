import React from 'react';

const Question = ({ title, question }) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-2 text-xl font-semibold lg:text-2xl">{title}</h3>
      <p className="leading-relaxed lg:text-lg lg:leading-loose">{question}</p>
    </div>
  );
};

export default Question;
