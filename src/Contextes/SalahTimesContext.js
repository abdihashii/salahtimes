import { useState, createContext } from 'react';
// import update from 'immutability-helper';
import {
  convertSalahTimes,
  getCityNameFromLatLng,
} from '../controllers/salahTimeController';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export const SalahTimesContext = createContext(null);

const SalahTimesContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    city: '',
  });
  const [prayerTimes, setPrayerTimes] = useState({
    Fajr: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
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
        handleLocationChange,
        handleSelect,
      }}
    >
      {props.children}
    </SalahTimesContext.Provider>
  );
};

export default SalahTimesContextProvider;
