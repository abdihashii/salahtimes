'use client';

import { useAtom } from 'jotai';
import { inputAtom, prayerTimesAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimesTitle = () => {
  const [input] = useAtom(inputAtom);
  const [prayerTimes] = useAtom(prayerTimesAtom);

  return (
    <>
      <h1 className="mx-auto my-10 w-full text-4xl font-medium text-indigo-900 sm:my-20 sm:w-10/12 sm:text-6xl">
        Prayer times in "
        <span className="text-indigo-700">{input.city_name}</span>"
      </h1>
      {/* <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        {JSON.stringify(input, null, 2)}
      </pre> */}

      {/* <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        {JSON.stringify(prayerTimes, null, 2)}
      </pre> */}
    </>
  );
};

export default PrayerTimesTitle;
