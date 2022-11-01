import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

export const PrayerTimeCard = ({ salah, time }) => {
  const { closestPrayerTime } = useContext(PrayerTimesContext);

  return (
    <>
      <div
        className={`flex h-151px w-11/12 flex-col items-center justify-center rounded-20px md:w-229px  ${
          closestPrayerTime.closestPrayer === salah
            ? 'bg-green-dark text-white shadow-darkGreen'
            : 'bg-white shadow-gray'
        }`}
      >
        <p className="text-24px font-semibold uppercase">{salah}</p>
        <p className="text-base font-normal">{time}</p>
      </div>
    </>
  );
};
