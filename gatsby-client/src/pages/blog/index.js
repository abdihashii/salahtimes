import { graphql } from 'gatsby';
import React from 'react';
import BlogPost from '../../components/blog/blogPost';
import FeaturedBlogPost from '../../components/blog/featuredBlogPost';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SubscribeToNewsletter from '../../components/subscribeToNewsletter';
// import TagsDropdown from '../../components/tagsDropdown';
// import TagsList from '../../components/tagsList';

const AllBlogs = ({ data: { blogs } }) => {
  return (
    <Layout>
      <main className="mx-auto w-10/12 lg:w-full">
        <h1 className="mb-11 mt-10 text-center text-xl font-bold capitalize leading-30px lg:mt-20 lg:text-40px">
          Welcome to our Blog
        </h1>

        {/* Tags dropdown */}
        {/* <TagsDropdown /> */}

        {/* Tags list */}
        {/* <TagsList /> */}

        {/* Render each blog post */}
        <section className="mb-71px lg:bg-green-secondary lg:bg-opacity-5 lg:py-90px">
          <FeaturedBlogPost
            mobileHeroImage={blogs.nodes[0].mobile.gatsbyImageData}
            mobileImageDescription={blogs.nodes[0].mobile.description}
            desktopFeaturedHeroImage={
              blogs.nodes[0].desktopFeatured.gatsbyImageData
            }
            desktopFeaturedImageDescription={
              blogs.nodes[0].desktopFeatured.description
            }
            title={blogs.nodes[0].title}
            excerpt={blogs.nodes[0].intro.childMarkdownRemark.excerpt}
            author={blogs.nodes[0].author}
            date={blogs.nodes[0].date}
            slug={blogs.nodes[0].slug}
            // tags={blogs.nodes[0].metadata.tags}
          />
        </section>
        <section className="lg:mx-auto lg:grid lg:w-9/12 lg:grid-cols-3 lg:gap-8">
          {blogs.nodes.map(
            (
              {
                slug,
                mobile: {
                  gatsbyImageData: mobileHeroImage,
                  description: mobileImageDescription,
                },
                desktop: {
                  gatsbyImageData: desktopHeroImage,
                  description: desktopImageDescription,
                },
                title,
                intro: {
                  childMarkdownRemark: { excerpt },
                },
                author,
                date,
                // metadata: { tags },
              },
              index,
            ) => {
              return (
                index > 0 && (
                  <BlogPost
                    {...{
                      mobileHeroImage,
                      mobileImageDescription,
                      desktopHeroImage,
                      desktopImageDescription,
                      title,
                      excerpt,
                      author,
                      date,
                      slug,
                      // tags,
                      index,
                    }}
                  />
                )
              );
            },
          )}
        </section>
      </main>

      {/* See More Blogs */}
      <section
        style={{
          background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
        }}
        className="mb-5px py-7 text-center text-base font-medium leading-5 text-white lg:hidden"
      >
        + See more
      </section>
      <button className="hidden lg:mx-auto lg:mb-24 lg:block lg:rounded-full lg:border-2 lg:border-green-secondary lg:bg-white lg:py-4 lg:px-10 lg:font-semibold lg:text-green-secondary lg:hover:bg-green-secondary lg:hover:text-white">
        See more
      </button>

      {/* Subscribe section */}
      <SubscribeToNewsletter />
    </Layout>
  );
};

export const data = graphql`
  query {
    blogs: allContentfulBlogPost(sort: { date: DESC }, limit: 7) {
      totalCount
      nodes {
        id
        slug
        mobile: postHeaderImage {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            aspectRatio: 1.205035971
          )
          description
        }
        desktop: postHeaderImage {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            aspectRatio: 1.771028037383178
          )
          description
        }
        desktopFeatured: postHeaderImage {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            aspectRatio: 1.508816120
          )
          description
        }
        intro {
          childMarkdownRemark {
            excerpt
          }
        }
        title
        author
        date(formatString: "MMM Do, YYYY")
        metadata {
          tags {
            name
          }
        }
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
