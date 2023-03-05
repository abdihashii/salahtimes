import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const TagsList = () => {
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

  const blogPathname =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className="hidden text-base lg:mb-20 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:uppercase">
      <Link
        className={`rounded-full border-2 border-green-secondary bg-white px-20px py-10px font-medium text-green-secondary hover:border-green-dark hover:bg-green-dark hover:text-white
        ${blogPathname === '/blog/' ? 'bg-green-secondary text-white' : ''}
        `}
        to="/blog/"
      >
        View all
      </Link>
      {tags.map(({ name, id, contentful_id }) => {
        const tagPathname = `/blog/tag/${contentful_id}/`;

        return (
          <Link
            className={`rounded-full border-2 border-green-secondary px-20px py-10px font-medium text-green-secondary hover:border-green-dark hover:bg-green-dark hover:text-white
            ${
              blogPathname === tagPathname
                ? 'bg-green-secondary text-white'
                : ''
            }`}
            key={id}
            to={tagPathname}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default TagsList;
