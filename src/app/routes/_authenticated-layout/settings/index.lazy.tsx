import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createLazyFileRoute("/_authenticated-layout/settings/")({
  component: Settings,
});

function Settings() {
  return (
    <main>
      <div className="divide-y">
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full flex items-center gap-x-8">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">Change avatar</Button>
                  <p className="mt-2 text-xs text-gray-500">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-3">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="mt-2"
                  value=""
                />
              </div>

              <div className="sm:col-span-3">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="mt-2"
                />
              </div>

              <div className="col-span-full">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2"
                  value=""
                />
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold">Change password</h2>
            <p className="mt-1 text-sm text-gray-500">
              Update your password associated with your account.
            </p>
          </div>

          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full">
                <Label htmlFor="current-password">Current password</Label>
                <Input
                  id="current-password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-2"
                />
              </div>

              <div className="col-span-full">
                <Label htmlFor="new-password">New password</Label>
                <Input
                  id="new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  className="mt-2"
                />
              </div>

              <div className="col-span-full">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold">Delete account</h2>
            <p className="mt-1 text-sm text-gray-500">
              No longer want to use our service? You can delete your account
              here. This action is not reversible. All information related to
              this account will be deleted permanently.
            </p>
          </div>

          <form className="flex items-start md:col-span-2">
            <Button type="submit" variant="destructive">
              Yes, delete my account
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
