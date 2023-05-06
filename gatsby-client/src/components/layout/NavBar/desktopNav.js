import React from 'react';
import { Link } from 'gatsby';

const DesktopNav = ({ transparentNav }) => {
  return (
    <nav
      className={`!hidden text-base font-medium leading-6 lg:!block ${
        transparentNav ? 'text-white' : 'text-text-nav_grey'
      }`}
    >
      <ul className="flex flex-row gap-10">
        <li>
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            to="/about-us/"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            to="/faqs/"
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            to="/hijri-date/"
          >
            Hijri Date
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100"
            activeStyle={{ opacity: 1 }}
            to="/contact-us"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
