import React from 'react';

const SubscribeToNewsletter = () => {
  return (
    <section
      className="pt-34px pb-8 text-center text-white lg:mx-auto lg:w-10/12 lg:py-100px"
      style={{
        background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
      }}
    >
      {/* Subcribe header */}
      <h2 className="mx-auto mb-27px w-10/12 text-xl font-bold lg:mb-10 lg:text-45px lg:leading-57px xl:w-6/12">
        Subscribe to our bi-weekly newsletter
      </h2>

      {/* Email input */}
      <div className="lg:mx-auto lg:mb-8 lg:flex lg:w-10/12 lg:flex-row lg:gap-30px xl:w-6/12">
        <input
          type="text"
          className="mb-14px w-10/12 rounded-full border-2 py-4 px-6 text-text-core_values lg:mb-0"
          placeholder="Enter your email address"
        ></input>
        <button className="mb-14px w-10/12 rounded-full border-2 py-4 lg:mb-0 lg:w-fit lg:px-77px lg:hover:border-gray-400">
          Subscribe
        </button>
      </div>

      {/* TOS text */}
      <p className="mx-auto w-10/12 text-xs lg:w-7/12 lg:text-lg xl:w-6/12">
        By clicking the Subscribe button you are agreeing to receive occasional
        email communications from <strong>MyPrayerTimes</strong>. We will not
        share your details with any 3rd parties and you can unsubscribe at any
        time.
      </p>
    </section>
  );
};

export default SubscribeToNewsletter;
