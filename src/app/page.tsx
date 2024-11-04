import { LastArticles } from "@/components/lastArticles";
import DoctorsSection from "@/components/sections/doctors/page";

export default function Home() {
  return (
    <div className="flex mx-auto">
      <div className="">
        <DoctorsSection />
      </div>
      <div className="w-[20%]">
        <LastArticles />
      </div>
    </div>
  );
}