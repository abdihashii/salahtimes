import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const CurrentTime = () => {
  const { input, currentTime } = useContext(PrayerTimesContext);

  return (
    <div className="mx-auto my-6 flex h-2.5em w-fit min-w-11/12 items-center justify-center rounded-20px bg-green-dark lg:mb-56px lg:min-w-3/12 lg:py-11px lg:px-60px">
      {currentTime && (
        <p className="text-white">
          Current time in{' '}
          <span className="font-bold">{input.selectedCity}</span> :{' '}
          {currentTime}
        </p>
      )}
    </div>
  );
};

export default CurrentTime;
