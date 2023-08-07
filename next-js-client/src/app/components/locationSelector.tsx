'use client';

import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import {
  inputAtom,
  prayerTimesAtom,
  coordinatesAtom,
} from '../atoms/prayerTimesAtoms';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import LoadingIcon from '../icons/loadingIcon';
import LocationIcon from '../icons/locationIcon';
import { useMounted } from '../hooks/useMounted';
import { useCoordinates } from '../hooks/useCoordinates';
import { useFetchPrayerTimes } from '../hooks/useFetchPrayerTimes';
import { fetchPrayerTimesErrorAtom } from '../atoms/errorAtoms';
import { Coordinates } from '../types/prayerTimeTypes';

const LocationSelector = () => {
  const [input, setInput] = useAtom(inputAtom);
  const [currentInput, setCurrentInput] = useState(input.label);
  const [, setPrayerTimes] = useAtom(prayerTimesAtom);
  const [, setFetchPrayerTimesError] = useAtom(fetchPrayerTimesErrorAtom);
  const [coordinates, setCoordinates] = useAtom(coordinatesAtom);

  const {
    locationLoading,
    handleGetLatLngFromIPAddress,
    handleGetLatLngFromInput,
  } = useCoordinates();
  const { fetchPrayerTimes } = useFetchPrayerTimes();

  const { hasMounted } = useMounted();

  return hasMounted ? (
    <form className="mx-auto mb-8 mt-16 flex w-full flex-row gap-x-2 gap-y-4 lg:w-8/12">
      {/* <pre className="w-full text-left text-xs text-gray-500 lg:w-3/4">
            <p className="text-sm font-semibold text-gray-700">Input</p>
            {JSON.stringify(input, null, 2)}
          </pre>
    
          <pre className="w-full text-left text-xs text-gray-500 lg:w-3/4">
            <p className="text-sm font-semibold text-gray-700">Coordinates</p>
            {JSON.stringify(coordinates, null, 2)}
          </pre> */}

      {/* Input box */}
      <GooglePlacesAutocomplete
        selectProps={{
          inputValue: currentInput,
          value: {
            label: currentInput,
            value: currentInput,
          },
          // onInputChange triggers whenever the input changes
          onInputChange: (newValue, actionMeta) => {
            if (actionMeta.action !== 'input-change') return;

            setCurrentInput(newValue); // change the current input for the input box, not the atom
          },
          // onChange triggers whenever the input is selected
          onChange: async (newValue) => {
            if (!newValue) return;

            setInput(newValue); // change the input atom for the title
            setCurrentInput(newValue.label); // change the current input for the input box

            const coords = await handleGetLatLngFromInput(newValue);

            setCoordinates(coords);
          },
          className: 'w-full lg:w-10/12 h-14 text-left', // the container styles
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
        onClick={async () => {
          handleGetLatLngFromIPAddress().then((coords) => {
            if (!coords) return;

            if (typeof coords !== 'string') {
              return fetchPrayerTimes(coords)
                .then((pT) => {
                  setPrayerTimes(pT);
                })
                .catch((error) => {
                  setFetchPrayerTimesError({ error });
                });
            } else {
              setFetchPrayerTimesError({
                error: `Received invalid coordinates: ${coords}`,
              });
            }
          });
        }} // Set onClick handler here
        disabled={locationLoading} // Disable the button when loading
      >
        {!locationLoading ? <LoadingIcon /> : <LocationIcon />}
      </button>

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
  ) : null;
};

export default LocationSelector;
