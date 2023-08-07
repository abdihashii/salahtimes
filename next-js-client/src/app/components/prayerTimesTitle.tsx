'use client';

import { useAtom } from 'jotai';
import { inputAtom } from '../atoms/prayerTimesAtoms';

const PrayerTimesTitle = () => {
  const [input] = useAtom(inputAtom);

  return (
    <>
      <h1 className="mx-auto flex w-full flex-col gap-2 text-center text-3xl font-medium md:w-8/12 md:text-5xl">
        <span className="text-2xl font-normal md:text-4xl">
          Prayer times in
        </span>
        {input.label && <span className="text-indigo-700">{input.label}</span>}
      </h1>
    </>
  );
};

export default PrayerTimesTitle;
