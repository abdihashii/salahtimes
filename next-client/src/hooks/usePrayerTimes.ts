import {
	fetchDateTimeDataFromTimeZone,
	fetchLocationFromIP,
	fetchTimezone,
} from '@/lib/utils';
import type { TPlace, TPrayerTime } from '@/types';
import { Loader } from '@googlemaps/js-api-loader';
import moment from 'moment-timezone';
import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const inputValueAtom = atom<string>('');
const selectedPlaceAtom = atom<TPlace>({
	name: '',
	lat: null,
	lng: null,
	formatted_address: '',
});
const prayerTimesAtom = atom<TPrayerTime>({
	Fajr: null,
	Sunrise: null,
	Dhuhr: null,
	Asr: null,
	Maghrib: null,
	Isha: null,
});
const prayerTimesLoadingAtom = atom<boolean>(false);

const usePrayerTimes = () => {
	const [inputValue, setInputValue] = useAtom(inputValueAtom);
	const [selectedPlace, setSelectedPlace] = useAtom(selectedPlaceAtom);
	const [prayerTimes, setPrayerTimes] = useAtom(prayerTimesAtom);
	const [prayerTimesLoading, setPrayerTimesLoading] = useAtom(
		prayerTimesLoadingAtom,
	);

	const fetchAndSetPrayerTimes = async (
		lat: number,
		lng: number,
		timezoneId: string,
	) => {
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

	const setTimezoneFromLatLng = async (lat: number, lng: number) => {
		const timezoneId = await fetchTimezone(lat, lng);

		if (!timezoneId) {
			console.log('No timezone data found');
			return;
		}

		return timezoneId;
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
		// setValues(city, lat, lon, formatted_address);
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

			// When the user selects a place from the dropdown, set the values
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

				// get the timezone id from the lat and lng
				const timezoneId = await setTimezoneFromLatLng(
					place.geometry.location.lat(),
					place.geometry.location.lng(),
				);

				setSelectedPlace({
					name: place.name,
					lat: place.geometry.location.lat(),
					lng: place.geometry.location.lng(),
					formatted_address: place.formatted_address,
					timezone: timezoneId,
					currentTimeInLocation: moment().tz(timezoneId).format('h:mm A'),
				});

				setInputValue(place.formatted_address);

				// after setting the values, fetch and set the prayer times
				await fetchAndSetPrayerTimes(
					place.geometry.location.lat(),
					place.geometry.location.lng(),
					timezoneId,
				);
			});
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
