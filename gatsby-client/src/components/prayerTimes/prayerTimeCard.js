import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { gradient } from './loadinganimation.module.css';

export const PrayerTimeCard = ({ salah, time, isLoading }) => {
  const { closestPrayerTime } = useContext(PrayerTimesContext);

  return (
    <div className={`rounded-5px bg-green-secondary py-1`}>
      <div
        className={`flex flex-col items-center rounded-5px py-3 text-black last:border-none ${
          isLoading
            ? `${gradient}`
            : `${
                closestPrayerTime.closestPrayer === salah
                  ? 'bg-green-dark !text-white'
                  : 'bg-white'
              }`
        }`}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            <p className="mb-5px text-lg font-medium">{time}</p>
            <p className="text-sm">{salah}</p>
          </>
        )}
      </div>
    </div>
  );
};
