import React from 'react';
import CurrentTime from '../currentTime/currentTime';
import { LocationSelector } from '../locationSelector';
import { MorePrayerTimes } from '../morePrayerTimes/morePrayerTimes';
import PrayerTimesTitle from '../prayerTimesTitle';
import { PrayerTimesMobile } from './prayerTimesMobile';
import { PrayerTimesDesktop } from './prayerTimesDesktop';
import masjidBackground from '../../images/masjid_bg.webp';
import DesktopLocationSelector from './desktopLocationSelector';
// import CalculationSettings from './calculationSettings';

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
      {/* <CalculationSettings /> */}

      <LocationSelector className="!block lg:!hidden" />
      <DesktopLocationSelector className="!hidden lg:!block" />

      <CurrentTime />

      <PrayerTimesMobile className="!block lg:!hidden" />
      <PrayerTimesDesktop className="!hidden lg:!block" />

      <MorePrayerTimes />
    </section>
  );
};

export default PrayerTimesSection;
