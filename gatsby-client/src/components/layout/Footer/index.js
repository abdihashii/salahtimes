import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

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
      <section className="lg:mx-auto lg:flex lg:w-8/12 lg:flex-row lg:gap-16 xl:w-7/12">
        {/* Logo and One-liner */}
        <div className="lg:flex lg:w-4/12 lg:flex-col">
          {/* Logo and logo name */}
          <div className="mb-8 flex flex-row items-center justify-center lg:mb-36px lg:justify-start">
            <GatsbyImage
              image={faviconCropped.childImageSharp.gatsbyImageData}
              alt="My Prayer Times Logo"
              className="w-2/12"
            />
            <p className="ml-17px text-17px font-bold uppercase text-green-secondary lg:ml-4 lg:text-xl">
              My Prayer Times
            </p>
          </div>

          {/* footer one-liner */}
          <div className="mx-auto mb-51px w-10/12 justify-center text-center text-base text-text-grey lg:!ml-0 lg:w-10/12 lg:text-left lg:leading-8">
            <p>
              Connecting the global Ummah with accurate prayer times and
              spiritual growth
            </p>
          </div>
        </div>

        <div className="lg:flex lg:w-8/12 lg:flex-row lg:justify-between">
          {/* Prayer times, blog, about us, contact us, and faqs */}
          <ul className="mb-50px flex flex-col text-center text-lg font-medium leading-44px text-text-grey lg:whitespace-nowrap lg:text-left">
            <li>
              <Link
                to="/"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                Prayer Times
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to="/hijri-date/"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                Hijri date
              </Link>
            </li>
            {/* <li className="inline-block">
            <Link
              to="/ramadan-2023/"
              className="opacity-50 hover:opacity-100"
              activeStyle={{ opacity: 1 }}
            >
              Ramadan 2023
            </Link>
          </li> */}
            <li>
              <Link
                to="/blog/"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Info links */}
          <ul className="mb-55px flex flex-col text-center text-lg font-medium leading-44px text-text-grey lg:whitespace-nowrap lg:text-left">
            <li>
              <Link
                to="/about-us/"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/faqs/"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us/"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Privacy policy, terms of use, disclamer, and help center */}
          <ul className="mb-50px flex flex-col text-center text-lg font-medium leading-44px text-text-grey lg:whitespace-nowrap lg:text-left">
            <li className="inline-block">
              <Link
                to="/privacy-policy"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="inline-block">
              <Link
                to="/cookies-policy"
                className="opacity-50 hover:opacity-100"
                activeStyle={{ opacity: 1 }}
              >
                Cookies Policy
              </Link>
            </li>
            {/* <li className="inline-block">
            <Link to="/">Terms of Use</Link>
          </li> */}
            {/* <li className="inline-block">
            <Link to="/">Disclamer</Link>
          </li> */}
            {/* <li className="inline-block">
            <Link to="/">Help Center</Link>
          </li> */}
          </ul>

          {/* Manage preferences and cookies policy */}
          {/* <ul className="mb-55px flex flex-col text-center text-lg font-medium leading-44px text-text-grey lg:whitespace-nowrap lg:text-left">
          <li className="inline-block">
            <Link to="/">Manage Preferences</Link>
          </li>
          <li className="inline-block">
            <Link
              to="/"
              className="opacity-50 hover:opacity-100"
              activeStyle={{ opacity: 1 }}
            >
              Cookies Policy
            </Link>
          </li>
        </ul> */}

          {/* Social */}
          <div>
            {/* Follow us */}
            <p className="mb-26px flex justify-center text-xl font-medium uppercase leading-39px text-text-layout_text lg:justify-start">
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
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="flex justify-center bg-bg-grey p-22px text-13px font-extralight leading-26px text-text-layout_text">
        Copyright ©MyPrayerTimes 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
