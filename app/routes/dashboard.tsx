import {
  LoaderFunction
} from "@remix-run/node";
import {
  Outlet,
} from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  // Fake some loading
  // Used to check a user is authenticated, fetch data, etc
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Completed server-side tasks, returning nothing
  return null;
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
