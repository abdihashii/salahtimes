import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <footer className="mt-56px tracking-0.011em flex flex-col mx-auto pt-12 border-t-3px border-green-secondary">
      <div className="flex flex-row items-center justify-center mb-8">
        <StaticImage
          src="../../../images/favicon-cropped.png"
          alt="My Prayer Times Logo"
          placeholder="BLURRED"
          className="w-2/12"
        />
        <p className="uppercase ml-13px text-green-secondary font-bold text-17px">
          My Prayer Times
        </p>
      </div>

      <div className="mx-auto text-center w-10/12 justify-center mb-51px text-base">
        <p>Varius tristique aliquet vulputate senectus duis urna et tellus</p>
      </div>

      <ul className="flex flex-col items-center font-medium text-lg leading-44px mb-50px text-text-grey">
        <li className="inline-block">
          <a href=""></a>Prayer Times
        </li>
        <li className="inline-block">
          <a href=""></a>Blog
        </li>
        <li className="inline-block">
          <a href=""></a>About Us
        </li>
        <li className="inline-block">
          <a href=""></a>Contact Us
        </li>
        <li className="inline-block">
          <a href=""></a>FAQs
        </li>
      </ul>

      <ul className="flex flex-col items-center font-medium text-lg leading-44px mb-50px text-text-grey">
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

      <ul className="flex flex-col items-center font-medium text-lg leading-44px mb-55px text-text-grey">
        <li className="inline-block">
          <a href="">Manage Preferences</a>
        </li>
        <li className="inline-block">
          <a href="">Cookies Policy</a>
        </li>
      </ul>

      <a
        href=""
        className="uppercase flex justify-center font-medium text-xl leading-39px text-text-layout_text mb-26px"
      >
        Follow Us
      </a>

      <ul className="flex flex-row gap-x-11px justify-center mb-63px">
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
      </ul>

      <div className="bg-bg-grey flex justify-center text-13px leading-26px font-extralight text-text-layout_text p-22px">
        Copyright ©MyPrayerTimes 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
