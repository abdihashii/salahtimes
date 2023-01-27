import React from 'react';
import Layout from '../components/layout';
import { LocationSelector } from '../components/locationSelector';
import Seo from '../components/seo';
import { PrayerTimes } from '../components/prayerTimes/prayerTimes';
import { MorePrayerTimes } from '../components/morePrayerTimes/morePrayerTimes';
import CurrentTime from '../components/currentTime/currentTime';
import '../styles/styles.scss';
import masjidBackground from '../images/masjid_bg.webp';
import { RxPencil2 } from 'react-icons/rx';
import PrayerTimesTitle from '../components/prayerTimesTitle';

const Home = () => {
  return (
    <Layout transparentNav={true}>
      {/* Prayer Times */}
      <section
        className="mb-59px flex min-h-screen flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
        style={{
          backgroundImage: `url(${masjidBackground})`,
        }}
      >
        <PrayerTimesTitle />
        <CurrentTime />

        {/* Calculation settings */}
        <p className="mx-auto mb-5 w-10/12 text-lg font-medium text-text-light_grey">
          Calculation Method: Islamic Society of North America, Juristic
          settings: <strong>Shafii</strong>
        </p>

        {/* Change settings button */}
        <button className="mx-auto mb-45px flex w-fit items-center gap-2 text-text-light_blue">
          <RxPencil2 /> Change Settings
        </button>
        <LocationSelector />
        <PrayerTimes />
        <MorePrayerTimes />
      </section>
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
