import Image from 'next/image';
import Link from 'next/link';
import { cosmic } from '@/lib/cosmicBucketClient';

import { ArrowRight } from 'lucide-react';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

type TBlogPost = {
	blogPosts: {
		id: string;
		title: string;
		slug: string;
		metadata: {
			date: string;
			hero_image: {
				url: string;
			};
		};
	};
};

const getBlogPosts = async (): Promise<TBlogPost[]> => {
	const data = await cosmic.objects
		.find({
			type: 'blog-posts',
		})
		.props(['id', 'title', 'slug', 'metadata.date', 'metadata.hero_image'])
		.limit(6);

	return data.objects;
};

const TrendingStories = async () => {
	const blogPosts = await getBlogPosts();

	return (
		<section className="mx-auto flex w-11/12 flex-col gap-10 lg:mt-36 lg:w-9/12 xl:w-7/12">
			<article className="space-y-5 text-center">
				<h2 className="text-2xl font-bold leading-8 lg:text-[40px] ">
					Must-Read Stories Of The Month
				</h2>

				<hr className="mx-auto mb-[25px] w-20 rounded-xl border-4 border-green-secondary lg:hidden" />

				<p className="text-[#848280] lg:leading-7">
					Stay informed and inspired with our top-trending stories of the month.
				</p>
			</article>

			<article className="flex flex-col gap-4 text-left lg:grid lg:grid-cols-3 lg:gap-8">
				{blogPosts.map((blogPost: any) => {
					const formattedDateString = dayjs(blogPost.metadata.date).format(
						'MMM Do, YYYY',
					);

					return (
						<Link
							key={blogPost.id}
							href={`/blog/${blogPost.slug}`}
							className="flex h-80 flex-col gap-2 lg:gap-4 hover:lg:underline"
						>
							<div className="relative h-44 w-full">
								<Image
									className="rounded-lg object-cover lg:rounded-none"
									src={blogPost.metadata.hero_image.url}
									alt={blogPost.title}
									fill={true}
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
								/>
							</div>
							<p className="line-clamp-2 text-xl text-[#222]">
								{blogPost.title}
							</p>
							<p className="text-lg font-light text-[#717171]">
								{formattedDateString}
							</p>
						</Link>
					);
				})}
			</article>

			<article>
				<Link
					href="/blog"
					className="mx-auto flex w-max flex-row items-center gap-2 rounded-full bg-green-dark px-8 py-3 text-xs font-medium text-white hover:bg-green-secondary lg:text-lg"
				>
					<p>See All Stories</p>
					<ArrowRight />
				</Link>
			</article>
		</section>
	);
};

export default TrendingStories;
