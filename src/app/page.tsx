import DoctorsSection from "@/components/sections/doctors";
import ServicesSection from "@/components/sections/services";
import { getLastArticlesFromDB } from "@/lib/articles";
import LastArticlesCarousel from "@/components/lastArticlesCarousel";
import { Article } from "@/types/interfaces";
import { LastArticles } from "@/components/lastArticles";

export const dynamic = "force-dynamic";

export default async function Home() {
  let lastArticles: Article[] = [];

  try {
    lastArticles = await getLastArticlesFromDB();
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
  }

  return (
    <div>
      <div className="mb-4">
        <LastArticlesCarousel articles={lastArticles} />
      </div>
      <div className="flex mx-auto gap-6">
        <div className="flex flex-col gap-4">
          <DoctorsSection />
          <ServicesSection />
        </div>

        <div className="w-[20%] hidden xl:block">
          <LastArticles articles={lastArticles} />
        </div>
      </div>
    </div>
  );
}
