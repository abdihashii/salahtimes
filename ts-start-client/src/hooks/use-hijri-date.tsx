import { useQuery } from "@tanstack/react-query";

import { getTodaysDate, fetchHijriDate } from "@/lib/utils";

export function useHijriDate() {
  const adjustment = 1;
  const { forHijri, gregorianDate } = getTodaysDate();

  const hijriDateQuery = useQuery({
    queryKey: ["hijri-date"],
    queryFn: () => fetchHijriDate(forHijri, adjustment),
    enabled: !!forHijri && !!adjustment,
  });

  return {
    hijriDateQuery,
    gregorianDate,
  };
}
