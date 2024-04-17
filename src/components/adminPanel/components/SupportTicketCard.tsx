import { Status } from "@prisma/client";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="rounded bg-white shadow">{children}</div>;
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  const contentClassName = `p-4 ${className || ""}`;
  return <div className={contentClassName}>{children}</div>;
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  const descriptionClassName = `${className || ""} text-gray-600`;
  return <p className={descriptionClassName}>{children}</p>;
};

interface ComponentProps {
  name: string;
  email: string;
  description: string;
  status: Status;
}

const SupportTicketCard: React.FC<ComponentProps> = ({
  name,
  email,
  description,
  status,
}) => {
  return (
    <div className="w-full max-w-sm py-2">
      <Card>
        <CardContent className="flex h-20 flex-col gap-1 py-4">
          <div className="text-sm font-medium leading-none text-gray-500">
            <span className="font-semibold">{name}</span>
            {` <${email}>`}
          </div>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardContent>
        <CardContent className="flex flex-1 items-center justify-center space-x-2 p-4">
          <p>status:</p>
          <span
            className={`rounded-md border p-1
            ${
              status === "new"
                ? "border-red-500 text-red-500"
                : status === "resolved"
                  ? "border-green-500 text-green-500"
                  : "border-blue-500 text-blue-500"
            }
            text-sm font-semibold`}
          >
            {status}
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportTicketCard;
