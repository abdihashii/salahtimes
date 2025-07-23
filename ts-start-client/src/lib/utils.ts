import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTodaysDate = () => {
  const today = new Date();

  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  const dd = String(today.getDate()).padStart(2, "0");
  const yyyy = today.getFullYear();

  const gregorianDate = format(today, "MMMM do, yyyy");

  return {
    forHijri: `${dd}-${mm}-${yyyy}`,
    gregorianDate: gregorianDate,
  };
};

export const fetchHijriDate = async (forHijri: string, adjustment: number) => {
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
