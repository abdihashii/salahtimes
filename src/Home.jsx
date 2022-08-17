import { wait } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {
  convertSalahTimes,
  getCityNameFromLatLng,
} from './controllers/salahTimeController';
import './Home.scss';

function App() {
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
  const getPrayerTimes = async (lat, lon) => {
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
        Dhuhr: convertedSalahTimes[1],
        Asr: convertedSalahTimes[2],
        Maghrib: convertedSalahTimes[3],
        Isha: convertedSalahTimes[4],
      };

      return temp;
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
        const tempPrayerTimes = await getPrayerTimes(lat, lng);
        setPrayerTimes(tempPrayerTimes);
      })
      .catch((error) => console.error('Error', error));
  };

  const onMapIconClick = () => {
    const success = async (position) => {
      try {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const tempPrayerTimes = await getPrayerTimes(lat, lng);
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

    setIsLoading(true);

    if (!navigator.geolocation) {
      // status.textContent = 'Geolocation is not supported by your browser';
    } else {
      // status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <div className="container" style={{ width: '800px' }}>
      <div className="box">
        <div className="field">
          <div className="control has-icons-left has-icons-right">
            {/* Map icon */}
            <span className="icon is-left fa-xl">
              <i className="fa-solid fa-location-dot"></i>
            </span>

            <PlacesAutocomplete
              value={input.city}
              onChange={handleLocationChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Enter location',
                      className: 'input is-large',
                    })}
                  />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>

            <span
              id="maps-icon"
              className="icon is-right fa-xl"
              onClick={onMapIconClick}
            >
              <i className="fa-solid fa-location-crosshairs"></i>
            </span>
          </div>
        </div>

        {isLoading ? (
          <progress class="progress is-small is-primary" max="100"></progress>
        ) : (
          ''
        )}

        {!isLoading && (
          <div className="columns mt-5">
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Fajr
              </p>
              <p className="subtitle is-6">{prayerTimes.Fajr}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Dhuhr
              </p>
              <p className="subtitle is-6">{prayerTimes.Dhuhr}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Asr
              </p>
              <p className="subtitle is-6">{prayerTimes.Asr}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Maghrib
              </p>
              <p className="subtitle is-6">{prayerTimes.Maghrib}</p>
            </div>
            <div className="column">
              <p className="title is-4 is-uppercase has-text-weight-bold">
                Isha
              </p>
              <p className="subtitle is-6">{prayerTimes.Isha}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
