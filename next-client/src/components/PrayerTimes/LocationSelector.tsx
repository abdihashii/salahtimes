'use client';

import React from 'react';
import { formatTimeString } from '@/lib/utils';

import CurrentTime from './CurrentTime';
import { Skeleton } from '../ui/skeleton';
import usePrayerTimes from '@/hooks/usePrayerTimes';
import { MapPin } from 'lucide-react';

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
			<div className="mx-auto w-11/12 lg:w-full">
				<div className="relative w-full">
					<button
						onClick={handleGetLocation}
						className="absolute left-6 top-6 z-10 hidden w-fit text-green-secondary hover:underline lg:inline-flex"
					>
						Get my location
					</button>

					<button
						className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-secondary text-xl lg:hidden"
						onClick={handleGetLocation}
					>
						<MapPin className="text-white" />
					</button>

					<input
						className="h-[2.5em] w-full rounded-full border-2 bg-white px-9 py-[11px] text-2xl text-black outline-none focus:border-green-secondary lg:h-[6.25rem] lg:w-full lg:rounded lg:px-6 lg:pb-6 lg:pt-12 lg:text-lg"
						id="autocomplete"
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Type your location"
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
								prayer,
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
