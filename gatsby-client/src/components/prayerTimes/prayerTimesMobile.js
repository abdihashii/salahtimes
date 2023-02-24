import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { PrayerTimeCard } from './prayerTimeCard';

export const PrayerTimesMobile = ({ className }) => {
  const { debug, input, isLoading, prayerTimes, closestPrayerTime } =
    useContext(PrayerTimesContext);

  return (
    <div className={`${className}`}>
      <div className="mx-auto mb-39px grid w-11/12 grid-cols-3 items-center gap-y-22px gap-x-15px">
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
    </div>
  );
};
