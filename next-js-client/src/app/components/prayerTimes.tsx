'use client';

import { useAtom } from 'jotai';
import { prayerTimesAtom } from '../atoms/prayerTimesAtoms';
import { fetchPrayerTimesErrorAtom } from '../atoms/errorAtoms';

const PrayerTimes = () => {
  const [prayerTimes] = useAtom(prayerTimesAtom);
  const [fetchPrayerTimesError] = useAtom(fetchPrayerTimesErrorAtom);

  return (
    <>
      {fetchPrayerTimesError ? (
        <p className="mx-auto w-full text-center text-red-500 lg:w-8/12">
          {fetchPrayerTimesError.error}
        </p>
      ) : (
        prayerTimes &&
        Object.entries(prayerTimes).length > 0 && (
          <div className="mx-auto flex w-full flex-col rounded border border-border-gray text-center lg:w-8/12">
            {/* Prayers row */}
            <div className="flex flex-row text-sm lg:text-base">
              <p className="w-2/12 border-r border-border-gray py-2 font-bold">
                Fajr
              </p>
              <p className="w-2/12 border-r border-border-gray py-2 font-bold">
                Sunrise
              </p>
              <p className="w-2/12 border-r border-border-gray py-2 font-bold">
                Dhuhr
              </p>
              <p className="w-2/12 border-r border-border-gray py-2 font-bold">
                Asr
              </p>
              <p className="w-2/12 border-r border-border-gray py-2 font-bold">
                Maghrib
              </p>
              <p className="w-2/12 border-border-gray py-2 font-bold">Isha</p>
            </div>

            {/* Times row */}
            <div className="flex flex-row">
              {Object.entries(prayerTimes).map(([prayer, time]) => (
                <p
                  key={prayer}
                  className="w-2/12 border-r border-border-gray py-2 last:border-r-0"
                >
                  {time}
                </p>
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default PrayerTimes;
