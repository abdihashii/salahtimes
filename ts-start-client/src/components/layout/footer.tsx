import { Link } from "@tanstack/react-router";

import ActiveLink from "@/components/ui/active-link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col border-t-[3px] border-green-secondary pt-12 tracking-[0.011em]">
      <section className="lg:mx-auto lg:flex lg:w-8/12 lg:flex-row lg:gap-16 xl:w-7/12">
        {/* Logo and One-liner */}
        <div className="lg:flex lg:w-6/12 lg:flex-col">
          {/* Logo and logo name */}
          <Link
            to="/"
            className="mb-8 flex flex-row items-center justify-center lg:mb-9 lg:justify-start"
          >
            <img
              src="images/favicon-cropped-600px.png"
              alt="My Prayer Times Logo"
              className="w-2/12"
            />
            <p className="ml-[17px] text-[17px] font-bold uppercase text-green-secondary lg:ml-4 lg:text-xl">
              My Prayer Times
            </p>
          </Link>

          {/* footer one-liner */}
          <div className="mx-auto mb-[51px] w-10/12 justify-center text-center text-base text-text-grey lg:!ml-0 lg:w-10/12 lg:text-left lg:leading-8">
            <p>
              Connecting the Ummah with accurate prayer times and spiritual
              growth
            </p>
          </div>
        </div>

        <div className="lg:flex lg:w-6/12 lg:flex-row lg:justify-between">
          {/* Prayer times, blog, about us, contact us, and faqs */}
          <ul className="mb-[50px] flex flex-col text-center text-lg font-medium leading-[44px] text-text-grey lg:whitespace-nowrap lg:text-left">
            <li>
              <ActiveLink
                to="/"
                className="opacity-50 hover:opacity-100"
                activeClassName="opacity-100"
              >
                Prayer Times
              </ActiveLink>
            </li>
            <li className="inline-block">
              <ActiveLink
                to="/hijri-date"
                className="opacity-50 hover:opacity-100"
                activeClassName="opacity-100"
              >
                Hijri date
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                to="/blog"
                className="opacity-50 hover:opacity-100"
                activeClassName="opacity-100"
              >
                Blog
              </ActiveLink>
            </li>
          </ul>

          {/* Info links */}
          <ul className="mb-[55px] flex flex-col text-center text-lg font-medium leading-[44px] text-text-grey lg:whitespace-nowrap lg:text-left">
            <li>
              <ActiveLink
                to="/about"
                className="opacity-50 hover:opacity-100"
                activeClassName="opacity-100"
              >
                About Us
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                to="/faqs"
                className="opacity-50 hover:opacity-100"
                activeClassName="opacity-100"
              >
                FAQs
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                to="/contact"
                className="opacity-50 hover:opacity-100"
                activeClassName="opacity-100"
              >
                Contact Us
              </ActiveLink>
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

          {/* Social */}
          <div>
            {/* Follow us */}
            <p className="mb-[26px] flex justify-center text-xl font-medium uppercase leading-[39px] text-text-layout_text lg:justify-start">
              Follow Us
            </p>

            {/* Social media links */}
            <ul className="mb-[63px] flex flex-row justify-center gap-x-[11px]">
              <li>
                <a href="https://twitter.com/myprayertimes">Twitter</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="flex justify-center bg-bg-grey p-[22px] text-[13px] font-extralight leading-[26px] text-text-layout_text">
        Copyright ©MyPrayerTimes 2023. All rights reserved
      </div>
    </footer>
  );
}
