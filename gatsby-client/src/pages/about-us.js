import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import CoreValues from '../components/aboutUs/coreValues';
import OurPledge from '../components/aboutUs/ourPledge';
import TrendingStories from '../components/trendingStories';
import AboutUsHeader from '../components/aboutUs/aboutUsHeader';
import MissionAndVision from '../components/aboutUs/missionAndVision';

const AboutUs = () => {
  return (
    <Layout transparentNav={true}>
      <>
        {/* About Us Header */}
        <AboutUsHeader />

        {/* Mission and Vision */}
        <MissionAndVision />

        {/* Our Core Values */}
        <CoreValues />

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
