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
      <div className="mb-56px">
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
                        debugger;
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

          <span className="icon is-right fa-xl" onClick={onMapIconClick}>
            <i className="fa-solid fa-location-crosshairs pointer-events-auto cursor-pointer text-green hover:text-green-dark"></i>
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
