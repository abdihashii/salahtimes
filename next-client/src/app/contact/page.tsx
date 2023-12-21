import ContactForm from '@/components/Contact/ContactForm';

export default function ContactUsPage() {
  return (
    <main className="pb-16">
      <h1 className="mx-auto mb-6 mt-10 w-10/12 text-center text-3xl font-semibold leading-10 lg:mb-8 lg:mt-6 lg:w-5/12 lg:pt-16 lg:text-6xl">
        Get in touch!
      </h1>
      <h2 className="leading-22px mx-auto mb-10 w-10/12 text-center text-sm font-normal lg:mb-16 lg:w-5/12 lg:text-lg lg:font-medium">
        We&apos;d love to hear from you! Please fill out the form below and we
        will get back to you as soon as possible.
      </h2>

      {/* Form */}
      <ContactForm />
    </main>
  );
}
