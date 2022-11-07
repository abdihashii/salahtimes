import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const CurrentTime = () => {
  const { input, currentTime } = useContext(PrayerTimesContext);

  return (
    <div className="flex justify-center items-center my-0 mx-0 mb-56px">
      <p>
        Current time in{' '}
        <span className="text-green-dark">{input.selectedCity}</span> :{' '}
        {currentTime}
      </p>
    </div>
  );
};

export default CurrentTime;
