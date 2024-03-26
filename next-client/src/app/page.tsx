import TrendingStories from '@/components/About/TrendingStories';
import LocationSelector from '@/components/PrayerTimes/LocationSelector';
import AboutMPTSection from '@/components/Home/AboutMPTSection';

export default function Home() {
	return (
		<main className="flex flex-grow flex-col pb-10 lg:pb-16">
			<section
				className="min-h-screen bg-cover bg-no-repeat text-center text-white shadow-bg_layer"
				style={{
					backgroundImage: 'url(/masjid_bg_wide.webp)',
				}}
			>
				<LocationSelector />
			</section>

			{/* About MyPrayerTimes Section */}
			<AboutMPTSection />

			<TrendingStories />
		</main>
	);
}
