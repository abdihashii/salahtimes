import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const MobileMenuBar = ({ setMenuBarOpen, menuBarOpen, mobileLogo }) => {
  return (
    <div className="z-50 flex h-screen w-screen flex-col bg-green-dark lg:hidden">
      <div
        className={`mx-auto flex w-11/12 flex-row items-center justify-between pt-6`}
      >
        <GatsbyImage
          image={mobileLogo.childImageSharp.gatsbyImageData}
          alt="My Prayer Times Logo"
          className="w-1/6 lg:mx-auto lg:hidden lg:w-1/5"
        />
        <span
          onClick={() => setMenuBarOpen(!menuBarOpen)}
          onKeyDown={() => setMenuBarOpen(!menuBarOpen)}
          role="button"
          tabIndex={0}
        >
          <i className="fa-solid fa-bars fa-2xl text-white lg:hidden"></i>
        </span>
      </div>
      <ul className="flex h-full flex-col items-center justify-center gap-y-14 text-2xl font-semibold text-white">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/media">
          <li>Media</li>
        </a>
        <a href="/about-us">
          <li>About Us</li>
        </a>
      </ul>
    </div>
  );
};

export default MobileMenuBar;

// https://konradstaniszewski.com/blog/tailwind-hamburger
