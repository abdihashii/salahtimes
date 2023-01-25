import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { graphql, useStaticQuery } from 'gatsby';
import { PrayerTimesContext } from '../../../contexts/prayerTimesContext';

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

  const HamburgerMenu = () => {
    return (
      <nav className="absolute top-0 left-0 z-10 mx-auto min-h-screen w-full bg-green-extra_dark pt-36 pb-52px font-semibold text-white">
        <ul className="mb-83px flex flex-col gap-16 text-2xl">
          <li className="mx-auto w-fit">
            <a href="/">Prayer Times</a>
          </li>
          <li className="mx-auto w-fit">
            <a href="/about-us">About Us</a>
          </li>
          <li className="mx-auto w-fit">
            <a href="/resources">Resources</a>
          </li>
          <li className="mx-auto w-fit">
            <a href="/faqs">FAQs</a>
          </li>
          <li className="mx-auto w-fit">
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>

        <hr className="mx-auto mb-45px w-7/12" />

        <a
          href="/blog"
          className="mx-auto block w-fit rounded-full bg-green-secondary py-4 px-50px"
        >
          Our Blog
        </a>
      </nav>
    );
  };

  return (
    <>
      <header
        className={`pt-11px pb-10px ${
          transparentNav || isHamburgerMenuOpen
            ? 'absolute top-0 left-0 z-30 w-full'
            : 'static border-b border-header_border_color'
        }`}
      >
        <div className="mx-auto flex w-10/12 flex-row items-center">
          <a className="flex flex-row items-center gap-10px" href="/">
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
          </a>
          {isHamburgerMenuOpen ? (
            <RxCross1
              className={`ml-auto text-2xl ${
                transparentNav || isHamburgerMenuOpen ? 'text-white' : ''
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          ) : (
            <RxHamburgerMenu
              className={`ml-auto text-2xl ${
                transparentNav ? 'text-white' : ''
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          )}
        </div>
      </header>
      {isHamburgerMenuOpen && <HamburgerMenu />}
    </>
  );
};

export default NavBar;
