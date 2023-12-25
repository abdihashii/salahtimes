import ContactForm from '@/components/Contact/ContactForm';

export default function ContactUsPage() {
  return (
    <main className="flex flex-grow flex-col gap-10 py-10 lg:py-16 xl:mx-auto xl:w-1/2 xl:flex-row xl:items-center xl:gap-10">
      <section className="flex flex-col gap-8 xl:w-1/2">
        <h1 className="mx-auto w-10/12 text-center text-3xl font-semibold leading-10 lg:w-5/12 lg:text-6xl xl:w-full">
          Get in touch!
        </h1>
        <h2 className="leading-22px mx-auto w-10/12 text-center text-sm font-normal lg:w-5/12 lg:text-lg lg:font-medium xl:w-10/12">
          We&apos;d love to hear from you! Please fill out the form below and we
          will get back to you as soon as possible.
        </h2>
      </section>

      {/* Form */}
      <ContactForm />
    </main>
  );
}
