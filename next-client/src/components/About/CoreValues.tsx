import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoreValues = () => {
	return (
		<section className="flex w-11/12 flex-col gap-10 lg:mx-auto lg:mt-40 lg:w-9/12 xl:w-7/12">
			<article className="space-y-5 text-center">
				<h2 className="text-2xl font-bold leading-8 lg:text-5xl lg:font-semibold lg:leading-[57px]">
					Our Core Values
				</h2>

				<p className="text-[#848280] lg:leading-7">
					Discover the guiding principles that shape our mission and vision at
					MyPrayerTimes.
				</p>
			</article>

			<article className="flex h-auto flex-col gap-10 lg:grid lg:grid-cols-3">
				<div className="max-w-[370px] space-y-5">
					<div>
						<Image src="/iman.jpg" alt="" width="370" height="400" />
						<Link
							href="/"
							target="_blank"
							className="inline-block text-xs text-[#717171]"
						>
							Photo by Abdullah Arid | Unsplash
						</Link>
					</div>

					<p className="text-xl font-medium">Iman (Faith)</p>
					<p className="text-[#717171]">
						At MyPrayerTimes, we believe that faith is the foundation of a
						meaningful and fulfilling life as a Muslim. We strive to provide
						content and resources that deepen knowledge and connection with
						Allah.
					</p>
				</div>

				<div className="max-w-[370px] space-y-5">
					<div>
						<Image src="/integrity.jpg" alt="" width="370" height="400" />
						<Link
							href="/"
							target="_blank"
							className="inline-block text-xs text-[#717171]"
						>
							Photo by Zach Reiner | Unsplash
						</Link>
					</div>

					<p className="text-xl font-medium">Integrity + Transparency</p>
					<p className="text-[#717171]">
						We pride ourselves on being open and upfront with our users,
						providing accurate and reliable salah times and being transparent in
						our practices.
					</p>
				</div>

				<div className="max-w-[370px] space-y-5">
					<div>
						<Image src="/quality.jpg" alt="" width="370" height="400" />
						<Link
							href="/"
							target="_blank"
							className="inline-block text-xs text-[#717171]"
						>
							Photo by Jon Tyson | Unsplash
						</Link>
					</div>

					<p className="text-xl font-medium">Commitment to Quality</p>
					<p className="text-[#717171]">
						We aim to provide the highest quality content and user experience,
						from accurate prayer times to informative and well-researched blog
						posts about prayer in Islam.
					</p>
				</div>
			</article>
		</section>
	);
};

export default CoreValues;
