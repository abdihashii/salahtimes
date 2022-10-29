import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import { PrayerTimeCard } from './prayerTimeCard';

export const PrayerTimes = () => {
  const { debug, input, isLoading, prayerTimes, closestPrayerTime } =
    useContext(PrayerTimesContext);

  return (
    <>
      {isLoading ? (
        <progress
          className="progress is-small is-primary mr-0 mb-38px"
          max="100"
        ></progress>
      ) : (
        // <h1>Loading...</h1>
        <>
          <div className="mb-38px flex flex-col items-center gap-1.125 lg:flex-row">
            {Object.entries(prayerTimes).map(([salah, time]) => {
              return <PrayerTimeCard {...{ salah, time }} />;
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
