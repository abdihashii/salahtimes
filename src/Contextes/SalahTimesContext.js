import { useState, createContext } from 'react';
import moment from 'moment-timezone';
import {
  convertSalahTimes,
  getCityNameFromLatLng,
} from '../controllers/salahTimeController';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export const SalahTimesContext = createContext(null);

const SalahTimesContextProvider = (props) => {
  const [debug, setDebug] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    city: '',
    lat: 0,
    lng: 0,
  });
  const [prayerTimes, setPrayerTimes] = useState({
    Fajr: '',
    Sunrise: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  });
  const [closestPrayerTime, setClosetPrayerTime] = useState({
    closestPrayer: '',
    closestPrayerTime: '',
  });

  /**
   * Gets the prayer times from the latitude and longitude using the aladhan API
   * @param {Number} lat - Latitude
   * @param {Number} lon - Latitude
   * @returns Object prayer times
   */
  const getSalahTimes = async (lat, lon) => {
    try {
      const url = `http://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`;

      setIsLoading(true);

      const res = await fetch(url);
      const {
        data: { timings },
      } = await res.json();

      setIsLoading(false);

      const convertedSalahTimes = convertSalahTimes(timings);

      const temp = {
        ...prayerTimes,
        Fajr: convertedSalahTimes[0],
        Sunrise: convertedSalahTimes[1],
        Dhuhr: convertedSalahTimes[2],
        Asr: convertedSalahTimes[3],
        Maghrib: convertedSalahTimes[4],
        Isha: convertedSalahTimes[5],
      };

      return temp;
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  /**
   * When the user clicks on the map icon, this will set the prayer times from geolocation
   * and will also change the city name
   */
  const onMapIconClick = () => {
    const success = async (position) => {
      try {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const tempPrayerTimes = await getSalahTimes(lat, lng);
        setPrayerTimes(tempPrayerTimes);

        const cityNameFromLatLng = await getCityNameFromLatLng(lat, lng);
        const temp = {
          ...input,
          city: cityNameFromLatLng,
          lat,
          lng,
        };
        setInput(temp);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    };

    const error = () => {
      // status.textContent = 'Unable to retrieve your location';
    };

    if (!navigator.geolocation) {
      // status.textContent = 'Geolocation is not supported by your browser';
    } else {
      setInput({ ...input, city: 'Getting location...' });
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  /**
   * Sets the prayer times and the city name on page init load
   * @param {string} url - the api url
   * @param {object} options - the post options properties
   */
  const getLocationByIpAddress = async (url, options) => {
    try {
      setIsLoading(true);
      const res = await fetch(url, options);

      const {
        location: { lat, lng },
      } = await res.json();

      const tempPrayerTimes = await getSalahTimes(lat, lng);
      setPrayerTimes(tempPrayerTimes);

      const cityNameFromLatLng = await getCityNameFromLatLng(lat, lng);
      const temp = {
        ...input,
        lat,
        lng,
        city: cityNameFromLatLng,
      };
      setInput(temp);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  /**
   * Shows the user the upcoming salah based on the location of the city
   */
  const getUpcomingSalah = async () => {
    if (input.lat && input.lng) {
      try {
        const currentEpochTime = moment().unix();

        const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${input.lat},${input.lng}&timestamp=${currentEpochTime}&key=AIzaSyCxVzF10x8rBy1VakwMG5pXfeEJHqZARX0`;
        const res = await fetch(url);

        const { timeZoneId } = await res.json();

        const currentLocalTime = moment().tz(timeZoneId).format('hh:mm a');
        const currentLocalTimeInMinutes = moment
          .duration(moment(currentLocalTime, 'hh:mm a').format('HH:mm'))
          .asMinutes();

        let [closestPrayer, closestPrayerTime] = Object.entries(
          prayerTimes
        ).find(([prayer, time]) => {
          const timeInMinutes = moment
            .duration(moment(time, 'hh:mm a').format('HH:mm'))
            .asMinutes();

          if (prayer === 'Isha') {
            return true;
          }

          return timeInMinutes > currentLocalTimeInMinutes;
        });

        if (closestPrayer === 'Isha' && currentLocalTime > closestPrayerTime) {
          closestPrayer = 'Fajr';
          closestPrayerTime = prayerTimes.Fajr;
        }

        setClosetPrayerTime({
          closestPrayer,
          closestPrayerTime,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  /**
   * On change handler for the city name input
   * @param {string} location - the city name
   */
  const handleLocationChange = (location) => {
    const temp = { ...input, city: location };
    setInput(temp);
  };

  /**
   * When the user selects the city name from the popover list
   * @param {string} location - the city name
   */
  const handleSelect = (location) => {
    geocodeByAddress(location)
      .then(async (results) => {
        const { long_name } = results[0].address_components.find((o) =>
          o.types.find((type) => type === 'locality')
        );
        const latLng = await getLatLng(results[0]);
        return { latLng, long_name };
      })
      .then(async ({ latLng, long_name }) => {
        const { lat, lng } = latLng;
        setInput({ ...input, city: long_name, lat, lng });

        const tempPrayerTimes = await getSalahTimes(lat, lng);
        setPrayerTimes(tempPrayerTimes);
      })
      .catch((error) => console.error('Error', error));
  };

  return (
    <SalahTimesContext.Provider
      value={{
        debug,
        setDebug,
        isLoading,
        setIsLoading,
        input,
        setInput,
        prayerTimes,
        setPrayerTimes,
        getSalahTimes,
        getCityNameFromLatLng,
        onMapIconClick,
        getLocationByIpAddress,
        getUpcomingSalah,
        handleLocationChange,
        handleSelect,
        closestPrayerTime,
        setClosetPrayerTime,
      }}
    >
      {props.children}
    </SalahTimesContext.Provider>
  );
};

export default SalahTimesContextProvider;
