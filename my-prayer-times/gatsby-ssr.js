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
  <link
    key={3}
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossOrigin="anonymous"
  />,
];

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout >{element}</Layout>;
// };
