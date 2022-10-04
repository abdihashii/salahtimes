import { useContext } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';

export const SalahCard = ({ salah, time }) => {
  const { closestPrayerTime } = useContext(SalahTimesContext);

  return (
    <>
      <div
        className={`flex h-151px w-229px flex-col items-center justify-center rounded-20px shadow-gray ${
          closestPrayerTime.closestPrayer === salah
            ? 'bg-green text-white shadow-green'
            : ''
        }`}
      >
        <p className="text-24px font-semibold uppercase">{salah}</p>
        <p className="text-base font-normal">{time}</p>
      </div>
    </>
  );
};
