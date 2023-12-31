'use client';

import React, { useState, useEffect } from 'react';
import { PrayerTimes, Coordinates, CalculationMethod } from 'adhan';
import { Loader } from '@googlemaps/js-api-loader';
import moment from 'moment-timezone';
import { fetchLocationFromIP, fetchTimezone } from '@/lib/utils';

import CurrentTime from './CurrentTime';

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
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleGetLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        async (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            const { lat, lon } = await fetchLocationFromIP(); // Fallback to IP location
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
          }
        }
      );
    } else {
      await fetchLocationFromIP(); // Fallback to IP location
    }
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

        console.log(
          `Place: ${JSON.stringify(place.formatted_address, null, 2)}`
        );

        const timezoneData = await fetchTimezone(
          place.geometry.location.lat(),
          place.geometry.location.lng()
        );

        if (!timezoneData) {
          console.log('No timezone data found');
          return;
        }

        setSelectedPlace({
          name: place.name,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          formatted_address: place.formatted_address,
          timezone: timezoneData,
          currentTimeInLocation: moment().tz(timezoneData).format('h:mm A'),
        });
        setInputValue(place.formatted_address);

        // set prayer times
        const coordinates = new Coordinates(
          place.geometry.location.lat(),
          place.geometry.location.lng()
        );
        const params = CalculationMethod.NorthAmerica();
        setPrayerTimes(new PrayerTimes(coordinates, new Date(), params));
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
      {prayerTimes && (
        <div className="mx-auto flex w-full flex-row justify-between">
          {Object.entries(prayerTimes).map(([prayer, prayerTime]) => {
            if (!prayerTime) return null;

            if (
              !['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'].includes(
                prayer
              )
            )
              return null;

            return (
              <div key={prayer}>
                {prayer}:{' '}
                {moment(prayerTime).tz('America/Chicago').format('h:mm A')}
              </div>
            );
          })}
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
