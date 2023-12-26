'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = ({ transparentNav }: { transparentNav: boolean }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`!hidden text-base font-medium leading-6 lg:!block
        ${transparentNav ? 'text-white' : 'text-[#130102] dark:text-white'}
      `}
    >
      <ul className="flex flex-row gap-10">
        <li>
          <Link
            className={`hover:opacity-100 hover:transition-opacity ${
              pathname === '/about' ? 'opacity-100' : 'opacity-50'
            }`}
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className={`hover:opacity-100 hover:transition-opacity ${
              pathname === '/faqs' ? 'opacity-100' : 'opacity-50'
            }`}
            href="/faqs"
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            className={`hover:opacity-100 hover:transition-opacity ${
              pathname === '/hijri-date' ? 'opacity-100' : 'opacity-50'
            }`}
            href="/hijri-date"
          >
            Hijri Date
          </Link>
        </li>
        <li>
          <Link
            className={`hover:opacity-100 hover:transition-opacity ${
              pathname === '/contact' ? 'opacity-100' : 'opacity-50'
            }`}
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
