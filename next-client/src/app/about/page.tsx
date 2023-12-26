import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-grow flex-col pb-10 lg:pb-16">
      <section
        className="shadow-bg_layer bg-cover bg-no-repeat pb-14 text-center text-white lg:bg-center lg:pb-28"
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
            className="w-max rounded-full bg-green-dark px-8 py-4 font-medium leading-loose transition-colors hover:bg-green-secondary"
          >
            See Our FAQs
          </Link>

          <Link
            href="/contact"
            className="w-max rounded-full border-2 border-[#FFFAF5] px-12 py-4 font-medium leading-loose transition-colors hover:border-gray-400"
          >
            Contact Us
          </Link>
        </article>
      </section>
    </main>
  );
}
