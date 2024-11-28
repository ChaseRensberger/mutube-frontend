import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/_authenticated-layout/browse/")({
  component: Browse,
});

function Browse() {
  return (
    <main>
      <h1>Browse</h1>
    </main>
  );
}
