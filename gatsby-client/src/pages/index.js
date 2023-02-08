import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/styles.scss';
import { RxArrowRight } from 'react-icons/rx';
import TextSection from '../components/textSection';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import TrendingStories from '../components/trendingStories';
import PrayerTimesSection from '../components/prayerTimes';

const Home = ({ data: { masjid_1, masjid_2 } }) => {
  return (
    <Layout transparentNav={true}>
      <PrayerTimesSection />

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
