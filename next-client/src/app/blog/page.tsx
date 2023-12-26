export default async function BlogPage() {
  const createExcerpt = (text: string) => {};

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
    }
  );

  const json = await resp.json();

  return (
    <main>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </main>
  );
}
