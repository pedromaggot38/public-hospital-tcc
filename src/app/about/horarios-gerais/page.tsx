import BreadCrumb from "@/components/breadcrumb";
import PagesTitles from "@/components/pagesTitles";
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
      <PagesTitles title="Horários Gerais" />
      <div className="max-w-4xl mx-auto">
        <SchedulesSection />
      </div>
    </div>
  );

};

export default ServicesAboutPage;
