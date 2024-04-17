import SupportTicketFeed, {
  FeedData,
} from "~/components/adminPanel/SupportTicketFeed";

const feedData: FeedData[] = [
  {
    id: 1,
    name: "Kendall Schmidt",
    email: "kendall@example.com",
    message: "My Wi-Fi isn't working. Can you help me out?",
    status: "new",
  },
  {
    id: 1,
    name: "Kendall Schmidt",
    email: "kendall@example.com",
    message: "My Wi-Fi isn't working. Can you help me out?",
    status: "resolved",
  },
  {
    id: 1,
    name: "Kendall Schmidt",
    email: "kendall@example.com",
    message: "My Wi-Fi isn't working. Can you help me out?",
    status: "in-progress",
  },
];

const AdminPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Support Ticket Feed</h1>
        <p className="pb-4 text-gray-500 dark:text-gray-400">
          Click on a ticket below to view more details.
        </p>
      </div>
      <SupportTicketFeed items={feedData} />
    </div>
  );
};

export default AdminPage;
