import { useContext } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';

export const SalahTimes = () => {
  const { debug, input, isLoading, prayerTimes } =
    useContext(SalahTimesContext);

  return (
    <>
      {isLoading ? (
        <progress className="progress is-small is-primary" max="100"></progress>
      ) : (
        <>
          <div className="columns mt-5">
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Fajr
              </p>
              <p className="subtitle is-5">{prayerTimes.Fajr}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Dhuhr
              </p>
              <p className="subtitle is-5">{prayerTimes.Dhuhr}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Asr
              </p>
              <p className="subtitle is-5">{prayerTimes.Asr}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Maghrib
              </p>
              <p className="subtitle is-5">{prayerTimes.Maghrib}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Isha
              </p>
              <p className="subtitle is-5">{prayerTimes.Isha}</p>
            </div>
          </div>

          {debug && (
            <div>
              <pre>{JSON.stringify(input, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </>
  );
};
