import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import TextSection from './textSection';

/* Trending Stores Of The Month */
const TrendingStories = () => {
  const {
    contentfulBlogPosts: { nodes: blogPosts },
  } = useStaticQuery(graphql`
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
    }
  `);

  return (
    <TextSection
      heading={'Must-Read Stories Of The Month'}
      textContent={`Stay informed and inspired with our top-trending stories of the month.`}
    >
      <div className="mt-45px mb-69px text-left">
        {blogPosts.map(
          ({ slug, title, date, postHeaderImage: { gatsbyImageData } }) => {
            return (
              <a
                href={`/blog/${slug}`}
                key={slug}
                className="mb-10 inline-block last:mb-0"
              >
                <GatsbyImage
                  className="mb-30px"
                  image={gatsbyImageData}
                  alt=""
                />
                <p className="mb-10px text-xl font-medium text-text-light_black">
                  {title}
                </p>
                <p className="text-lg text-text-core_values">{date}</p>
              </a>
            );
          },
        )}
      </div>

      <a
        href="/blog"
        className="mx-auto flex w-max flex-row items-center gap-2 rounded-full bg-green-secondary py-3 px-8 text-xs font-semibold text-white"
      >
        <p>Explore Our Blogs</p>
        <RxArrowRight />
      </a>
    </TextSection>
  );
};

export default TrendingStories;
