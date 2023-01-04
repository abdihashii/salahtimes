import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const NavBar = ({ setMenuBarOpen, menuBarOpen, mobileLogo, desktopLogo }) => {
  return (
    <div
      className={`mx-auto mt-6 mb-12 flex w-11/12 flex-row items-center justify-between lg:my-0 lg:w-full lg:justify-center ${
        menuBarOpen ? 'hidden' : ''
      }`}
    >
      <GatsbyImage
        image={mobileLogo.childImageSharp.gatsbyImageData}
        alt="My Prayer Times Logo"
        className="w-1/6 lg:mx-auto lg:hidden lg:w-1/5"
      />
      <GatsbyImage
        image={desktopLogo.childImageSharp.gatsbyImageData}
        alt="My Prayer Times Logo"
        className="hidden lg:mx-auto lg:!flex lg:w-2/5 lg:justify-center"
      />
      <span
        // className={`absolute top-5 right-0 z-50 space-y-2 lg:hidden ${
        //   // TODO: for switching from hamburger to X
        //   menuBarOpen ? '' : ''
        // }`}
        onClick={() => setMenuBarOpen(!menuBarOpen)}
        onKeyDown={() => setMenuBarOpen(!menuBarOpen)}
        role="button"
        tabIndex={0}
      >
        <i className="fa-solid fa-bars fa-2xl text-green-dark lg:hidden"></i>
        {/* <div className={`h-0.5 w-8 ${menuBarOpen ? 'bg-white' : 'bg-green-dark'}`}></div>
          <div className={`h-0.5 w-8 ${menuBarOpen ? 'bg-white' : 'bg-green-dark'}`}></div>
          <div className={`h-0.5 w-8 ${menuBarOpen ? 'bg-white' : 'bg-green-dark'}`}></div> */}
      </span>
    </div>
  );
};

export default NavBar;
