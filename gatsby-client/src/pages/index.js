import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import TrendingStories from '../components/trendingStories';
import PrayerTimesSection from '../components/prayerTimes';
import AboutMPTHomeSection from '../components/aboutMPTHomeSection';

const Home = () => {
  return (
    <Layout transparentNav={true}>
      <PrayerTimesSection />

      {/* About MPT Section */}
      <AboutMPTHomeSection />

      {/* Trending Stories Section */}
      <TrendingStories />
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'Accurate Prayer Times, Anywhere'} />
    </>
  );
};

export default Home;
