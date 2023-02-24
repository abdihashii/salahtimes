import React, { useContext, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { PrayerTimesContext } from '../contexts/prayerTimesContext';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { RiMapPinLine } from 'react-icons/ri';

export const LocationSelector = ({ className }) => {
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
  }, [input.selectedCity]);

  useEffect(() => {
    getSalahTimes(input.lat, input.lng, method);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  return (
    <div className={className}>
      <div className="mx-auto mb-45px w-full">
        <div className="relative mx-auto w-11/12 lg:w-full">
          {/* Map icon */}
          <span className="absolute left-0 top-0 z-10 inline-flex h-2.5em w-2.5em items-center justify-center text-2xl">
            <RxMagnifyingGlass className="text-text-grey" />
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
                {/* The Main Input */}
                <input
                  {...getInputProps({
                    placeholder: 'Type your location',
                    autoFocus: true,
                    className: `h-2.5em w-full border border-border-input_white py-11px px-60px text-2xl hover:border-green-secondary focus:border-green-secondary outline-none text-black ${
                      suggestions.length > 0
                        ? 'rounded-bl-none rounded-br-none rounded-tr-30px rounded-tl-30px'
                        : 'rounded-full'
                    }`,
                  })}
                />
                <div
                  className={`${
                    suggestions.length > 0
                      ? 'rounded-bl-full rounded-br-full border border-t-0 border-green-secondary'
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
                            <span className="text-black">
                              {suggestion.description}
                            </span>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <span className="absolute right-0 top-0 z-10 flex h-60px w-60px items-center justify-center">
            <span
              className=" pointer-events-auto inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-green-secondary text-xl hover:bg-green-dark"
              onClick={onMapIconClick}
              onKeyDown={onMapIconClick}
              role="button"
              tabIndex={0}
              aria-label="Get current location's prayer times"
            >
              <RiMapPinLine className="text-green-white" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
