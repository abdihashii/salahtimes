import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { gradient } from './loadinganimation.module.css';

export const PrayerTimeCard = ({ salah, time, isLoading }) => {
  const { closestPrayerTime } = useContext(PrayerTimesContext);

  return (
    <>
      <div
        className={`text-white lg:text-black lg:flex lg:h-151px w-full flex items-center lg:flex-col lg:justify-center rounded-20px lg:w-229px ${
          isLoading
            ? `${gradient}`
            : `${
                closestPrayerTime.closestPrayer === salah
                  ? 'lg:bg-green-dark lg:!text-white lg:shadow-darkGreen'
                  : 'lg:bg-white lg:shadow-gray'
              }`
        }`}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            <p className="text-24px font-semibold uppercase">{salah}</p>
            <p className='flex-1 lg:hidden'></p>
            <p className="text-base font-normal">{time}</p>
          </>
        )}
      </div>
    </>
  );
};
