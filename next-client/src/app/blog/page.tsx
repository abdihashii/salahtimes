import Image from 'next/image';
import Link from 'next/link';
import { sanitizeDate } from '@/lib/utils';
import SubscribeToNewsletter from '@/components/SubscribeToNewsletter';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
};

export default async function BlogPage() {
	// const createExcerpt = (text: string) => {};

	const query = `
    {
      blogPostCollection(order: date_DESC, limit: 7) {
        total
        items {
          slug
          title
          intro
          author
          date
          postHeaderImage {
            url
            description
          }
        }
      }
    }
  `;

	const resp = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({ query }),
		},
	);

	const {
		data: {
			blogPostCollection: { items },
		},
	} = await resp.json();

	return (
		<main className="flex flex-grow flex-col gap-16 py-10 font-light lg:py-16">
			{/* Title */}
			<h1 className="text-center font-semibold capitalize lg:text-6xl">
				Welcome to our Blog
			</h1>

			{/* Featured Post section */}
			<section className="lg:bg-green-secondary lg:bg-opacity-15 lg:py-24 dark:lg:bg-opacity-30">
				{/* Wrapper for featured post */}
				<article className="lg:mx-auto lg:grid lg:min-h-[500px] lg:w-9/12 lg:grid-cols-2 lg:gap-16">
					{/* Left side */}
					<div className="relative mx-auto h-full w-full">
						<Image
							className="object-cover"
							src={items[0].postHeaderImage.url}
							alt={items[0].postHeaderImage.description}
							fill={true}
						/>
					</div>

					{/* Right side */}
					<div className="flex flex-col gap-5">
						<h2 className="lg:text-2xl lg:font-bold">Featured Blog Post</h2>
						<Link
							className="text-lg font-normal leading-6 underline lg:text-4xl lg:leading-[55px] "
							href={`/blog/${items[0].slug}`}
						>
							{items[0].title}
						</Link>

						<p className="text-[#848280] lg:leading-7">
							Text excerpt goes here Text excerpt goes here Text excerpt goes
							here Text excerpt goes here Text excerpt goes here Text excerpt
						</p>

						{/* Author and date */}
						<div className="flex flex-row items-center gap-4">
							<span className="h-12 w-12 rounded-full bg-yellow-400"></span>

							<div className="flex flex-col">
								<p className="text-text-layout_text text-lg lg:text-xl">
									{items[0].author}
								</p>
								<p className="text-sm lg:text-base">
									{sanitizeDate(items[0].date)}
								</p>
							</div>
						</div>
					</div>
				</article>
			</section>

			{/* Three blog posts */}
			<section className="lg:mx-auto lg:grid lg:w-9/12 lg:grid-cols-3 lg:gap-8 lg:py-24">
				{items.slice(1, 4).map((item: any) => (
					<article key={item} className="min-h-[450px] overflow-hidden">
						<Link
							className="group flex h-full w-full flex-col justify-between gap-5"
							href={`/blog/${item.slug}`}
						>
							{/* Hero image */}
							<div className="relative h-2/3">
								<Image
									className="object-cover"
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
							<p className="line-clamp-2">
								Excerpt goes here Excerpt goes here Excerpt goes here Excerpt
								goes here Excerpt goes here Excerpt goes here Excerpt goes here
								Excerpt goes here Excerpt goes here
							</p>

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

			{/* Newsletter section */}
			<SubscribeToNewsletter />
		</main>
	);
}
