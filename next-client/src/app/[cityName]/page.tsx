import { Provider } from 'jotai';
import { cleanLocation, getLatLonFromContentful } from '@/lib/utils';
import type { TLocation } from '@/types';

import TrendingStories from '@/components/About/TrendingStories';
import LocationSelector from '@/components/PrayerTimes/LocationSelector';
import AboutMPTSection from '@/components/Home/AboutMPTSection';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
}: {
	params: { cityName: string };
}): Promise<Metadata> {
	const cleanLocationString = cleanLocation(params.cityName);

	return {
		title: `Prayer Times in ${cleanLocationString}`,
	};
}

export default async function HomePageWithCityName({
	params,
}: {
	params: {
		cityName: string;
	};
}) {
	const cleanLocationString = cleanLocation(params.cityName);

	// // get the lat and lon from contentful API
	const { lat, lon, error } =
		await getLatLonFromContentful(cleanLocationString);

	let location: TLocation | null = null;

	if (error) {
		return (
			<main className="my-24 flex flex-grow flex-col items-center justify-center gap-6">
				<h1 className="text-4xl lg:text-6xl">{error}</h1>
			</main>
		);
	}

	if (lat && lon) {
		location = {
			cityName: cleanLocationString,
			lat,
			lon,
		};
	}

	console.log('location:', location);

	return (
		<Provider>
			<main className="flex flex-grow flex-col pb-10 lg:pb-16">
				<section
					className="min-h-screen bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
					style={{
						backgroundImage: 'url(/masjid_bg_wide.webp)',
					}}
				>
					<LocationSelector location={location} />
				</section>

				{/* About MyPrayerTimes Section */}
				<AboutMPTSection />

				<TrendingStories />
			</main>
		</Provider>
	);
}
