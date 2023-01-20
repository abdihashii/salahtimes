import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import masjidBackground from '../images/masjid_bg.png';

const AboutUs = () => {
  return (
    <Layout transparentNav={true}>
      <>
        <div
          className="mb-59px flex flex-col text-center text-white shadow-bg_layer"
          style={{
            backgroundImage: `url(${masjidBackground})`,
          }}
        >
          <h1 className="mb-22px mt-28 text-32px font-semibold leading-39px">
            Who We Are
          </h1>
          <p className="mb-39px px-30px text-13px leading-22px text-text-light_grey">
            Cursus pharetra quis consequat diam sagittis. Penatibus nibh nunc
            magna pharetra est nec rhoncus commodo gravida. Lectus sapien mattis
            volutpat pellentesque posuere enim eget nullam dui.
          </p>
          <button className="mx-auto mb-5 w-max rounded-4xl bg-green-secondary py-3 px-8 font-semibold text-text-button">
            See Our FAQs
          </button>
          <button className="mx-auto mb-56px w-max rounded-4xl border border-text-button py-3 px-8 font-semibold text-text-button">
            Contact Us
          </button>
        </div>

        <section className="relative mx-auto mb-10 ml-5 w-11/12 pb-21px">
          <div
            className="absolute bottom-0 right-0 bg-green-secondary"
            style={{ width: '315px', height: '315px' }}
          ></div>
          <StaticImage
            src="../images/sheikh-zayed-grand-mosque.jpg"
            style={{ width: '315px' }}
          />
        </section>

        <section className="mx-auto mb-38px flex w-10/12 flex-col text-center">
          <h2 className="mb-3 text-2xl font-bold leading-30px">Our Mission</h2>
          <span className="mx-auto mb-25px w-16 rounded-xl border-5px border-green-secondary"></span>
          <p className="text-text-medium_grey">
            Empower Muslims of diverse backgrounds with accurate and reliable
            Islamic prayer times while providing informative content to deepen
            understanding and connection with Allah and our faith. Guided by
            principles of integrity, transparency, and love for Allah, we strive
            to establish a community of believers who stay on track with their
            daily salah and continue to learn and grow in their spiritual
            journey.
          </p>
        </section>

        <section className="mx-auto mb-38px flex w-10/12 flex-col text-center">
          <h2 className="mb-3 text-2xl font-bold leading-30px">Our Vision</h2>
          <span className="mx-auto mb-25px w-16 rounded-xl border-5px border-green-secondary"></span>
          <p className="text-text-medium_grey">
            To be a global platform that engages the Ummah and inspires a deeper
            connection and love for Salah through accurate prayer times and
            high-quality, well-researched content. We aspire to be known as the
            go-to website for all things related to Islamic prayer and to have a
            substantial impact on our users.
          </p>
        </section>

        <section className="mx-auto mb-38px flex w-10/12 flex-col text-center">
          <h2 className="mb-3 text-2xl font-bold leading-30px">
            Our Core Values
          </h2>
          <span className="mx-auto mb-25px w-16 rounded-xl border-5px border-green-secondary"></span>
          <p className="text-text-medium_grey">
            These values are reflected in all aspects MyPrayerTimes, from the
            accurate prayer times to the informative content and how we interact
            with our users. We also pride ourselves on providing well-researched
            and high-quality content that goes above and beyond prayer times to
            deepen understanding and connection with the faith.
          </p>
        </section>
      </>
    </Layout>
  );
};

export default AboutUs;
