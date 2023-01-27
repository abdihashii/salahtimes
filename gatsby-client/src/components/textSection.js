import React from 'react';

/** The small green border under each 'About Us' section */
const SectionBorder = () => {
  return (
    <span className="mx-auto mb-25px w-20 rounded-xl border-4 border-green-secondary"></span>
  );
};

/** Component for each 'About Us' section */
const TextSection = ({ heading, textContent, children }) => {
  return (
    <section className="mx-auto mb-10 flex w-11/12 flex-col text-center">
      <h2 className="mb-3 text-2xl font-bold leading-30px">{heading}</h2>
      <SectionBorder />
      <p className="text-text-medium_grey">{textContent}</p>

      {children && children}
    </section>
  );
};

export default TextSection;
