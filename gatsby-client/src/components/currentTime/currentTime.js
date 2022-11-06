import React, { useContext } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';

const CurrentTime = () => {
  const { input } = useContext(PrayerTimesContext);

  return (
    <div className="flex">
      <p>
        Current time in{' '}
        <span className="text-green-dark">{input.selectedCity}</span> : 5:57 pm
      </p>
    </div>
  );
};

export default CurrentTime;
