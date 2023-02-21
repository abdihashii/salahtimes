import React, { useContext } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import PlacesAutocomplete from 'react-places-autocomplete';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const DesktopLocationSelector = ({ className }) => {
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

  return (
    <div className={`relative mx-auto w-9/12 ${className}`}>
      {/* Get location button */}
      <span className="text-15px absolute left-25px top-25px z-10 inline-flex w-fit flex-row items-center justify-center gap-2 font-medium text-black">
        {/* Your Location */}
        <button
          className="text-green-secondary hover:underline"
          onClick={onMapIconClick}
          onKeyDown={onMapIconClick}
          role="button"
        >
          Get my location
        </button>
      </span>

      {/* Location selector */}
      <PlacesAutocomplete
        value={input.city}
        onChange={handleLocationChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* The Main Input */}
            <input
              {...getInputProps({
                placeholder: 'Type your location',
                autoFocus: true,
                className: `h-6.25rem w-full border border-border-input_white pb-25px pt-49px px-6 text-15px hover:border-green-secondary focus:border-green-secondary outline-none text-black ${
                  suggestions.length > 0
                    ? 'rounded-bl-none rounded-br-none rounded-tr-4px rounded-tl-4px'
                    : 'rounded-4px'
                }`,
              })}
            />

            {/* Suggestions */}
            <div
              className={`${
                suggestions.length > 0
                  ? 'rounded-bl-4px rounded-br-4px border border-t-0 border-green-secondary'
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
                      ? 'suggestion-item--active text-green text-center py-2 last:rounded-bl-4px last:rounded-br-4px'
                      : 'suggestion-item text-center py-2 last:rounded-bl-4px last:rounded-br-4px';
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

      <button className="absolute right-5 top-5 flex w-fit flex-row items-center justify-center gap-10px rounded-4px bg-green-dark px-9 py-19px font-medium">
        <RxMagnifyingGlass /> Search
      </button>
    </div>
  );
};

export default DesktopLocationSelector;
