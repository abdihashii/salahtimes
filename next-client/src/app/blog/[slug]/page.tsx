import { marked } from 'marked';

export default async function BlogSlugPage({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const { slug } = params;
	const query = `
    {
      blogPostCollection(where: { slug: "${slug}" }) {
        items {
          title
          author
          date
          intro
          postHeaderImage {
            url
            description
          }
          heroImageCredit
          body
        }
      }
    }
  `;

	const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
	console.log(contentfulUrl);
	console.log(`slug: ${slug}`);

	const resp = await fetch(contentfulUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({ query }),
	});

	const {
		data: {
			blogPostCollection: { items },
		},
	} = await resp.json();

	const { title, author, date, intro, postHeaderImage, heroImageCredit, body } =
		items[0];

	const contentHTML = marked.parse(body);

	return (
		<main>
			<h1>{title}</h1>
			<p>{author}</p>
			<p>{date}</p>
			<p>{intro}</p>
			<img src={postHeaderImage.url} alt={postHeaderImage.description} />
			<p>{heroImageCredit}</p>

			<div dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
		</main>
	);
}
