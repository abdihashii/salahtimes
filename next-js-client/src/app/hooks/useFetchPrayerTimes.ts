import { getPrayerTimesFromAPI } from '../utils/prayerTimes';
import type { Coordinates, PrayerTimes } from '../types/prayerTimeTypes';

export const useFetchPrayerTimes = () => {
  const fetchPrayerTimes = async (
    coords: Coordinates
  ): Promise<PrayerTimes | string> => {
    try {
      const prayerTimes = await getPrayerTimesFromAPI(coords);

      return prayerTimes;
    } catch (error) {
      return 'Failed to fetch prayer times';
    }
  };

  return {
    fetchPrayerTimes,
  };
};
