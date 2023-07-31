import { CalculationMethod } from "adhan";
import { getPrayerTimes } from "./utils";

const main = () => {
  console.log("hello world");

  const date = new Date(2023, 6, 26);
  const lat = 41.7605849;
  const lng = -88.3200715;
  const calcMethod = CalculationMethod.MuslimWorldLeague();

  const prayerTimes = getPrayerTimes(lat, lng, date, calcMethod);

  // console.log(`Fajr: ${prayerTimes.fajr}`);
};

main();
