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

  const timeZones = find(lat, lng); // string[]

  const fajr = moment(prayerTimes.fajr).tz(timeZones[0]).format("h:mm A");
  const sunrise = moment(prayerTimes.sunrise).tz(timeZones[0]).format("h:mm A");
  const dhuhr = moment(prayerTimes.dhuhr).tz(timeZones[0]).format("h:mm A");
  const asr = moment(prayerTimes.asr).tz(timeZones[0]).format("h:mm A");
  const maghrib = moment(prayerTimes.maghrib).tz(timeZones[0]).format("h:mm A");
  const isha = moment(prayerTimes.isha).tz(timeZones[0]).format("h:mm A");

  return {
    fajr,
    sunrise,
    dhuhr,
    asr,
    maghrib,
    isha,
    timeZones,
  };
};

export { getPrayerTimes };
