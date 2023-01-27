import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

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
      quality: file(relativePath: { in: "about-us-page/quality.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      integrity: file(relativePath: { in: "about-us-page/integrity.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  `);

  return (
    <div className="mt-45px flex flex-col gap-10 text-left">
      {/* Iman (Faith) */}
      <div>
        <GatsbyImage
          image={iman.childImageSharp.gatsbyImageData}
          alt="Mashaf next to dates, representing Iman (Faith)"
        />
        <a
          className="mb-5 inline-block text-xs text-text-core_values"
          target="_blank"
          rel="noreferrer"
          href={coreValues[0].imageCredit.link}
        >
          Photo by {coreValues[0].imageCredit.author} |{' '}
          {coreValues[0].imageCredit.website}
        </a>
        <p className="mb-25px text-xl font-medium">{coreValues[0].coreValue}</p>
        <p className="text-text-core_values">
          {coreValues[0].coreValueDescription}
        </p>
      </div>

      {/* Integrity + Transparency */}
      <div>
        <GatsbyImage
          image={integrity.childImageSharp.gatsbyImageData}
          alt="Roots of a tree next to a waterfall, representing a strong foundation"
        />
        <a
          className="mb-5 inline-block text-xs text-text-core_values"
          target="_blank"
          rel="noreferrer"
          href={coreValues[1].imageCredit.link}
        >
          Photo by {coreValues[1].imageCredit.author} |{' '}
          {coreValues[1].imageCredit.website}
        </a>
        <p className="mb-25px text-xl font-medium">{coreValues[1].coreValue}</p>
        <p className="text-text-core_values">
          {coreValues[1].coreValueDescription}
        </p>
      </div>

      {/* Quality */}
      <div>
        <GatsbyImage
          image={quality.childImageSharp.gatsbyImageData}
          alt="A magnifying glass, representing quality"
        />
        <a
          className="mb-5 inline-block text-xs text-text-core_values"
          target="_blank"
          rel="noreferrer"
          href={coreValues[2].imageCredit.link}
        >
          Photo by {coreValues[2].imageCredit.author} |{' '}
          {coreValues[2].imageCredit.website}
        </a>
        <p className="mb-25px text-xl font-medium">{coreValues[2].coreValue}</p>
        <p className="text-text-core_values">
          {coreValues[2].coreValueDescription}
        </p>
      </div>
    </div>
  );
};

export default CoreValues;
