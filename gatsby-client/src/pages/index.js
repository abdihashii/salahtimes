import React from 'react';
import Layout from '../components/layout';
import { LocationSelector } from '../components/locationSelector';
import Seo from '../components/seo';
import { PrayerTimes } from '../components/prayerTimes/prayerTimes';
import { MorePrayerTimes } from '../components/morePrayerTimes/morePrayerTimes';
import CurrentTime from '../components/currentTime/currentTime';
import '../styles/styles.scss';

const Home = () => {
  return (
    <Layout>
      <LocationSelector />
      <CurrentTime />
      <PrayerTimes />
      <MorePrayerTimes />
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'Prayer Times In ...'} />
    </>
  );
};

export default Home;
