import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const BlogPost = ({
  mobileHeroImage,
  mobileImageDescription,
  desktopHeroImage,
  desktopImageDescription,
  title,
  excerpt,
  author,
  date,
  slug,
  tags,
}) => {
  return (
    <article className="mb-71px">
      <a className="block" href={`/blog/${slug}`}>
        <GatsbyImage
          image={mobileHeroImage}
          className="mb-4 lg:!hidden"
          alt={mobileImageDescription}
        />
        <GatsbyImage
          image={desktopHeroImage}
          className="mb-4 !hidden lg:!block"
          alt={desktopImageDescription}
        />
        {/* tags */}
        <div className="mb-10px flex flex-row gap-3 lg:hidden">
          {tags.map((tag) => {
            return (
              <p key={tag.id} className="text-sm font-bold text-green-blog">
                {tag.name}
              </p>
            );
          })}
        </div>
        {/* title */}
        <h2 className="mb-18px text-lg font-medium leading-6 text-text-layout_text underline">
          {title}
        </h2>
        {/* excerpt */}
        <p className="mb-6 text-text-medium_grey">{excerpt}</p>
        {/* Author and date */}
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

export default BlogPost;
