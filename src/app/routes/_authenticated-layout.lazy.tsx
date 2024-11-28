import { createLazyFileRoute, Outlet, Link } from "@tanstack/react-router";
import {
  YoutubeLogo,
  Atom,
  SlidersHorizontal,
  SignOut,
  ListBullets,
} from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export const Route = createLazyFileRoute("/_authenticated-layout")({
  component: AuthenticatedLayout,
});

const SidebarRoutes = [
  {
    title: "Browse",
    url: "/browse",
    icon: YoutubeLogo,
  },
  {
    title: "Composer",
    url: "/composer",
    icon: Atom,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SlidersHorizontal,
  },
  {
    title: "Tracked",
    url: "/tracked",
    icon: ListBullets,
  },
];

function AuthenticatedLayout() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {SidebarRoutes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <Link to={route.url}>
                      <route.icon size={24} />
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuButton>
                <SignOut size={24} />
                <span>Sign out</span>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </Sidebar>
      <main className="p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
