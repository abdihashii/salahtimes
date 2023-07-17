'use client';

import { useAtom } from 'jotai';
import { prayerTimesAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimes = () => {
  const [prayerTimes] = useAtom(prayerTimesAtom);

  return (
    <div className="flex flex-row items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-10 text-black">Fajr</h2>
        <p className="text-2xl font-medium leading-10 text-black">
          {prayerTimes.fajr}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-10 text-black">Sunrise</h2>
        <p className="text-2xl font-medium leading-10 text-black">
          {prayerTimes.sunrise}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-10 text-black">Dhuhr</h2>
        <p className="text-2xl font-medium leading-10 text-black">
          {prayerTimes.dhuhr}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-10 text-black">Asr</h2>
        <p className="text-2xl font-medium leading-10 text-black">
          {prayerTimes.asr}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-10 text-black">Maghrib</h2>
        <p className="text-2xl font-medium leading-10 text-black">
          {prayerTimes.maghrib}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-10 text-black">Isha</h2>
        <p className="text-2xl font-medium leading-10 text-black">
          {prayerTimes.isha}
        </p>
      </div>
    </div>
  );
};

export default PrayerTimes;
