import React from 'react';

const MobileMenuBar = () => {
  return (
    <div className="z-50 h-screen w-screen bg-green-dark lg:hidden">
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
