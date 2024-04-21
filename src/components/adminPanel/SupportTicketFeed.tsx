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
const SupportTicketFeed = ({ items }: FeedProps) => {
  return (
    <div className="flex max-h-[screen-200px] flex-col items-center overflow-x-auto p-2">
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
