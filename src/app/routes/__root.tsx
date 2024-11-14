import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryProvider } from "@/lib/query";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <QueryProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/browse`,
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
      >
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </Auth0Provider>
    </QueryProvider>
  );
}
