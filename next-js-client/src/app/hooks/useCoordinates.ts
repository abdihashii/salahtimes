'use client';

import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import {
  locationLoadingAtom,
  coordinatesAtom,
  prayerTimesAtom,
} from '../atoms/prayerTimesAtoms';
import { getUserGeolocation } from '../utils/prayerTimes';
import type { Coordinates, Input } from '../types/prayerTimeTypes';
import { useFetchPrayerTimes } from './useFetchPrayerTimes';
import { fetchPrayerTimesErrorAtom } from '../atoms/errorAtoms';

export const useCoordinates = () => {
  const [locationLoading, setLocationLoading] = useAtom(locationLoadingAtom);
  const [coordinates] = useAtom(coordinatesAtom);
  const [, setPrayerTimes] = useAtom(prayerTimesAtom);
  const [, setFetchPrayerTimesError] = useAtom(fetchPrayerTimesErrorAtom);

  const { fetchPrayerTimes } = useFetchPrayerTimes();

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

  return {
    locationLoading,
    handleGetLatLngFromInput,
    handleGetLatLngFromIPAddress,
  };
};
