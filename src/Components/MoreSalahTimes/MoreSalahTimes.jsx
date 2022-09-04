import { useContext, useEffect } from 'react';
import { SalahTimesContext } from '../../Contextes/SalahTimesContext';
import moment from 'moment';
import './styles/moreSalahTimes.scss';

export const MoreSalahTimes = () => {
  const {
    isMoreSalahTimesToggled,
    handleMoreSalahTimesToggle,
    input,
    salahCalendarDates,
    setSalahCalendarDates,
  } = useContext(SalahTimesContext);

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
        `http://api.aladhan.com/v1/calendar?latitude=${input.lat}&longitude=${input.lng}`
      );
    }
  }, [input.lat, input.lng, setSalahCalendarDates]);

  return (
    <>
      <div className="buttons is-centered">
        <button
          className="button is-primary"
          onClick={handleMoreSalahTimesToggle}
        >
          <span>More Salah Times</span>
          <span className="icon">
            <i
              className={`fas ${
                isMoreSalahTimesToggled ? 'fa-angle-up' : 'fa-angle-down'
              }`}
            ></i>
          </span>
        </button>
      </div>

      {isMoreSalahTimesToggled && (
        <div>
          <table className="table">
            <thead>
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
                      className={`${
                        todaysDate === readable ? 'currentDate' : ''
                      }`}
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
                }
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