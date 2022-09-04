import { useContext, useEffect } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';
import moment from 'moment';

export const CityAndTimeDisplay = () => {
  const { input, currentTime, setCurrentTime } = useContext(SalahTimesContext);

  useEffect(() => {
    if (input.lat && input.lng) {
      const getCurrentTimeFromLocation = async (lat, lng) => {
        try {
          const currentEpochTime = moment().unix();

          const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${currentEpochTime}&key=AIzaSyCxVzF10x8rBy1VakwMG5pXfeEJHqZARX0`;
          const res = await fetch(url);

          const { timeZoneId } = await res.json();

          const currentTime = moment().tz(timeZoneId).format('hh:mm a');

          setCurrentTime(currentTime);
        } catch (err) {
          console.error(err);
        }
      };

      getCurrentTimeFromLocation(input.lat, input.lng);
    }
  }, [input.selectedCity, input.lat, input.lng, setCurrentTime]);

  return (
    <div>
      {input.selectedCity}, {currentTime}
    </div>
  );
};
