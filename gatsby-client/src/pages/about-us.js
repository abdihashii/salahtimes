import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BackgroundSection from '../pages/bg-image';

const Home = () => {
  return (
    <BackgroundSection>
      <Layout>
        <div className="mx-auto flex w-11/12 flex-col items-center gap-8 rounded-20px border border-green-dark bg-white py-8 px-4">
          <h1 className="text-5xl">About Us</h1>
          <p>
            Welcome to MyPrayerTimes.com! We are a team of Muslims passionate
            about prayer and its importance to our faith. Our goal is to provide
            accurate and reliable prayer times for Muslims worldwide, no matter
            where they are.
          </p>
          <p>
            With our easy-to-use website, you can get your prayer times for your
            current location with just a few clicks. Never miss your daily salah
            again with our reliable prayer time calculator.
          </p>
          <p>
            But we continue beyond providing prayer times. We also write
            high-quality content on all things salah. From helpful tips for
            Muslims and reverts to in-depth articles on the history and
            significance of prayer in Islam, we strive to be a go-to resource
            for anyone looking to learn more about this vital aspect of our
            faith.
          </p>
          <p>
            We can strengthen our connection to Islam by coming together as a
            community and sharing our knowledge and learnings about salah. We
            are committed to passing on the teachings of Islam to future
            generations and strive to create a welcoming and inclusive space
            where people of all backgrounds can learn and grow together. By
            sharing our knowledge and learnings about prayer, we hope to create
            a stronger, more connected community of believers.
          </p>
          <p>
            Thank you for visiting MyPrayerTimes.com. We hope our website helps
            you stay on track with your daily salah and brings you closer to
            Allah. May peace and blessings be upon you.
          </p>
        </div>
      </Layout>
    </BackgroundSection>
  );
};

export const Head = () => {
  return (
    <>
      <Seo pageTitle={'About Us'} />
    </>
  );
};

export default Home;
