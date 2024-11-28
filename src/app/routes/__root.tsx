import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryProvider } from "@/lib/query";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <QueryProvider>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </QueryProvider>
  );
}
