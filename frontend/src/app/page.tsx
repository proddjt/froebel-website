import { redirect } from "next/navigation";

// Temporary: the Mantine demo lives at /mantine until it becomes the real homepage.
export default function Home() {
  redirect("/home");
}
