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
import SubscribeToNewsletter from '../../components/subscribeToNewsletter';

const BlogPost = ({ data }) => {
  const blogUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout>
      <section className="mx-auto mt-9 mb-12 w-10/12 text-left lg:mt-24">
        {/* Tag */}
        {/* <div className="mb-5 flex flex-row gap-2 text-xs font-bold text-green-dark lg:mx-auto lg:w-7/12 lg:gap-4 lg:text-2xl">
          {data.blogPost.metadata.tags.map((tag) => {
            return (
              <Link className="hover:underline" to="/">
                {tag.name}
              </Link>
            );
          })}
        </div> */}

        {/* Title */}
        <h1 className="mb-30px text-xl font-semibold text-text-layout_text lg:mx-auto lg:w-7/12 lg:text-40px lg:font-medium lg:leading-55px">
          {data.blogPost.title}
        </h1>

        {/* Author, Date, & share links */}
        <div className="mb-8 flex flex-row items-center gap-4 lg:mx-auto lg:w-7/12">
          {/* Author's image */}
          <span
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'yellow',
              borderRadius: '46px',
            }}
            className="lg:hidden"
          ></span>
          <span
            style={{
              width: '53px',
              height: '53px',
              backgroundColor: 'yellow',
              borderRadius: '53px',
            }}
            className="hidden lg:block"
          ></span>

          {/* Author name and date */}
          <div className="flex flex-col gap-1">
            <p className="text-base text-text-layout_text lg:text-xl">
              {data.blogPost.author}
            </p>
            <p className="text-xs text-text-medium_grey lg:text-lg">
              {data.blogPost.date}
            </p>
          </div>

          {/* Social Media Share Button */}
          <div className="ml-auto flex flex-row gap-3">
            {/* Twitter */}
            <TwitterShareButton
              url={blogUrl}
              title={data.blogPost.title}
              related={['@myprayertimes']}
              className="inline-block w-6"
            >
              <GatsbyImage
                image={data.twitterShareButton.childImageSharp.gatsbyImageData}
                alt="Share on Twitter"
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
                alt="Share on Facebook"
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
                alt="Save on Pocket"
              />
            </PocketShareButton>
          </div>
        </div>

        {/* Time to read */}
        <p
          style={{ color: '#323130' }}
          className="mb-4 text-sm lg:mx-auto lg:w-7/12 lg:text-lg"
        >
          {data.blogPost.body.childMarkdownRemark.timeToRead} min read
        </p>

        {/* Intro */}
        <div
          className="blogPostBody mb-7 lg:mx-auto lg:w-7/12"
          dangerouslySetInnerHTML={{
            __html: data.blogPost.intro.childMarkdownRemark.html,
          }}
        ></div>

        {/* Hero Image */}
        <GatsbyImage
          className="mb-7 !hidden lg:!block"
          image={data.blogPost.desktop.gatsbyImageData}
          alt={data.blogPost.mobile.description}
        />
        <GatsbyImage
          className="mb-7 lg:!hidden"
          image={data.blogPost.mobile.gatsbyImageData}
          alt={data.blogPost.mobile.description}
        />

        {/* Content */}
        <div
          className="blogPostBody lg:mx-auto lg:w-7/12"
          dangerouslySetInnerHTML={{
            __html: data.blogPost.body.childMarkdownRemark.html,
          }}
        ></div>
      </section>

      {/* Subscribe section */}
      <SubscribeToNewsletter />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    blogPost: contentfulBlogPost(id: { eq: $id }) {
      metadata {
        tags {
          name
        }
      }
      slug
      title
      author
      date(formatString: "MMM Do, YYYY")
      intro {
        childMarkdownRemark {
          html
        }
      }
      desktop: postHeaderImage {
        gatsbyImageData(
          placeholder: BLURRED
          formats: WEBP
          aspectRatio: 2.142857143
          quality: 100
        )
      }
      mobile: postHeaderImage {
        url
        description
        gatsbyImageData(
          placeholder: BLURRED
          formats: WEBP
          aspectRatio: 1.495535714
        )
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
    <Seo
      pageTitle={data.blogPost.title}
      imgUrl={data.blogPost.mobile.url}
      imgAlt={data.blogPost.mobile.description}
    />
  );
};

export default BlogPost;
