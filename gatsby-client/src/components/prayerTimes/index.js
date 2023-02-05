import React from 'react';
import CurrentTime from '../currentTime/currentTime';
import { LocationSelector } from '../locationSelector';
import { MorePrayerTimes } from '../morePrayerTimes/morePrayerTimes';
import PrayerTimesTitle from '../prayerTimesTitle';
import { PrayerTimes } from './prayerTimes';
import masjidBackground from '../../images/masjid_bg.webp';
import { RxPencil2 } from 'react-icons/rx';

const PrayerTimesSection = () => {
  return (
    <section
      className="mb-59px flex min-h-screen flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
      style={{
        backgroundImage: `url(${masjidBackground})`,
      }}
    >
      <PrayerTimesTitle />

      {/* Calculation settings */}
      <p className="mx-auto w-10/12 text-sm font-normal text-text-light_grey">
        Calculation Method: <strong>Islamic Society of North America</strong>,
      </p>
      <p className="mx-auto mb-5 w-10/12 text-sm font-normal text-text-light_grey">
        Juristic settings: <strong>Shafii</strong>
      </p>

      {/* Change settings button */}
      <button className="mx-auto mb-45px flex w-fit items-center gap-2 text-text-light_blue">
        <RxPencil2 /> Change Settings
      </button>

      <LocationSelector />

      <CurrentTime />

      <PrayerTimes />

      <MorePrayerTimes />
    </section>
  );
};

export default PrayerTimesSection;
