/**
 * Converts a Gregorian date to Julian Day Number.
 * 
 * @param year - The year of the date.
 * @param month - The month of the date (1 for January, 2 for February, etc.)
 * @param day - The day of the month.
 * @returns The Julian Day Number.
 */
function gregorianToJulianDay(year: number, month: number, day: number): number {
    const Y = year;
    const M = month + 1; // Months are zero-indexed in JS
    const D = day;

    // // Break down the formula into parts for clarity
    // const part1 = (1461 * (Y + 4800 + (M - 14) / 12)) / 4;
    // const part2 = (367 * (M - 2 - 12 * ((M - 14) / 12))) / 12;
    // const part3 = (3 * ((Y + 4900 + (M - 14) / 12) / 100)) / 4;

    // // Combine parts according to the formula
    // const JDN = part1 + part2 - part3 + D - 32075;

    // return Math.floor(JDN);  // Ensure we return an integer value

    // return Math.floor((1461 * (Y + 4800 + (M - 14) / 12)) / 4 + (367 * (M - 2 - 12 * ((M - 14) / 12))) / 12 - (3 * ((Y + 4900 + (M - 14) / 12) / 100)) / 4 + D - 32075);

    return (1461 * (Y + 4800 + (M - 14)/12))/4 +(367 * (M - 2 - 12 * ((M - 14)/12)))/12 - (3 * ((Y + 4900 + (M - 14)/12)/100))/4 + D - 32075
}

/**
 * Get the day of the year for a given date.
 * @param {Date} date The date for which to determine the day of the year.
 * @returns {number} The day of the year.
 */
function getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
}

/**
 * Get the solar declination angle for a given day.
 * @param {Date} date The date for which to calculate the declination.
 * @returns {number} The declination angle in degrees.
 */
function getDeclination(date: Date): number {
    const n = getDayOfYear(date);
    const radianFactor = 2 * Math.PI / 365.24;
    const declination = 23.44 * Math.sin(radianFactor * (n + 10) + 1.914 * Math.sin(radianFactor * n));
    return declination;
}

/**
 * Compute the time for a specific solar angle.
 * @param {number} angle The solar angle.
 * @param {number} declination The declination angle of the sun.
 * @param {number} latitude The latitude of the location.
 * @returns {number} The time as hours since midnight.
 */
function computeTime(angle: number, declination: number, latitude: number): number {
    // Convert degrees to radians
    declination = declination * (Math.PI / 180);
    latitude = latitude * (Math.PI / 180);

    // Compute the hour angle
    const cosHourAngle = (Math.sin(angle) - Math.sin(latitude) * Math.sin(declination)) / (Math.cos(latitude) * Math.cos(declination));

    // Ensure value is in the range [-1, 1] to avoid NaN
    const boundedCosHourAngle = Math.max(-1, Math.min(1, cosHourAngle));

    return (1 / 15) * Math.acos(boundedCosHourAngle);
}


/**
 * Get the equation of time for a given day.
 * @param {Date} date The date for which to calculate the equation of time.
 * @returns {number} The equation of time in minutes.
 */
function getEquationOfTime(date: Date): number {
    const n = getDayOfYear(date);
    const eot = 229.18 * (0.000075 + 0.001868 * Math.cos(n) - 0.032077 * Math.sin(n) - 0.014615 * Math.cos(2 * n) - 0.040849 * Math.sin(2 * n));
    return Math.max(-14, Math.min(16, eot));
}

export { gregorianToJulianDay, getDayOfYear, getDeclination, computeTime, getEquationOfTime };
