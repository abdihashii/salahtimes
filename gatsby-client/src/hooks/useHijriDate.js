import { useEffect, useState } from 'react';
import { getTodaysDate } from '../controllers/prayerTimesController';

const useHijriDate = () => {
  const [hijriDate, setHijriDate] = useState({});
  const { forHijri, gregorianDate } = getTodaysDate();
  const adjustment = 1;

  useEffect(() => {
    const fetchHijriDate = async () => {
      const hijriData = await fetch(
        `http://api.aladhan.com/v1/gToH?date=${forHijri}&adjustment=${adjustment}`,
      );
      const {
        data: { hijri },
      } = await hijriData.json();

      const {
        day,
        month: { en: hijriMonth },
        year,
      } = hijri;

      setHijriDate({ hijriMonth, day, year });
    };

    fetchHijriDate();
  }, []);

  return { hijriDate, gregorianDate };
};

export default useHijriDate;
