import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PrayerTimesContextProvider from "../contexts/prayerTimesContext";

const Layout = ({ children }) => {
  return (
    <PrayerTimesContextProvider>
      <div className="mx-auto w-screen lg:w-981px">
        <StaticImage
          src="../images/logo.png"
          alt="My Prayer Times Logo"
          placeholder="tracedSVG"
          className="mx-0 w-screen lg:mx-auto lg:w-2/5"
        />
        {children}
      </div>
    </PrayerTimesContextProvider>
  );
};

export default Layout;
