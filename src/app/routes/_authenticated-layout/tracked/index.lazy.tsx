import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated-layout/tracked/")({
  component: Tracked,
});

function Tracked() {
  return (
    <div>
      <h1>Tracked</h1>
    </div>
  );
}
