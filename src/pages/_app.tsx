import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ToastProvider } from "~/components/DesignSystem/Toast/ToastContext";
import Head from "next/head";
import ToastContainer from "~/components/DesignSystem/Toast/ToastContainer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ToastProvider>
        <Head>
          <title>Zealthy Ticketing Service</title>
          <meta
            name="description"
            content="Ticketing service take home assessment for Zealthy."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={`font-sans ${inter.variable}`}>
          <Component {...pageProps} />
          <ToastContainer />
        </main>
      </ToastProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
