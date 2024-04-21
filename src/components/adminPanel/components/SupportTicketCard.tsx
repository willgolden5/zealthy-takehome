import { type Status } from "@prisma/client";
import { useRouter } from "next/router";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex h-28 w-full rounded bg-white p-2 shadow">
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  const contentClassName = `p-4 w-full ${className ?? ""}`;
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
  const descriptionClassName = `${className ?? ""} text-gray-600 truncate overflow-ellipsis`;
  return <p className={descriptionClassName}>{children}</p>;
};

interface ComponentProps {
  name: string;
  email: string;
  description: string;
  status: Status;
  id: number;
}

const SupportTicketCard: React.FC<ComponentProps> = ({
  name,
  email,
  description,
  status,
  id,
}) => {
  const router = useRouter();

  const formattedStatus = status === "inProgress" ? "in-progress" : status;

  const handleClick = async () => {
    await router.push(`/ticket/${id}`).catch(console.error);
  };
  return (
    <div
      className="w-full max-w-sm cursor-pointer py-2 lg:max-w-xl"
      onClick={handleClick}
    >
      <Card>
        <CardContent className="mr-auto flex w-[50%] flex-col gap-1 py-4">
          <div className="pb-2 text-sm font-medium leading-none text-gray-500">
            <span className="font-semibold">{name}</span>
            {` <${email}>`}
          </div>
          <CardDescription className="h-full w-full text-sm">
            {description}
          </CardDescription>
        </CardContent>
        <CardContent className="ml-auto flex w-[50%]">
          <div className="ml-auto flex items-center space-x-1">
            <p className="text-xs font-thin">status:</p>
            <span
              className={`rounded-md border p-1
            ${
              status === "new"
                ? "border-red-500 text-red-500"
                : status === "resolved"
                  ? "border-green-500 text-green-500"
                  : "border-blue-500 text-blue-500"
            }
            h-8 text-sm font-semibold`}
            >
              {formattedStatus}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportTicketCard;
