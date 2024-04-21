import { api } from "~/utils/api";
import Textarea from "./DesignSystem/TextArea";
import { useToast } from "~/hooks/useToast";
import Label from "@design-system/Label";
import Input from "@design-system/Input";
import Button from "@design-system/Button";

const SupportTicketForm = () => {
  const create = api.ticket.create.useMutation();
  const toast = useToast();

  // I would normally be using something like react-hook-form here
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    create.mutate({
      name: `${(form.firstName as HTMLInputElement).value} ${(form.lastName as HTMLInputElement).value}`,
      email: (form.email as HTMLInputElement).value,
      description: (form.message as HTMLTextAreaElement).value,
    });
    toast(
      "Thank You!",
      "Your support ticket has been submitted. 🎉",
      "success",
    );
    form.reset();
  };

  return (
    <div className="xs:w-full p-4 py-6 lg:w-1/3">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Submit a ticket</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p>
      </div>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">How can we help you?</Label>
          <Textarea
            className="min-h-[100px]"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SupportTicketForm;
