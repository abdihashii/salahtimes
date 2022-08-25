import { useContext, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';
import './styles/locationSelector.scss';

export const LocationSelector = () => {
  const {
    input,
    handleLocationChange,
    handleSelect,
    onMapIconClick,
    getLocationByIpAddress,
    getUpcomingSalah,
    setDebug,
  } = useContext(SalahTimesContext);

  useEffect(() => {
    getLocationByIpAddress(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCxVzF10x8rBy1VakwMG5pXfeEJHqZARX0`,
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
  }, [input]);

  return (
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
  );
};
