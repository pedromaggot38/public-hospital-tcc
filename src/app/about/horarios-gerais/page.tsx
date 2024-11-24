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

      <div className="max-w-4xl mx-auto p-4">
        <SchedulesSection />
      </div>
    </div>
  );

};

export default ServicesAboutPage;
