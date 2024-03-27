import Link from 'next/link';
import React from 'react';

const AboutUsHeader = () => {
	return (
		<section
			className="bg-cover bg-no-repeat pb-14 text-center text-white shadow-bg_layer lg:bg-center lg:pb-28"
			style={{
				backgroundImage: 'url("/masjid_bg_wide.webp")',
			}}
		>
			<article className="mx-auto mb-14 mt-28 flex w-10/12 flex-col gap-5 text-center lg:mt-[11.563rem] lg:w-6/12 lg:gap-10">
				<h1 className="text-[32px] font-medium leading-10 lg:text-6xl">
					Who We Are
				</h1>
				<h2 className="text-[13px] font-light leading-6 text-[#D2D2D2] lg:text-lg lg:font-normal">
					MyPrayerTimes is a community-driven platform providing accurate and
					reliable prayer times to Muslims of diverse backgrounds. Our mission
					is to empower and engage the global Ummah through accurate prayer
					times and informative content.
				</h2>
			</article>

			<article className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-[21px]">
				<Link
					href="/faqs"
					className="flex w-1/2 items-center justify-center rounded-full border-2 border-green-dark bg-green-dark px-8 py-2 font-medium leading-loose transition-colors hover:border-green-secondary hover:bg-green-secondary lg:w-[200px] lg:py-4"
				>
					See Our FAQs
				</Link>

				<Link
					href="/contact"
					className="flex w-1/2 items-center justify-center rounded-full border-2 border-[#FFFAF5] px-8 py-2 font-medium leading-loose transition-colors hover:border-gray-400 lg:w-[200px] lg:py-4"
				>
					Contact Us
				</Link>
			</article>
		</section>
	);
};

export default AboutUsHeader;
