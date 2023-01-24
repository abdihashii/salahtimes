import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
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
    <footer className="mx-auto mt-56px flex flex-col border-t-3px border-green-secondary pt-12 tracking-0.011em">
      <div className="mb-8 flex flex-row items-center justify-center">
        <GatsbyImage
          image={faviconCropped.childImageSharp.gatsbyImageData}
          alt="My Prayer Times Logo"
          className="w-2/12"
        />
        <p className="ml-13px text-17px font-bold uppercase text-green-secondary">
          My Prayer Times
        </p>
      </div>

      {/* footer one-liner */}
      <div className="font- mx-auto mb-51px w-10/12 justify-center text-center text-base text-text-grey">
        <p>
          Connecting the global Ummah with accurate prayer times and spiritual
          growth
        </p>
      </div>

      {/* Prayer times, blog, about us, contact us, and faqs */}
      <ul className="mb-50px flex flex-col items-center text-lg font-medium leading-44px text-text-grey">
        <li className="inline-block">
          <a href="/">Prayer Times</a>
        </li>
        <li className="inline-block">
          <a href="/blog">Blog</a>
        </li>
        <li className="inline-block">
          <a href="/about-us">About Us</a>
        </li>
        <li className="inline-block">
          <a href="contact-us">Contact Us</a>
        </li>
        <li className="inline-block">
          <a href="faqs">FAQs</a>
        </li>
      </ul>

      {/* Privacy policy, terms of use, disclamer, and help center */}
      <ul className="mb-50px flex flex-col items-center text-lg font-medium leading-44px text-text-grey">
        <li className="inline-block">
          <a href="/">Privacy Policy</a>
        </li>
        <li className="inline-block">
          <a href="/">Terms of Use</a>
        </li>
        <li className="inline-block">
          <a href="/">Disclamer</a>
        </li>
        <li className="inline-block">
          <a href="/">Help Center</a>
        </li>
      </ul>

      {/* Manage preferences and cookies policy */}
      <ul className="mb-55px flex flex-col items-center text-lg font-medium leading-44px text-text-grey">
        <li className="inline-block">
          <a href="/">Manage Preferences</a>
        </li>
        <li className="inline-block">
          <a href="/">Cookies Policy</a>
        </li>
      </ul>

      {/* Follow us */}
      <p className="mb-26px flex justify-center text-xl font-medium uppercase leading-39px text-text-layout_text">
        Follow Us
      </p>

      {/* Social media links */}
      <ul className="mb-63px flex flex-row justify-center gap-x-11px">
        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
      </ul>

      {/* Copyright */}
      <div className="flex justify-center bg-bg-grey p-22px text-13px font-extralight leading-26px text-text-layout_text">
        Copyright ©MyPrayerTimes 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
