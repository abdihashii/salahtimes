'use client';

import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import moment from 'moment-timezone';
import {
  fetchDateTimeDataFromTimeZone,
  fetchLocationFromIP,
  fetchTimezone,
  formatTimeString,
} from '@/lib/utils';

import CurrentTime from './CurrentTime';
import { Skeleton } from '../ui/skeleton';

const LocationSelector = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<{
    name: string;
    lat: number | null;
    lng: number | null;
    formatted_address: string;
    timezone?: string;
    currentTimeInLocation?: string;
  }>({
    name: '',
    lat: null,
    lng: null,
    formatted_address: '',
  });
  // const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [prayerTimes, setPrayerTimes] = useState<{
    fajr: string | null;
    sunrise: string | null;
    dhuhr: string | null;
    asr: string | null;
    maghrib: string | null;
    isha: string | null;
  }>({
    fajr: null,
    sunrise: null,
    dhuhr: null,
    asr: null,
    maghrib: null,
    isha: null,
  });
  const [prayerTimesLoading, setPrayerTimesLoading] = useState(false);

  const setValues = async (
    name: string,
    lat: number,
    lng: number,
    formatted_address: string
  ) => {
    const timezoneId = await fetchTimezone(lat, lng);

    if (!timezoneId) {
      console.log('No timezone data found');
      return;
    }

    setSelectedPlace({
      name: name,
      lat: lat,
      lng: lng,
      formatted_address: formatted_address,
      timezone: timezoneId,
      currentTimeInLocation: moment().tz(timezoneId).format('h:mm A'),
    });

    setInputValue(formatted_address);

    // set prayer times
    try {
      setPrayerTimesLoading(true);

      // get current date of the users timezone
      const timeData = await fetchDateTimeDataFromTimeZone(timezoneId);
      const { year, month, day } = timeData;
      const formattedDate = `${day}-${month}-${year}`;

      const resp = await fetch(
        `/api/prayer-times?date=${formattedDate}&lat=${lat}&lng=${lng}&method=2`
      );
      const data = await resp.json();

      setPrayerTimes({
        fajr: data.Fajr,
        sunrise: data.Sunrise,
        dhuhr: data.Dhuhr,
        asr: data.Asr,
        maghrib: data.Maghrib,
        isha: data.Isha,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setPrayerTimesLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleGetLocation = async () => {
    const { lat, lon, countryCode, city } = await fetchLocationFromIP(); // Fallback to IP location
    const formatted_address = `${city}, ${countryCode}`;

    // set the values
    setValues(city, lat, lon, formatted_address);
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      libraries: ['places'],
    });

    loader.load().then(() => {
      const input = document.getElementById('autocomplete') as HTMLInputElement;
      const autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', async () => {
        const place = autocomplete.getPlace();

        if (
          !place.geometry ||
          !place.geometry.location ||
          !place.name ||
          !place.formatted_address
        ) {
          console.log('No location data found');
          return;
        }

        setValues(
          place.name,
          place.geometry.location.lat(),
          place.geometry.location.lng(),
          place.formatted_address
        );
      });
    });
  }, []);

  return (
    <article className="mx-auto mt-28 flex flex-col gap-10 lg:mt-52 lg:w-9/12 lg:gap-20 xl:w-7/12">
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
            onChange={handleChange}
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
              !['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'].includes(
                prayer
              )
            )
              return null;

            return (
              <div
                key={prayer}
                className="flex h-8 flex-row items-center justify-center rounded-md bg-green-dark text-white"
              >
                {prayer}: {formatTimeString(prayerTime)}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mx-auto grid w-full grid-cols-6 justify-between gap-6">
          <Skeleton className="h-8 bg-green-dark" />
          <Skeleton className="h-8 bg-green-dark" />
          <Skeleton className="h-8 bg-green-dark" />
          <Skeleton className="h-8 bg-green-dark" />
          <Skeleton className="h-8 bg-green-dark" />
          <Skeleton className="h-8 bg-green-dark" />
        </div>
      )}

      <CurrentTime
        name={selectedPlace.name}
        currentTime={selectedPlace.currentTimeInLocation || ''}
      />
    </article>
  );
};

export default LocationSelector;
