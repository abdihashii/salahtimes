import React from 'react';

const HamburgerMenu = () => {
  return (
    <nav className="absolute top-0 left-0 z-20 mx-auto min-h-screen w-full bg-green-extra_dark pt-36 pb-52px font-semibold text-white lg:hidden">
      <ul className="mb-83px flex flex-col gap-16 text-2xl">
        <li className="mx-auto w-fit">
          <a href="/">Prayer Times</a>
        </li>
        <li className="mx-auto w-fit">
          <a href="/about-us/">About Us</a>
        </li>
        <li className="mx-auto w-fit">
          <a href="/faqs/">FAQs</a>
        </li>
        <li className="mx-auto w-fit">
          <a href="/ramadan-2023/">Ramadan 2023</a>
        </li>
        <li className="mx-auto w-fit">
          <a href="/contact-us/">Contact Us</a>
        </li>
      </ul>

      <hr className="mx-auto mb-45px w-7/12" />

      <a
        href="/blog"
        className="mx-auto block w-fit rounded-full bg-green-secondary py-4 px-50px"
      >
        Our Blog
      </a>
    </nav>
  );
};

export default HamburgerMenu;
