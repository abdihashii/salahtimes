import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { PrayerTimeCard } from './prayerTimeCard';

export const PrayerTimes = () => {
  const { debug, input, isLoading, prayerTimes, closestPrayerTime } =
    useContext(PrayerTimesContext);

  return (
    <>
      <div className="mx-auto mb-51px flex flex-col items-center gap-1.125 lg:flex-row rounded-20px w-11/12 p-6 lg:p-0 lg:w-full bg-green-dark lg:bg-transparent">
        {Object.entries(prayerTimes).map(([salah, time]) => {
          return (
            <PrayerTimeCard
              key={salah}
              {...{ salah, time }}
              isLoading={isLoading}
            />
          );
        })}
      </div>

      {debug && (
        <>
          <div>
            <pre>{JSON.stringify(prayerTimes, null, 2)}</pre>
          </div>
          <div>
            <pre>{JSON.stringify(input, null, 2)}</pre>
          </div>
          <div>
            <pre>{JSON.stringify(closestPrayerTime, null, 2)}</pre>
          </div>
        </>
      )}
    </>
  );
};
