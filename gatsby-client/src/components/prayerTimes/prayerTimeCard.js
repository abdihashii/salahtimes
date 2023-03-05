import React, { useContext } from 'react';
import { RxArrowDown, RxArrowUp } from 'react-icons/rx';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { gradient } from './loadinganimation.module.css';

export const PrayerTimeCard = ({ salah, time, isLoading }) => {
  const { closestPrayerTime } = useContext(PrayerTimesContext);

  const isSunrise = salah === 'Shuruq';
  const isSunset = salah === 'Maghrib';

  return (
    <div>
      <p className="mb-7px flex flex-row items-center justify-center text-13px">
        {isSunrise ? (
          <RxArrowUp className="text-green-secondary" />
        ) : isSunset ? (
          <RxArrowDown className="text-green-secondary" />
        ) : (
          '\u00A0'
        )}
        {isSunrise ? 'Sunrise' : isSunset ? 'Sunset' : ''}
      </p>

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
    </div>
  );
};
