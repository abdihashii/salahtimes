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

/**
 * @returns {Promise<GeolocationPosition>} GeolocationPosition
 * @throws {Error} Error
 */
export const getUserGeolocation = () => {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by this browser.');
  }

  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  ).then((position) => {
    const { latitude, longitude } = position.coords;

    return { lat: latitude, lng: longitude };
  });
};

/**
 * @param {Object} coords
 * @param {number} coords.lat
 * @param {number} coords.lng
 * @returns {Promise<Object>} Prayer times
 * @throws {Error} Error
 */
export const getPrayerTimesFromAPI = async (coords) => {
  const { lat, lng } = coords;
  const day = getCurrentDay();

  const response = await fetch(
    `http://api.aladhan.com/v1/timings/${day}?latitude=${lat}&longitude=${lng}&method=2`
  );
  const data = await response.json();
  return data.data.timings;
};
