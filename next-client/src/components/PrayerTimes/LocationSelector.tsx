'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './autocompleteStyles.css';

const LocationSelector = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<{
    name: string;
    lat: number | null;
    lng: number | null;
    formatted_address: string;
  }>({
    name: '',
    lat: null,
    lng: null,
    formatted_address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      libraries: ['places'],
    });

    loader.load().then(() => {
      const input = document.getElementById('autocomplete') as HTMLInputElement;
      const autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', () => {
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

        setSelectedPlace({
          name: place.name,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          formatted_address: place.formatted_address,
        });
        setInputValue(place.formatted_address);
      });
    });
  }, []);

  return (
    <article className="mx-auto lg:w-9/12 xl:w-7/12">
      <h1 className="mx-auto mb-9 mt-28 line-clamp-1 h-auto w-10/12 text-4xl font-medium leading-[45px] lg:mb-20 lg:mt-52 lg:text-6xl">
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

      <div className="relative w-full">
        <button className="absolute left-6 top-6 z-10 inline-flex w-fit text-green-secondary hover:underline">
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

      <pre>{JSON.stringify(selectedPlace, null, 2)}</pre>
    </article>
  );
};

export default LocationSelector;
