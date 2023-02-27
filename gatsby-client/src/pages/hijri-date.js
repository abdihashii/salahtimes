import React from 'react';
import useHijriDate from '../hooks/useHijriDate';
import Layout from '../components/layout';
import Seo from '../components/seo';

const HijriDate = () => {
  const {
    hijriDate: { hijriMonth: month, day, year },
    todaysDate,
  } = useHijriDate();

  return (
    <Layout>
      <h1>
        {month} {day}, {year}
      </h1>
      <h2>Today's Gregorian Date: {todaysDate}</h2>
    </Layout>
  );
};

export const Head = () => {
  return <Seo pageTitle={'Hijri Date'} />;
};

export default HijriDate;
