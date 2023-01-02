import React from 'react';
import PrayerTimesContextProvider from '../contexts/prayerTimesContext';
import NavBar from './navBar/navBar';

const Layout = ({ children }) => {
  return (
    <PrayerTimesContextProvider>
      <div className="mx-auto w-screen pb-28 lg:w-981px lg:p-0">
        <NavBar />
        {children}
      </div>
    </PrayerTimesContextProvider>
  );
};

export default Layout;
