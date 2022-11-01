import React, { useContext, useEffect } from 'react';
import { PrayerTimesContext } from '../../contexts/prayerTimesContext';
import moment from 'moment';
import { MorePrayerTimesBtn } from './morePrayerTimesBtn';

export const MorePrayerTimes = () => {
  const {
    isMoreSalahTimesToggled,
    handleMoreSalahTimesToggle,
    input,
    salahCalendarDates,
    setSalahCalendarDates,
  } = useContext(PrayerTimesContext);

  useEffect(() => {
    const getSalahCalendar = async (url) => {
      try {
        const res = await fetch(url);
        const { data } = await res.json();

        setSalahCalendarDates(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (input.lat && input.lng) {
      getSalahCalendar(
        `https://api.aladhan.com/v1/calendar?latitude=${input.lat}&longitude=${input.lng}`
      );
    }
  }, [input.lat, input.lng, setSalahCalendarDates]);

  return (
    <>
      <MorePrayerTimesBtn
        onClickHandler={handleMoreSalahTimesToggle}
        {...{ isMoreSalahTimesToggled }}
      />

      {isMoreSalahTimesToggled && (
        <div className="mx-auto mb-51px flex w-11/12 justify-center overflow-x-auto rounded-20px bg-white py-8 px-4 shadow-gray lg:w-full">
          <table className="w-full table-auto text-left">
            <thead className="uppercase">
              <tr>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Fajr</th>
                <th className="py-3 px-6">Sunrise</th>
                <th className="py-3 px-6">Dhuhr</th>
                <th className="py-3 px-6">Asr</th>
                <th className="py-3 px-6">Maghrib</th>
                <th className="py-3 px-6">Isha</th>
              </tr>
            </thead>
            <tbody>
              {salahCalendarDates.map(
                ({
                  date: { readable },
                  timings: { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha },
                }) => {
                  const todaysDate = moment().format('DD MMM YYYY');
                  return (
                    <tr
                      key={readable}
                      className={`border-b hover:bg-gray-50 ${
                        todaysDate === readable ? 'bg-green' : ''
                      }`}
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 lg:whitespace-nowrap"
                      >
                        {readable}
                      </th>
                      <td className="py-4 px-6">{Fajr}</td>
                      <td className="py-4 px-6">{Sunrise}</td>
                      <td className="py-4 px-6">{Dhuhr}</td>
                      <td className="py-4 px-6">{Asr}</td>
                      <td className="py-4 px-6">{Maghrib}</td>
                      <td className="py-4 px-6">{Isha}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
            <tfoot className="uppercase">
              <tr>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Fajr</th>
                <th className="py-3 px-6">Sunrise</th>
                <th className="py-3 px-6">Dhuhr</th>
                <th className="py-3 px-6">Asr</th>
                <th className="py-3 px-6">Maghrib</th>
                <th className="py-3 px-6">Isha</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
};
