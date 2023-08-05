'use client';

import { useAtom } from 'jotai';
import { inputAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimesTitle = () => {
  const [input] = useAtom(inputAtom);

  return (
    <>
      <h1 className="mx-auto w-8/12 text-center text-5xl font-medium">
        Prayer times in "<span className="text-indigo-700">{input.label}</span>"
      </h1>
    </>
  );
};

export default PrayerTimesTitle;
