import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { isPrayerTimeBeforeCurrentTime } from '../../controllers/prayerTimesController';
import { pulsatingCircle } from './pulsatinganimation.module.scss';
import { RxArrowDown, RxArrowUp } from 'react-icons/rx';

const Circle = ({ firstIndex, lastIndex, circleStatus: status, className }) => {
  const circleStatus = {
    empty: 'h-18px w-18px bg-bg-dark_grey mb-19px mt-3px',
    full: `${
      firstIndex ? '-ml-10px' : lastIndex ? '-mr-10px' : ''
    } h-6 w-6 border-green-secondary bg-green-secondary mb-17px ${pulsatingCircle}`,
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
    <div className={`mx-auto w-9/12 text-center xl:w-7/12 ${className}`}>
      <div className="relative flex flex-row justify-between">
        {/* The horizontal line */}
        <hr className="absolute top-122px z-0 w-full border" />

        {/* Mapping over the prayer times for times and salah */}
        {Object.entries(prayerTimes).map(([salah, time], index) => {
          const isSunrise = salah === 'Shuruq';
          const isSunset = salah === 'Maghrib';

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

          const firstIndex = index === 0;
          const lastIndex = index === Object.entries(prayerTimes).length - 1;

          return (
            <div
              className={`flex flex-col ${
                firstIndex
                  ? 'items-start'
                  : lastIndex
                  ? 'items-end'
                  : 'items-center'
              }`}
            >
              <p className="mb-7px flex flex-row items-center justify-center gap-2 text-lg text-green">
                {isSunrise ? (
                  <RxArrowUp />
                ) : isSunset ? (
                  <RxArrowDown />
                ) : (
                  '\u00A0'
                )}
                {isSunrise ? 'Sunrise' : isSunset ? 'Sunset' : ''}
              </p>

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
              <Circle {...{ firstIndex, lastIndex, circleStatus }} />
              <p>{salahMap[salah]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
