import {
	fetchDateTimeDataFromTimeZone,
	fetchLocationFromIP,
	fetchTimezone,
} from '@/lib/utils';
import type { TPlace, TPrayerTime } from '@/types';
import { Loader } from '@googlemaps/js-api-loader';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';

const usePrayerTimes = () => {
	const [inputValue, setInputValue] = useState('');
	const [selectedPlace, setSelectedPlace] = useState<TPlace>({
		name: '',
		lat: null,
		lng: null,
		formatted_address: '',
	});
	const [prayerTimes, setPrayerTimes] = useState<TPrayerTime>({
		Fajr: null,
		Sunrise: null,
		Dhuhr: null,
		Asr: null,
		Maghrib: null,
		Isha: null,
	});
	const [prayerTimesLoading, setPrayerTimesLoading] = useState(false);

	/**
	 * Sets the values of the location to the state.
	 * @param name - The name of the location
	 * @param lat - The latitude of the location
	 * @param lng - The longitude of the location
	 * @param formatted_address - The formatted address of the location
	 * @returns - void
	 */
	const setValues = async (
		name: string,
		lat: number,
		lng: number,
		formatted_address: string,
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

			// format the date
			const formattedDate = `${day}-${month}-${year}`;

			// fetch prayer times by date, lat, lng, and timezone id
			const resp = await fetch(
				`/api/prayer-times?date=${formattedDate}&lat=${lat}&lng=${lng}&method=2&currentTime=${moment()
					.tz(timezoneId)
					.format('HH:mm')}`,
			);

			if (!resp.ok) {
				throw new Error('Network response was not ok');
			}

			// Get the prayer times and the next prayer data from the response
			const { filteredTimings: timings, nextPrayer } = await resp.json();

			// set the prayer times to the state
			setPrayerTimes({
				Fajr: timings.Fajr,
				Sunrise: timings.Sunrise,
				Dhuhr: timings.Dhuhr,
				Asr: timings.Asr,
				Maghrib: timings.Maghrib,
				Isha: timings.Isha,
				nextPrayer: nextPrayer,
			});
		} catch (error) {
			console.log(error);
		} finally {
			setPrayerTimesLoading(false);
		}
	};

	/**
	 * This function is responsible for fetching the user's location
	 * asynchronously with the ip-api.com API. It then sets the values
	 * of the location to the state.
	 * This happens when the user clicks the "Get my location" button.
	 */
	const handleGetLocation = async () => {
		const { lat, lon, countryCode, city } = await fetchLocationFromIP(); // Fallback to IP location
		const formatted_address = `${city}, ${countryCode}`;

		// set the values
		setValues(city, lat, lon, formatted_address);
	};

	/**
	 * This useEffect hook is responsible for initializing the Google Maps
	 * Autocomplete API and sets up the event listener for when a place is
	 * selected from the dropdown. When a place is selected, the place's values
	 * are set by the setValues function.
	 */
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
					place.formatted_address,
				);
			});
		});
	}, []);

	return {
		inputValue,
		setInputValue,
		selectedPlace,
		prayerTimesLoading,
		prayerTimes,
		handleGetLocation,
	};
};

export default usePrayerTimes;
