import { LastArticles } from "@/components/lastArticles";
import Hero from "@/components/sections/hero/page";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[75%] p-4">
        <Hero />
      </div>
      <div className="w-[25%]">
        <LastArticles />
      </div>
    </div>
  );
}