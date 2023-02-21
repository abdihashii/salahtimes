import React from 'react';
import CurrentTime from '../currentTime/currentTime';
import { LocationSelector } from '../locationSelector';
import { MorePrayerTimes } from '../morePrayerTimes/morePrayerTimes';
import PrayerTimesTitle from '../prayerTimesTitle';
import { PrayerTimesMobile } from './prayerTimesMobile';
import masjidBackground from '../../images/masjid_bg.webp';
import { RxPencil2 } from 'react-icons/rx';
import DesktopLocationSelector from './desktopLocationSelector';

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
      <div className="mx-auto w-10/12 lg:w-9/12">
        {/* Calculation settings */}
        <p className="text-sm font-normal text-text-light_grey">
          Calculation Method: <strong>Islamic Society of North America</strong>,
        </p>

        <p className="mb-5 text-sm font-normal text-text-light_grey">
          Juristic settings: <strong>Shafii</strong>
        </p>

        {/* Change settings button */}
        <button className="mx-auto mb-45px flex w-fit items-center gap-2 text-text-light_blue">
          <RxPencil2 /> Change Settings
        </button>
      </div>

      <LocationSelector className="!block lg:!hidden" />
      <DesktopLocationSelector className="!hidden lg:!block" />

      <CurrentTime />

      <PrayerTimesMobile className="!block lg:!hidden" />

      <MorePrayerTimes />
    </section>
  );
};

export default PrayerTimesSection;
