import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import {
  inputAtom,
  coordinatesAtom,
  prayerTimesAtom,
  locationLoadingAtom,
} from '../atoms/prayerTimesAtoms';
import {
  getUserGeolocation,
  getPrayerTimesFromAPI,
} from '../utils/prayerTimes';
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

const LocationSelector = () => {
  const [input, setInput] = useAtom(inputAtom);
  const [coordinates, setCoordinates] = useAtom(coordinatesAtom);
  const [locationLoading, setLocationLoading] = useAtom(locationLoadingAtom);
  const [, setPrayerTimes] = useAtom(prayerTimesAtom);

  const prevCoordinatesRef = useRef();

  const handleGetLocation = async () => {
    setLocationLoading(true);
    try {
      const coords = await getUserGeolocation();
      setCoordinates(coords);
    } catch (error) {
      console.log('Unable to retrieve your location due to ', error);
    }
    setLocationLoading(false);
  };

  const fetchPrayerTimes = async (coords) => {
    try {
      const prayerTimes = await getPrayerTimesFromAPI(coords);
      setPrayerTimes(prayerTimes); // Update prayer times atom
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // On first render, set the previous coordinates to the current ones
    if (!prevCoordinatesRef.current) {
      prevCoordinatesRef.current = coordinates;
    }

    // If the coordinates have changed, fetch new prayer times
    if (
      prevCoordinatesRef.current.lat !== coordinates.lat ||
      prevCoordinatesRef.current.lng !== coordinates.lng
    ) {
      fetchPrayerTimes(coordinates);
    }

    // Set the previous coordinates to the current ones for the next render
    prevCoordinatesRef.current = coordinates;
  }, [coordinates]); // this effect runs whenever coordinates change

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
        // loading={isPlacePredictionsLoading}
      />

      {/* Place predictions */}
      {placePredictions.length > 0 && (
        <div className="rounded-4px mb-5 flex w-1/3 list-none flex-col overflow-y-scroll border border-gray-300 bg-white text-black focus:outline-none">
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

      {/* Buttons that get prayer times and current location */}
      <div className="mb-5 flex w-1/3 flex-row gap-3">
        <button
          type="submit"
          className="gap-10px mt-5 flex h-14 w-3/4 flex-row items-center justify-center rounded-md bg-green-800 px-5 py-2 font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-green-700"
        >
          My Prayer Times
        </button>

        {/* Get location lat and long */}
        <button
          type="button"
          className={`gap-10px mt-5 flex h-14 w-1/4 flex-row items-center justify-center rounded-md bg-green-800 px-5 py-2 font-semibold text-white ${
            locationLoading
              ? 'cursor-not-allowed'
              : 'transition-colors duration-200 ease-in-out hover:bg-green-700'
          }`}
          onClick={handleGetLocation} // Set onClick handler here
          disabled={locationLoading} // Disable the button when loading
        >
          {!locationLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          ) : (
            <div className="mx-auto inline-block h-5 w-5 animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current text-white"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
        </button>
      </div>

      <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        {JSON.stringify(coordinates, null, 2)}
      </pre>
    </form>
  );
};

export default LocationSelector;
