import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const SingleCoreValue = ({ image, alt, coreValue }) => {
  return (
    <div className="max-w-370px">
      <GatsbyImage image={image} alt={alt} />
      <a
        className="mb-5 inline-block text-xs text-text-core_values"
        target="_blank"
        rel="noreferrer"
        href={coreValue.imageCredit.link}
      >
        Photo by {coreValue.imageCredit.author} |{' '}
        {coreValue.imageCredit.website}
      </a>
      <p className="mb-25px text-xl font-medium">{coreValue.coreValue}</p>
      <p className="text-text-core_values">{coreValue.coreValueDescription}</p>
    </div>
  );
};

export default SingleCoreValue;
