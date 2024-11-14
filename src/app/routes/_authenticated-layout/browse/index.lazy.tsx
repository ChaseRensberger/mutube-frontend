import { createLazyFileRoute } from "@tanstack/react-router";
import { Auth0ContextInterface, useAuth0, type User } from "@auth0/auth0-react";
export const Route = createLazyFileRoute("/_authenticated-layout/browse/")({
  component: Browse,
});

function Browse() {
  const { user }: Auth0ContextInterface<User> = useAuth0();
  return (
    <main>
      <h1>Browse</h1>
      <p>{JSON.stringify(user)}</p>
    </main>
  );
}
