import type { Coordinates, PrayerTimes } from '../types/prayerTimeTypes';

export const useFetchPrayerTimes = () => {
  const fetchPrayerTimes = async (
    coords: Coordinates
  ): Promise<PrayerTimes | string> => {
    try {
      const { lat, lng } = coords;

      const response = await fetch(
        `http://localhost:3001/get-prayer-times?lat=${lat}&lng=${lng}`
      );

      const data = await response.json();

      const { formattedData } = data;

      if (!formattedData) {
        throw new Error('Received unexpected data format from the server.');
      }

      return formattedData;
    } catch (error: any) {
      console.error(error);
      throw new Error('Failed to fetch prayer times, please try again.');
    }
  };

  return {
    fetchPrayerTimes,
  };
};
