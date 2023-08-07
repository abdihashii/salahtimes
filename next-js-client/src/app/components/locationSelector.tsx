'use client';

import { useState } from 'react';
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
import type { Coordinates } from '../types/prayerTimeTypes';

const LocationSelector = () => {
  const [input, setInput] = useAtom(inputAtom);
  const [currentInput, setCurrentInput] = useState(input.label); // current input for the input box
  const [, setPrayerTimes] = useAtom(prayerTimesAtom);
  const [, setFetchPrayerTimesError] = useAtom(fetchPrayerTimesErrorAtom);
  const [, setCoordinates] = useAtom(coordinatesAtom);

  const {
    locationLoading,
    handleGetLatLngFromIPAddress,
    handleGetLatLngFromInput,
    handleGetFormattedAddressFromLatLng,
  } = useCoordinates();
  const { fetchPrayerTimes } = useFetchPrayerTimes();

  const { hasMounted } = useMounted();

  return hasMounted ? (
    <form className="mx-auto mb-8 mt-16 flex w-full flex-row gap-x-2 gap-y-4 lg:w-8/12 lg:justify-between">
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

            try {
              const coords = await handleGetLatLngFromInput(newValue);

              setCoordinates(coords);
            } catch (error: any) {
              setFetchPrayerTimesError({ error: error.message });
            }
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
          try {
            // Get the latitude and longitude from the user's IP address
            const coords = await handleGetLatLngFromIPAddress();

            // Get the formatted address using reverse geocoding
            const formattedAddress = await handleGetFormattedAddressFromLatLng(
              coords as Coordinates
            );

            // Set the input and current input to the formatted address
            setInput({
              label: formattedAddress,
            });
            setCurrentInput(formattedAddress);

            try {
              const pT = await fetchPrayerTimes(coords as Coordinates);

              setPrayerTimes(pT);
            } catch (error: any) {
              setFetchPrayerTimesError({ error: error.message });
            }
          } catch (error: any) {
            setFetchPrayerTimesError({ error: error.message });
          }
        }}
        disabled={locationLoading} // Disable the button when loading
      >
        {!locationLoading ? <LoadingIcon /> : <LocationIcon />}
      </button>
    </form>
  ) : null;
};

export default LocationSelector;
