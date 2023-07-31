"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrayerTimes = void 0;
const adhan_1 = require("adhan");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const geo_tz_1 = require("geo-tz");
const getPrayerTimes = (lat, lng, date, calcMethod) => {
    const coordinates = new adhan_1.Coordinates(lat, lng);
    const prayerTimes = new adhan_1.PrayerTimes(coordinates, date, calcMethod);
    const tz = (0, geo_tz_1.find)(lat, lng);
    console.log(`The found tz is: ${tz}`);
    const fajr = (0, moment_timezone_1.default)(prayerTimes.fajr).tz(tz[0]).format("h:mm A");
    console.log(`fajr: ${fajr}`);
    const sunrise = (0, moment_timezone_1.default)(prayerTimes.sunrise).tz(tz[0]).format("h:mm A");
    const dhuhr = (0, moment_timezone_1.default)(prayerTimes.dhuhr).tz(tz[0]).format("h:mm A");
    const asr = (0, moment_timezone_1.default)(prayerTimes.asr).tz(tz[0]).format("h:mm A");
    const maghrib = (0, moment_timezone_1.default)(prayerTimes.maghrib).tz(tz[0]).format("h:mm A");
    const isha = (0, moment_timezone_1.default)(prayerTimes.isha).tz(tz[0]).format("h:mm A");
    return {
        fajr,
        sunrise,
        dhuhr,
        asr,
        maghrib,
        isha,
    };
};
exports.getPrayerTimes = getPrayerTimes;
//# sourceMappingURL=utils.js.map