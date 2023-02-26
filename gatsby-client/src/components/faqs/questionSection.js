import React from 'react';

const QuestionSection = ({ title, className, children }) => {
  return (
    <section
      className={`mx-auto mb-12 w-10/12 last:mb-0 lg:w-5/12 ${className}`}
    >
      <h2 className="mb-6 text-3xl font-bold text-green-dark lg:text-5xl">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default QuestionSection;
