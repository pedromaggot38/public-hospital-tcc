import BreadCrumb from "@/components/breadcrumb";
import { SchedulesSection } from "@/components/sections/schedules";

const ServicesAboutPage = () => {

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Sobre", href: "/about" },
          { label: "Horários Gerais", href: "/about/horarios-gerais" },
        ]}
      />
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-5 mb-4">
        Horários Gerais
      </h2>
      <div className="max-w-4xl mx-auto">
        <SchedulesSection />
      </div>
    </div>
  );

};

export default ServicesAboutPage;
