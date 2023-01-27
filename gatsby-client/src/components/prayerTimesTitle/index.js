import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const PrayerTimesTitle = () => {
  const { input } = useContext(PrayerTimesContext);

  return (
    <h1 className="mx-auto mt-28 w-10/12 text-4xl font-medium leading-45px">
      Prayer times in "<span className="text-green">{input.selectedCity}</span>"
    </h1>
  );
};

export default PrayerTimesTitle;
