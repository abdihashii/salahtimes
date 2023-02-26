import React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout';
import ContactForm from '../components/contactUs/contactForm';

const ContactUs = () => {
  return (
    <Layout>
      <main className="pb-16 text-black">
        <h1 className="mx-auto mt-10 mb-22px w-10/12 text-center text-32px font-semibold leading-39px lg:mt-6 lg:mb-30px lg:w-5/12 lg:pt-16 lg:text-6xl">
          Get in touch!
        </h1>
        <h2 className="mx-auto mb-39px w-10/12 text-center text-13px font-normal leading-22px lg:mb-60px lg:w-5/12 lg:text-lg lg:font-medium">
          We’d love to hear from you! Please fill out the form below and we will
          get back to you as soon as possible.
        </h2>

        {/* Form */}
        <ContactForm />
      </main>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'About Us'} />
    </>
  );
};

export default ContactUs;
