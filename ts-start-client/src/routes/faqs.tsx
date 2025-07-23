import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/faqs")({
  component: FAQsComponent,
});

const QuestionSection = ({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={`w-full ${className}`}>
      <h2 className="mb-6 text-3xl font-semibold lg:text-5xl">{title}</h2>
      {children}
    </section>
  );
};

const Question = ({
  title,
  question,
}: {
  title: string;
  question: string | React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
      <p className="leading-relaxed lg:text-lg lg:leading-loose">{question}</p>
    </div>
  );
};

function FAQsComponent() {
  return (
    <div className="container mx-auto flex w-5/6 flex-col gap-10 py-16 lg:w-5/12">
      <h1 className="w-full text-4xl font-semibold lg:text-6xl">
        Frequently Asked Questions (FAQs)
      </h1>
      <h2 className="text-lg lg:text-xl">
        Here are some common questions and answers about our website and
        services:
      </h2>

      {/* General Questions Section */}
      <QuestionSection
        title="General Questions"
        className="flex flex-col gap-6"
      >
        <Question
          title="What is MyPrayerTimes.com?"
          question={[
            "MyPrayerTimes.com is a website that helps users find the most accurate Islamic prayer times. We also provide ",
            <Link
              className="text-[#006307] underline hover:text-[#006307]/80"
              to="/blog"
            >
              high-quality content
            </Link>,
            " related to Islamic prayer.",
          ]}
        />
        <Question
          title="How does MyPrayerTimes.com work?"
          question={[
            "MyPrayerTimes.com uses advanced algorithms and data sources to calculate the most accurate Islamic prayer times for any location in the world. You can ",
            <Link
              className="text-[#006307] underline hover:text-[#006307]/80"
              to="/"
            >
              search for prayer times
            </Link>,
            " by location or use their device's GPS to automatically find their location.",
          ]}
        />
      </QuestionSection>

      {/* Prayer Times Questions Section */}
      <QuestionSection
        title="Prayer Times Questions"
        className="flex flex-col gap-6"
      >
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
      <QuestionSection
        title="Content Questions"
        className="flex flex-col gap-6"
      >
        <Question
          title="What kind of content does MyPrayerTimes.com provide?"
          question={[
            "MyPrayerTimes.com provides ",
            <Link
              className="text-[#006307] underline hover:text-[#006307]/80"
              to="/blog"
            >
              high-quality content
            </Link>,
            " related to Islamic prayer, including articles. We cover topics such as the benefits of prayer, how to perform prayer, and the history of Islamic prayer.",
          ]}
        />
        <Question
          title="Is the content on MyPrayerTimes.com only for Muslims?"
          question="We welcome anyone to benefit from learning about Islamic prayer! So please feel here to check our content to learn more about Islamic Prayer."
        />
        <Question
          title="Can I contribute content to MyPrayerTimes.com?"
          question={[
            "Yes! We welcome contributions from anyone who has knowledge or expertise in Islamic prayer. ",
            <Link
              className="text-[#006307] underline hover:text-[#006307]/80"
              to="/contact"
            >
              Contact us
            </Link>,
            " for more information.",
          ]}
        />
      </QuestionSection>

      {/* Contact Us Section */}
      <QuestionSection title="Contact Us" className="flex flex-col gap-6">
        <Question
          title="How can I contact MyPrayerTimes.com?"
          question={[
            "You can contact us through our website's ",
            <Link
              className="text-[#006307] underline hover:text-[#006307]/80"
              to="/contact"
            >
              contact form
            </Link>,
            ".",
          ]}
        />
      </QuestionSection>
    </div>
  );
}
