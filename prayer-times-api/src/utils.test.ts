import { CalculationMethod } from "adhan";
import { getPrayerTimes } from "./utils";

describe("Utility Functions", () => {
  // Testing prayer times for July 26, 2023 in Aurora, IL
  test("getPrayerTimes should return the correct prayer times for July 26, 2023 in Aurora, IL", () => {
    const date = new Date(2023, 6, 26);
    const lat = 41.7605849;
    const lng = -88.3200715;
    const calcMethod = CalculationMethod.MuslimWorldLeague();

    const prayerTimes = getPrayerTimes(lat, lng, date, calcMethod);

    expect(prayerTimes.fajr).toBe("3:44 AM");
    expect(prayerTimes.sunrise).toBe("5:41 AM");
    expect(prayerTimes.dhuhr).toBe("1:01 PM");
    expect(prayerTimes.asr).toBe("4:57 PM");
    expect(prayerTimes.maghrib).toBe("8:18 PM");
    expect(prayerTimes.isha).toBe("10:07 PM");
  });

  // Testing prayer times for July 26, 2023 in Jebel Ali Village, Dubai, UAE
  test("getPrayerTimes should return the correct prayer times for July 26, 2023 in Jebel Ali Village, Dubai, UAE", () => {
    const date = new Date(2023, 6, 26);
    const lat = 25.038015;
    const lng = 55.11755;
    const calcMethod = CalculationMethod.MuslimWorldLeague();

    const prayerTimes = getPrayerTimes(lat, lng, date, calcMethod);

    expect(prayerTimes.fajr).toBe("4:19 AM");
    expect(prayerTimes.sunrise).toBe("5:44 AM");
    expect(prayerTimes.dhuhr).toBe("12:27 PM");
    expect(prayerTimes.asr).toBe("3:52 PM");
    expect(prayerTimes.maghrib).toBe("7:08 PM");
    expect(prayerTimes.isha).toBe("8:28 PM");
  });
});
