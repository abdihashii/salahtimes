import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import TextSection from '../textSection';

const MissionAndVision = ({ aboutUsContent }) => {
  const { zayed } = useStaticQuery(graphql`
    query {
      zayed: file(
        relativePath: { in: "about-us-page/sheikh-zayed-grand-mosque.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  `);

  return (
    <section className="lg:mx-auto lg:mb-183px lg:flex lg:w-9/12 lg:flex-row lg:gap-20">
      {/* Image w/ Shadow Section */}
      <section className="relative mx-auto mb-10 w-11/12 lg:mb-0">
        <div className="absolute bottom-0 right-0 h-full w-10/12 bg-green-secondary"></div>
        <GatsbyImage
          image={zayed.childImageSharp.gatsbyImageData}
          className="w-11/12"
        />
      </section>

      <div>
        {/* Our Mission */}
        <TextSection
          heading={aboutUsContent.mission.title}
          textContent={aboutUsContent.mission.content}
          desktop
        />

        {/* Our Vision */}
        <TextSection
          heading={aboutUsContent.vision.title}
          textContent={aboutUsContent.vision.content}
          desktop
          className="lg:mb-0"
        />
      </div>
    </section>
  );
};

export default MissionAndVision;
