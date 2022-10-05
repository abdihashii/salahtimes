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
    // setMethod,
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

  // const handleMethodSelect = ({ target: { value } }) => {
  //   setMethod(value);
  // };

  useEffect(() => {
    getSalahTimes(input.lat, input.lng, method);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  return (
    <>
      <div className="mb-56px flex justify-center">
        <div className="relative flex items-center focus-within:text-white">
          {/* Map icon */}
          {/* <span className="fa-xl absolute z-10 ml-24px text-green"> */}
          <i className="fa-xl fa-solid fa-location-dot absolute z-10 ml-24px text-green"></i>
          {/* </span> */}

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
                    className:
                      'w-933px pl-16 z-0 input is-large rounded-40px border-2 border-none ring-green ring-2 hover:ring-green-dark focus:ring-green-dark focus:ring-2',
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
            className="absolute right-0 z-10 mr-24px inline-flex h-10 w-10 cursor-pointer items-center justify-center border-l border-black pl-4 text-green hover:text-green-dark"
            onClick={onMapIconClick}
          >
            <i className="fa-xl fa-solid fa-location-crosshairs"></i>
          </span>
        </div>
      </div>

      {/* <div>
        <input className="location-input" type="text" />
      </div> */}

      {/* <div className="control has-icons-left">
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
      </div> */}
    </>
  );
};
