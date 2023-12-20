'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DesktopNav from './DesktopNav';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="static w-full border-b border-header_border_color pb-[10px] pt-6 lg:pb-8 lg:pt-8">
      <div className="mx-auto flex w-10/12 flex-row items-center lg:w-8/12 lg:justify-between xl:w-7/12">
        {/* Logo */}
        <Link className="flex flex-row items-center gap-3" href="/">
          <Image
            src={'/favicon-cropped-600px.png'}
            alt="My Prayer Times Logo"
            width={48}
            height={48}
          />
          <p className="font-bold uppercase text-green-secondary">
            My Prayer Times
          </p>
        </Link>

        {/* Navigation - Desktop */}
        <DesktopNav />

        {/* Our Blog button - Desktop */}
        <Link
          className={`!hidden rounded-full bg-green-dark px-12 py-4 font-semibold text-white hover:bg-green-secondary hover:transition-colors lg:!block
          ${
            pathname === '/blog'
              ? 'pointer-events-none opacity-20'
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
