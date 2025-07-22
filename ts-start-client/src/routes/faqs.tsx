import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faqs")({
  component: FAQsComponent,
});

function FAQsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p>Find answers to common questions about prayer times.</p>
    </div>
  );
}