import React, { useState } from 'react';
import PrayerTimesContextProvider from '../contexts/prayerTimesContext';
import MobileMenuBar from './mobileMenuBar/mobileMenuBar';
import NavBar from './navBar/navBar';

const Layout = ({ children }) => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);

  return (
    <PrayerTimesContextProvider>
      {menuBarOpen ? (
        <MobileMenuBar />
      ) : (
        <div className="mx-auto w-screen pb-28 lg:w-981px lg:p-0">
          <NavBar {...{ setMenuBarOpen, menuBarOpen }} />
          {children}
        </div>
      )}
    </PrayerTimesContextProvider>
  );
};

export default Layout;
