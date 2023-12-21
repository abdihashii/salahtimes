'use client';

import { Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <div className="lg:flex lg:w-6/12 lg:justify-between">
      {/* Prayer times, hijri date, and blog links */}
      <ul className="mb-12 flex flex-col text-center text-lg font-medium leading-[44px] text-[#646464] lg:whitespace-nowrap lg:text-left dark:text-white">
        <li>
          <Link
            href="/"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            Prayer Times
          </Link>
        </li>

        <li>
          <Link
            href="/hijri-date"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            Hijri Date
          </Link>
        </li>

        <li>
          <Link href="/blog/" className="opacity-50 hover:opacity-100">
            Blog
          </Link>
        </li>
      </ul>

      {/* About us, FAQs, and contact us links */}
      <ul className="mb-12 flex flex-col text-center text-lg font-medium leading-[44px] text-[#646464] lg:whitespace-nowrap lg:text-left dark:text-white">
        <li>
          <Link href="/about-us" className="opacity-50 hover:opacity-100">
            About Us
          </Link>
        </li>

        <li>
          <Link href="/faqs" className="opacity-50 hover:opacity-100">
            FAQs
          </Link>
        </li>

        <li>
          <Link href="/contact-us" className="opacity-50 hover:opacity-100">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Privacy policy, terms of use, disclamer, and help center */}
      {/* <ul className="mb-50px flex flex-col text-center text-lg font-medium leading-44px text-text-grey lg:whitespace-nowrap lg:text-left">
            <li className="inline-block">
              <Link
                to="/privacy-policy/"
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
            </li> */}
      {/* <li className="inline-block">
            <Link to="/">Terms of Use</Link>
          </li> */}
      {/* <li className="inline-block">
            <Link to="/">Disclamer</Link>
          </li> */}
      {/* <li className="inline-block">
            <Link to="/">Help Center</Link>
          </li> */}
      {/* </ul> */}

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

      {/* Social section */}
      <div>
        <p className="mb-7 flex justify-center text-xl font-medium uppercase leading-10 lg:justify-start dark:text-white">
          Follow Us
        </p>

        <ul className="mb-16 flex flex-row justify-center gap-x-3">
          <li>
            <Link href="https://twitter.com/myprayertimes">
              <Twitter />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Instagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNav;
