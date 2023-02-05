import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import TextSection from '../components/textSection';
import CoreValues from '../components/aboutUs/coreValues';
import OurPledge from '../components/aboutUs/ourPledge';
import TrendingStories from '../components/trendingStories';
import AboutUsHeader from '../components/aboutUs/aboutUsHeader';
import MissionAndVision from '../components/aboutUs/missionAndVision';

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

const AboutUs = () => {
  return (
    <Layout transparentNav={true}>
      <>
        {/* About Us Header */}
        <AboutUsHeader />

        {/* Mission and Vision */}
        <MissionAndVision {...{ aboutUsContent }} />

        {/* Our Core Values */}
        <TextSection
          heading={'Our Core Values'}
          textContent={`Discover the guiding principles that shape our mission and vision at MyPrayerTimes.`}
        >
          <CoreValues />
        </TextSection>

        {/* Our Pledge */}
        <OurPledge />

        {/* Trending Stores Of The Month */}
        <TrendingStories />
      </>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'About Us'} />
    </>
  );
};

export default AboutUs;
