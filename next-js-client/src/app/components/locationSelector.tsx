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

  const prevCoordinatesRef = useRef<Coordinates | null | string>(null);

  useEffect(() => {
    /**
     * Type guard to verify if a given object is of type `Coordinates`.
     *
     * @param obj - The object to check.
     * @returns `true` if the object matches the `Coordinates` structure, otherwise `false`.
     */
    function isCoordinates(obj: any): obj is Coordinates {
      return obj && 'lat' in obj && 'lng' in obj;
    }

    /**
     * Fetch prayer times based on the current coordinates and set the retrieved times to state.
     * If the fetch operation fails, set the error to state and reset prayer times to null.
     */
    async function fetchPrayerTimesOnCoordinatesChange(): Promise<void> {
      try {
        // Exit early if coordinates are null or if it's a string message (indicating an error or status).
        if (!coordinates || typeof coordinates === 'string') return;

        // Fetch prayer times for the given coordinates.
        const pT = await fetchPrayerTimes(coordinates);
        setPrayerTimes(pT);
      } catch (error: any) {
        // Handle fetch errors.
        setFetchPrayerTimesError({
          error,
        });
        setPrayerTimes(null);
      }
    }

    // If this is the first render (or if the ref hasn't been set before),
    // initialize `prevCoordinatesRef` with the current coordinates.
    if (!prevCoordinatesRef.current) {
      prevCoordinatesRef.current = coordinates;
    }

    // Extract the previous coordinates for readability and type narrowing.
    const prevCoords = prevCoordinatesRef.current;

    // Check if the previous coordinates are valid (not a string or null).
    if (isCoordinates(prevCoords)) {
      // Compare previous coordinates with the current ones. If they've changed, fetch the new prayer times.
      if (
        prevCoords.lat !== (coordinates as Coordinates).lat ||
        prevCoords.lng !== (coordinates as Coordinates).lng
      ) {
        fetchPrayerTimesOnCoordinatesChange();
      }
    }

    // Update the ref with the current coordinates to be used in the next effect run.
    prevCoordinatesRef.current = coordinates;
  }, [coordinates]); // The effect depends on changes in the `coordinates` prop/value.

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
