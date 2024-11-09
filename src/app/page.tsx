import { LastArticles } from "@/components/lastArticles";
import DoctorsSection from "@/components/sections/doctors";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div className="flex mx-auto gap-6">
      <div>
        <DoctorsSection />
        <ServicesSection />
      </div>
      <div className="w-[20%] hidden xl:block">
        <LastArticles />
      </div>
    </div>
  );
}