import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo';
import Layout from '../../components/layout';
import './blogPost.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <section className="mx-auto mt-9 mb-12 w-11/12 text-left">
        {/* Title */}
        <h1 className="mb-30px text-xl font-semibold text-text-layout_text">
          {data.blogPost.title}
        </h1>

        {/* Author & Date */}
        <div className="mb-8 flex flex-row gap-4">
          {/* Author's image */}
          <span
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'yellow',
              borderRadius: '46px',
            }}
          ></span>
          {/* Author name and date */}
          <div className="flex flex-col gap-1">
            <p className="text-base text-text-layout_text">
              {data.blogPost.author}
            </p>
            <p className="text-xs text-text-medium_grey">
              {data.blogPost.date}
            </p>
          </div>
        </div>

        {/* Time to read */}
        <p style={{ color: '#323130' }} className="mb-4 text-sm">
          {data.blogPost.body.childMarkdownRemark.timeToRead} min read
        </p>

        {/* Intro */}
        <div
          className="blogPostBody mb-7"
          dangerouslySetInnerHTML={{
            __html: data.blogPost.intro.childMarkdownRemark.html,
          }}
        ></div>

        {/* Hero Image */}
        <GatsbyImage
          className="mb-7"
          image={data.blogPost.postHeaderImage.gatsbyImageData}
        />

        {/* Content */}
        <div
          className="blogPostBody"
          dangerouslySetInnerHTML={{
            __html: data.blogPost.body.childMarkdownRemark.html,
          }}
        ></div>
      </section>

      {/* Subscribe section */}
      <section
        style={{
          background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
        }}
        className="pt-34px pb-8 text-center text-white"
      >
        <h3 className="mx-auto mb-27px w-11/12 text-xl font-bold">
          Subscribe to our bi-weekly newsletter
        </h3>
        <input
          type="text"
          className="mb-14px w-11/12 rounded-full border-2 py-4 px-6 text-text-core_values"
          placeholder="Enter your email address"
        ></input>
        <button className="mb-14px w-11/12 rounded-full border-2 py-4">
          Subscribe
        </button>
        <p className="mx-auto w-11/12 text-xs">
          By clicking the Subscribe button you are agreeing to receive
          occasional email communications from MyPrayerTimes. We will not share
          your details with any 3rd parties and you can unsubscribe at any time.
        </p>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    blogPost: contentfulBlogPost {
      slug
      title
      author
      date(formatString: "MMM Do, YYYY")
      intro {
        childMarkdownRemark {
          html
        }
      }
      postHeaderImage {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
      heroImageCredit {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      postHeaderImage {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ data }) => {
  return (
    <>
      <Seo pageTitle={data.blogPost.title} />
    </>
  );
};

export default BlogPost;
