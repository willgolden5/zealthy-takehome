import Head from "next/head";
import SupportTicketForm from "~/components/SupportTicketForm";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SupportTicketForm />
      </main>
    </>
  );
}
