import Link from 'next/link';

import QuestionSection from './QuestionSection';
import Question from './Question';

export default function FaqPages() {
	return (
		<main className="flex flex-grow flex-col space-y-16 py-10 lg:py-16">
			{/* Title Section */}
			<h1 className="mx-auto mb-6 w-10/12 text-center text-3xl font-semibold leading-10 lg:mb-7 lg:w-5/12 lg:text-6xl">
				Frequently Asked Questions (FAQs)
			</h1>

			<QuestionSection title="General Questions" className="">
				<Question
					title="What is MyPrayerTimes.com?"
					question={[
						'MyPrayerTimes.com is a website that helps users find the most accurate Islamic prayer times. We also provide ',
						<Link
							key="quality-content-link"
							className="text-green-dark underline"
							href="/blog"
						>
							high-quality content
						</Link>,
						' related to Islamic prayer.',
					]}
				/>
				<Question
					title="How does MyPrayerTimes.com work?"
					question={[
						'MyPrayerTimes.com uses advanced algorithms and data sources to calculate the most accurate Islamic prayer times for any location in the world. You can ',
						<Link
							key="prayertimes-link"
							className="text-green-dark underline"
							href="/"
						>
							search for prayer times
						</Link>,
						" by location or use their device's GPS to automatically find their location.",
					]}
				/>
			</QuestionSection>

			{/* Prayer Times Questions Section */}
			<QuestionSection title="Prayer Times Questions" className="">
				<Question
					title="How accurate are the prayer times on MyPrayerTimes.com?"
					question="We use astronomical calculations to calculate prayer times. This ensures that our prayer times are as accurate as possible."
				/>
				<Question
					title="How often are the prayer times updated?"
					question="We update our prayer times daily to ensure it's always accurate and up-to-date."
				/>
			</QuestionSection>

			{/* Content Questions Section */}
			<QuestionSection title="Content Questions" className="">
				<Question
					title="What kind of content does MyPrayerTimes.com provide?"
					question={[
						'MyPrayerTimes.com provides ',
						<Link
							key="blog-content-link"
							className="text-green-dark underline"
							href="/blog"
						>
							high-quality content
						</Link>,
						' related to Islamic prayer, including articles. We cover topics such as the benefits of prayer, how to perform prayer, and the history of Islamic prayer.',
					]}
				/>
				<Question
					title="Is the content on MyPrayerTimes.com only for Muslims?"
					question="We welcome anyone to benefit from learning about Islamic prayer! So please feel here to check our content to learn more about Islamic Prayer."
				/>
				<Question
					title="Can I contribute content to MyPrayerTimes.com?"
					question={[
						'Yes! We welcome contributions from anyone who has knowledge or expertise in Islamic prayer. ',
						<Link
							key="contact-us-link"
							className="text-green-dark underline"
							href="/contact"
						>
							Contact us
						</Link>,
						' for more information.',
					]}
				/>
			</QuestionSection>

			{/* Contact Us Section */}
			<QuestionSection title="Contact Us" className="">
				<Question
					title="How can I contact MyPrayerTimes.com?"
					question={[
						"You can contact us through our website's ",
						<Link
							key="contact-form-link"
							className="text-green-dark underline"
							href="/contact"
						>
							contact form
						</Link>,
						'.',
					]}
				/>
			</QuestionSection>
		</main>
	);
}
