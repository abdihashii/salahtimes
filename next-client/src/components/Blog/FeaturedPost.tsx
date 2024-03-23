import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createExcerpt, sanitizeDate } from '@/lib/utils';

const FeaturedPost = ({ item }: { item: any }) => {
	return (
		<section className="lg:bg-green-secondary lg:bg-opacity-15 lg:py-24 dark:lg:bg-opacity-30">
			{/* Wrapper for featured post */}
			<article className="lg:mx-auto lg:grid lg:min-h-[500px] lg:w-9/12 lg:grid-cols-2 lg:gap-16">
				{/* Left side */}
				<div className="relative mx-auto h-full w-full">
					<Image
						className="object-cover"
						src={item.postHeaderImage.url}
						alt={item.postHeaderImage.description}
						fill={true}
					/>
				</div>

				{/* Right side */}
				<div className="flex flex-col gap-5">
					<h2 className="lg:text-2xl lg:font-bold">Featured Blog Post</h2>
					<Link
						className="text-lg font-normal leading-6 underline lg:text-4xl lg:leading-[55px] "
						href={`/blog/${item.slug}`}
					>
						{item.title}
					</Link>

					<p className="line-clamp-3 text-[#848280] lg:leading-7">
						{createExcerpt(item.intro)}
					</p>

					{/* Author and date */}
					<div className="flex flex-row items-center gap-4">
						<span className="h-12 w-12 rounded-full bg-yellow-400"></span>

						<div className="flex flex-col">
							<p className="text-text-layout_text text-lg lg:text-xl">
								{item.author}
							</p>
							<p className="text-sm lg:text-base">{sanitizeDate(item.date)}</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default FeaturedPost;
