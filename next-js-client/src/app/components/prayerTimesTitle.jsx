'use client';

import { useAtom } from 'jotai';
import { inputAtom, prayerTimesAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimesTitle = () => {
  const [input] = useAtom(inputAtom);
  // const [prayerTimes] = useAtom(prayerTimesAtom);

  return (
    <>
      <h1 className="mx-auto my-10 w-full text-5xl font-medium text-indigo-900">
        Prayer times in "<span className="text-indigo-700">{input.label}</span>"
      </h1>
    </>
  );
};

export default PrayerTimesTitle;
