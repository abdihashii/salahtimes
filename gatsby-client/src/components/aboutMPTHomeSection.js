import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import TextSection from './textSection';
import { GatsbyImage } from 'gatsby-plugin-image';
import { RxArrowRight } from 'react-icons/rx';

const AboutMPTHomeSection = () => {
  const { masjid_1, masjid_2 } = useStaticQuery(graphql`
    query HomeImages {
      masjid_1: file(name: { eq: "masjid_1" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            aspectRatio: 0.8888700085
          )
        }
      }
      masjid_2: file(name: { eq: "masjid_2" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            aspectRatio: 0.8888700085
          )
        }
      }
    }
  `);

  return (
    <section className="lg:mx-auto lg:mb-28 lg:flex lg:w-9/12 lg:flex-row-reverse lg:gap-14">
      <div className="mb-50px lg:-order-1 lg:m-0 lg:w-1/2">
        <TextSection
          heading={'About MyPrayerTimes'}
          textContent={`MyPrayerTimes is a community-driven platform providing accurate and reliable prayer times to Muslims of diverse backgrounds. Our mission is to empower and engage the global Ummah through accurate prayer times and informative content.`}
          className="lg:!ml-0 lg:w-full"
        />
        <Link
          to="/about-us"
          className="mx-auto flex w-fit flex-row items-center gap-4 rounded-full border border-green-secondary px-25px py-14px text-xs font-semibold text-green-secondary hover:bg-green-secondary hover:text-white lg:!ml-0 lg:text-lg"
        >
          <p>Learn more</p>
          <RxArrowRight />
        </Link>
      </div>

      {/* Two Image Section */}
      <div className="mx-auto mb-28 flex w-10/12 flex-row gap-4 lg:m-0 lg:w-1/2 lg:justify-between">
        <GatsbyImage
          image={masjid_1.childImageSharp.gatsbyImageData}
          className="mb-11 lg:mb-14 lg:h-fit lg:w-5/12"
        />
        <GatsbyImage
          image={masjid_2.childImageSharp.gatsbyImageData}
          className="mt-11 lg:mt-14 lg:h-fit lg:w-5/12"
        />
      </div>
    </section>
  );
};

export default AboutMPTHomeSection;
