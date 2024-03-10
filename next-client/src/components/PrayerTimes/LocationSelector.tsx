'use client';

import React from 'react';
import { formatTimeString } from '@/lib/utils';

import CurrentTime from './CurrentTime';
import { Skeleton } from '../ui/skeleton';
import usePrayerTimes from '@/hooks/usePrayerTimes';

const LocationSelector = () => {
  const {
    selectedPlace,
    prayerTimesLoading,
    prayerTimes,
    handleGetLocation,
    inputValue,
    setInputValue,
  } = usePrayerTimes();

  return (
    <article className="mx-auto mt-28 flex flex-col gap-10 lg:mt-52 lg:w-9/12 lg:gap-20 xl:w-7/12">
      {/* The title of the prayer times location */}
      <h1 className="mx-auto line-clamp-1 h-auto w-10/12 text-4xl font-medium leading-[45px] lg:text-6xl">
        {selectedPlace.name ? (
          <>
            Prayer times in &quot;
            <span className="text-green">{selectedPlace.name}</span>
            &quot;
          </>
        ) : (
          <>
            <span className="text-green">Prayer times</span> in your location
          </>
        )}
      </h1>

      {/* Location selector */}
      <div className="w-full">
        <div className="relative w-full">
          <button
            onClick={handleGetLocation}
            className="absolute left-6 top-6 z-10 inline-flex w-fit text-green-secondary hover:underline"
          >
            Get my location
          </button>

          <input
            className="h-[6.25rem] w-full rounded border-2 bg-white px-6 pb-6 pt-12 text-black outline-none focus:border-green-secondary"
            id="autocomplete"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your location here"
            autoFocus={true}
            autoComplete="off"
          />
        </div>
      </div>

      {/* Prayer times */}
      {!prayerTimesLoading ? (
        <div className="mx-auto grid w-full grid-cols-6 justify-between gap-6">
          {Object.entries(prayerTimes).map(([prayer, prayerTime]) => {
            if (!prayerTime) return null;

            if (
              !['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(
                prayer
              )
            )
              return null;

            return (
              <div
                key={prayer}
                className={`flex h-10 flex-row items-center justify-center rounded-md ${prayerTimes.nextPrayer?.prayer === prayer ? 'bg-green-dark' : 'bg-white text-green-secondary'}`}
              >
                {prayer}: {formatTimeString(prayerTime as string)}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mx-auto grid w-full grid-cols-6 justify-between gap-6">
          <Skeleton className="h-10 bg-green-dark" />
          <Skeleton className="h-10 bg-green-dark" />
          <Skeleton className="h-10 bg-green-dark" />
          <Skeleton className="h-10 bg-green-dark" />
          <Skeleton className="h-10 bg-green-dark" />
          <Skeleton className="h-10 bg-green-dark" />
        </div>
      )}

      {/* Current time */}
      <CurrentTime
        name={selectedPlace.name}
        currentTime={selectedPlace.currentTimeInLocation || ''}
      />
    </article>
  );
};

export default LocationSelector;
