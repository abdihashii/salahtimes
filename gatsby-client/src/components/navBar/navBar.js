import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const NavBar = ({ setMenuBarOpen, menuBarOpen, mobileLogo }) => {
  return (
    <div
      className={`lg:hidden mx-auto mt-6 mb-12 flex w-11/12 flex-row items-center justify-between lg:my-0 lg:w-full lg:justify-center ${
        menuBarOpen ? 'hidden' : ''
      }`}
    >
      <a className="contents" href="/">
        <GatsbyImage
          image={mobileLogo.childImageSharp.gatsbyImageData}
          alt="My Prayer Times Logo"
          className="w-1/6 lg:mx-auto lg:w-1/5"
        />
      </a>
      <span
        // className={`absolute top-5 right-0 z-50 space-y-2 ${
        //   // TODO: for switching from hamburger to X
        //   menuBarOpen ? '' : ''
        // }`}
        onClick={() => setMenuBarOpen(!menuBarOpen)}
        onKeyDown={() => setMenuBarOpen(!menuBarOpen)}
        role="button"
        tabIndex={0}
      >
        <i className="fa-solid fa-bars fa-2xl text-green-dark"></i>
        {/* <div className={`h-0.5 w-8 ${menuBarOpen ? 'bg-white' : 'bg-green-dark'}`}></div>
          <div className={`h-0.5 w-8 ${menuBarOpen ? 'bg-white' : 'bg-green-dark'}`}></div>
          <div className={`h-0.5 w-8 ${menuBarOpen ? 'bg-white' : 'bg-green-dark'}`}></div> */}
      </span>
    </div>
  );
};

export default NavBar;
