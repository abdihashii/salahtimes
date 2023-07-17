'use client';

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
import LoadingIcon from '../icons/loadingIcon';
import LocationIcon from '../icons/locationIcon';

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
    <form className="mb-8 mt-4 flex flex-col items-center justify-center sm:mt-8 lg:mt-16">
      <div className="mb-4 flex w-full flex-row gap-2 lg:w-3/4 lg:justify-between">
        <input
          className="h-14 w-full rounded-lg border border-gray-300 px-5 text-black focus:border-green-700 focus:outline-none sm:mb-6 sm:w-1/3 lg:mb-8 lg:w-10/12"
          value={input.city_name}
          placeholder="Debounce 500 ms"
          onChange={(evt) => {
            getPlacePredictions({ input: evt.target.value });
            setInput({ city_name: evt.target.value });
          }}
        />

        {/* Get location lat and long */}
        <button
          type="button"
          className={`flex h-14 w-24 transform flex-row items-center justify-center rounded-lg bg-indigo-600 px-5 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 ${
            locationLoading ? 'cursor-not-allowed' : 'hover:bg-indigo-500'
          }`}
          onClick={handleGetLocation} // Set onClick handler here
          disabled={locationLoading} // Disable the button when loading
        >
          {!locationLoading ? (
            <LoadingIcon />
          ) : (
            <div className="mx-auto inline-block h-5 w-5 animate-spin">
              <LocationIcon />
            </div>
          )}
        </button>
      </div>

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
      <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row lg:mt-16">
        <button
          type="submit"
          className="mb-2 flex h-12 w-full transform flex-row items-center justify-center rounded-lg bg-green-600 px-5 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-green-500 sm:mb-0 sm:w-64"
        >
          My Prayer Times
        </button>
      </div>

      <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        {JSON.stringify(coordinates, null, 2)}
      </pre>
    </form>
  );
};

export default LocationSelector;
