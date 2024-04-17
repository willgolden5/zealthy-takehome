import SupportTicketCard from "./components/SupportTicketCard";

export type FeedData = {
  id: number;
  name: string;
  email: string;
  message: string;
  status: "new" | "in-progress" | "resolved";
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
