import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../../components/layout';
import Seo from '../../../components/seo';
import TagsDropdown from '../../../components/tagsDropdown';

const BlogsWithTag = ({ data }) => {
  return (
    <Layout>
      <p>{data.tag.name}</p>

      <TagsDropdown />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
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
