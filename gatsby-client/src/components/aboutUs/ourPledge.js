import React from 'react';

/** Our Pledge section */
const OurPledge = () => {
  return (
    <section
      className="mb-10 pb-52px pt-12 text-center text-white lg:mb-28 lg:py-20"
      style={{
        background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
      }}
    >
      <h2 className="mb-30px text-28px font-bold lg:text-45px">Our Pledge</h2>
      <p className="mx-auto mb-9 w-11/12 lg:w-7/12 xl:w-6/12">
        Our pledge is to provide accurate and reliable Islamic prayer times for
        Muslims of diverse backgrounds. We are committed to upholding principles
        of integrity, transparency, and love for Allah. These principles guide
        our work as we strive to establish a community of believers who stay on
        track with their daily salah and continue to learn and grow in their
        spiritual journey.
      </p>
      <hr className="mx-auto mb-9 w-6/12 lg:w-3/12" />
      <p className="mx-auto mb-9 w-11/12 lg:w-7/12 xl:w-6/12">
        "If anyone fulfils his brother’s needs, Allah will fulfil his needs; if
        one relieves a Muslim of his troubles, Allah will relieve his troubles
        on the Day of Resurrection."
      </p>
      <p>Prophet Muhammad ﷺ, Sahih Bukhari</p>
    </section>
  );
};

export default OurPledge;
