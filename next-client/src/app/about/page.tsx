import Image from 'next/image';
import Link from 'next/link';

export default async function AboutPage() {
	const blogQuery = `
    {
      blogPostCollection(limit: 6) {
        items {
          sys {
            id
          }
          title
          slug
          date
          postHeaderImage {
            url
          }
        }
      }
    }
  `;

	const res = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({ query: blogQuery }),
		},
	);

	const {
		data: {
			blogPostCollection: { items: blogs },
		},
	} = await res.json();

	return (
		<main className="flex flex-grow flex-col pb-10 lg:pb-16">
			{/* Header Section */}
			<section
				className="bg-cover bg-no-repeat pb-14 text-center text-white shadow-bg_layer lg:bg-center lg:pb-28"
				style={{
					backgroundImage: 'url("/masjid_bg_wide.webp")',
				}}
			>
				<article className="mx-auto mb-14 mt-28 flex w-10/12 flex-col space-y-10 text-center lg:mt-[11.563rem] lg:w-6/12">
					<h1 className="font-semibold leading-10 lg:text-6xl">Who We Are</h1>
					<h2 className="font-normal leading-6 text-[#D2D2D2] lg:text-lg lg:font-medium">
						MyPrayerTimes is a community-driven platform providing accurate and
						reliable prayer times to Muslims of diverse backgrounds. Our mission
						is to empower and engage the global Ummah through accurate prayer
						times and informative content.
					</h2>
				</article>

				<article className="flex flex-row justify-center gap-5">
					<Link
						href="/faqs"
						className="flex w-max items-center rounded-full bg-green-dark px-8 py-2 font-medium leading-loose transition-colors hover:bg-green-secondary"
					>
						See Our FAQs
					</Link>

					<Link
						href="/contact"
						className="flex w-max items-center rounded-full border-2 border-[#FFFAF5] px-8 py-2 font-medium leading-loose transition-colors hover:border-gray-400"
					>
						Contact Us
					</Link>
				</article>
			</section>

			{/* Mission and Vision Section */}
			<section className="lg:mx-auto lg:mt-28 lg:flex lg:w-9/12 lg:flex-row lg:gap-20 xl:w-7/12">
				<article className="relative mx-auto w-11/12 lg:w-1/2">
					<div className="absolute bottom-0 right-0 h-5/6 w-10/12 bg-green-secondary"></div>

					<div className="relative left-0 top-0 h-5/6 w-10/12">
						<Image
							className="object-cover"
							src="/sheikh-zayed-grand-mosque.jpg"
							alt="Sheikh Zayed Grand Mosque, Abu Dhabi"
							fill={true}
						/>
					</div>
				</article>

				<div className="space-y-10 lg:w-1/2">
					<article className="space-y-5">
						<h2 className="mb-3 text-2xl font-bold leading-8 lg:text-5xl lg:font-semibold lg:leading-[57px]">
							Our Mission
						</h2>

						<hr className="mx-auto w-20 rounded-xl border-4 border-green-secondary lg:ml-0 lg:w-16 lg:bg-green-secondary" />

						<p className="text-[#848280] lg:leading-7">
							To empower Muslims of diverse backgrounds with accurate and
							reliable Islamic prayer times while providing informative content
							to deepen understanding and connection with Allah and our faith.
							Guided by principles of integrity, transparency, and love for
							Allah, we strive to establish a community of believers who stay on
							track with their daily salah and continue to learn and grow in
							their spiritual journey.
						</p>
					</article>

					<article className="space-y-5">
						<h2 className="leading-30px lg:leading-57px mb-3 text-2xl font-bold lg:text-5xl lg:font-semibold">
							Our Vision
						</h2>

						<hr className="mx-auto w-20 rounded-xl border-4 border-green-secondary lg:ml-0 lg:w-16 lg:bg-green-secondary" />

						<p className="text-[#848280] lg:leading-7">
							To be a global platform that engages the Ummah and inspires a
							deeper connection and love for Salah through accurate prayer times
							and high-quality, well-researched content. We aspire to be known
							as the go-to website for all things related to Islamic prayer and
							to have a substantial impact on our users.
						</p>
					</article>
				</div>
			</section>

			{/* Core Values Section */}
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
							providing accurate and reliable salah times and being transparent
							in our practices.
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

			{/* Our Pledge Section */}
			<section
				className="text-center text-white lg:mt-28 lg:py-20"
				style={{
					background: 'linear-gradient(100.39deg, #122318 0.8%, #00260E 100%)',
				}}
			>
				<h2 className="mb-8 text-3xl font-bold lg:text-[45px]">Our Pledge</h2>
				<p className="mx-auto mb-9 w-11/12 lg:w-7/12 xl:w-6/12">
					Our pledge is to provide accurate and reliable Islamic prayer times
					for Muslims of diverse backgrounds. We are committed to upholding
					principles of integrity, transparency, and love for Allah. These
					principles guide our work as we strive to establish a community of
					believers who stay on track with their daily salah and continue to
					learn and grow in their spiritual journey.
				</p>
				<hr className="mx-auto mb-9 w-6/12 lg:w-3/12" />
				<p className="mx-auto mb-9 w-11/12 lg:w-7/12 xl:w-6/12">
					&quot;If anyone fulfils his brother&apos;s needs, Allah will fulfil
					his needs; if one relieves a Muslim of his troubles, Allah will
					relieve his troubles on the Day of Resurrection.&quot;
				</p>
				<p>Prophet Muhammad ﷺ, Sahih Bukhari</p>
			</section>

			{/* Trending Stories Section */}
			<section className="mx-auto flex w-11/12 flex-col lg:mt-28 lg:w-9/12 xl:w-7/12">
				<article className="space-y-5 text-center">
					<h2 className="text-2xl font-bold leading-8 lg:text-[40px] ">
						Must-Read Stories Of The Month
					</h2>

					<p className="text-[#848280] lg:leading-7">
						Stay informed and inspired with our top-trending stories of the
						month.
					</p>
				</article>

				<article className="lg:grid lg:grid-cols-3 lg:gap-10">
					{blogs.map((blog: any) => (
						<Link
							key={blog.sys.id}
							href={`/blog/${blog.slug}`}
							className="relative inline-block hover:lg:underline"
						>
							<Image src={blog.postHeaderImage.url} alt="" fill />
							<p>{blog.title}</p>
							<p>{blog.date}</p>
						</Link>
					))}
				</article>
			</section>
		</main>
	);
}
