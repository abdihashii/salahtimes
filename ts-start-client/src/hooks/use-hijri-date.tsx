import { useQuery } from "@tanstack/react-query";

import { getFormattedDates } from "@/lib/utils";
import { fetchHijriDate } from "@/services/hijri.service";

export function useHijriDate() {
  const adjustment = 1;
  const { forHijri, gregorianDate } = getFormattedDates();

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
