import { useContext } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';
import './SalahTimes.scss';

export const SalahTimes = () => {
  const { debug, input, isLoading, prayerTimes, closestPrayerTime } =
    useContext(SalahTimesContext);

  return (
    <>
      {isLoading ? (
        <progress className="progress is-small is-primary" max="100"></progress>
      ) : (
        <>
          <div className="columns is-desktop mt-5">
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Fajr
              </p>
              <p
                className={`subtitle is-5 ${
                  closestPrayerTime.closestPrayer === 'Fajr'
                    ? 'closestPrayerTime'
                    : ''
                }`}
              >
                {prayerTimes.Fajr}
              </p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Sunrise
              </p>
              <p
                className={`subtitle is-5 ${
                  closestPrayerTime.closestPrayer === 'Sunrise'
                    ? 'closestPrayerTime'
                    : ''
                }`}
              >
                {prayerTimes.Sunrise}
              </p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Dhuhr
              </p>
              <p
                className={`subtitle is-5 ${
                  closestPrayerTime.closestPrayer === 'Dhuhr'
                    ? 'closestPrayerTime'
                    : ''
                }`}
              >
                {prayerTimes.Dhuhr}
              </p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Asr
              </p>
              <p
                className={`subtitle is-5 ${
                  closestPrayerTime.closestPrayer === 'Asr'
                    ? 'closestPrayerTime'
                    : ''
                }`}
              >
                {prayerTimes.Asr}
              </p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Maghrib
              </p>
              <p
                className={`subtitle is-5 ${
                  closestPrayerTime.closestPrayer === 'Maghrib'
                    ? 'closestPrayerTime'
                    : ''
                }`}
              >
                {prayerTimes.Maghrib}
              </p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Isha
              </p>
              <p
                className={`subtitle is-5 ${
                  closestPrayerTime.closestPrayer === 'Isha'
                    ? 'closestPrayerTime'
                    : ''
                }`}
              >
                {prayerTimes.Isha}
              </p>
            </div>
          </div>

          {debug && (
            <>
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
