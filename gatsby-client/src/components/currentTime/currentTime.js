import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const CurrentTime = () => {
<<<<<<< HEAD
  const { input, currentTime } = useContext(PrayerTimesContext);

  return (
    <div className="my-0 mx-auto mb-56px flex h-2.5em w-fit min-w-11/12 items-center justify-center rounded-20px bg-green-dark lg:min-w-3/12 lg:py-11px lg:px-60px">
      {currentTime && (
        <p className="text-white">
          Current time in{' '}
          <span className="font-bold">{input.selectedCity}</span> :{' '}
          {currentTime}
        </p>
      )}
=======
  const { input } = useContext(PrayerTimesContext);

  return (
    <div className="flex">
      <p>
        Current time in{' '}
        <span className="text-green-dark">{input.selectedCity}</span> : 5:57 pm
      </p>
>>>>>>> init
    </div>
  );
};

export default CurrentTime;
