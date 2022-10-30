import React, { useContext, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { PrayerTimesContext } from '../contexts/prayerTimesContext';
// import "./styles/locationSelector.scss";

export const LocationSelector = () => {
  const {
    input,
    handleLocationChange,
    handleSelect,
    onMapIconClick,
    getLocationByIpAddress,
    getUpcomingSalah,
    setDebug,
    method,
    getSalahTimes,
  } = useContext(PrayerTimesContext);

  useEffect(() => {
    getLocationByIpAddress(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GATSBY_MAPS_API_KEY}`,
      { method: 'POST' },
    );

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const debugString = urlParams.get('debug');

    setDebug(debugString ? true : false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingSalah();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    getSalahTimes(input.lat, input.lng, method);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  return (
    <>
      <div className="mx-auto mb-56px w-11/12">
        <div className="control has-icons-left has-icons-right">
          {/* Map icon */}
          <span className="icon is-left fa-xl">
            <i className="fa-solid fa-location-dot text-green"></i>
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
                    placeholder: 'Enter your location',
                    className: `${
                      suggestions.length > 0
                        ? 'rounded-bl-none rounded-br-none'
                        : ''
                    } input is-large focus:ring-0 ring-0 rounded-20px border-2 border-green focus:border-green-dark hover:border-green-dark`,
                  })}
                />
                <div
                  className={`${
                    suggestions.length > 0
                      ? 'rounded-bl-20px rounded-br-20px border-2 border-t-0 border-green-dark'
                      : ''
                  }`}
                >
                  {loading ? (
                    <div className="h-200px">
                      {/* <progress
                        className="progress is-small is-primary mr-0 mb-38px mt-38px"
                        max="100"
                      ></progress> */}
                    </div>
                  ) : (
                    <>
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active text-green text-center py-2 last:rounded-bl-20px last:rounded-br-20px'
                          : 'suggestion-item text-center py-2 last:rounded-bl-20px last:rounded-br-20px';
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
                    </>
                  )}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <span
            className="icon is-right fa-xl"
            onClick={onMapIconClick}
            onKeyDown={onMapIconClick}
            role="button"
            tabIndex={0}
          >
            <i className="fa-solid fa-location-crosshairs pointer-events-auto cursor-pointer text-green hover:text-green-dark"></i>
          </span>
        </div>
      </div>
    </>
  );
};
