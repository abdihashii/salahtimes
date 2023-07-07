'use client';

import { useAtom, atom } from 'jotai';

const inputAtom = atom({
  city_name: 'Aurora, IL',
});

const prayerTimesAtom = atom({
  fajr: '',
  sunrise: '',
  dhuhr: '',
  asr: '',
  maghrib: '',
  isha: '',
});

const PrayerTimesTitle = () => {
  const [input, setInput] = useAtom(inputAtom);

  return (
    <h1 className="text-black mx-auto w-10/12 font-medium leading-10 mt-52 mb-20 text-6xl">
      Prayer times in "<span className="text-green-700">{input.city_name}</span>
      "
    </h1>
  );
};

const DesktopLocationSelector = () => {
  return (
    <form className="mb-8 flex flex-col items-center justify-center">
      <input
        type="text"
        className="w-1/3 h-14 rounded-md border-2 border-black px-5 py-3 text-black font-medium"
      />

      <button
        type="submit"
        className="mt-5 flex w-1/3 h-14 rounded-md flex-row items-center justify-center gap-10px rounded-4px bg-green-800 px-9 py-19px font-medium hover:bg-green-700"
      >
        My Prayer Times
      </button>
    </form>
  );
};

export default function Home() {
  return (
    <section
      className="mb-14 flex min-h-screen flex-col bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
      // style={{
      //   backgroundImage: `url(${masjidBackground})`,
      // }}
    >
      <PrayerTimesTitle />

      <DesktopLocationSelector />

      {/* <CurrentTime /> */}

      {/* <PrayerTimesDesktop className="!hidden lg:mb-8 lg:!block" /> */}
    </section>
  );
}
