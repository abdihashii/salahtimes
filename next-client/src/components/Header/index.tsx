'use client';

import Image from 'next/image';
import Link from 'next/link';

import DesktopNav from './DesktopNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="pt-6 pb-[10px] lg:pt-8 lg:pb-8 static border-b border-header_border_color">
      <div className="mx-auto flex w-10/12 flex-row items-center lg:w-8/12 lg:justify-between xl:w-7/12">
        {/* Logo */}
        <Link className="flex flex-row items-center gap-3" href="/">
          <Image
            src={'/favicon-cropped-600px.png'}
            alt="My Prayer Times Logo"
            width={48}
            height={48}
          />
          <p className="uppercase text-green-secondary font-bold">
            My Prayer Times
          </p>
        </Link>

        {/* Navigation - Desktop */}
        <DesktopNav />

        {/* Our Blog button - Desktop */}
        <Link
          className={`!hidden rounded-full bg-green-dark py-4 px-12 font-semibold text-white hover:bg-green-secondary lg:!block hover:transition-colors
          ${
            pathname === '/blog'
              ? 'opacity-20 pointer-events-none'
              : 'cursor-pointer'
          }`}
          href="/blog"
        >
          Our Blog
        </Link>

        {/* Hamburger icon */}
        {/* {isHamburgerMenuOpen ? (
            <RxCross1
              className={`ml-auto text-2xl lg:hidden ${
                transparentNav || isHamburgerMenuOpen ? 'text-white' : ''
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          ) : (
            <RxHamburgerMenu
              className={`ml-auto text-2xl lg:hidden ${
                transparentNav ? 'text-white' : ''
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          )} */}
      </div>
    </header>
  );
};

export default Header;
