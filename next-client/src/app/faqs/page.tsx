const faqs = [
  {
    general: [
      {
        question: 'What is MyPrayerTimes.com?',
        answer:
          'MyPrayerTimes.com is a website that helps users find the most accurate Islamic prayer times. We also provide high-quality content related to Islamic prayer.',
      },
      {
        question: 'How does MyPrayerTimes.com work?',
        answer:
          'MyPrayerTimes.com uses advanced algorithms and data sources to calculate the most accurate Islamic prayer times for any location in the world. You can search for prayer times by location or use their device&apos;s GPS to automatically find their location.',
      },
    ],
  },
  {
    prayerTimes: [
      {
        question: 'How accurate are the prayer times on MyPrayerTimes.com?',
        answer:
          'We use astronomical calculations to calculate prayer times. This ensures that our prayer times are as accurate as possible.',
      },
      {
        question: 'How often are the prayer times updated?',
        answer:
          'We update our prayer times daily to ensure it&apos;s always accurate and up-to-date.',
      },
    ],
  },
  {
    content: [
      {
        question: 'What kind of content does MyPrayerTimes.com provide?',
        answer:
          'MyPrayerTimes.com provides high-quality content related to Islamic prayer, including articles. We cover topics such as the benefits of prayer, how to perform prayer, and the history of Islamic prayer.',
      },
      {
        question: 'Is the content on MyPrayerTimes.com only for Muslims?',
        answer:
          'We welcome anyone to benefit from learning about Islamic prayer! So please feel here to check our content to learn more about Islamic Prayer.',
      },
      {
        question: 'Can I contribute content to MyPrayerTimes.com?',
        answer:
          'Yes! We welcome contributions from anyone who has knowledge or expertise in Islamic prayer. Contact us for more information.',
      },
    ],
  },
  {
    contact: [
      {
        question: 'How can I contact MyPrayerTimes.com?',
        answer: 'You can contact us through our website&apos;s contact form.',
      },
    ],
  },
];

export default function FaqPages() {
  const generalFaqs = faqs[0].general;
  const prayerTimesFaqs = faqs[1].prayerTimes;
  const contentFaqs = faqs[2].content;
  const contactFaqs = faqs[3].contact;

  return (
    <main className="flex flex-grow flex-col space-y-16 py-10 lg:py-16">
      {/* Title Section */}
      <h1 className="mx-auto mb-6 w-10/12 text-center text-3xl font-semibold leading-10 lg:mb-7 lg:w-5/12 lg:text-6xl">
        Frequently Asked Questions (FAQs)
      </h1>

      {/* General Questions Section */}
      <section className="mx-auto w-10/12 space-y-8 lg:w-5/12">
        <h2 className="text-3xl font-semibold text-green-dark lg:text-5xl dark:text-green-secondary">
          General Questions
        </h2>
        {generalFaqs!.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold lg:text-2xl">
              {faq.question}
            </h3>
            <p className="leading-relaxed lg:text-lg lg:leading-loose">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      {/* Prayer Times Questions Section */}
      <section className="mx-auto w-10/12 space-y-8 lg:w-5/12">
        <h2 className="text-3xl font-semibold text-green-dark lg:text-5xl dark:text-green-secondary">
          Prayer Times Questions
        </h2>
        {prayerTimesFaqs!.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold lg:text-2xl">
              {faq.question}
            </h3>
            <p className="leading-relaxed lg:text-lg lg:leading-loose">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      {/* Content Questions Section */}
      <section className="mx-auto w-10/12 space-y-8 lg:w-5/12">
        <h2 className="text-3xl font-semibold text-green-dark lg:text-5xl dark:text-green-secondary">
          Content Questions
        </h2>
        {contentFaqs!.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold lg:text-2xl">
              {faq.question}
            </h3>
            <p className="leading-relaxed lg:text-lg lg:leading-loose">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      {/* Contact Questions Section */}
      <section className="mx-auto w-10/12 space-y-8 lg:w-5/12">
        <h2 className="text-3xl font-semibold text-green-dark lg:text-5xl dark:text-green-secondary">
          Contact Questions
        </h2>
        {contactFaqs!.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold lg:text-2xl">
              {faq.question}
            </h3>
            <p className="leading-relaxed lg:text-lg lg:leading-loose">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
