import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated-layout')({
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  return (
    <nav>
      <div>This is some content</div>
      <div>This is also some content</div>
      <Outlet />
    </nav>
  )
}
