import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ pageTitle, imgUrl, imgAlt, blogDescription }) => {
  const { description, title, social } = useSiteMetadata();

  return (
    <>
      <title>{pageTitle} | My Prayer Times</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta
        name="twitter:card"
        content={imgUrl ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={blogDescription} />
      <meta name="twitter:image" content={imgUrl} />
      <meta name="twitter:image:alt" content={imgAlt || 'MyPrayerTimes.com'} />
      <meta name="twitter:creator" content={social.twitter} />
    </>
  );
};

export default Seo;
