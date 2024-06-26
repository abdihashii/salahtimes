import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import TextSection from '../textSection';
import SingleCoreValue from './singleCoreValue';

/** Core values */
const CoreValues = () => {
  const coreValues = [
    {
      coreValue: 'Iman (Faith)',
      coreValueDescription: `At MyPrayerTimes, we believe that faith is 
      the foundation of a meaningful and fulfilling life as a Muslim. 
      We strive to provide content and resources that deepen knowledge 
      and connection with Allah.`,
      imageCredit: {
        link: 'https://unsplash.com/photos/Dxi6KbpvUgA',
        author: 'Abdullah Arif',
        website: 'Unsplash',
      },
    },
    {
      coreValue: 'Integrity + Transparency',
      coreValueDescription: `We pride ourselves on being open and 
      upfront with our users, providing accurate and reliable salah times 
      and being transparent in our practices.`,
      imageCredit: {
        link: 'https://unsplash.com/photos/hW11fwjzVfA',
        author: 'Zach Reiner',
        website: 'Unsplash',
      },
    },
    {
      coreValue: 'Commitment to Quality',
      coreValueDescription: `We aim to provide the highest quality content 
      and user experience, from accurate prayer times to informative and 
      well-researched blog posts about prayer in Islam.`,
      imageCredit: {
        link: 'https://unsplash.com/photos/ZSBFoikEu_Q',
        author: 'Jon Tyson',
        website: 'Unsplash',
      },
    },
  ];

  const { iman, quality, integrity } = useStaticQuery(graphql`
    query {
      iman: file(relativePath: { in: "about-us-page/iman.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      integrity: file(relativePath: { in: "about-us-page/integrity.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      quality: file(relativePath: { in: "about-us-page/quality.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  `);

  return (
    <TextSection
      heading={'Our Core Values'}
      textContent={`Discover the guiding principles that shape our mission and vision at MyPrayerTimes.`}
    >
      <div
        className={`mt-45px flex flex-col gap-10 text-left lg:grid lg:grid-cols-3`}
      >
        {/* Iman (Faith) */}
        <SingleCoreValue
          image={iman.childImageSharp.gatsbyImageData}
          coreValue={coreValues[0]}
          alt="Mashaf next to dates, representing Iman (Faith)"
        />

        {/* Integrity + Transparency */}
        <SingleCoreValue
          image={integrity.childImageSharp.gatsbyImageData}
          coreValue={coreValues[1]}
          alt="Roots of a tree next to a waterfall, representing a strong foundation"
        />

        {/* Quality */}
        <SingleCoreValue
          image={quality.childImageSharp.gatsbyImageData}
          coreValue={coreValues[2]}
          alt="A magnifying glass, representing quality"
        />
      </div>
    </TextSection>
  );
};

export default CoreValues;
