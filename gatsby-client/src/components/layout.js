import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PrayerTimesContextProvider from '../contexts/prayerTimesContext';

const Layout = ({ children }) => {
  return (
    <PrayerTimesContextProvider>
      <div className="mx-auto w-screen pb-28 lg:w-981px lg:p-0">
        <StaticImage
          src="../images/logo.png"
          alt="My Prayer Times Logo"
          placeholder="tracedSVG"
          className="mx-auto !flex w-6/12 justify-center lg:w-2/5"
        />
        {children}
      </div>
    </PrayerTimesContextProvider>
  );
};

export default Layout;
