import {
  Coordinates,
  PrayerTimes,
  CalculationMethod,
  CalculationParameters,
} from 'adhan';
// import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { format } from 'date-fns';

const getPrayerTimes = (
  lat: number,
  lng: number,
  date: Date,
  calcMethod: CalculationParameters,
) => {
  const coordinates = new Coordinates(lat, lng);
  const prayerTimes = new PrayerTimes(coordinates, date, calcMethod);

  // console.log(prayerTimes);

  // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const zonedDate = zonedTimeToUtc(date, 'Asia/Dubai');

  // const dt = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
  // const formatted = format(dt, 'yyyy-MM-dd HH:mm:ss zzz');
  // console.log(`dt: ${dt}`);
  // console.log(`formatted: ${formatted}`);

  const fajr = format(prayerTimes.fajr, 'h:mm a');
  // // console.log(`fajr: ${fajr}`);
  // // console.log(`utcZonedTime: ${zonedDate}`);

  const sunrise = format(prayerTimes.sunrise, 'h:mm a');
  const dhuhr = format(prayerTimes.dhuhr, 'h:mm a');
  const asr = format(prayerTimes.asr, 'h:mm a');
  const maghrib = format(prayerTimes.maghrib, 'h:mm a');
  const isha = format(prayerTimes.isha, 'h:mm a');

  return {
    fajr,
    sunrise,
    dhuhr,
    asr,
    maghrib,
    isha,
  };
};

export { getPrayerTimes };
