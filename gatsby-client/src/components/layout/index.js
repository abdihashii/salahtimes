import React from 'react';
import PrayerTimesContextProvider from '../../contexts/prayerTimesContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children, transparentNav }) => {
  return (
    <PrayerTimesContextProvider>
      <div className="mx-auto w-screen lg:w-981px lg:p-0">
        <NavBar transparentNav={transparentNav} />
        {children}
        <Footer />
      </div>
    </PrayerTimesContextProvider>
  );
};

export default Layout;
