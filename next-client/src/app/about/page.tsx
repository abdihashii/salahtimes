import { cosmic } from '@/lib/cosmicBucketClient';

import AboutUsHeader from '@/components/About/AboutUsHeader';
import CoreValues from '@/components/About/CoreValues';
import MissionAndVision from '@/components/About/MissionAndVision';
import OurPledge from '@/components/About/OurPledge';
import TrendingStories from '@/components/About/TrendingStories';

export default async function AboutPage() {
	return (
		<main className="flex flex-grow flex-col pb-10 lg:pb-16">
			{/* Header Section */}
			<AboutUsHeader />

			{/* Mission and Vision Section */}
			<MissionAndVision />

			{/* Core Values Section */}
			<CoreValues />

			{/* Our Pledge Section */}
			<OurPledge />

			{/* Trending Stories Section */}
			<TrendingStories />
		</main>
	);
}
