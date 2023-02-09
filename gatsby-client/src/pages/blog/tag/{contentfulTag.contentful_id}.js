import { graphql } from 'gatsby';
import React from 'react';
import BlogPost from '../../../components/blog/blogPost';
import Layout from '../../../components/layout';
import Seo from '../../../components/seo';
import TagsDropdown from '../../../components/tagsDropdown';
import TagsList from '../../../components/tagsList';

const BlogsWithTag = ({ data }) => {
  return (
    <Layout>
      <main className="xl:6/12 mx-auto w-10/12 lg:w-9/12">
        <h1 className="mb-11 mt-10 text-center text-xl font-bold capitalize leading-30px lg:mt-20 lg:text-40px">
          Welcome to our Blog
        </h1>

        {/* Tags dropdown */}
        <TagsDropdown />

        {/* Tags list */}
        <TagsList />

        {/* Render each blog post */}
        {data.blogs.nodes.map(
          ({
            id,
            slug,
            postHeaderImage: {
              description: imageDescription,
              gatsbyImageData: heroImage,
            },
            title,
            body: {
              childMarkdownRemark: { excerpt },
            },
            author,
            date,
            metadata: { tags },
          }) => {
            return (
              <BlogPost
                key={id}
                {...{
                  heroImage,
                  imageDescription,
                  title,
                  excerpt,
                  author,
                  date,
                  slug,
                  tags,
                }}
              />
            );
          }
        )}
      </main>

      {/* See More Blogs */}
      <section
        style={{
          background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
        }}
        className="mb-5px py-7 text-center text-base font-medium leading-5 text-white"
      >
        + See more
      </section>

      {/* Subscribe section */}
      <section
        className="text-center text-white"
        style={{
          background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
        }}
      >
        <h2 className="mx-auto w-10/12 pt-34px pb-27px text-xl font-bold">
          Subscribe to our bi-weekly newsletter
        </h2>
        <input
          className="mx-auto mb-14px w-10/12 rounded-full bg-white py-17px pl-23px text-text-medium_grey"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="mx-auto mb-14px w-10/12 rounded-full border-2 border-white py-17px">
          Subscribe
        </button>
        <p className="mx-auto w-10/12 pb-8">
          By clicking the Subscribe button you are agreeing to receive
          occasional email communications from <strong>MyPrayerTimes</strong>.
          We will not share your details with any 3rd parties and you can
          unsubscribe at any time.
        </p>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    blogs: allContentfulBlogPost(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $id } } } }
      }
      limit: 5
      sort: { date: DESC }
    ) {
      totalCount
      nodes {
        id
        slug
        postHeaderImage {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            aspectRatio: 1.205035971
          )
          description
        }
        title
        body {
          childMarkdownRemark {
            excerpt
          }
        }
        author
        date(formatString: "MMM Do, YYYY")
        metadata {
          tags {
            name
          }
        }
      }
    }

    tag: contentfulTag(id: { eq: $id }) {
      contentful_id
      name
    }
  }
`;

export const Head = ({ data }) => {
  return (
    <>
      <Seo pageTitle={`${data.tag.name} | Blog`} />
    </>
  );
};

export default BlogsWithTag;
