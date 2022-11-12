import moment from 'moment-timezone';

const prayerTimes = {
  Fajr: '',
  Sunrise: '',
  Dhuhr: '',
  Asr: '',
  Maghrib: '',
  Isha: '',
};

/**
 * Converts the time string from 24 hour to 12 hour time
 * @param {String} time - The time in string format ex: 13:35
 */
const convertFrom24HourTo12Hour = (time) => {
  const [hour, minute] = time.split(':');

  let amPm = 'am';
  let hourString = hour;
  let hourInt = parseInt(hour);

  if (hourInt > 12) {
    hourInt -= 12;
    hourString = '0' + hourInt.toString();
    amPm = 'pm';
  } else if (hourInt === 12) {
    hourInt.toString();
    amPm = 'pm';
  }
  const convertedTime = `${hourString}:${minute} ${amPm}`;

  return convertedTime;
};

/**
 * Returns a list of converted salah times, converting them from 24 to 12 hour times
 * @param {Object} salahTimes - Salah times
 * @returns {String[]}
 */
export const convertSalahTimes = (salahTimes) => {
  let convertedSalahTimesList = [];

  for (const [salah, salahTime] of Object.entries(salahTimes)) {
    if (salah in prayerTimes) {
      const convertedSalahTime = convertFrom24HourTo12Hour(salahTime);
      convertedSalahTimesList = [
        ...convertedSalahTimesList,
        convertedSalahTime,
      ];
    }
  }

  return convertedSalahTimesList;
};

/**
 * Gets the city name based on lat and long inputs
 * @param {number} lat - latitude
 * @param {number} lng - longitude
 * @returns the city name
 */
export const getCityNameFromLatLng = async (lat, lng) => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GATSBY_MAPS_API_KEY}`,
    );
    const { results } = await res.json();

    for (const result of results) {
      if (result.types.includes('locality')) {
        const { long_name: city } = result.address_components[0];

        return city;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const getCurrentLocalTime = (timeZoneId) => {
<<<<<<< HEAD
  return moment().tz(timeZoneId).format('hh:mm a');
=======
  return moment().tz(timeZoneId).format('h:mm a');
>>>>>>> add most of currentTime feat
};

export const getTimeZoneId = async (lat, lng) => {
  const currentEpochTime = moment().unix();

  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${currentEpochTime}&key=${process.env.GATSBY_MAPS_API_KEY}`;
  const res = await fetch(url);

  const { timeZoneId } = await res.json();

  return timeZoneId;
};
