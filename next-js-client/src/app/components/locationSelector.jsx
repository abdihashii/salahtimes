'use client';

import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { inputAtom } from '../atoms/prayerTimesAtoms';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import LoadingIcon from '../icons/loadingIcon';
import LocationIcon from '../icons/locationIcon';
import { useMounted } from '../hooks/useMounted';
import { useCoordinates } from '../hooks/useCoordinates';

const LocationSelector = () => {
  const [input, setInput] = useAtom(inputAtom);
  const [currentInput, setCurrentInput] = useState(input.label);

  const {
    coordinates,
    locationLoading,
    fetchPrayerTimes,
    handleGetLatLngFromIPAddress,
    handleGetLatLngFromInput,
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
      fetchPrayerTimes(coordinates);
    }

    // Set the previous coordinates to the current ones for the next render
    prevCoordinatesRef.current = coordinates;
  }, [coordinates]); // this effect runs whenever coordinates change

  return (
    <form className="mx-auto mb-8 mt-16 flex w-8/12 flex-col gap-y-4">
      {/* <pre className="w-full text-left text-xs text-gray-500 lg:w-3/4">
        <p className="text-sm font-semibold text-gray-700">Input</p>
        {JSON.stringify(input, null, 2)}
      </pre>

      <pre className="w-full text-left text-xs text-gray-500 lg:w-3/4">
        <p className="text-sm font-semibold text-gray-700">Coordinates</p>
        {JSON.stringify(coordinates, null, 2)}
      </pre> */}

      {hasMounted ? (
        <div className="flex flex-row gap-x-2 lg:justify-between">
          {/* Input box */}
          <GooglePlacesAutocomplete
            selectProps={{
              inputValue: currentInput,
              value: currentInput,
              // onInputChange triggers whenever the input changes
              onInputChange: (newValue, actionMeta) => {
                if (actionMeta.action !== 'input-change') return;

                setCurrentInput(newValue); // change the current input for the input box, not the atom
              },
              // onChange triggers whenever the input is selected
              onChange: async (newValue) => {
                setInput(newValue); // change the input atom for the title
                setCurrentInput(newValue.label); // change the current input for the input box
                await handleGetLatLngFromInput(newValue);
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
            onClick={handleGetLatLngFromIPAddress} // Set onClick handler here
            disabled={locationLoading} // Disable the button when loading
          >
            {!locationLoading ? <LoadingIcon /> : <LocationIcon />}
          </button>
        </div>
      ) : null}

      {/* Button that get prayer times and current location */}
      {/* <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          className="flex h-12 w-full transform flex-row items-center justify-center rounded-lg bg-green-600 px-5 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-green-500 sm:mb-0 sm:w-64"
          onClick={async (e) => {
            e.preventDefault();
            await handleGetLatLngFromInput(input);
          }}
        >
          Click
        </button>
      </div> */}
    </form>
  );
};

export default LocationSelector;
