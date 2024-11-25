import { LastArticles } from "@/components/lastArticles";
import LastArticlesCarousel from "@/components/lastArticlesCarousel";
import DoctorsSection from "@/components/sections/doctors";
import PromoSection from "@/components/sections/promo";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <PromoSection />
      <div className="mb-4">
        <LastArticlesCarousel />
      </div>
      <div className="flex mx-auto gap-6">
        <div className="flex flex-col gap-4">
          <DoctorsSection />
          <ServicesSection />
        </div>
        <div className="w-[20%] hidden xl:block">
          <LastArticles />
        </div>
      </div>
    </div>

  );
}