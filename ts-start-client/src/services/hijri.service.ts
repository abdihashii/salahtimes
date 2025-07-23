import { HijriDateResponse } from "@/lib/types";

export const fetchHijriDate = async (
  forHijri: string,
  adjustment: number
): Promise<HijriDateResponse> => {
  const hijriData = await fetch(
    `https://api.aladhan.com/v1/gToH?date=${forHijri}&adjustment=${adjustment}`
  );

  const {
    data: { hijri },
  } = await hijriData.json();

  const {
    day,
    month: { en: hijriMonth },
    year,
  } = hijri;

  return {
    hijriMonth,
    day,
    year,
  };
};
