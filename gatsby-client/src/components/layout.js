import React, { useState } from 'react';
import PrayerTimesContextProvider from '../contexts/prayerTimesContext';
import MobileMenuBar from './mobileMenuBar/mobileMenuBar';
import NavBar from './navBar/navBar';
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({ children }) => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const { mobileLogo, desktopLogo } = useStaticQuery(graphql`
    query HeaderQuery {
      mobileLogo: file(relativePath: { eq: "logo-single-cropped.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      desktopLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `);

  return (
    <PrayerTimesContextProvider>
      {menuBarOpen ? (
        <MobileMenuBar
          {...{ setMenuBarOpen, menuBarOpen, mobileLogo, desktopLogo }}
        />
      ) : (
        <div className="mx-auto w-screen pb-28 lg:w-981px lg:p-0">
          <NavBar
            {...{ setMenuBarOpen, menuBarOpen, mobileLogo, desktopLogo }}
          />
          {children}
        </div>
      )}
    </PrayerTimesContextProvider>
  );
};

export default Layout;
