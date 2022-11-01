import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ pageTitle }) => {
  const { description } = useSiteMetadata();

  return (
    <>
      <title>{pageTitle} | My Prayer Times</title>
      <meta name="description" content={description} />
    </>
  );
};

export default Seo;
