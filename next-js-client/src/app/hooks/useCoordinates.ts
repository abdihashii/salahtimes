'use client';

import { useAtom } from 'jotai';
import { locationLoadingAtom } from '../atoms/prayerTimesAtoms';
import { getUserGeolocation } from '../utils/prayerTimes';
import type { Coordinates, Input } from '../types/prayerTimeTypes';

export const useCoordinates = () => {
  const [locationLoading, setLocationLoading] = useAtom(locationLoadingAtom);

  const handleGetLatLngFromInput = async (
    input: Input
  ): Promise<Coordinates | string> => {
    const encodedAddress =
      input.value?.description && encodeURI(input.value.description);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      const { lat, lng } = data.results[0].geometry.location;

      return { lat, lng };
    } else {
      return 'Unable to retrieve your location';
    }
  };

  const handleGetLatLngFromIPAddress = async (): Promise<
    Coordinates | string
  > => {
    setLocationLoading(true);
    try {
      const coords = await getUserGeolocation();

      setLocationLoading(false);

      return coords;
    } catch (error) {
      setLocationLoading(false);
      return `Unable to retrieve your location due to ${error}`;
    }
  };

  return {
    locationLoading,
    handleGetLatLngFromInput,
    handleGetLatLngFromIPAddress,
  };
};
