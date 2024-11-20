import BreadCrumb from "@/components/breadcrumb";

const ServicesAboutPage = () => {

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Sobre", href: "/about" },
          { label: "Horários de Atendimento", href: "/about/horarios-atendimento" },
        ]}
      />

    </div>
  );

};

export default ServicesAboutPage;
