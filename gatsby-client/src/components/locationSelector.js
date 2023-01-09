import React, { useContext, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { PrayerTimesContext } from '../contexts/prayerTimesContext';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

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
      { method: 'POST' }
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
  }, [input.selectedCity]);

  useEffect(() => {
    getSalahTimes(input.lat, input.lng, method);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 w-full lg:static lg:mb-56px">
        <div className="relative mx-auto w-11/12 lg:w-full">
          {/* Map icon */}
          <span className="absolute left-0 top-0 z-10 inline-flex h-2.5em w-2.5em items-center justify-center text-2xl">
            <MdLocationOn className="text-green-dark" />
          </span>
          {/* <span className="fa-xl absolute left-0 top-0 z-10 inline-flex h-2.5em w-2.5em items-center justify-center">
            <i className="fa-solid fa-location-dot text-green-dark"></i>
          </span> */}

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
                    autoFocus: true,
                    className: `${
                      suggestions.length > 0
                        ? 'rounded-bl-none rounded-br-none'
                        : ''
                    } h-2.5em w-full rounded-20px border-2 border-green-dark py-11px px-60px text-2xl hover:border-green focus:border-green outline-none`,
                  })}
                />
                <div
                  className={`${
                    suggestions.length > 0
                      ? 'rounded-bl-20px rounded-br-20px border-2 border-t-0 border-green'
                      : ''
                  }`}
                >
                  {loading ? (
                    <p className="mt-56px flex items-start justify-center">
                      Loading...
                    </p>
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
            className="absolute right-0 top-0 z-10 inline-flex h-2.5em w-2.5em items-center justify-center text-2xl"
            onClick={onMapIconClick}
            onKeyDown={onMapIconClick}
            role="button"
            tabIndex={0}
            aria-label="Get current location's prayer times"
          >
            <BiCurrentLocation className="pointer-events-auto cursor-pointer text-green-dark hover:text-green" />
          </span>
          {/* <span
            className="fa-xl absolute right-0 top-0 z-10 inline-flex h-2.5em w-2.5em items-center justify-center"
            onClick={onMapIconClick}
            onKeyDown={onMapIconClick}
            role="button"
            tabIndex={0}
            aria-label="Get current location's prayer times"
            >
            <i className="fa-solid fa-location-crosshairs pointer-events-auto cursor-pointer text-green-dark hover:text-green"></i>
          </span> */}
        </div>
      </div>
    </>
  );
};
