import { Metadata } from 'next';

import SubscribeToNewsletter from '@/components/SubscribeToNewsletter';
import FeaturedPost from '@/components/Blog/FeaturedPost';
import BlogPosts from '@/components/Blog/BlogPosts';

export const metadata: Metadata = {
	title: 'Blog',
};

export default async function BlogPage() {
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
		<main className="mx-auto flex w-11/12 flex-grow flex-col gap-16 py-10 font-light lg:w-full lg:py-16">
			{/* Title */}
			<h1 className="text-center text-[32px] font-semibold capitalize leading-[39px] lg:text-6xl">
				Welcome to our Blog
			</h1>

			{/* Featured Post section */}
			<FeaturedPost item={items[0]} />

			{/* Three blog posts */}
			<BlogPosts items={items} />

			{/* Newsletter section */}
			<SubscribeToNewsletter />
		</main>
	);
}
