import { LastArticles } from "@/components/lastArticles";
import Hero from "@/components/sections/hero/page";

export default function Home() {
  return (
    <div className="flex mx-auto">
      <div className="">
        <Hero />
      </div>
      <div className="w-[20%]">
        <LastArticles />
      </div>
    </div>
  );
}