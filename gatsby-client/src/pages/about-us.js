import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import masjidBackground from '../images/masjid_bg.webp';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import TextSection from '../components/textSection';
import CoreValues from '../components/aboutUs/coreValues';
import OurPledge from '../components/aboutUs/ourPledge';
import TrendingStories from '../components/trendingStories';

const AboutUs = ({ data }) => {
  const {
    contentfulBlogPosts: { nodes: blogPosts },
    zayed,
  } = data;

  return (
    <Layout transparentNav={true}>
      <>
        {/* About Us Header */}
        <div
          className="mb-59px flex flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
          style={{
            backgroundImage: `url(${masjidBackground})`,
          }}
        >
          <h1 className="mb-22px mt-28 text-32px font-semibold leading-39px">
            Who We Are
          </h1>
          <p className="mb-39px px-30px text-13px leading-22px text-text-light_grey">
            MyPrayerTimes is a community-driven platform providing accurate and
            reliable prayer times to Muslims of diverse backgrounds. Our mission
            is to empower and engage the global Ummah through accurate prayer
            times and informative content.
          </p>
          <button className="mx-auto mb-5 w-max rounded-4xl bg-green-secondary py-3 px-8 font-semibold text-text-button">
            See Our FAQs
          </button>
          <button className="mx-auto mb-56px w-max rounded-4xl border border-text-button py-3 px-8 font-semibold text-text-button">
            Contact Us
          </button>
        </div>

        {/* Image w/ Shadow Section */}
        <section className="relative mx-auto mb-10 w-11/12 pb-21px">
          <div className="absolute bottom-0 right-0 h-5/6 w-10/12 bg-green-secondary"></div>
          <GatsbyImage
            image={zayed.childImageSharp.gatsbyImageData}
            className="w-11/12"
          />
        </section>

        {/* Our Mission */}
        <TextSection
          heading={'Our Mission'}
          textContent={`To empower Muslims of diverse backgrounds with accurate and reliable
            Islamic prayer times while providing informative content to deepen
            understanding and connection with Allah and our faith. Guided by
            principles of integrity, transparency, and love for Allah, we strive
            to establish a community of believers who stay on track with their
            daily salah and continue to learn and grow in their spiritual
            journey.`}
        />

        {/* Our Vision */}
        <TextSection
          heading={'Our Vision'}
          textContent={`To be a global platform that engages the Ummah and inspires a deeper
            connection and love for Salah through accurate prayer times and
            high-quality, well-researched content. We aspire to be known as the
            go-to website for all things related to Islamic prayer and to have a
            substantial impact on our users.`}
        />

        {/* Our Core Values */}
        <TextSection
          heading={'Our Core Values'}
          textContent={`Discover the guiding principles that shape our mission and vision at MyPrayerTimes.`}
        >
          <CoreValues />
        </TextSection>

        {/* Our Pledge */}
        <OurPledge />

        {/* Trending Stores Of The Month */}
        <TrendingStories />
      </>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulBlogPosts: allContentfulBlogPost(sort: { date: DESC }) {
      nodes {
        slug
        title
        date(formatString: "MMM Do, yyyy")
        postHeaderImage {
          gatsbyImageData(formats: WEBP, placeholder: BLURRED)
          description
        }
      }
    }
    zayed: file(
      relativePath: { in: "about-us-page/sheikh-zayed-grand-mosque.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`;

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'About Us'} />
    </>
  );
};

export default AboutUs;
