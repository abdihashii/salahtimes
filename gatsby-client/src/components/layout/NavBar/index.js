import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = ({ transparentNav }) => {
  return (
    <header
      className={`flex flex-row items-center pt-11px pb-10px ${
        transparentNav
          ? 'absolute top-0 left-0 z-50'
          : 'static border-b border-header_border_color'
      }`}
    >
      <a className="contents" href="/">
        <StaticImage
          src="../../../images/favicon-cropped.png"
          alt="My Prayer Times Logo"
          placeholder="BLURRED"
          className="ml-5 w-2/12"
        />
      </a>
      <p
        className={`ml-10px uppercase ${
          transparentNav ? 'text-white' : 'text-green-secondary'
        } font-bold`}
      >
        My Prayer Times
      </p>
      <RxHamburgerMenu
        className={`ml-auto mr-6 ${transparentNav ? 'text-white' : ''}`}
      />
    </header>
  );
};

export default NavBar;
