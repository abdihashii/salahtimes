import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import QuestionSection from '../components/faqs/questionSection';
import Question from '../components/faqs/question';
import { Link } from 'gatsby';

const Faqs = () => {
  return (
    <Layout>
      <main className="pb-16 text-black">
        <h1 className="mx-auto mt-10 mb-22px w-10/12 text-center text-32px font-bold leading-39px text-green-dark lg:mt-6 lg:mb-30px lg:w-5/12 lg:pt-16 lg:text-6xl">
          Frequently Asked Questions (FAQs)
        </h1>
        <h2 className="mx-auto mb-12 w-10/12 text-center text-13px font-normal leading-22px lg:mb-28 lg:w-5/12 lg:text-lg lg:font-medium">
          Here are some common questions and answers about our website and
          services:
        </h2>

        {/* General Questions Section */}
        <QuestionSection title="General Questions" className="">
          <Question
            title="What is MyPrayerTimes.com?"
            question={[
              'MyPrayerTimes.com is a website that helps users find the most accurate Islamic prayer times. We also provide ',
              <Link className="text-green-dark underline" to="/blog/">
                high-quality content
              </Link>,
              ' related to Islamic prayer.',
            ]}
          />
          <Question
            title="How does MyPrayerTimes.com work?"
            question={[
              'MyPrayerTimes.com uses advanced algorithms and data sources to calculate the most accurate Islamic prayer times for any location in the world. You can ',
              <Link className="text-green-dark underline" to="/">
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
              <Link className="text-green-dark underline" to="/blog/">
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
              <Link className="text-green-dark underline" to="/contact-us/">
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
              <Link className="text-green-dark underline" to="/contact-us/">
                contact form
              </Link>,
              '.',
            ]}
          />
        </QuestionSection>
      </main>
    </Layout>
  );
};

export const Head = () => {
  return <Seo pageTitle="FAQs" />;
};

export default Faqs;
