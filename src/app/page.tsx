import { LastArticles } from "@/components/lastArticles";
import Hero from "@/components/sections/hero/page";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Seção principal da página inicial */}
      <div className="w-[70%] p-4">
        <Hero />
      </div>

      {/* Seção fixa de últimas notícias */}
      <LastArticles />
    </div>
  );
}