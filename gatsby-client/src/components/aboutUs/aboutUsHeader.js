import React from 'react';
import masjidBackground from '../../images/masjid_bg_wide.webp';

const AboutUsHeader = () => {
  return (
    <div
      className="mb-59px flex flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer lg:mb-28 lg:bg-center"
      style={{
        backgroundImage: `url(${masjidBackground})`,
      }}
    >
      <h1 className="mx-auto mb-22px mt-28 text-32px font-semibold leading-39px lg:mt-52 lg:mb-30px lg:text-6xl">
        Who We Are
      </h1>
      <p className="mx-auto mb-39px w-10/12 text-13px font-normal leading-22px text-text-light_grey lg:mb-60px lg:w-6/12 lg:text-lg lg:font-medium">
        MyPrayerTimes is a community-driven platform providing accurate and
        reliable prayer times to Muslims of diverse backgrounds. Our mission is
        to empower and engage the global Ummah through accurate prayer times and
        informative content.
      </p>
      <div className="mx-auto mb-56px flex flex-col justify-center gap-5 lg:mb-106px lg:flex-row lg:gap-21px">
        <button className="w-max rounded-4xl bg-green-secondary py-3 px-8 font-semibold text-text-button lg:py-4">
          See Our FAQs
        </button>
        <button className="rounded-4xl border border-text-button py-3 px-8 font-semibold text-text-button lg:py-4">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUsHeader;
