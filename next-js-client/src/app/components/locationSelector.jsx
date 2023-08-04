'use client';

import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { inputAtom } from '../atoms/prayerTimesAtoms';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import LoadingIcon from '../icons/loadingIcon';
import LocationIcon from '../icons/locationIcon';
import { useMounted } from '../hooks/useMounted';
import { useCoordinates } from '../hooks/useCoordinates';

const LocationSelector = () => {
  const [input, setInput] = useAtom(inputAtom);

  const {
    prayerTimes,
    coordinates,
    locationLoading,
    fetchPrayerTimes,
    handleGetLocation,
  } = useCoordinates();

  const { hasMounted } = useMounted();

  const prevCoordinatesRef = useRef();

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
      // fetchPrayerTimes(coordinates);
    }

    // Set the previous coordinates to the current ones for the next render
    prevCoordinatesRef.current = coordinates;
  }, [coordinates]); // this effect runs whenever coordinates change

  return (
    <form className="flex flex-col items-center justify-center gap-y-4 sm:mt-8 lg:mt-16">
      {/* <pre className="rounded-4px mx-auto mb-20 w-3/4 bg-black p-5 text-white">
        {JSON.stringify(input, null, 2)}
      </pre> */}
      {hasMounted ? (
        <div className="flex w-full flex-row gap-x-2 lg:w-3/4 lg:justify-between">
          {/* Input box */}
          <GooglePlacesAutocomplete
            selectProps={{
              inputValue: input.label,
              value: input.label,
              onInputChange: (i, a, p) => {
                if (a.action !== 'input-change') return;

                setInput({
                  ...input,
                  label: i,
                });
              },
              onChange: (i) => {
                setInput(i);
              },
              className: 'w-10/12 lg:w-10/12 h-14 text-left', // the container styles
              classNames: {
                control: () => 'h-full',
                menu: () => 'text-black',
                input: () => 'opacity-100',
              },
              styles: {
                input: (provided) => ({
                  ...provided,
                  input: {
                    opacity: '1 !important',
                  },
                }),
              },
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
            {!locationLoading ? <LoadingIcon /> : <LocationIcon />}
          </button>
        </div>
      ) : null}

      {/* Buttons that get prayer times and current location */}
      <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          className="flex h-12 w-full transform flex-row items-center justify-center rounded-lg bg-green-600 px-5 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-green-500 sm:mb-0 sm:w-64"
          onClick={(e) => {
            e.preventDefault();
            fetchPrayerTimes(coordinates);
          }}
        >
          Click
        </button>
      </div>

      <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        <h2 className="mb-5 text-center text-2xl font-bold">Coordinates</h2>
        {JSON.stringify(coordinates, null, 2)}
      </pre>

      {/* <pre className="rounded-4px mx-auto mb-20 w-1/4 bg-black p-5 text-white">
        <h2 className="mb-5 text-center text-2xl font-bold">Prayer Times</h2>
        {JSON.stringify(prayerTimes, null, 2)}
      </pre> */}
    </form>
  );
};

export default LocationSelector;