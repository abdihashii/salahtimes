'use client';

import { useAtom } from 'jotai';
import { inputAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimesTitle = () => {
  const [input] = useAtom(inputAtom);

  return (
    <>
      <h1 className="mx-auto flex w-full flex-col gap-2 text-center text-3xl font-medium lg:w-8/12 lg:text-5xl">
        <span className="text-2xl font-normal lg:text-4xl">
          Prayer times in
        </span>
        {input.label ? (
          <span className="text-indigo-700">{input.label}</span>
        ) : (
          <span className="text-indigo-700">
            <span className="animate-pulse">Loading</span>
          </span>
        )}
      </h1>
    </>
  );
};

export default PrayerTimesTitle;
