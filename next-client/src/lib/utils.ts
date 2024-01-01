import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitizeDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const fetchTimezone = async (lat: number, lng: number) => {
  const timestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const { timeZoneId } = data;

    return timeZoneId;
  } catch (error) {
    console.error(`Error fetching timezone: ${error}`);
    return null;
  }
};

export const fetchLocationFromIP = async () => {
  try {
    const response = await fetch(`http://ip-api.com/json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching location from IP: ${error}`);
    return null;
  }
};

export const fetchDateTimeDataFromTimeZone = async (timeZone: string) => {
  try {
    const response = await fetch(`/api/timeApi?timeZone=${timeZone}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching date/time data from timezone: ${error}`);
    return null;
  }
};

export const formatTimeString = (timeString: string) => {
  // Split the time string into hours and minutes
  const [hours24, minutes] = timeString.split(':').map(Number);

  // Convert 24-hour time to 12-hour time
  const hours12 = hours24 % 12 || 12;
  const suffix = hours24 >= 12 ? 'PM' : 'AM';

  // Pad minutes with a leading zero if necessary
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Format and return the time string
  return `${hours12}:${formattedMinutes} ${suffix}`;
};
