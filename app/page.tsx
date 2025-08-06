import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Button className="p-20 text-6xl bg-surface text-text rounded-full cursor-pointer hover:bg-secondary">
        <Link href="courses">Get Started for see courses!</Link>
      </Button>
    </main>
  );

}