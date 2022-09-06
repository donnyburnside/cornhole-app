import {
  LoaderFunction
} from "@remix-run/node";
import {
  Link,
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
        <Link className="inline-flex flex-row flex-nowrap justify-center items-center w-full sm:w-auto mt-2.5 px-6 py-3 text-sm leading-none text-center text-white bg-indigo-600" to="new">
          New Game
        </Link>
      </main>

      <aside className="col-span-full sm:col-span-1 sm:self-start">
        <Leaderboard />
        <Export />
      </aside>

      <Outlet />
    </Layout>
  );
}
