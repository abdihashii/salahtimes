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
        `https://api.aladhan.com/v1/calendar?latitude=${input.lat}&longitude=${input.lng}`,
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
        <div className="mt-51px flex h-1063px w-981px justify-center rounded-20px bg-white py-8 px-4 shadow-gray">
          <table className="table w-full">
            <thead className="px-49px py-12px">
              <tr>
                <th>Date</th>
                <th>Fajr</th>
                <th>Sunrise</th>
                <th>Dhuhr</th>
                <th>Asr</th>
                <th>Maghrib</th>
                <th>Isha</th>
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
                      className={`${todaysDate === readable ? 'bg-green' : ''}`}
                    >
                      <th>{readable}</th>
                      <td>{Fajr}</td>
                      <td>{Sunrise}</td>
                      <td>{Dhuhr}</td>
                      <td>{Asr}</td>
                      <td>{Maghrib}</td>
                      <td>{Isha}</td>
                    </tr>
                  );
                },
              )}
            </tbody>
            <tfoot>
              <tr>
                <th>Date</th>
                <th>Fajr</th>
                <th>Sunrise</th>
                <th>Dhuhr</th>
                <th>Asr</th>
                <th>Maghrib</th>
                <th>Isha</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
};
