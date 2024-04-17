import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import SupportTicketForm from "~/components/SupportTicketForm";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

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
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <SupportTicketForm />
      </main>
    </>
  );
}
