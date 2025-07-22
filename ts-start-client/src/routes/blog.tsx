import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogComponent,
});

function BlogComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <p>Read our latest articles about Islamic practices and prayer times.</p>
    </div>
  );
}