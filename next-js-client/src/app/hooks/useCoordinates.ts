'use client';

import { useAtom } from 'jotai';
import {
  locationLoadingAtom,
  coordinatesAtom,
  prayerTimesAtom,
} from '../atoms/prayerTimesAtoms';
import { getUserGeolocation } from '../utils/prayerTimes';
import type { Input } from '../types/prayerTimeTypes';

export const useCoordinates = () => {
  const [locationLoading, setLocationLoading] = useAtom(locationLoadingAtom);
  const [coordinates, setCoordinates] = useAtom(coordinatesAtom);

  const handleGetLatLngFromInput = async (input: Input) => {
    const encodedAddress =
      input.value?.description && encodeURI(input.value.description);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      const { lat, lng } = data.results[0].geometry.location;
      setCoordinates({ lat, lng });
    } else {
      console.log('Unable to retrieve your location');
    }
  };

  const handleGetLatLngFromIPAddress = async () => {
    setLocationLoading(true);
    try {
      const coords = await getUserGeolocation();
      setCoordinates(coords);
    } catch (error) {
      console.log('Unable to retrieve your location due to ', error);
    }
    setLocationLoading(false);
  };

  return {
    locationLoading,
    coordinates,
    handleGetLatLngFromInput,
    handleGetLatLngFromIPAddress,
  };
};
