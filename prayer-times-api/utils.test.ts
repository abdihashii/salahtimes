import { gregorianToJulianDay, getDayOfYear, getDeclination, computeTime, getEquationOfTime } from './utils';
import {PrayTimes} from './prayerTimes'

const PT = new (PrayTimes as any)('ISNA');
const date = new Date();
const timeZone = PT.getTimeZone(date);
console.log(`timeZone: ${timeZone}`);
// var times = PT.getTimes(new Date(), [41.760586, -88.320068], -5);


// const julianDay = gregorianToJulianDay(2006, 6, 15)
// console.log(`julianDay: ${julianDay}`);
// const diff = julianDay - 2453901.500000;
// console.log(`diff: ${diff}`);

// describe('Utility Functions', () => {

//     describe('dateToJulianDay', () => {

//         // Basic Tests
//         it('should correctly convert a date to its Julian Day representation', () => {
//             expect(dateToJulianDay(2006, 6, 15)).toBeCloseTo(2453901.5, 3);
//             expect(dateToJulianDay(2023, 5, 21)).toBeCloseTo(2457442.5, 3);
//             expect(dateToJulianDay(2009, 6, 12)).toBeCloseTo(2454994.5, 3);
//         });

//         // Edge Cases
//         it('should handle dates before the Gregorian calendar reform', () => {
//             expect(dateToJulianDay(1582, 10, 4)).toBeCloseTo(2299160.5, 3);   // Last day of Julian calendar
//             expect(dateToJulianDay(1582, 10, 15)).toBeCloseTo(2299161.5, 3); // First day of Gregorian calendar
//             expect(dateToJulianDay(1000, 1, 1)).toBeCloseTo(2086308.5, 3);
//         });

//         it('should handle edge months and leap years', () => {
//             expect(dateToJulianDay(2000, 2, 28)).toBeCloseTo(2451603.5, 3);  // Leap year
//             expect(dateToJulianDay(2000, 2, 29)).toBeCloseTo(2451604.5, 3);  // Leap day
//             expect(dateToJulianDay(2001, 2, 28)).toBeCloseTo(2451968.5, 3);  // Non-leap year

//             expect(dateToJulianDay(2000, 1, 1)).toBeCloseTo(2451545.5, 3);  // Start of the year
//             expect(dateToJulianDay(2000, 12, 31)).toBeCloseTo(2451910.5, 3);  // End of the year
//         });

//     });

//     // Testing getDayOfYear
//     test('getDayOfYear should return the correct day of the year', () => {
//         expect(getDayOfYear(new Date(2023, 0, 1))).toBe(1);  // January 1
//         expect(getDayOfYear(new Date(2023, 11, 31))).toBe(365);  // December 31
//         expect(getDayOfYear(new Date(2024, 1, 29))).toBe(60);  // Leap Year: Feb 29
//     });

//     // Testing getDeclination
//     test('getDeclination should return the approximate declination angle', () => {
//         expect(getDeclination(new Date(2023, 5, 21))).toBeCloseTo(23.44, 1);  // Around June solstice
//         expect(getDeclination(new Date(2023, 11, 21))).toBeCloseTo(-23.44, 1);  // Around December solstice
//         expect(getDeclination(new Date(2023, 2, 20, 12, 0, 0))).toBeCloseTo(0, 1);  // Around March equinox
//         expect(getDeclination(new Date(2023, 8, 22))).toBeCloseTo(0, 1);  // Around September equinox
//     });

//     // Testing computeTime
//     test('computeTime should compute time correctly', () => {
//         // Just a representative test; in reality, you'd need more specific known values to validate
//         const declination = 23.44;  // Approx for solstice
//         const latitude = 52;       // Roughly for London
//         expect(computeTime(-0.833, declination, latitude)).toBeGreaterThan(0);
//         expect(computeTime(-0.833, declination, latitude)).toBeLessThan(24);
//     });

//     // Testing getEquationOfTime
//     test('getEquationOfTime should return values within expected range', () => {
//         for (let month = 0; month < 12; month++) {
//             const eot = getEquationOfTime(new Date(2023, month, 15));
//             expect(eot).toBeGreaterThanOrEqual(-14);
//             expect(eot).toBeLessThanOrEqual(16);
//         }
//     });

// });
