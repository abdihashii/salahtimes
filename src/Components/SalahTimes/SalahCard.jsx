import { useContext } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';

export const SalahCard = ({ salah, time }) => {
  const { closestPrayerTime } = useContext(SalahTimesContext);

  return (
    <>
      <div
        className={`flex h-151px w-11/12 flex-col items-center justify-center rounded-20px md:w-229px  ${
          closestPrayerTime.closestPrayer === salah
            ? 'bg-green text-white shadow-green'
            : 'bg-white shadow-gray'
        }`}
      >
        <p className="text-24px font-semibold uppercase">{salah}</p>
        <p className="text-base font-normal">{time}</p>
      </div>
    </>
  );
};
