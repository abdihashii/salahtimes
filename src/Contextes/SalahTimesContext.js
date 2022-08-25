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
        city: cityNameFromLatLng,
      };
      setInput(temp);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  const getUpcomingSalah = async () => {
    if (input.lat && input.lng) {
      try {
        const currentEpochTime = moment().unix();

        const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${input.lat},${input.lng}&timestamp=${currentEpochTime}&key=AIzaSyCxVzF10x8rBy1VakwMG5pXfeEJHqZARX0`;
        const res = await fetch(url);

        const { timeZoneId } = await res.json();

        const currentLocalTime = moment().tz(timeZoneId).format('hh:mm a');
        console.log(currentLocalTime);
        const currentLocalTimeInMinutes = moment
          .duration(moment(currentLocalTime, 'hh:mm a').format('HH:mm'))
          .asMinutes();

        const [closestPrayer, closestPrayerTime] = Object.entries(
          prayerTimes
        ).find(([prayer, time]) => {
          const timeInMinutes = moment
            .duration(moment(time, 'hh:mm a').format('HH:mm'))
            .asMinutes();

          return timeInMinutes > currentLocalTimeInMinutes;
        });

        setClosetPrayerTime({
          closestPrayer,
          closestPrayerTime,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleLocationChange = (location) => {
    const temp = { ...input, city: location };
    setInput(temp);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(async (latLng) => {
        const { lat, lng } = latLng;
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
