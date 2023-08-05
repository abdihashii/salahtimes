import { useAtom } from 'jotai';
import { prayerTimesAtom } from '../atoms/prayerTimesAtoms';
import { getPrayerTimesFromAPI } from '../utils/prayerTimes';
import type { PrayerTimes } from '../types/prayerTimeTypes';
import type { FetchPrayerTimesError } from '../types/errorTypes';
import { fetchPrayerTimesErrorAtom } from '../atoms/errorAtoms';

export const usePrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useAtom(prayerTimesAtom);
  const [, setFetchPrayerTimesError] = useAtom(fetchPrayerTimesErrorAtom);

  const fetchPrayerTimes = async (coords: { lat: number; lng: number }) => {
    try {
      const prayerTimes = await getPrayerTimesFromAPI(coords);
      setPrayerTimes(prayerTimes as PrayerTimes); // Update prayer times atom
    } catch (error) {
      setFetchPrayerTimesError({
        error: 'Failed to fetch prayer times',
      });
    }
  };

  return {
    fetchPrayerTimes,
    prayerTimes,
  };
};
