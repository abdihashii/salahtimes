import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoreValues = () => {
	return (
		<section className="mx-auto mb-10 flex w-11/12 flex-col gap-10 lg:mx-auto lg:mt-28 lg:w-9/12 lg:gap-20 xl:w-7/12">
			<article className="space-y-5 text-center">
				<h2 className="text-2xl font-bold leading-8 lg:text-5xl lg:font-semibold lg:leading-[57px]">
					Our Core Values
				</h2>

				<hr className="mx-auto mb-[25px] w-20 rounded-xl border-4 border-green-secondary lg:ml-0 lg:hidden lg:w-16 lg:bg-green-secondary" />

				<p className="font-light text-[#848280] lg:font-normal lg:leading-7">
					Discover the guiding principles that shape our mission and vision at
					MyPrayerTimes.
				</p>
			</article>

			<article className="flex h-auto flex-col gap-10 lg:grid lg:grid-cols-3">
				<div className="max-w-[370px]">
					<div className="relative h-[250px] w-[370px]">
						<Image
							className="rounded-lg lg:rounded-none"
							src="/iman.jpg"
							alt=""
							fill={true}
							sizes="(max-width: 370px) 100vw, 370px"
						/>
					</div>

					<Link
						href="https://unsplash.com/photos/blue-book-beside-brown-wooden-stick-Dxi6KbpvUgA"
						target="_blank"
						className="mb-5 inline-block text-xs text-[#717171]"
					>
						Photo by Abdullah Arid | Unsplash
					</Link>

					<p className="mb-5 text-xl font-medium">Iman (Faith)</p>
					<p className="text-[#717171]">
						At MyPrayerTimes, we believe that faith is the foundation of a
						meaningful and fulfilling life as a Muslim. We strive to provide
						content and resources that deepen knowledge and connection with
						Allah.
					</p>
				</div>

				<div className="max-w-[370px]">
					<div className="relative h-[250px] w-[370px]">
						<Image
							className="rounded-lg lg:rounded-none"
							src="/integrity.jpg"
							alt=""
							fill={true}
							sizes="(max-width: 370px) 100vw, 370px"
						/>
					</div>

					<Link
						href="https://unsplash.com/photos/tree-roots-on-rock-formation-hW11fwjzVfA"
						target="_blank"
						className="mb-5 inline-block text-xs text-[#717171]"
					>
						Photo by Zach Reiner | Unsplash
					</Link>

					<p className="mb-5 text-xl font-medium">Integrity + Transparency</p>
					<p className="text-[#717171]">
						We pride ourselves on being open and upfront with our users,
						providing accurate and reliable salah times and being transparent in
						our practices.
					</p>
				</div>

				<div className="max-w-[370px]">
					<div className="relative h-[250px] w-[370px]">
						<Image
							className="rounded-lg lg:rounded-none"
							src="/quality.jpg"
							alt=""
							fill={true}
							sizes="(max-width: 370px) 100vw, 370px"
						/>
					</div>

					<Link
						href="https://unsplash.com/photos/black-framed-magnifying-glass-ZSBFoikEu_Q"
						target="_blank"
						className="mb-5 inline-block text-xs text-[#717171]"
					>
						Photo by Jon Tyson | Unsplash
					</Link>

					<p className="mb-5 text-xl font-medium">Commitment to Quality</p>
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
