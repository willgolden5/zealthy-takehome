import { Status } from "@prisma/client";
import SupportTicketCard from "./components/SupportTicketCard";

export type FeedData = {
  id: number;
  name: string;
  email: string;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
};

type FeedProps = {
  items: FeedData[];
};
// sorting this by new > inProgress > resolved.

// I'd likely use a table here for a production application.
// Given time constraints, I'm opting for a simpler solution.
const SupportTicketFeed = ({ items }: FeedProps) => {
  return (
    <div className="flex max-h-[725px] flex-col items-center overflow-x-auto p-2 lg:max-h-[90vh]">
      {items
        .sort((a, b) => {
          if (a.status === "new" && b.status !== "new") {
            return -1;
          } else if (a.status === "inProgress" && b.status === "resolved") {
            return -1;
          } else if (a.status === "resolved" && b.status !== "resolved") {
            return 1;
          } else {
            return 0;
          }
        })
        .map((item) => (
          <SupportTicketCard key={item.id} {...item} />
        ))}
    </div>
  );
};

export default SupportTicketFeed;
