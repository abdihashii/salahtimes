import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { PrayerTimeCard } from './prayerTimeCard';

export const PrayerTimes = () => {
  const { debug, input, isLoading, prayerTimes, closestPrayerTime } =
    useContext(PrayerTimesContext);

  return (
    <>
      {isLoading ? (
        <p className="mt-56px mb-38px flex items-start justify-center">
          Loading...
        </p>
      ) : (
        <>
          <div className="mb-51px flex flex-col items-center gap-1.125 lg:flex-row">
            {Object.entries(prayerTimes).map(([salah, time]) => {
              return <PrayerTimeCard key={salah} {...{ salah, time }} />;
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
      )}
    </>
  );
};
