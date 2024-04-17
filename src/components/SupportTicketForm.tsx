import Button from "./designSystem/Button";
import Input from "./designSystem/Input";
import Label from "./designSystem/Label";
import Textarea from "./designSystem/TextArea";

const SupportTicketForm = () => {
  return (
    <div className="w-full py-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Submit a ticket</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill out the form below and we'll get back to you as soon as
          possible.
        </p>
      </div>
      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter your last name" />
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
