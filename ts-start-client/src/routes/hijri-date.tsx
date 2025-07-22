import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hijri-date")({
  component: HijriDateComponent,
});

function HijriDateComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hijri Date</h1>
      <p>View the current Islamic calendar date.</p>
    </div>
  );
}