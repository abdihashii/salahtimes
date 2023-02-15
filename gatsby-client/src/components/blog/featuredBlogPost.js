import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const FeaturedBlogPost = ({
  mobileHeroImage,
  mobileImageDescription,
  desktopFeaturedHeroImage,
  desktopFeaturedImageDescription,
  title,
  excerpt,
  author,
  date,
  slug,
  tags,
}) => {
  return (
    <article className="lg:mx-auto lg:grid lg:w-9/12 lg:grid-cols-2 lg:gap-16">
      <Link className="block" to={`/blog/${slug}/`}>
        <GatsbyImage
          image={mobileHeroImage}
          className="mb-4 lg:!hidden"
          alt={mobileImageDescription}
        />
        <GatsbyImage
          image={desktopFeaturedHeroImage}
          className="mb-4 !hidden lg:!block"
          alt={desktopFeaturedImageDescription}
        />
      </Link>

      <div className="">
        {/* tags */}
        <div className="mb-10px flex flex-row gap-3 lg:w-full">
          {tags.map((tag) => {
            return (
              <p
                key={tag.id}
                className="text-sm font-bold text-green-blog lg:mb-15px lg:text-2xl"
              >
                {tag.name}
              </p>
            );
          })}
        </div>

        {/* title */}
        <Link to={`/blog/${slug}/`}>
          <h2 className="mb-18px text-lg font-medium leading-6 text-text-layout_text underline lg:mb-30px lg:text-40px lg:leading-55px lg:text-green-secondary hover:lg:text-green-dark">
            {title}
          </h2>
        </Link>

        {/* excerpt */}
        <p className="mb-6 text-text-medium_grey lg:leading-7">{excerpt}</p>

        {/* Author and date */}
        <div className="flex flex-row items-center gap-4">
          <span className="h-12 w-12 rounded-full bg-yellow-400"></span>
          <div className="flex flex-col">
            <p className="text-lg text-text-layout_text lg:text-xl">{author}</p>
            <p className="text-sm text-text-medium_grey lg:text-base">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedBlogPost;
