// import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `);

  return siteMetadata;
};

export default useSiteMetadata;
