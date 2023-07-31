import { Coordinates, PrayerTimes, CalculationParameters } from "adhan";
import moment from "moment-timezone";
import { find } from "geo-tz";

const getPrayerTimes = (
  lat: number,
  lng: number,
  date: Date,
  calcMethod: CalculationParameters
) => {
  const coordinates = new Coordinates(lat, lng);
  const prayerTimes = new PrayerTimes(coordinates, date, calcMethod);

  const tz = find(lat, lng);
  console.log(`The found tz is: ${tz}`);

  const fajr = moment(prayerTimes.fajr).tz(tz[0]).format("h:mm A");
  console.log(`fajr: ${fajr}`);
  const sunrise = moment(prayerTimes.sunrise).tz(tz[0]).format("h:mm A");
  const dhuhr = moment(prayerTimes.dhuhr).tz(tz[0]).format("h:mm A");
  const asr = moment(prayerTimes.asr).tz(tz[0]).format("h:mm A");
  const maghrib = moment(prayerTimes.maghrib).tz(tz[0]).format("h:mm A");
  const isha = moment(prayerTimes.isha).tz(tz[0]).format("h:mm A");

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
