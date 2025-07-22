import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex-1 w-full">
      <h1>Hello World</h1>
    </main>
  );
}
