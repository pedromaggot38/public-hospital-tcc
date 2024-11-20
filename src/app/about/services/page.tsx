import BreadCrumb from "@/components/breadcrump";
import Image from "next/image";

const ServicesAboutPage = () => {
  const sections = [
    {
      title: "Urgência e Emergência",
      description:
        "Nosso setor de Urgência e Emergência está preparado para atender prontamente a todas as situações críticas. Contamos com uma equipe de profissionais altamente qualificados e equipamentos modernos para garantir o atendimento rápido e eficaz.",
      image:
        "/ServicesAboutPage/emergencia.jpg",
      reverse: false,
    },
    {
      title: "Consulta com Ortopedista para Traumas/Fraturas",
      description:
        "Especialistas em ortopedia estão disponíveis para avaliar e tratar traumas e fraturas. Utilizamos técnicas avançadas de diagnóstico por imagem e tratamentos personalizados para garantir a melhor recuperação possível.",
      image:
        "/ServicesAboutPage/ortopedista.jpg",
      reverse: true,
    },
    {
      title: "Consulta com Cirurgião Geral",
      description:
        "Nossos cirurgiões gerais estão à disposição para consultas e procedimentos cirúrgicos diversos. Desde pequenas intervenções até cirurgias mais complexas, oferecemos um atendimento abrangente e humanizado.",
      image:
        "/ServicesAboutPage/cirurgiao_geral.jpg",
      reverse: false,
    },
    {
      title: "Consulta com Anestesista",
      description:
        "Antes de qualquer procedimento cirúrgico, nossos anestesistas realizam consultas detalhadas para garantir sua segurança e conforto. Avaliamos seu histórico médico e esclarecemos todas as suas dúvidas.",
      image:
        "/ServicesAboutPage/anestesia.jpg",
      reverse: true,
    },
    {
      title: "Exames Radiográficos",
      description:
        "Oferecemos exames de radiografia com tecnologia de ponta para diagnósticos precisos e rápidos. Nossos profissionais garantem a realização dos exames com cuidado e precisão.",
      image:
        "/ServicesAboutPage/radiografia.jpg",
      reverse: false,
    },
    {
      title: "Eletrocardiograma (ECG)",
      description:
        "Realizamos exames de eletrocardiograma para avaliar a atividade elétrica do coração. Este exame é essencial para o diagnóstico de diversas condições cardíacas.",
      image:
        "/ServicesAboutPage/eletrocardiograma-ecg.jpg",
      reverse: true,
    },
    {
      title: "Laboratoriais",
      description:
        "Nosso laboratório está equipado para realizar uma ampla gama de exames laboratoriais. Oferecemos resultados precisos e rápidos, fundamentais para o diagnóstico e monitoramento de condições de saúde.",
      image:
        "/ServicesAboutPage/Laboratoriais.jpg",
      reverse: false,
    },
    {
      title: "Anatomopatológico",
      description:
        "Oferecemos serviços de exames anatomopatológicos, essenciais para o diagnóstico de diversas condições médicas. Nossos patologistas garantem uma análise detalhada e precisa.",
      image:
        "/ServicesAboutPage/anatomopatologico.png",
      reverse: true,
    },
    {
      title: "Tococardiografia",
      description:
        "O tococardiograma é um exame importante para monitorar a saúde fetal durante a gravidez. Utilizamos equipamentos modernos para acompanhar a frequência cardíaca do bebê.",
      image:
        "/ServicesAboutPage/tococardiografia.jpg",
      reverse: false,
    },
  ];

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Sobre", href: "/about" },
          { label: "Serviços", href: "/about/services" },
        ]}
      />
      {sections.map((section, index) => (
        <section
          key={index}
          className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
        >
          <div
            className={`p-6 md:p-8 lg:px-12 lg:py-16 ${section.reverse ? "sm:order-last" : ""
              }`}
          >
            <div
              className={`mx-auto max-w-lg text-center ${section.reverse ? "sm:text-right" : "sm:text-left"
                }`}
            >
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                {section.title}
              </h2>
              <p className="mt-4 text-sm text-gray-500">{section.description}</p>
            </div>
          </div>
          <Image
            alt={section.title}
            src={section.image}
            className={`h-64 w-full object-cover ${section.reverse ? "sm:rounded-br-[20px]" : "sm:rounded-bl-[20px]"
              }`}
            width={1000}
            height={1000}
          />
        </section>
      ))}
    </div>
  );
};

export default ServicesAboutPage;
