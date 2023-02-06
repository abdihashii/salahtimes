import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({
  heroImage,
  imageDescription,
  title,
  excerpt,
  author,
  date,
  slug,
}) => {
  return (
    <article className="mb-71px">
      <a className="block" href={`/blog/${slug}`}>
        <GatsbyImage
          image={heroImage}
          className="mb-6"
          alt={imageDescription}
        />
        <h2 className="mb-18px font-bold text-green-blog">{title}</h2>
        <p className="mb-6 text-text-medium_grey">{excerpt}</p>
        <div className="flex flex-row items-center gap-4">
          <span className="h-11 w-11 rounded-full bg-yellow-400"></span>
          <div className="flex flex-col">
            <p className="text-lg text-text-layout_text">{author}</p>
            <p className="text-sm text-text-medium_grey">{date}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

const AllBlogs = ({ data: { blogs } }) => {
  return (
    <Layout>
      <main className="mx-auto w-10/12">
        <h1 className="mb-11 mt-10 text-center text-xl font-bold leading-30px">
          Welcome to our Blog
        </h1>
        {blogs.nodes.map(
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
                }}
              />
            );
          },
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

export const data = graphql`
  query {
    blogs: allContentfulBlogPost(sort: { date: DESC }, limit: 5) {
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
      }
    }
  }
`;

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'Blog'} />
    </>
  );
};

export default AllBlogs;
