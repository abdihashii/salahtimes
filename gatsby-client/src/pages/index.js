import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { RxArrowRight } from 'react-icons/rx';
import TextSection from '../components/textSection';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import TrendingStories from '../components/trendingStories';
import PrayerTimesSection from '../components/prayerTimes';

const Home = ({ data: { masjid_1, masjid_2 } }) => {
  return (
    <Layout transparentNav={true}>
      <PrayerTimesSection />

      <section className="lg:mx-auto lg:mb-28 lg:flex lg:w-10/12 lg:flex-row-reverse lg:gap-14">
        {/* About MPT Section */}
        <div className="mb-50px lg:-order-1 lg:m-0 lg:w-7/12">
          <TextSection
            heading={'About MyPrayerTimes'}
            textContent={`Varius tristique aliquet vulputate senectus duis urna et tellus. Neque eu ac consequat convallis dui facilisi. Pellentesque leo odio adipiscing tortor. Lorem faucibus lectus sed tristique. Hendrerit convallis sed praesent sed quam lectus laoreet.
Viverra purus sit auctor convallis. Nullam ac ut elit orci donec sed velit sit nunc. Turpis urna tristique adipiscing cursus malesuada. Ornare augue sollicitudin congue pretium sed purus hendrerit amet magna. Pulvinar lacinia vivamus auctor mauris.`}
            className="lg:!ml-0 lg:w-full"
          />
          <Link
            to="/about-us"
            className="mx-auto flex w-fit flex-row items-center gap-4 rounded-full border px-25px py-14px text-xs font-semibold text-green-secondary hover:bg-green-secondary hover:text-white lg:!ml-0"
          >
            <p>Learn more</p>
            <RxArrowRight />
          </Link>
        </div>

        {/* Two Image Section */}
        <div className="mx-auto mb-28 flex w-10/12 flex-row gap-4 lg:m-0 lg:h-fit lg:w-5/12 lg:justify-between">
          <GatsbyImage
            image={masjid_1.childImageSharp.gatsbyImageData}
            className="mb-11 lg:w-5/12"
          />
          <GatsbyImage
            image={masjid_2.childImageSharp.gatsbyImageData}
            className="mt-11 lg:w-5/12"
          />
        </div>
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
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          aspectRatio: 0.8888700085
        )
      }
    }
    masjid_2: file(name: { eq: "masjid_2" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          aspectRatio: 0.8888700085
        )
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
