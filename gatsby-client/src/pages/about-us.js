import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import masjidBackground from '../images/masjid_bg.png';

/** The small green border under each 'About Us' section */
const SectionBorder = () => {
  return (
    <span className="mx-auto mb-25px w-20 rounded-xl border-4 border-green-secondary"></span>
  );
};

/** Core values */
const CoreValues = () => {
  const coreValues = [
    {
      imageUrl: `../images/about-us-page/iman.jpg`,
      coreValue: 'Iman (Faith)',
      coreValueDescription: `We are passionate and committed to the constant process of transforming ideas into solutions in order to improve our website and make it part of the Muslim Lifestyle.`,
    },
    {
      imageUrl: `../images/about-us-page/integrity.jpg`,
      coreValue: 'Integrity + Transparency',
      coreValueDescription: `The community is our most important asset. Every individual, regardless of their background, plays a vital role in creating a voice and building the back bone for the Muslim community.`,
    },
    {
      imageUrl: `../images/about-us-page/quality.jpg`,
      coreValue: 'Commitment to Quality',
      coreValueDescription: `The Muslim world is vast with endless possibilities and opportunities. We value collaborative efforts with fresh and diverse talents to unlock the potential of the community.`,
    },
  ];

  return (
    <div className="mt-45px flex flex-col gap-10">
      {coreValues.map(({ coreValue, coreValueDescription }) => {
        return (
          <div className="border border-gray-600">
            <p>{coreValue}</p>
            <p>{coreValueDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

/** Component for each 'About Us' section */
const AboutUsTextSection = ({ heading, textContent, children }) => {
  return (
    <section className="mx-auto mb-38px flex w-11/12 flex-col text-center">
      <h2 className="mb-3 text-2xl font-bold leading-30px">{heading}</h2>
      <SectionBorder />
      <p className="text-text-medium_grey">{textContent}</p>

      {children && children}
    </section>
  );
};

const AboutUs = () => {
  return (
    <Layout transparentNav={true}>
      <>
        {/* About Us Header */}
        <div
          className="mb-59px flex flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
          style={{
            backgroundImage: `url(${masjidBackground})`,
          }}
        >
          <h1 className="mb-22px mt-28 text-32px font-semibold leading-39px">
            Who We Are
          </h1>
          <p className="mb-39px px-30px text-13px leading-22px text-text-light_grey">
            MyPrayerTimes is a community-driven platform providing accurate and
            reliable prayer times to Muslims of diverse backgrounds. Our mission
            is to empower and engage the global Ummah through accurate prayer
            times and informative content.
          </p>
          <button className="mx-auto mb-5 w-max rounded-4xl bg-green-secondary py-3 px-8 font-semibold text-text-button">
            See Our FAQs
          </button>
          <button className="mx-auto mb-56px w-max rounded-4xl border border-text-button py-3 px-8 font-semibold text-text-button">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <section className="relative mx-auto mb-10 w-11/12 pb-21px">
          <div className="absolute bottom-0 right-0 h-5/6 w-10/12 bg-green-secondary"></div>
          <StaticImage
            src="../images/about-us-page/sheikh-zayed-grand-mosque.jpg"
            placeholder="BLURRED"
            className="w-11/12"
          />
        </section>

        {/* Our Mission */}
        <AboutUsTextSection
          heading={'Our Mission'}
          textContent={`To empower Muslims of diverse backgrounds with accurate and reliable
            Islamic prayer times while providing informative content to deepen
            understanding and connection with Allah and our faith. Guided by
            principles of integrity, transparency, and love for Allah, we strive
            to establish a community of believers who stay on track with their
            daily salah and continue to learn and grow in their spiritual
            journey.`}
        />

        {/* Our Vision */}
        <AboutUsTextSection
          heading={'Our Vision'}
          textContent={`To be a global platform that engages the Ummah and inspires a deeper
            connection and love for Salah through accurate prayer times and
            high-quality, well-researched content. We aspire to be known as the
            go-to website for all things related to Islamic prayer and to have a
            substantial impact on our users.`}
        />

        {/* Our Core Values */}
        <AboutUsTextSection
          heading={'Our Core Values'}
          textContent={`These values are reflected in all aspects MyPrayerTimes, from the
            accurate prayer times to the informative content and how we interact
            with our users. We also pride ourselves on providing well-researched
            and high-quality content that goes above and beyond prayer times to
            deepen understanding and connection with the faith.`}
        >
          <CoreValues />
        </AboutUsTextSection>
      </>
    </Layout>
  );
};

export default AboutUs;
