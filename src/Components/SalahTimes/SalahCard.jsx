import { useContext } from 'react';
import './styles/salahCard.scss';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';

export const SalahCard = ({ salah, time }) => {
  const { closestPrayerTime } = useContext(SalahTimesContext);

  return (
    <div
      className={`salah-card ${
        closestPrayerTime.closestPrayer === salah ? 'closest-prayer-time' : ''
      }`}
    >
      <p className="salah">{salah}</p>
      <p className="time">{time}</p>
    </div>
  );
};
