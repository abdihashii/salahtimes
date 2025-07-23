import { createFileRoute } from "@tanstack/react-router";
import { AlertCircleIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { useHijriDate } from "@/hooks/use-hijri-date";

export const Route = createFileRoute("/hijri-date")({
  component: HijriDateComponent,
});

function HijriDateComponent() {
  const { hijriDateQuery, gregorianDate } = useHijriDate();

  return (
    <div className="container mx-auto flex flex-col items-center gap-10 py-16">
      <h1 className="w-5/6 text-center text-4xl font-semibold lg:w-5/12 lg:text-6xl">
        {hijriDateQuery.isPending && (
          <div className="flex items-center justify-center">
            <Skeleton className="h-[60px] w-full" />
          </div>
        )}
        {hijriDateQuery.isError && (
          <div className="flex items-center justify-center">
            <AlertCircleIcon className="h-[60px] w-[60px] text-red-500" />
          </div>
        )}
        {hijriDateQuery.data && (
          <>
            {hijriDateQuery.data.hijriMonth} {hijriDateQuery.data.day},{" "}
            {hijriDateQuery.data.year}
          </>
        )}
      </h1>
      <h2 className="text-lg lg:text-xl">
        Today&apos;s Gregorian Date: {gregorianDate}
      </h2>
    </div>
  );
}
