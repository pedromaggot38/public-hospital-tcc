import BreadCrumb from "@/components/breadcrumb";
import Image from "next/image";
import { medicalConsultations, medicalExams } from "./servicesData"
import PagesTitles from "@/components/pagesTitles";

const ServicesAboutPage = () => {

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Sobre", href: "/about" },
          { label: "Tipos de Atendimento", href: "/about/services" },
        ]}
      />
      <PagesTitles title="Tipos de Atendimento" />
      <div className="m-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultas Médicas</h2>
        {medicalConsultations.map((section, index) => (
          <section
            key={index}
            className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center mb-4"
          >
            <div
              className={`p-6 md:p-8 lg:px-12 lg:py-16 ${section.reverse ? "sm:order-last" : ""}`}
            >
              <div
                className={`mx-auto max-w-lg text-center ${section.reverse ? "sm:text-right" : "sm:text-left"}`}
              >
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{section.title}</h3>
                <p className="mt-4 text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
            <Image
              alt={section.title}
              src={section.image}
              className={`h-64 w-full object-cover ${section.reverse ? "sm:rounded-br-[20px]" : "sm:rounded-bl-[20px]"}`}
              width={1000}
              height={1000}
            />
          </section>
        ))}
      </div>

      <div className="m-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exames Médicos</h2>
        {medicalExams.map((section, index) => (
          <section
            key={index}
            className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center mb-4"
          >
            <div
              className={`p-6 md:p-8 lg:px-12 lg:py-16 ${section.reverse ? "sm:order-last" : ""}`}
            >
              <div
                className={`mx-auto max-w-lg text-center ${section.reverse ? "sm:text-right" : "sm:text-left"}`}
              >
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{section.title}</h3>
                <p className="mt-4 text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
            <Image
              alt={section.title}
              src={section.image}
              className={`h-64 w-full object-cover ${section.reverse ? "sm:rounded-br-[20px]" : "sm:rounded-bl-[20px]"}`}
              width={1000}
              height={1000}
            />
          </section>
        ))}
      </div>
    </div>
  );

};

export default ServicesAboutPage;
