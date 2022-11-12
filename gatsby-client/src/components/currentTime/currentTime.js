import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const CurrentTime = () => {
  const { input, currentTime } = useContext(PrayerTimesContext);

  return (
<<<<<<< HEAD
    <div className="my-0 mx-auto mb-56px flex h-2.5em w-fit min-w-11/12 items-center justify-center rounded-20px bg-green-dark lg:min-w-3/12 lg:py-11px lg:px-60px">
      {currentTime && (
        <p className="text-white">
          Current time in{' '}
          <span className="font-bold">{input.selectedCity}</span> :{' '}
          {currentTime}
        </p>
      )}
=======
    <div className="flex justify-center items-center my-0 mx-0 mb-56px">
      <p>
        Current time in{' '}
        <span className="text-green-dark">{input.selectedCity}</span> :{' '}
        {currentTime}
      </p>
>>>>>>> add most of currentTime feat
    </div>
  );
};

export default CurrentTime;
