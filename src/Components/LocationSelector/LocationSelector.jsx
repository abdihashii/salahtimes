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
    method,
    setMethod,
    getSalahTimes,
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

  const handleMethodSelect = ({ target: { value } }) => {
    setMethod(value);
  };

  useEffect(() => {
    getSalahTimes(input.lat, input.lng, method);
  }, [method, input.lat, input.lng, getSalahTimes]);

  return (
    <>
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

      <div className="control has-icons-left">
        <div className="select">
          <select onChange={handleMethodSelect} value={method}>
            <option value="0">Shia Ithna-Ansari</option>
            <option value="1">University of Islamic Sciences, Karachi</option>
            <option value="2">Islamic Society of North America</option>
            <option value="3">Muslim World League</option>
            <option value="4">Umm Al-Qura University, Makkah</option>
            <option value="5">Egyptian General Authority of Survey</option>
            <option value="7">
              Institute of Geophysics, University of Tehran
            </option>
            <option value="8">Gulf Region</option>
            <option value="9">Kuwait</option>
            <option value="10">Qatar</option>
            <option value="11">Majlis Ugama Islam Singapura, Singapore</option>
            <option value="12">Union Organization islamic de France</option>
            <option value="13">Diyanet İşleri Başkanlığı, Turkey</option>
            <option value="14">
              Spiritual Administration of Muslims of Russia
            </option>
            <option value="15">
              Moonsighting Committee Worldwide (also requires shafaq paramteer)
            </option>
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className="fas fa-globe"></i>
        </div>
      </div>
    </>
  );
};
