import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo';
import Layout from '../../components/layout';
import './blogPost.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  FacebookShareButton,
  TwitterShareButton,
  PocketShareButton,
} from 'react-share';

const BlogPost = ({ data }) => {
  const blogUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout>
      <section className="mx-auto mt-9 mb-12 w-10/12 text-left">
        {/* Title */}
        <h1 className="mb-30px text-xl font-semibold text-text-layout_text">
          {data.blogPost.title}
        </h1>

        {/* Author, Date, & share links */}
        <div className="mb-8 flex flex-row items-center gap-4">
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

          {/* Social Media Share Button */}
          <div className="ml-auto flex flex-row gap-3">
            {/* Twitter */}
            <TwitterShareButton
              url={blogUrl}
              title={data.blogPost.body.childMarkdownRemark.excerpt}
              className="inline-block w-6"
            >
              <GatsbyImage
                image={data.twitterShareButton.childImageSharp.gatsbyImageData}
              />
            </TwitterShareButton>

            {/* FB */}
            <FacebookShareButton
              url={blogUrl}
              quote={data.blogPost.body.childMarkdownRemark.excerpt}
              className="inline-block w-6"
            >
              <GatsbyImage
                image={data.facebookShareButton.childImageSharp.gatsbyImageData}
              />
            </FacebookShareButton>

            {/* Pocket */}
            <PocketShareButton
              url={blogUrl}
              title={data.blogPost.body.childMarkdownRemark.excerpt}
              className="inline-block w-6"
            >
              <GatsbyImage
                image={data.pocketShareButton.childImageSharp.gatsbyImageData}
              />
            </PocketShareButton>
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
        <h3 className="mx-auto mb-27px w-10/12 text-xl font-bold">
          Subscribe to our bi-weekly newsletter
        </h3>
        <input
          type="text"
          className="mb-14px w-10/12 rounded-full border-2 py-4 px-6 text-text-core_values"
          placeholder="Enter your email address"
        ></input>
        <button className="mb-14px w-10/12 rounded-full border-2 py-4">
          Subscribe
        </button>
        <p className="mx-auto w-10/12 text-xs">
          By clicking the Subscribe button you are agreeing to receive
          occasional email communications from MyPrayerTimes. We will not share
          your details with any 3rd parties and you can unsubscribe at any time.
        </p>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    blogPost: contentfulBlogPost(id: { eq: $id }) {
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
    twitterShareButton: file(name: { eq: "twitter-share-button" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
    facebookShareButton: file(name: { eq: "facebook-share-button-96" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
    pocketShareButton: file(name: { eq: "pocket-share-button" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
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