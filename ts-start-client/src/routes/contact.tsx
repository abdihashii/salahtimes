import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  component: ContactComponent,
});

function ContactComponent() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 py-16">
      <h1 className="w-10/12 text-center text-4xl font-semibold lg:w-5/12 lg:text-6xl">
        Get in touch!
      </h1>
      <h2 className="w-10/12 text-center text-sm font-normal lg:w-5/12 lg:text-lg lg:font-medium">
        We&apos;d love to hear from you! Please fill out the form below and we
        will get back to you as soon as possible.
      </h2>

      {/* Form */}
      <ContactForm />
    </div>
  );
}
