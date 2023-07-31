"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adhan_1 = require("adhan");
const utils_1 = require("./utils");
const main = () => {
    console.log("hello world");
    const date = new Date(2023, 6, 26);
    const lat = 41.7605849;
    const lng = -88.3200715;
    const calcMethod = adhan_1.CalculationMethod.MuslimWorldLeague();
    const prayerTimes = (0, utils_1.getPrayerTimes)(lat, lng, date, calcMethod);
    // console.log(`Fajr: ${prayerTimes.fajr}`);
};
main();
//# sourceMappingURL=index.js.map