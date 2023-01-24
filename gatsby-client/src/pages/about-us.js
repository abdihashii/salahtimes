import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import masjidBackground from '../images/masjid_bg.webp';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { HiOutlineArrowRight } from 'react-icons/hi';

/** The small green border under each 'About Us' section */
const SectionBorder = () => {
  return (
    <span className="mx-auto mb-25px w-20 rounded-xl border-4 border-green-secondary"></span>
  );
};

/** Core values */
const CoreValues = ({ images }) => {
  const coreValues = [
    {
      coreValue: 'Iman (Faith)',
      coreValueDescription: `At MyPrayerTimes, we believe that faith is 
      the foundation of a meaningful and fulfilling life as a Muslim. 
      We strive to provide content and resources that deepen knowledge 
      and connection with Allah.`,
    },
    {
      coreValue: 'Integrity + Transparency',
      coreValueDescription: `We pride ourselves on being open and 
      upfront with our users, providing accurate and reliable salah times 
      and being transparent in our practices.`,
    },
    {
      coreValue: 'Commitment to Quality',
      coreValueDescription: `We aim to provide the highest quality content 
      and user experience, from accurate prayer times to informative and 
      well-researched blog posts about prayer in Islam.`,
    },
  ];

  return (
    <div className="mt-45px flex flex-col gap-10 text-left">
      <div>
        <GatsbyImage
          image={images.iman.childImageSharp.gatsbyImageData}
          className="mb-30px"
          alt="Mashaf next to dates, representing Iman (Faith)"
        />
        <p className="mb-25px text-xl font-medium">{coreValues[0].coreValue}</p>
        <p className="text-text-core_values">
          {coreValues[0].coreValueDescription}
        </p>
      </div>

      <div>
        <GatsbyImage
          image={images.integrity.childImageSharp.gatsbyImageData}
          className="mb-30px"
          alt="Roots of a tree next to a waterfall, representing a strong foundation"
        />
        <p className="mb-25px text-xl font-medium">{coreValues[1].coreValue}</p>
        <p className="text-text-core_values">
          {coreValues[1].coreValueDescription}
        </p>
      </div>

      <div>
        <GatsbyImage
          image={images.quality.childImageSharp.gatsbyImageData}
          className="mb-30px"
          alt="A magnifying glass, representing quality"
        />
        <p className="mb-25px text-xl font-medium">{coreValues[2].coreValue}</p>
        <p className="text-text-core_values">
          {coreValues[2].coreValueDescription}
        </p>
      </div>
    </div>
  );
};

/** Component for each 'About Us' section */
const AboutUsTextSection = ({ heading, textContent, children }) => {
  return (
    <section className="mx-auto mb-10 flex w-11/12 flex-col text-center">
      <h2 className="mb-3 text-2xl font-bold leading-30px">{heading}</h2>
      <SectionBorder />
      <p className="text-text-medium_grey">{textContent}</p>

      {children && children}
    </section>
  );
};

/** Our Pledge section */
const OurPledge = () => {
  return (
    <div
      className="mb-10 pb-52px text-center text-white"
      style={{
        background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
      }}
    >
      <h2 className="mb-30px pt-12 text-28px font-bold">Our Pledge</h2>
      <p className="mx-auto mb-9 w-11/12">
        Every day, we focus on creating a better mobile app, one that is
        relevant and useful to the Ummah. We may not always get it right, but we
        pledge to always listen to you, our users, to improve and to serve you
        better today, compared to yesterday.
      </p>
      <hr className="mx-auto mb-9 w-6/12" />
      <p className="mx-auto mb-9 w-11/12">
        If anyone fulfils his brother’s needs, Allah will fulfil his needs; if
        one relieves a Muslim of his troubles, Allah will relieve his troubles
        on the Day of Resurrection.
      </p>
      <p>Prophet Muhammad ﷺ, Sahih Bukhari</p>
    </div>
  );
};

const AboutUs = ({ data }) => {
  const {
    contentfulBlogPosts: { nodes: blogPosts },
    zayed,
    iman,
    integrity,
    quality,
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
        <AboutUsTextSection
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
        <AboutUsTextSection
          heading={'Our Vision'}
          textContent={`To be a global platform that engages the Ummah and inspires a deeper
            connection and love for Salah through accurate prayer times and
            high-quality, well-researched content. We aspire to be known as the
            go-to website for all things related to Islamic prayer and to have a
            substantial impact on our users.`}
        />

        {/* Our Core Values */}
        <AboutUsTextSection
          heading={'Our Core Values'}
          textContent={`Discover the guiding principles that shape our mission and vision at MyPrayerTimes.`}
        >
          <CoreValues
            images={{ iman: iman, integrity: integrity, quality: quality }}
          />
        </AboutUsTextSection>

        {/* Our Pledge */}
        <OurPledge />

        {/* Trending Stores Of The Month */}
        <AboutUsTextSection
          heading={'Must-Read Stories Of The Month'}
          textContent={`Stay informed and inspired with our top-trending stories of the month.`}
        >
          <div className="mt-45px mb-69px text-left">
            {blogPosts.map(
              ({ slug, title, date, postHeaderImage: { gatsbyImageData } }) => {
                return (
                  <div key={slug} className="mb-10 last:mb-0">
                    <GatsbyImage
                      className="mb-30px"
                      image={gatsbyImageData}
                      alt=""
                    />
                    <a
                      href={`/${slug}`}
                      className="mb-10px inline-block text-xl font-medium text-text-light_black"
                    >
                      {title}
                    </a>
                    <p className="text-lg text-text-core_values">{date}</p>
                  </div>
                );
              }
            )}
          </div>

          <button className="mx-auto flex w-max flex-row items-center gap-2 rounded-4xl bg-green-secondary py-3 px-8 text-xs font-semibold text-white">
            Explore Our Blogs
            <HiOutlineArrowRight />
          </button>
        </AboutUsTextSection>
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
    iman: file(relativePath: { in: "about-us-page/iman.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
    quality: file(relativePath: { in: "about-us-page/quality.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
    integrity: file(relativePath: { in: "about-us-page/integrity.jpg" }) {
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
