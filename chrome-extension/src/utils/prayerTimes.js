/**
 * @returns {string} Current day in the format of "DD-MM-YYYY"
 */
function getCurrentDay() {
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day}-${month}-${year}`;
}

function getUserGeolocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (loc) => {
          const { coords } = loc;
          const { latitude, longitude } = coords;
          resolve({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(`Geolocation error code: ${error.code}`);
          reject(new Error(`Error getting geolocation: ${error.message}`));
        },
      );
    }
  });
}

/**
 * @param {Object} coords
 * @param {number} coords.lat
 * @param {number} coords.lng
 * @returns {Promise<Object>} Prayer times
 * @throws {Error} Error
 */
async function getPrayerTimesFromAPI(coords) {
  const { lat, lng } = coords;
  const day = getCurrentDay();

  const response = await fetch(
    `http://api.aladhan.com/v1/timings/${day}?latitude=${lat}&longitude=${lng}&method=2`,
  );
  const data = await response.json();
  return data.data.timings;
}
