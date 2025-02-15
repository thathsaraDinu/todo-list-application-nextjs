import Home from "@/components/home-component";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Main() {
  const session = await getAuthSession();

  if (!session) {
    console.log("Redirecting to sign in");

    redirect("/auth/signin");
  }
  return <Home />;
}
