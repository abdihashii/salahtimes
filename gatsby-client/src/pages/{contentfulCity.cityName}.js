import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PrayerTimesSection from '../components/prayerTimes';
import AboutMPTHomeSection from '../components/aboutMPTHomeSection';
import TrendingStories from '../components/trendingStories';

const CityPrayerTimes = ({
  data: {
    city: { cityName, coordinates },
  },
}) => {
  return (
    <Layout transparentNav={true}>
      <PrayerTimesSection {...{ cityName, coordinates }} />

      <AboutMPTHomeSection />

      <TrendingStories />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    city: contentfulCity(id: { eq: $id }) {
      cityName
      coordinates {
        lat
        lon
      }
    }
  }
`;

export const Head = ({ data }) => {
  return <Seo pageTitle={`Prayer times in ${data.city.cityName}`} />;
};

export default CityPrayerTimes;
