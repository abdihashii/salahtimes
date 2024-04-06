import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createExcerpt, sanitizeDate } from '@/lib/utils';

const BlogPosts = ({ items }: { items: any[] }) => {
	return (
		<section className="flex flex-col gap-14 lg:mx-auto lg:grid lg:w-9/12 lg:grid-cols-3 lg:gap-8 lg:py-24">
			{items.slice(1, 4).map((item: any) => (
				<article key={item} className="">
					<Link
						className="group flex h-fit w-full flex-col justify-between gap-5"
						href={`/blog/${item.slug}`}
					>
						{/* Hero image */}
						<div className="aspect-h-1 aspect-w-2 relative lg:h-2/3">
							<Image
								className="rounded-lg object-cover lg:rounded-none"
								alt={item.postHeaderImage.description}
								src={item.postHeaderImage.url}
								fill={true}
							/>
						</div>

						{/* Title */}
						<p className="text-lg font-medium capitalize leading-6 group-hover:underline">
							{item.title}
						</p>

						{/* Excerpt */}
						<p className="line-clamp-2">{createExcerpt(item.intro)}</p>

						{/* Author and date */}
						<div className="flex flex-row items-center gap-4">
							<span className="h-11 w-11 rounded-full bg-yellow-400"></span>
							<div className="flex flex-col">
								<p className="text-lg">{item.author}</p>
								<p className="text-sm text-gray-400">
									{sanitizeDate(item.date)}
								</p>
							</div>
						</div>
					</Link>
				</article>
			))}
		</section>
	);
};

export default BlogPosts;
