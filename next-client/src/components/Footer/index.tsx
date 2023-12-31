'use client';

import Link from 'next/link';
import Image from 'next/image';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full flex-col border-t-4 border-green-secondary pt-12 tracking-[0.011em]">
      <section className="lg:mx-auto lg:flex lg:w-8/12 lg:flex-row lg:gap-16 xl:w-7/12">
        {/* Logo and One-liner */}
        <div className="gap-8 lg:flex lg:w-6/12 lg:flex-col">
          {/* Logo */}
          <Link href="/" className="flex flex-row items-center">
            <div className="relative min-h-[60px] w-2/12">
              <Image
                className="object-cover"
                src="/favicon-cropped-600px.png"
                width={100}
                height={100}
                alt="MyPrayerTimes Logo"
              />
            </div>

            <p className="text-17px ml-4 font-bold uppercase text-green-secondary lg:ml-4 lg:text-xl">
              My Prayer Times
            </p>
          </Link>

          {/* footer one-liner */}
          <div className="mx-auto mb-12 w-10/12 justify-center text-center text-base text-[#646464] lg:!ml-0 lg:w-10/12 lg:text-left lg:leading-8 dark:text-white">
            <p>
              Connecting the Ummah with accurate prayer times and spiritual
              growth
            </p>
          </div>
        </div>

        <FooterNav />
      </section>

      {/* Copyright */}
      <div className="flex justify-center border-t-2 border-t-black p-6 text-sm font-extralight leading-7 text-[#0F0700] dark:border-t-[#F8F8F8] dark:text-white">
        Copyright ©MyPrayerTimes 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
