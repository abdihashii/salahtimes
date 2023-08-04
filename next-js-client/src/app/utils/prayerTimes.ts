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

export const getUserGeolocation = async () => {
  try {
    const url = `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    const { loc } = data;
    const location = loc.split(',');
    let [latitude, longitude] = location;

    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);

    return { lat: latitude, lng: longitude };
  } catch (error) {
    console.log(`Failed to get user's geolocation: ${error}`);

    return { lat: null, lng: null };
  }
};

export const getPrayerTimesFromAPI = async (coords: Coordinates) => {
  const { lat, lng } = coords;

  const response = await fetch(
    `http://localhost:3000/get-prayer-times?lat=${lat}&lng=${lng}`
  );

  const data = await response.json();

  const { formattedData } = data;

  return formattedData;
};
