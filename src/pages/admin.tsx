import SupportTicketFeed, {
  type FeedData,
} from "~/components/adminPanel/SupportTicketFeed";
import { signIn, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const AdminPage = () => {
  const { data, isLoading } = api.ticket.getAll.useQuery();
  const { status } = useSession();

  if (isLoading || status === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    signIn().catch(console.error);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="space-y-2 pt-2">
        <h1 className="text-3xl font-bold">Support Ticket Feed</h1>
        <p className="pb-4 text-gray-500 dark:text-gray-400">
          Click on a ticket below to view more details.
        </p>
      </div>
      <SupportTicketFeed items={data as FeedData[]} />
    </div>
  );
};

export default AdminPage;
