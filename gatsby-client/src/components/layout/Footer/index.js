import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <footer className="mx-auto mt-56px flex flex-col border-t-3px border-green-secondary pt-12 tracking-0.011em">
      <div className="mb-8 flex flex-row items-center justify-center">
        <StaticImage
          src="../../../images/favicon-cropped.png"
          alt="My Prayer Times Logo"
          placeholder="BLURRED"
          className="w-2/12"
        />
        <p className="ml-13px text-17px font-bold uppercase text-green-secondary">
          My Prayer Times
        </p>
      </div>

      <div className="font- mx-auto mb-51px w-10/12 justify-center text-center text-base text-text-grey">
        <p>
          Connecting the global Ummah with accurate prayer times and spiritual
          growth
        </p>
      </div>

      <ul className="mb-50px flex flex-col items-center text-lg font-medium leading-44px text-text-grey">
        <li className="inline-block">
          <a href="/">Prayer Times</a>
        </li>
        <li className="inline-block">
          <a href="">Blog</a>
        </li>
        <li className="inline-block">
          <a href="/about-us">About Us</a>
        </li>
        <li className="inline-block">
          <a href="">Contact Us</a>
        </li>
        <li className="inline-block">
          <a href="">FAQs</a>
        </li>
      </ul>

      <ul className="mb-50px flex flex-col items-center text-lg font-medium leading-44px text-text-grey">
        <li className="inline-block">
          <a href="">Privacy Policy</a>
        </li>
        <li className="inline-block">
          <a href="">Terms of Use</a>
        </li>
        <li className="inline-block">
          <a href="">Disclamer</a>
        </li>
        <li className="inline-block">
          <a href="">Help Center</a>
        </li>
      </ul>

      <ul className="mb-55px flex flex-col items-center text-lg font-medium leading-44px text-text-grey">
        <li className="inline-block">
          <a href="">Manage Preferences</a>
        </li>
        <li className="inline-block">
          <a href="">Cookies Policy</a>
        </li>
      </ul>

      <a
        href=""
        className="mb-26px flex justify-center text-xl font-medium uppercase leading-39px text-text-layout_text"
      >
        Follow Us
      </a>

      <ul className="mb-63px flex flex-row justify-center gap-x-11px">
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
      </ul>

      <div className="flex justify-center bg-bg-grey p-22px text-13px font-extralight leading-26px text-text-layout_text">
        Copyright ©MyPrayerTimes 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
