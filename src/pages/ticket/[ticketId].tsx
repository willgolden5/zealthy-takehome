import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "~/components/designSystem/Button";
import Label from "~/components/designSystem/Label";
import Textarea from "~/components/designSystem/TextArea";
import { useToast } from "~/hooks/useToast";
import { api } from "~/utils/api";

const TicketPage = () => {
  const [status, setStatus] = useState("new");
  const toast = useToast();
  const router = useRouter();
  const { ticketId } = router.query;
  const numberTicketId = parseInt(ticketId as string, 10);
  const respond = api.ticket.respond.useMutation();
  const { data, isLoading } = api.ticket.getById.useQuery({
    id: numberTicketId,
  });

  useEffect(() => {
    data?.status && setStatus(data?.status);
  }, [data?.status]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const response: string = (form.response as HTMLTextAreaElement).value;
    respond.mutate({
      id: numberTicketId,
      status,
      response,
    });
    toast(
      "Response Submitted",
      "Your response has been sent to the customer. Thank you!",
      "info",
    );
    console.log("Would normally send email here with body:", response);
    form.reset();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="container mx-auto p-2">
        <div className="flex flex-col rounded-md bg-white p-2 shadow-md lg:p-6">
          <p
            onClick={handleBack}
            className="font-md flex w-20 cursor-pointer py-2 text-sm text-gray-500 hover:text-gray-900 "
          >
            ← Back
          </p>
          <h2 className="mb-4 text-xl font-bold">Support Ticket #{ticketId}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Name:
              </label>
              <p className="focus:shadow-outline w-full px-3 py-2 leading-tight text-gray-700">
                {data?.name}
              </p>
            </div>
            <div className="mb-4">
              <label
                className="mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email:
              </label>
              <p className="focus:shadow-outline w-full  px-3 py-2 leading-tight text-gray-700">
                {data?.email}
              </p>
            </div>
            <div className="mb-6">
              <label
                className="mb-2 text-sm font-bold text-gray-700"
                htmlFor="message"
              >
                Message:
              </label>
              <p className="focus:shadow-outline w-full px-3 py-2 leading-tight text-gray-700">
                {data?.description}
              </p>
            </div>
            <div className="flex w-full flex-col space-y-2">
              <div className="flex w-full items-center space-x-2">
                <Label htmlFor="status">Status:</Label>
                <select
                  className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
                  value={status}
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="new">New</option>
                  <option value="inProgress">In-progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
              <div className="w-full pb-2">
                <Label htmlFor="response">Response:</Label>
                <Textarea
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="response"
                />
              </div>
            </div>
            <div>
              <Button
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="submit"
              >
                Submit Response
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
