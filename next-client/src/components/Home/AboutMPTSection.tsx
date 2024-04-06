import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutMPTSection = () => {
	return (
		<section className="mx-auto mt-16 h-fit w-11/12 lg:mx-auto lg:mb-8 lg:flex lg:h-[406px] lg:w-9/12 lg:flex-row-reverse lg:gap-14 xl:w-7/12">
			<div className="mb-[50px] lg:-order-1 lg:m-0 lg:w-1/2">
				<div className="mx-auto mb-10 flex w-full flex-col text-center lg:!ml-0 lg:!mr-0 lg:mb-11 lg:w-full lg:justify-between lg:text-left">
					<h2 className="mb-3 text-2xl font-bold leading-[30px] lg:text-[45px] lg:font-semibold lg:leading-[57px]">
						About MyPrayerTimes
					</h2>

					<hr className="mx-auto mb-[25px] w-20 rounded-xl border-4 border-green-secondary lg:!ml-0 lg:w-16 lg:bg-green-secondary" />

					<p className="font-light text-[#848280] lg:leading-[29px]">
						MyPrayerTimes is a community-driven platform providing accurate and
						reliable prayer times to Muslims of diverse backgrounds. Our mission
						is to empower and engage the global Ummah through accurate prayer
						times and informative content.
					</p>
				</div>

				<Link
					href="/about"
					className="mx-auto flex w-fit flex-row items-center gap-4 rounded-full border border-green-secondary px-[25px] py-[14px] text-xs font-semibold text-green-secondary transition-colors hover:bg-green-secondary hover:text-white lg:!ml-0 lg:text-lg"
				>
					<p>Learn more</p>
					<ArrowRight />
				</Link>
			</div>

			{/* Two Image Section */}
			<div className="mx-auto mb-28 flex w-full flex-row gap-4 lg:m-0 lg:h-full lg:w-1/2 lg:justify-between">
				<div className="relative mb-11 h-[150px] w-11/12 lg:mb-14 lg:h-[200px] lg:w-5/12">
					<Image
						className="rounded-lg object-cover"
						src={'/masjid_1.png'}
						alt=""
						fill={true}
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
				<div className="relative mt-11 h-[150px] w-11/12 lg:mt-14 lg:h-[200px] lg:w-5/12">
					<Image
						className="rounded-lg object-cover"
						src={'/masjid_2.png'}
						alt=""
						fill={true}
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutMPTSection;
