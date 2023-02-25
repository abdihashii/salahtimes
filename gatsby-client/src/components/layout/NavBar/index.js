import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { PrayerTimesContext } from '../../../contexts/prayerTimesContext';
import HamburgerMenu from './hamburgerMenu';
import DesktopNav from './desktopNav';

const NavBar = ({ transparentNav }) => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } =
    useContext(PrayerTimesContext);

  const { faviconCropped } = useStaticQuery(graphql`
    query {
      faviconCropped: file(relativePath: { in: "favicon-cropped-600px.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  `);

  return (
    <>
      <header
        className={`pt-6 pb-10px lg:pt-8 lg:pb-8 ${
          transparentNav || isHamburgerMenuOpen
            ? 'absolute top-0 left-0 z-30 w-full'
            : 'static border-b border-header_border_color'
        }`}
      >
        <div className="mx-auto flex w-10/12 flex-row items-center lg:w-8/12 xl:w-7/12">
          {/* Logo */}
          <Link className="flex flex-row items-center gap-10px" to="/">
            <GatsbyImage
              image={faviconCropped.childImageSharp.gatsbyImageData}
              alt="My Prayer Times Logo"
              className="w-12"
            />
            <p
              className={`uppercase ${
                transparentNav ? 'text-white' : 'text-green-secondary'
              } font-bold`}
            >
              My Prayer Times
            </p>
          </Link>

          {/* Navigation - Desktop */}
          <DesktopNav {...{ transparentNav }} />

          {/* Our Blog button - Desktop */}
          <Link
            className="ml-36 hidden rounded-full bg-green-dark py-4 px-12 font-semibold text-white hover:bg-green-secondary lg:block"
            activeStyle={{ opacity: '0.2' }}
            partiallyActive={true}
            to="/blog"
          >
            Our Blog
          </Link>

          {/* Hamburger icon */}
          {isHamburgerMenuOpen ? (
            <RxCross1
              className={`ml-auto text-2xl lg:hidden ${
                transparentNav || isHamburgerMenuOpen ? 'text-white' : ''
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          ) : (
            <RxHamburgerMenu
              className={`ml-auto text-2xl lg:hidden ${
                transparentNav ? 'text-white' : ''
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          )}
        </div>
      </header>

      {/* Hamburger menu */}
      {isHamburgerMenuOpen && <HamburgerMenu />}
    </>
  );
};

export default NavBar;
