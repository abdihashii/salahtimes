import Image from 'next/image';
import { Metadata } from 'next';

import ReactMarkdown from 'react-markdown';
import { components } from './markdownComponents';

import { cosmic } from '@/lib/cosmicBucketClient';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import SubscribeToNewsletter from '@/components/SubscribeToNewsletter';

dayjs.extend(advancedFormat);

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const slug = params.slug;

	const { title } = await getBlogPost(slug);

	return {
		title: title,
	};
}

const getBlogPost = async (slug: string) => {
	const blogPost = await cosmic.objects
		.findOne({
			type: 'blog-posts',
			slug: slug,
		})
		.props(['title', 'slug', 'metadata']);

	const { title, metadata } = blogPost.object;
	const { author, date, intro, hero_image, hero_image_credit, body } = metadata;

	const formattedDateString = dayjs(date).format('MMM Do, YYYY');

	return {
		title,
		author,
		formattedDateString,
		intro,
		hero_image,
		hero_image_credit,
		body,
	};
};

export default async function BlogSlugPage({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const { slug } = params;

	const {
		title,
		author,
		formattedDateString,
		intro,
		hero_image,
		hero_image_credit,
		body,
	} = await getBlogPost(slug);

	return (
		<main className="mb-14 mt-9 lg:mt-24">
			<div className="mx-auto mb-12 w-10/12 text-left dark:text-white">
				<section className="">
					<h1 className="mb-[30px] text-xl font-semibold text-[#0f0700] lg:mx-auto lg:w-7/12 lg:text-[40px] lg:font-medium lg:leading-[55px]">
						{title}
					</h1>

					{/* Author, Date, and Share Links */}
					<div className="mb-8 flex flex-row items-center gap-4 lg:mx-auto lg:w-7/12">
						{/* Author's image */}
						<span
							style={{
								width: '46px',
								height: '46px',
								backgroundColor: 'yellow',
								borderRadius: '46px',
							}}
							className="lg:hidden"
						></span>
						<span
							style={{
								width: '53px',
								height: '53px',
								backgroundColor: 'yellow',
								borderRadius: '53px',
							}}
							className="hidden lg:block"
						></span>

						{/* Author name and date */}
						<div className="flex flex-col gap-1">
							<p className="text-base text-[#0f0700] lg:text-xl">{author}</p>
							<p className="text-xs text-[#848280] lg:text-lg">
								{formattedDateString}
							</p>
						</div>
					</div>
				</section>

				<section className="mb-7 lg:mx-auto lg:w-7/12">
					<ReactMarkdown components={components}>{intro}</ReactMarkdown>
				</section>

				{/* Hero Image */}
				<section className="h-fit w-full ">
					<div className="relative h-[600px] w-full">
						<Image
							className="object-cover"
							src={hero_image.url}
							alt={hero_image_credit}
							fill={true}
						/>
					</div>
					<ReactMarkdown components={components}>
						{hero_image_credit}
					</ReactMarkdown>
				</section>

				{/* Blog Post Body */}
				<section className="mt-7 lg:mx-auto lg:w-7/12">
					<ReactMarkdown components={components}>{body}</ReactMarkdown>
				</section>
			</div>

			{/* Subscribe to Newsletter */}
			<SubscribeToNewsletter />
		</main>
	);
}
