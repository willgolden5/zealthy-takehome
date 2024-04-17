import Head from "next/head";
import SupportTicketForm from "~/components/SupportTicketForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zealthy Ticketing Service</title>
        <meta
          name="description"
          content="Ticketing service take home assessment for Zealthy."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SupportTicketForm />
      </main>
    </>
  );
}
