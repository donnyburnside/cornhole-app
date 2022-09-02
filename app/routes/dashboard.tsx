import {
  LoaderFunction
} from "@remix-run/node";
import {
  Outlet,
} from "@remix-run/react";

import { Layout } from "~/components/layout";
import { Hero } from "~/components/hero";
import { Leaderboard } from "~/components/leaderboard";
import { Export } from "~/components/export";

export const loader: LoaderFunction = async ({ request }) => {
  // Fake some loading
  // Used to check a user is authenticated, fetch data, etc
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Completed server-side tasks, returning nothing
  return null;
}

export default function Dashboard() {
  return (
    <Layout>
      <main className="col-span-full sm:col-span-2 sm:self-start mb-10 sm:mb-0">
        <Hero />
      </main>

      <aside className="col-span-full sm:col-span-1 sm:self-start">
        <Leaderboard />
        <Export />
      </aside>

      <Outlet />
    </Layout>
  );
}
