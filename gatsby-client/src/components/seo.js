import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ pageTitle }) => {
  const { description } = useSiteMetadata();

  return (
    <>
      <title>{pageTitle} | My Prayer Times</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </>
  );
};

export default Seo;
