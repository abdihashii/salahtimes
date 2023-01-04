import React, { useState } from 'react';
import PrayerTimesContextProvider from '../contexts/prayerTimesContext';
import MobileMenuBar from './mobileMenuBar/mobileMenuBar';
import NavBar from './navBar/navBar';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
        <div className="mx-auto w-screen pb-28 lg:w-981px lg:p-0 lg:pb-8">
          <NavBar
            {...{ setMenuBarOpen, menuBarOpen, mobileLogo, desktopLogo }}
          />
          <div className='hidden lg:block'>
            <a className="contents" href="/">
              <GatsbyImage
                image={desktopLogo.childImageSharp.gatsbyImageData}
                alt="My Prayer Times Logo"
                className="hidden lg:mx-auto lg:!flex lg:w-2/5 lg:justify-center"
              />
            </a>
          </div>
          {children}
        </div>
      )}
    </PrayerTimesContextProvider>
  );
};

export default Layout;
