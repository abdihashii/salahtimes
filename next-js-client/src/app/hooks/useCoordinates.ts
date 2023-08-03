'use client';

import { useAtom } from 'jotai';
import {
  locationLoadingAtom,
  coordinatesAtom,
  prayerTimesAtom,
} from '../atoms/prayerTimesAtoms';
import {
  getUserGeolocation,
  getPrayerTimesFromAPI,
} from '../utils/prayerTimes';
import { PrayerTimes } from '../types/prayerTimeTypes';

export const useCoordinates = () => {
  const [locationLoading, setLocationLoading] = useAtom(locationLoadingAtom);
  const [coordinates, setCoordinates] = useAtom(coordinatesAtom);
  const [prayerTimes, setPrayerTimes] = useAtom(prayerTimesAtom);

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

  const fetchPrayerTimes = async (coords: { lat: number; lng: number }) => {
    try {
      const prayerTimes = await getPrayerTimesFromAPI(coords);
      setPrayerTimes(prayerTimes as PrayerTimes); // Update prayer times atom
    } catch (error) {
      console.log(error);
    }
  };

  return {
    locationLoading,
    coordinates,
    prayerTimes,
    handleGetLocation,
    fetchPrayerTimes,
  };
};
