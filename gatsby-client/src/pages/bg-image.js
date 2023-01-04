import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

const BackgroundSection = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "islamic-skyline-vector.png" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
    `
  );

  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      className="min-h-110vh bg-contain bg-bottom bg-no-repeat"
      preserveStackingContext
    >
      {children}
    </BackgroundImage>
  );
};

export default BackgroundSection;
