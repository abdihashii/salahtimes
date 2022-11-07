const React = require('react');
// const Layout = require('./src/components/layout');

const HeadComponents = [
  <script
    key={1}
    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}&libraries=places`}
  ></script>,
  <script
    key={2}
    rel="preload"
    as="font"
    src="https://kit.fontawesome.com/f8b711175a.js"
    crossOrigin="anonymous"
  ></script>,
];

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout >{element}</Layout>;
// };