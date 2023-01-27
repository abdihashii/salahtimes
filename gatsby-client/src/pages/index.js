import React from 'react';
import Layout from '../components/layout';
import { LocationSelector } from '../components/locationSelector';
import Seo from '../components/seo';
import { PrayerTimes } from '../components/prayerTimes/prayerTimes';
import { MorePrayerTimes } from '../components/morePrayerTimes/morePrayerTimes';
import CurrentTime from '../components/currentTime/currentTime';
import '../styles/styles.scss';
import masjidBackground from '../images/masjid_bg.webp';
import { RxPencil2, RxArrowRight } from 'react-icons/rx';
import PrayerTimesTitle from '../components/prayerTimesTitle';
import TextSection from '../components/textSection';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import TrendingStories from '../components/trendingStories';

const Home = ({ data: { masjid_1, masjid_2 } }) => {
  return (
    <Layout transparentNav={true}>
      {/* Prayer Times Section */}
      <section
        className="mb-59px flex min-h-screen flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
        style={{
          backgroundImage: `url(${masjidBackground})`,
        }}
      >
        <PrayerTimesTitle />
        <CurrentTime />

        {/* Calculation settings */}
        <p className="mx-auto mb-5 w-10/12 text-lg font-medium text-text-light_grey">
          Calculation Method: Islamic Society of North America, Juristic
          settings: <strong>Shafii</strong>
        </p>

        {/* Change settings button */}
        <button className="mx-auto mb-45px flex w-fit items-center gap-2 text-text-light_blue">
          <RxPencil2 /> Change Settings
        </button>
        <LocationSelector />
        <PrayerTimes />
        <MorePrayerTimes />
      </section>

      {/* About MPT Section */}
      <section className="mb-50px">
        <TextSection
          heading={'About MyPrayerTimes'}
          textContent={`Varius tristique aliquet vulputate senectus duis urna et tellus. Neque eu ac consequat convallis dui facilisi. Pellentesque leo odio adipiscing tortor. Lorem faucibus lectus sed tristique. Hendrerit convallis sed praesent sed quam lectus laoreet.
Viverra purus sit auctor convallis. Nullam ac ut elit orci donec sed velit sit nunc. Turpis urna tristique adipiscing cursus malesuada. Ornare augue sollicitudin congue pretium sed purus hendrerit amet magna. Pulvinar lacinia vivamus auctor mauris.`}
        />
        <a
          href="/about-us"
          className="mx-auto flex w-fit flex-row items-center gap-4 rounded-full border px-25px py-14px text-xs font-semibold"
        >
          <p className="text-green-secondary">About Us</p>
          <RxArrowRight />
        </a>
      </section>

      {/* Two Image Section */}
      <section className="mx-auto mb-28 flex w-10/12 flex-row gap-4">
        <GatsbyImage
          image={masjid_1.childImageSharp.gatsbyImageData}
          className="mb-11"
        />
        <GatsbyImage
          image={masjid_2.childImageSharp.gatsbyImageData}
          className="mt-11"
        />
      </section>

      {/* Trending Stories Section */}
      <TrendingStories />
    </Layout>
  );
};

export const data = graphql`
  query HomeImages {
    masjid_1: file(name: { eq: "masjid_1" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED)
      }
    }
    masjid_2: file(name: { eq: "masjid_2" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'Accurate Prayer Times, Anywhere'} />
    </>
  );
};

export default Home;
