import React from 'react';
import Layout from '../components/layout';
import { LocationSelector } from '../components/locationSelector';
import Seo from '../components/seo';
import { PrayerTimes } from '../components/prayerTimes/prayerTimes';
import { MorePrayerTimes } from '../components/morePrayerTimes/morePrayerTimes';
import CurrentTime from '../components/currentTime/currentTime';
import '../styles/styles.scss';
import BackgroundSection from '../pages/bg-image';

const Home = () => {
  return (
    <BackgroundSection>
      <Layout>
        <LocationSelector />
        <CurrentTime />
        <PrayerTimes />
        <MorePrayerTimes />
      </Layout>
    </BackgroundSection>
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
