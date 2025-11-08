import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function authenticated() {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/sign-in");
  }
  return session;
}

export async function guest() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/");
  }
}