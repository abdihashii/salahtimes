import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "logo-single-cropped.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `);

  return (
    <div className="mx-auto mt-6 mb-12 flex w-11/12 flex-row items-center justify-between lg:my-0 lg:w-full lg:justify-center">
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="My Prayer Times Logo"
        className="w-1/6 lg:mx-auto lg:hidden lg:w-1/5"
      />
      <StaticImage
        src="../images/logo.png"
        alt="My Prayer Times Logo"
        placeholder="tracedSVG"
        className="hidden lg:mx-auto lg:!flex lg:w-2/5 lg:justify-center"
      />
      <i className="fa-solid fa-bars fa-2xl pointer-events-auto cursor-pointer text-green-dark lg:hidden"></i>
    </div>
  );
};

export default NavBar;
