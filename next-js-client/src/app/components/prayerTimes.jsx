'use client';

import { useAtom } from 'jotai';
import { prayerTimesAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimes = () => {
  const [prayerTimes] = useAtom(prayerTimesAtom);

  return (
    <>
      {prayerTimes && Object.entries(prayerTimes).length > 0 && (
        <table className="w-full table-auto border-collapse border text-black">
          <thead>
            <tr>
              <th className="border border-b-0 px-4 py-2">Fajr</th>
              <th className="border border-b-0 px-4 py-2">Sunrise</th>
              <th className="border border-b-0 px-4 py-2">Dhuhr</th>
              <th className="border border-b-0 px-4 py-2">Asr</th>
              <th className="border border-b-0 px-4 py-2">Maghrib</th>
              <th className="border border-b-0 px-4 py-2">Isha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.entries(prayerTimes).map(([prayer, time]) => (
                <td key={prayer} className="border border-t-0 px-4 py-2">
                  {time}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default PrayerTimes;
