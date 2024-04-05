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
import type { TLocation } from '@/types';

const inputValueAtom = atom<string>('');
const selectedPlaceAtom = atom<TPlace>({
	name: '',
	lat: null,
	lon: null,
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

const usePrayerTimes = (location: TLocation | null) => {
	const [inputValue, setInputValue] = useAtom(inputValueAtom);
	const [selectedPlace, setSelectedPlace] = useAtom(selectedPlaceAtom);
	const [prayerTimes, setPrayerTimes] = useAtom(prayerTimesAtom);
	const [prayerTimesLoading, setPrayerTimesLoading] = useAtom(
		prayerTimesLoadingAtom,
	);

	/**
	 * Fetches the prayer times from the /api/prayer-times endpoint by passing
	 * the date, latitude, longitude, timezone ID, and the current time in the
	 * user's timezone.
	 * @param lat - Latitude
	 * @param lon - Longitude
	 * @param timezoneId - Timezone ID
	 * @returns - Promise that resolves to the prayer times and the next prayer
	 */
	const fetchPrayerTimes = async (
		lat: number,
		lon: number,
		timezoneId: string,
	): Promise<
		| {
				timings: TPrayerTime;
				nextPrayer: {
					prayer: string;
					time: string;
				};
		  }
		| {
				error: any;
		  }
	> => {
		try {
			// get current date of the users timezone
			const timeData = await fetchDateTimeDataFromTimeZone(timezoneId);
			const { year, month, day } = timeData;

			// format the date
			const formattedDate = `${day}-${month}-${year}`;

			// fetch prayer times by date, lat, lon, and timezone id
			const resp = await fetch(
				`/api/prayer-times?date=${formattedDate}&lat=${lat}&lon=${lon}&method=2&currentTime=${moment()
					.tz(timezoneId)
					.format('HH:mm')}`,
			);

			if (!resp.ok) {
				throw new Error('Network response was not ok');
			}

			// Get the prayer times and the next prayer data from the response
			const { filteredTimings: timings, nextPrayer } = await resp.json();

			if (!timings) {
				throw new Error('Failed to fetch prayer times');
			}

			return {
				timings,
				nextPrayer,
			};
		} catch (error) {
			return {
				error,
			};
		}
	};

	/**
	 * Fetches and sets the prayer times to the state by calling the
	 * fetchPrayerTimes function and passing the latitude, longitude, and
	 * timezone ID.
	 * @param lat - Latitude
	 * @param lon - Longitude
	 * @param timezoneId - Timezone ID
	 * @returns - Promise that resolves by setting the prayer times to the state
	 * and returns an error if there is an error.
	 */
	const fetchAndSetPrayerTimes = async (
		lat: number,
		lon: number,
		timezoneId: string,
	) => {
		try {
			setPrayerTimesLoading(true);

			const resp = await fetchPrayerTimes(lat, lon, timezoneId);

			if ('error' in resp) {
				throw resp.error;
			}

			const { timings, nextPrayer } = resp;

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
			return {
				error,
			};
		} finally {
			setPrayerTimesLoading(false);
		}
	};

	/**
	 * Gets the timezone ID of the user based on the latitude and longitude
	 * @param lat - Latitude
	 * @param lon - Longitude
	 * @returns - Timezone ID
	 */
	const getTimezoneFromLatLon = async (lat: number, lon: number) => {
		const timezoneId = await fetchTimezone(lat, lon);

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
		const { lat, lon, countryCode, city, timezone } =
			await fetchLocationFromIP(); // Fallback to IP location

		// format the address to City, Country
		const formatted_address = `${city}, ${countryCode}`;

		// set the values
		setSelectedPlace({
			name: city,
			lat,
			lon,
			formatted_address,
			timezone,
			currentTimeInLocation: moment().tz(timezone).format('h:mm A'),
		});

		setInputValue(formatted_address);

		try {
			const resp = await fetchAndSetPrayerTimes(lat, lon, timezone);

			if (resp && 'error' in resp) {
				throw resp.error;
			}
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * This useEffect hook is responsible for setting the prayer times
	 * based on the location passed in the search params. It first checks
	 * if there is a location in the search params, then it gets the timezone
	 * ID from the latitude and longitude. After that, it sets the selected
	 * place values, the input value, and finally fetches and sets the prayer
	 * times.
	 */
	useEffect(() => {
		async function setPrayerTimesFromLocationSearchParam() {
			// First, we'll check if there was even a location passed in the search params
			if (!location) {
				return;
			}

			const { lat, lon } = location;

			if (!lat || !lon) {
				console.log('No location data found');
				return;
			}

			// Then, we'll get the timezone id from the lat and lon
			const timezoneId = await getTimezoneFromLatLon(lat, lon);

			// After getting the timezone id, we'll set the selected place values
			setSelectedPlace({
				name: location.cityName,
				lat,
				lon,
				formatted_address: location.cityName,
				timezone: timezoneId,
				currentTimeInLocation: moment().tz(timezoneId).format('h:mm A'),
			});

			// Next, we'll set the input value to the city name
			setInputValue(location.cityName);

			// Finally, we'll fetch and set the prayer times
			try {
				const resp = await fetchAndSetPrayerTimes(lat, lon, timezoneId);

				if (resp && 'error' in resp) {
					throw resp.error;
				}
			} catch (error) {
				console.log(error);
			}
		}

		setPrayerTimesFromLocationSearchParam();
	}, [location]);

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

				debugger;

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
				const timezoneId = await getTimezoneFromLatLon(
					place.geometry.location.lat(),
					place.geometry.location.lng(),
				);

				setSelectedPlace({
					name: place.name,
					lat: place.geometry.location.lat(),
					lon: place.geometry.location.lng(),
					formatted_address: place.formatted_address,
					timezone: timezoneId,
					currentTimeInLocation: moment().tz(timezoneId).format('h:mm A'),
				});

				setInputValue(place.formatted_address);

				// after setting the values, fetch and set the prayer times
				try {
					const resp = await fetchAndSetPrayerTimes(
						place.geometry.location.lat(),
						place.geometry.location.lng(),
						timezoneId,
					);

					if (resp && 'error' in resp) {
						throw resp.error;
					}
				} catch (error) {
					console.log(error);
				}
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
