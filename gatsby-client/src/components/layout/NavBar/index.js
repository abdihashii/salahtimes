import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
  return (
    <header className="flex flex-row items-center pt-11px pb-10px border-b border-header_border_color">
      <StaticImage
        src="../../../images/favicon-cropped.png"
        alt="My Prayer Times Logo"
        placeholder="BLURRED"
        className="w-2/12 ml-5"
      />
      <p className="uppercase ml-10px text-green-secondary font-bold">
        My Prayer Times
      </p>
      <RxHamburgerMenu className="ml-auto mr-6" />
    </header>
  );
};

export default NavBar;
