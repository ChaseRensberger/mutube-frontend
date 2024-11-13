import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated-layout/composer/")({
  component: Composer,
});

function Composer() {
  return <div>Composer</div>;
}
