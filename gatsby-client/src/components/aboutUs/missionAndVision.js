import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import TextSection from '../textSection';

const aboutUsContent = {
  mission: {
    title: 'Our Mission',
    content: `To empower Muslims of diverse backgrounds with accurate and reliable
    Islamic prayer times while providing informative content to deepen
    understanding and connection with Allah and our faith. Guided by
    principles of integrity, transparency, and love for Allah, we strive
    to establish a community of believers who stay on track with their
    daily salah and continue to learn and grow in their spiritual
    journey.`,
  },
  vision: {
    title: 'Our Vision',
    content: `To be a global platform that engages the Ummah and inspires a deeper
    connection and love for Salah through accurate prayer times and
    high-quality, well-researched content. We aspire to be known as the
    go-to website for all things related to Islamic prayer and to have a
    substantial impact on our users.`,
  },
};

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
      />
    </section>
  );
};

const MissionAndVision = () => {
  return (
    <section className="lg:mx-auto lg:mb-183px lg:flex lg:w-9/12 lg:flex-row lg:gap-6">
      {/* Image w/ Shadow Section */}
      <ImageWithShadow />

      {/* Our Mission and Vision */}
      <div className="lg:w-1/2">
        <TextSection
          heading={aboutUsContent.mission.title}
          textContent={aboutUsContent.mission.content}
        />

        <TextSection
          heading={aboutUsContent.vision.title}
          textContent={aboutUsContent.vision.content}
          className="lg:mb-0"
        />
      </div>
    </section>
  );
};

export default MissionAndVision;
