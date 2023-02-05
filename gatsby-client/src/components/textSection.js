import React from 'react';

/** The small green border under each 'About Us' section */
const SectionBorder = ({ className }) => {
  return (
    <hr
      className={`mx-auto mb-25px w-20 rounded-xl border-4 border-green-secondary lg:!ml-0 lg:w-16 lg:border-5px lg:bg-green-secondary ${className}`}
    />
  );
};

/** Component for each 'About Us' section */
const TextSection = ({
  heading,
  textContent,
  children,
  desktop,
  className,
}) => {
  console.log(heading === 'Our Core Values');
  return (
    <section
      className={`mx-auto mb-10 flex w-11/12 flex-col text-center ${
        desktop ? 'lg:mb-45px lg:text-left' : ''
      } ${className}`}
    >
      <h2
        className={`mb-3 text-2xl font-bold leading-30px lg:font-semibold ${
          desktop ? 'lg:text-45px lg:leading-57px' : ''
        }`}
      >
        {heading}
      </h2>

      <SectionBorder
        className={`${heading === 'Our Core Values' ? 'lg:hidden' : ''}`}
      />

      <p className="text-text-medium_grey lg:leading-29px">{textContent}</p>

      {children && children}
    </section>
  );
};

export default TextSection;