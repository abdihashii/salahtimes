import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo';
import Layout from '../../components/layout';
// import { renderRichText } from 'gatsby-source-contentful/rich-text';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <section className="mx-auto mt-9 w-11/12 text-left">
        {/* Title */}
        <h1 className="mb-30px text-xl font-semibold text-text-layout_text">
          {data.blogPost.title}
        </h1>

        {/* Author & Date */}
        <div className="flex flex-row gap-4">
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

        {/* Content */}
        {/* <div>{renderRichText(data.blogPost.post.raw, {})}</div> */}
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
      post {
        raw
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
