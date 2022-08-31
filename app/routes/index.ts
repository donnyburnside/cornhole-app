import {
  LoaderFunction,
  redirect
} from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  // Fake some loading
  // Used to check a user is authenticated, fetch data, etc
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Redirect to the dashboard
  return redirect("/dashboard");
}
