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

const SupportTicketFeed = ({ items }: FeedProps) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <SupportTicketCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SupportTicketFeed;
