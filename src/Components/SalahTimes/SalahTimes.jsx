import { useContext } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';
import { SalahCard } from './SalahCard';

export const SalahTimes = () => {
  const { debug, input, isLoading, prayerTimes, closestPrayerTime } =
    useContext(SalahTimesContext);

  return (
    <>
      {isLoading ? (
        <progress
          className="progress is-small is-primary mr-0 mb-38px"
          max="100"
        ></progress>
      ) : (
        <>
          <div className="mb-38px flex flex-row gap-1.125 ">
            {Object.entries(prayerTimes).map(([salah, time]) => {
              return <SalahCard {...{ salah, time }} />;
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
