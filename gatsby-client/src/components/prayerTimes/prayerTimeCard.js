import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { gradient } from './loadinganimation.module.css';

export const PrayerTimeCard = ({ salah, time, isLoading }) => {
  const { closestPrayerTime } = useContext(PrayerTimesContext);

  return (
    <>
      <div
        className={`flex w-full items-center border-b border-black px-6 py-5 text-black first:rounded-t-20px last:rounded-b-20px last:border-none lg:flex lg:h-151px lg:w-229px lg:flex-col lg:justify-center lg:rounded-20px lg:border-0 lg:p-0 ${
          isLoading
            ? `${gradient}`
            : `${
                closestPrayerTime.closestPrayer === salah
                  ? 'bg-green-dark !text-white lg:shadow-darkGreen'
                  : 'bg-white lg:shadow-gray'
              }`
        }`}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            <p className="text-24px font-semibold uppercase">{salah}</p>
            <p className="flex-1 lg:hidden"></p>
            <p className="text-base font-bold lg:font-normal">{time}</p>
          </>
        )}
      </div>
    </>
  );
};
