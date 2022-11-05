import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { gradient } from './loadinganimation.module.css';

export const PrayerTimeCard = ({ salah, time, isLoading }) => {
  const { closestPrayerTime } = useContext(PrayerTimesContext);

  return (
    <>
      <div
        className={`flex h-151px w-11/12 flex-col items-center justify-center rounded-20px md:w-229px ${
          isLoading
            ? `${gradient}`
            : `${
                closestPrayerTime.closestPrayer === salah
                  ? 'bg-green-dark text-white shadow-darkGreen'
                  : 'bg-white shadow-gray'
              }`
        }`}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            <p className="text-24px font-semibold uppercase">{salah}</p>
            <p className="text-base font-normal">{time}</p>
          </>
        )}
      </div>
    </>
  );
};
