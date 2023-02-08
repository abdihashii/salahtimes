import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const TagsDropdown = () => {
  const blogPathname =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const {
    allContentfulTag: { nodes: tags },
  } = useStaticQuery(graphql`
    query {
      allContentfulTag(sort: { name: ASC }) {
        nodes {
          name
          id
          contentful_id
        }
      }
    }
  `);

  const handleTagChange = ({ target: { value: slug } }) => {
    if (typeof window !== 'undefined') {
      window.location.href = slug;
    }
  };

  return (
    <select
      onChange={handleTagChange}
      className="mb-25px w-full rounded-full border-2 border-border-dropdown_grey bg-white py-3 pl-30px text-base lg:hidden"
      // value={blogPathname} for some reason if I comment this out the text changes
      // in the dropdown
    >
      <option value={`/blog/`}>View all</option>
      {tags.map(({ name: tagName, id, contentful_id }) => {
        const tagPathname = `/blog/tag/${contentful_id}/`.replace(
          /[A-Z]/g,
          (m) => '-' + m.toLowerCase(),
        );

        console.log(`blogPathname: ${blogPathname}`);
        console.log(`tagPathname: ${tagPathname}`);

        return (
          <option
            key={id}
            value={tagPathname}
            selected={blogPathname === tagPathname}
          >
            {tagName}
          </option>
        );
      })}
    </select>
  );
};

export default TagsDropdown;
