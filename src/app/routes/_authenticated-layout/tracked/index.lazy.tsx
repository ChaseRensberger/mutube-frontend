import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { getTrackedChannels } from "@/lib/horizon";
import { Separator } from "@/components/ui/separator";
export const Route = createLazyFileRoute("/_authenticated-layout/tracked/")({
  component: Tracked,
});

function Tracked() {
  const { data: channels } = useQuery({
    queryKey: ["tracked"],
    queryFn: getTrackedChannels,
  });
  return (
    <div>
      <h1 className="text-2xl font-bold">Tracked</h1>
      <Separator className="my-4" />
      <ul className="list-disc pl-4">
        {channels?.map((channel) => (
          <li key={channel.channelId}>{channel.alias}</li>
        ))}
      </ul>
    </div>
  );
}
