import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { isPrayerTimeBeforeCurrentTime } from '../../controllers/prayerTimesController';

const Circle = ({ status, className }) => {
  const circleStatus = {
    empty: 'h-18px w-18px bg-bg-dark_grey mb-19px mt-3px',
    full: 'h-6 w-6 border-green-secondary bg-green-secondary mb-17px',
    completed: 'h-18px w-18px bg-bg-light_blue mb-19px mt-3px',
  };

  return (
    <div
      className={`z-10 rounded-full border-3px border-white ${className} ${circleStatus[status]}`}
    ></div>
  );
};

export const PrayerTimesDesktop = ({ className }) => {
  const { isLoading, prayerTimes, closestPrayerTime } =
    useContext(PrayerTimesContext);

  const salahMap = {
    Fajr: 'Dawn',
    Shuruq: 'Morning',
    Dhuhr: 'Noon',
    Asr: 'Afternoon',
    Maghrib: 'Evening',
    Isha: 'Night',
  };

  return (
    <div className={`mx-auto w-9/12 text-center ${className}`}>
      <div className="relative flex flex-row justify-between">
        <hr className="absolute top-5.5rem z-0 w-full border" />
        {Object.entries(prayerTimes).map(([salah, time], index) => {
          let isBefore = false;
          if (time && closestPrayerTime.closestPrayerTime) {
            isBefore = isPrayerTimeBeforeCurrentTime(
              time,
              closestPrayerTime.closestPrayerTime,
            );
          }

          const circleStatus =
            closestPrayerTime.closestPrayer === salah
              ? 'full'
              : isBefore
              ? 'completed'
              : 'empty';

          return (
            <div
              className={`flex flex-col ${
                index === 0
                  ? 'items-start'
                  : index === Object.entries(prayerTimes).length - 1
                  ? 'items-end'
                  : 'items-center'
              }`}
            >
              {!isLoading ? (
                <p className="mb-2px text-19px font-semibold leading-23px">
                  {time}
                </p>
              ) : (
                <p className="mb-2px text-19px font-semibold leading-23px">
                  Loading...
                </p>
              )}
              {!isLoading ? (
                <p
                  className="mb-19px text-14px font-normal leading-8"
                  style={{ color: '#e9e9e9' }}
                >
                  {salah}
                </p>
              ) : (
                <p
                  className="mb-19px text-14px font-normal leading-8"
                  style={{ color: '#e9e9e9' }}
                >
                  Loading...
                </p>
              )}
              <Circle status={circleStatus} className="" />
              <p>{salahMap[salah]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
