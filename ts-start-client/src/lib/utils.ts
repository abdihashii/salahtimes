import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

import { DATE_FORMATS } from "@/lib/constants";
import { DateFormats } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateForHijriAPI = (date: Date = new Date()): string => {
  return format(date, DATE_FORMATS.HIJRI_API);
};

export const formatGregorianDate = (date: Date = new Date()): string => {
  return format(date, DATE_FORMATS.GREGORIAN_DISPLAY);
};

export const getFormattedDates = (date?: Date): DateFormats => {
  const targetDate = date || new Date();

  return {
    forHijri: formatDateForHijriAPI(targetDate),
    gregorianDate: formatGregorianDate(targetDate),
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
