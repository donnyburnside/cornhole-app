import {
  LoaderFunction
} from "@remix-run/node";
import {
  Outlet
} from "@remix-run/react";

import { Layout } from "~/components/layout";

export const loader: LoaderFunction = async ({ request }) => {
  // Fake some loading
  // Used to check a user is authenticated, fetch data, etc
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Completed server-side tasks, returning nothing
  return null
}

export default function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <Outlet />
    </Layout>
  );
}
