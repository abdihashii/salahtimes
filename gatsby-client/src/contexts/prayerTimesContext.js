import moment from 'moment-timezone';
import React, { createContext, useState, useReducer } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {
  convertSalahTimes,
  getCityNameFromLatLng,
  getCurrentLocalTime,
  getTimeZoneId,
} from '../controllers/prayerTimesController';

const prayerTimesReducer = (prayerTimes, action) => {
  switch (action.type) {
    case 'SET_PRAYER_TIMES': {
      return action.payload;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const PrayerTimesContext = createContext(null);

const PrayerTimesContextProvider = (props) => {
  // Reducer
  const [prayerTimes, dispatch] = useReducer(prayerTimesReducer, {
    Fajr: '',
    Shuruq: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  });

  // Prayer times states
  const [input, setInput] = useState({
    city: '',
    selectedCity: '',
    lat: 0,
    lng: 0,
  });
  const [closestPrayerTime, setClosetPrayerTime] = useState({
    closestPrayer: '',
    closestPrayerTime: '',
  });
  const [method, setMethod] = useState('2');
  const [salahCalendarDates, setSalahCalendarDates] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  // Testing states
  const [debug, setDebug] = useState(false);

  // Toggle states
  const [isMoreSalahTimesToggled, setIsMoreSalahTimesToggled] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  // Misc states
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Gets the prayer times from the latitude and longitude using the aladhan API
   * @param {Number} lat - Latitude
   * @param {Number} lon - Latitude
   * @returns Object prayer times
   */
  const getSalahTimes = async (lat, lon, method) => {
    if ((lat, lon)) {
      try {
        const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}`;

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
          Shuruq: convertedSalahTimes[1],
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

        const tempPrayerTimes = await getSalahTimes(lat, lng, method);
        dispatch({
          type: 'SET_PRAYER_TIMES',
          payload: tempPrayerTimes,
        });

        const cityNameFromLatLng = await getCityNameFromLatLng(lat, lng);
        const temp = {
          ...input,
          city: cityNameFromLatLng,
          selectedCity: cityNameFromLatLng,
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
   */
  const getLocationByIpAddress = async (url) => {
    try {
      setIsLoading(true);

      const req = await fetch(url);
      const { loc } = await req.json();

      const [lat, lng] = loc.split(',');

      const tempPrayerTimes = await getSalahTimes(lat, lng, method);
      dispatch({
        type: 'SET_PRAYER_TIMES',
        payload: tempPrayerTimes,
      });

      const cityNameFromLatLng = await getCityNameFromLatLng(lat, lng);
      const temp = {
        ...input,
        lat,
        lng,
        city: cityNameFromLatLng,
        selectedCity: cityNameFromLatLng,
      };
      setInput(temp);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      // onMapIconClick();
      // console.error(err);
    }
  };

  /**
   * Shows the user the upcoming salah based on the location of the city
   */
  const getUpcomingSalah = async () => {
    if (input.lat && input.lng) {
      try {
        const timeZoneId = await getTimeZoneId(input.lat, input.lng);

        const currentLocalTime = getCurrentLocalTime(timeZoneId);

        setCurrentTime(currentLocalTime);

        const currentLocalTimeInMinutes = moment
          .duration(moment(currentLocalTime, 'hh:mm a').format('HH:mm'))
          .asMinutes();

        let [closestPrayer, closestPrayerTime] = Object.entries(
          prayerTimes,
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
  const handleSelect = (arg) => {
    let location = arg;

    if (arg.target) {
      const {
        target: [, { value }],
      } = arg;
      location = value;
      arg.preventDefault();
    }

    geocodeByAddress(location)
      .then(async (results) => {
        const { long_name } = results[0].address_components.find((o) =>
          o.types.find((type) => type === 'locality' || type === 'political'),
        );
        const latLng = await getLatLng(results[0]);
        return { latLng, long_name };
      })
      .then(async ({ latLng, long_name }) => {
        const { lat, lng } = latLng;
        setInput({
          ...input,
          city: long_name,
          selectedCity: long_name,
          lat,
          lng,
        });

        const tempPrayerTimes = await getSalahTimes(lat, lng, method);
        dispatch({
          type: 'SET_PRAYER_TIMES',
          payload: tempPrayerTimes,
        });
      })
      .catch((error) => console.error('Error', error));
  };

  const handleMoreSalahTimesToggle = () => {
    setIsMoreSalahTimesToggled(!isMoreSalahTimesToggled);
  };

  return (
    <PrayerTimesContext.Provider
      value={{
        debug,
        setDebug,
        isLoading,
        setIsLoading,
        input,
        setInput,
        prayerTimes,
        dispatch,
        getSalahTimes,
        getCityNameFromLatLng,
        onMapIconClick,
        getLocationByIpAddress,
        getUpcomingSalah,
        handleLocationChange,
        handleSelect,
        closestPrayerTime,
        setClosetPrayerTime,
        isMoreSalahTimesToggled,
        setIsMoreSalahTimesToggled,
        handleMoreSalahTimesToggle,
        salahCalendarDates,
        setSalahCalendarDates,
        currentTime,
        setCurrentTime,
        method,
        setMethod,
        isHamburgerMenuOpen,
        setIsHamburgerMenuOpen,
      }}
    >
      {props.children}
    </PrayerTimesContext.Provider>
  );
};

export default PrayerTimesContextProvider;
