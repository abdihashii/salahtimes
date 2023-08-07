import type { Coordinates } from '../types/prayerTimeTypes';

/**
 * @returns {string} Current day in the format of "DD-MM-YYYY"
 */
export const getCurrentDay = () => {
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day}-${month}-${year}`;
};

export const getUserGeolocation = async (): Promise<Coordinates | string> => {
  try {
    const url = `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_KEY}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch geolocation from the service.');
    }

    const data = await res.json();

    const { loc } = data;
    const location = loc.split(','); // split string into array
    const [latitude, longitude] = location.map(parseFloat); // convert string to float

    return { lat: latitude, lng: longitude };
  } catch (error: any) {
    return `Failed to get geolocation: ${error.message}`;
  }
};
