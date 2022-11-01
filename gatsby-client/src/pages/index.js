import React from 'react';
import Layout from '../components/layout';
import { LocationSelector } from '../components/locationSelector';
import Seo from '../components/seo';
import { PrayerTimes } from '../components/prayerTimes/prayerTimes';
import { MorePrayerTimes } from '../components/morePrayerTimes/morePrayerTimes';
import '../styles/styles.scss';

const Home = () => {
  return (
    <Layout>
      <LocationSelector />
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
