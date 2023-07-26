function fetchUserGeolocation() {
  getUserGeolocation()
    .then((coords) => {
      console.log(`Latitude: ${coords.lat}, Longitude: ${coords.lng}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

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

async function getGeoLocation() {
  const response = await fetch('https://ipinfo.io/json?token=54bc83f28d1201');
  const data = await response.json();

  // Check if the location field exists
  if (!data.loc) {
    throw new Error('Location information not available');
  }

  const [latitude, longitude] = data.loc.split(',');

  alert(`Latitude: ${latitude}, Longitude: ${longitude}`);

  return {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };
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

document.addEventListener('DOMContentLoaded', function () {
  var prayerTimesButton = document.getElementById('prayerTimesButton');
  var loadingSpinner = document.getElementById('loadingSpinner');
  var prayerTimesTable = document.getElementById('prayerTimesTable');
  var prayerTimesRow = document.getElementById('prayerTimesRow');

  prayerTimesButton.addEventListener('click', getPrayerTimes);

  async function getPrayerTimes() {
    prayerTimesButton.classList.add('hidden'); // hide button
    loadingSpinner.classList.remove('hidden'); // show loading spinner

    // hide loading spinner after 3 seconds for demo
    // setTimeout(function () {
    // loadingSpinner.classList.add('hidden');
    // prayerTimesButton.classList.remove('hidden');

    const { latitude, longitude } = await getGeoLocation();

    if (!latitude || !longitude) {
      alert('Unable to get location information');
      prayerTimesButton.classList.remove('hidden');
      return;
    }

    const timings = await getPrayerTimesFromAPI({
      lat: latitude,
      lng: longitude,
    });
    const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha } = timings;
    alert(
      `Fajr: ${Fajr}, Sunrise: ${Sunrise}, Dhuhr: ${Dhuhr}, Asr: ${Asr}, Maghrib: ${Maghrib}, Isha: ${Isha}`,
    );

    const actualTimings = {
      Fajr,
      Sunrise,
      Dhuhr,
      Asr,
      Maghrib,
      Isha,
    };

    const row = document.createElement('tr');
    // iterate through timings object and populate table (each td)
    for (const [key, value] of Object.entries(timings)) {
      // check if the property exists in the actual timings object
      alert(`key: ${key}, ${actualTimings.hasOwnProperty(key)}`);
      if (!actualTimings.hasOwnProperty(key)) {
        continue;
      }

      const prayerTime = document.createElement('td');
      prayerTime.textContent = value;
      // alert(value);
      row.appendChild(prayerTimesRow);
    }

    // Hide loading spinner and show prayer times table
    loadingSpinner.classList.add('hidden');
    prayerTimesTable.classList.remove('hidden');
    // }, 3000);
  }
});
