'use client';

import { useAtom, atom } from 'jotai';
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

const showPredictionsAtom = atom(true);

const inputAtom = atom({
  city_name: 'Aurora, IL',
});

const prayerTimesAtom = atom({
  fajr: '4:30 AM',
  sunrise: '5:30 AM',
  dhuhr: '12:30 PM',
  asr: '3:30 PM',
  maghrib: '6:30 PM',
  isha: '8:30 PM',
});

const PrayerTimesTitle = () => {
  const [input] = useAtom(inputAtom);

  return (
    <>
      <h1 className="mx-auto mb-20 mt-52 w-10/12 text-6xl font-medium leading-10 text-black">
        Prayer times in "
        <span className="text-green-700">{input.city_name}</span>"
      </h1>
      <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        {JSON.stringify(input, null, 2)}
      </pre>
    </>
  );
};

const LocationSelector = () => {
  const [input, setInput] = useAtom(inputAtom);

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: process.env.NEXT_PUBLIC_PLACES_API_KEY,
  });

  return (
    <form className="mb-8 flex flex-col items-center justify-center">
      <input
        className="rounded-4px mb-1 h-14 w-1/3 border border-gray-300 px-5 text-black focus:border-green-700 focus:outline-none"
        value={input.city_name}
        placeholder="Debounce 500 ms"
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
          setInput({ city_name: evt.target.value });
        }}
        loading={isPlacePredictionsLoading}
      />

      {/* Place predictions */}
      {placePredictions.length > 0 && (
        <div
          style={
            {
              // width: '200px',
              // height: '200px',
            }
          }
          className="rounded-4px mb-5 flex w-1/3 list-none flex-col overflow-y-scroll border border-gray-300 bg-white text-black focus:outline-none"
        >
          {!isPlacePredictionsLoading &&
            placePredictions.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setInput({ city_name: item.description });
                  placePredictions.length = 0;
                }}
                className="w-full cursor-pointer text-black hover:bg-gray-100"
              >
                {item.description}
              </li>
            ))}
        </div>
      )}

      <button
        type="submit"
        className="gap-10px rounded-4px py-19px mt-5 flex h-14 w-1/3 flex-row items-center justify-center rounded-md bg-green-800 px-9 font-medium hover:bg-green-700"
      >
        My Prayer Times
      </button>
    </form>
  );
};

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

export default function Home() {
  return (
    <section
      className="shadow-bg_layer mb-14 flex min-h-screen flex-col bg-cover bg-no-repeat text-center text-white"
      // style={{
      //   backgroundImage: `url(${masjidBackground})`,
      // }}
    >
      <PrayerTimesTitle />

      <LocationSelector />

      {/* <CurrentTime /> */}

      <PrayerTimes />
    </section>
  );
}
