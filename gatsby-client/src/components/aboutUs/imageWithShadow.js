import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageWithShadow = () => {
  const { zayed } = useStaticQuery(graphql`
    query {
      zayed: file(
        relativePath: { in: "about-us-page/sheikh-zayed-grand-mosque.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: WEBP
            aspectRatio: 1.260206565
          )
        }
      }
    }
  `);

  return (
    <section className="relative mx-auto mb-10 w-11/12 pb-21px lg:mb-0 lg:w-1/2 lg:p-0">
      <div className="absolute bottom-0 right-0 h-5/6 w-10/12 bg-green-secondary"></div>
      <GatsbyImage
        image={zayed.childImageSharp.gatsbyImageData}
        className="h-5/6 w-10/12"
        alt={`Sheikh Zayed Grand Mosque, Abu Dhabi`}
      />
    </section>
  );
};

export default ImageWithShadow;
