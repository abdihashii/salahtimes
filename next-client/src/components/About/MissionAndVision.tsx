import Image from 'next/image';
import React from 'react';

const MissionAndVision = () => {
	return (
		<section className="lg:mx-auto lg:mt-28 lg:flex lg:w-9/12 lg:flex-row lg:gap-20 xl:w-7/12">
			<article className="relative mx-auto w-11/12 lg:w-1/2">
				<div className="absolute bottom-0 right-0 h-5/6 w-10/12 bg-green-secondary"></div>

				<div className="relative left-0 top-0 h-5/6 w-10/12">
					<Image
						className="object-cover"
						src="/sheikh-zayed-grand-mosque.jpg"
						alt="Sheikh Zayed Grand Mosque, Abu Dhabi"
						fill={true}
					/>
				</div>
			</article>

			<div className="space-y-10 lg:w-1/2">
				<article className="space-y-5">
					<h2 className="mb-3 text-2xl font-bold leading-8 lg:text-5xl lg:font-semibold lg:leading-[57px]">
						Our Mission
					</h2>

					<hr className="mx-auto w-20 rounded-xl border-4 border-green-secondary lg:ml-0 lg:w-16 lg:bg-green-secondary" />

					<p className="text-[#848280] lg:leading-7">
						To empower Muslims of diverse backgrounds with accurate and reliable
						Islamic prayer times while providing informative content to deepen
						understanding and connection with Allah and our faith. Guided by
						principles of integrity, transparency, and love for Allah, we strive
						to establish a community of believers who stay on track with their
						daily salah and continue to learn and grow in their spiritual
						journey.
					</p>
				</article>

				<article className="space-y-5">
					<h2 className="leading-30px lg:leading-57px mb-3 text-2xl font-bold lg:text-5xl lg:font-semibold">
						Our Vision
					</h2>

					<hr className="mx-auto w-20 rounded-xl border-4 border-green-secondary lg:ml-0 lg:w-16 lg:bg-green-secondary" />

					<p className="text-[#848280] lg:leading-7">
						To be a global platform that engages the Ummah and inspires a deeper
						connection and love for Salah through accurate prayer times and
						high-quality, well-researched content. We aspire to be known as the
						go-to website for all things related to Islamic prayer and to have a
						substantial impact on our users.
					</p>
				</article>
			</div>
		</section>
	);
};

export default MissionAndVision;
