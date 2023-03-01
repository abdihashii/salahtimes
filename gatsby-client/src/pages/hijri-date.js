import React from 'react';
import useHijriDate from '../hooks/useHijriDate';
import Layout from '../components/layout';
import Seo from '../components/seo';

const HijriDate = () => {
  const {
    hijriDate: { hijriMonth: month, day, year },
    gregorianDate,
  } = useHijriDate();

  return (
    <Layout>
      <main className="text-center font-medium">
        <h1 className="mb-22px mt-10 text-32px lg:mt-6 lg:mb-30px lg:pt-16 lg:text-6xl">
          {month} {day}, {year}
        </h1>
        <h2 className="text-lg lg:text-xl">
          Today's Gregorian Date: {gregorianDate}
        </h2>
      </main>
    </Layout>
  );
};

export const Head = () => {
  return <Seo pageTitle={'Hijri Date'} />;
};

export default HijriDate;
