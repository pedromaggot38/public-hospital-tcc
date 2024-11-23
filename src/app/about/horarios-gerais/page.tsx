import BreadCrumb from "@/components/breadcrumb";

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
        <h1 className="text-3xl font-bold mb-6">Informações Importantes</h1>

        {/* Seção de Atendimento */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Atendimentos</h2>
          <div>
            <h3 className="font-semibold">Pronto Socorro</h3>
            <p>Avenida José Bonifácio, 382, centro - Maracaí/SP</p>
            <p>Atendimento 24h por dia, 7 dias por semana</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Exames Radiológicos</h3>
            <p>Avenida José Bonifácio, 382, centro - Maracaí/SP</p>
            <p>Atendimento de segunda a sexta-feira</p>
            <p>Horário: 7:00h às 12h e das 16h às 21h</p>
            <p>Atendimento aos finais de semana: Sábado 7h às 12h, Domingo 7h às 11h</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Internação</h3>
            <p>Avenida José Bonifácio, 382, centro - Maracaí/SP</p>
            <p>Atendimento 24h por dia, 7 dias por semana</p>
          </div>
        </section>

        {/* Seção de Orientação para Pacientes e Acompanhantes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Orientações para Pacientes e Acompanhantes</h2>
          <p>Seja Bem-vindo à AHBM. Este guia foi elaborado para melhor atendê-lo durante a sua estadia neste Hospital.</p>
          <p>Ele contém informações sobre as normas de funcionamento, visando proporcionar o bem-estar dos pacientes e familiares.</p>
        </section>

        {/* Seção de Horários de Visita */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Horários de Visita</h2>
          <div>
            <p><strong>Tarde:</strong> 14:00 às 15:00</p>
            <p><strong>Noite:</strong> 19:00 às 20:00</p>
          </div>
          <h3 className="mt-6 text-xl font-semibold">Horários de Troca de Acompanhante</h3>
          <div>
            <p><strong>Manhã:</strong> 07:30 às 08:30</p>
            <p><strong>Tarde:</strong> 13:00 às 14:00</p>
            <p><strong>Noite:</strong> 19:30 às 20:30</p>
          </div>
        </section>

        {/* Seção de Refeições */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Refeições</h2>
          <p>As refeições são servidas pelo setor de Nutrição em horários padronizados e devem ser consumidas no mesmo momento, pois posteriormente as funcionárias recolherão as bandejas, marmitas, copos e refeições não consumidas.</p>
          <p>É proibido o descarte de restos de alimentos e das refeições nos lixos dos quartos. As sobras deverão ser mantidas nas embalagens fornecidas e recolhidas em local apropriado.</p>
        </section>

        {/* Seção de Uso de Máscaras e Regras de Acompanhantes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regras de Acompanhantes e Uso de Máscaras</h2>
          <p><strong>Obrigatório o uso de máscara.</strong></p>
          <p>Acompanhantes são permitidos para pacientes menores de 18 anos, acima de 60 anos, parturientes e pacientes com deficiência. A equipe de enfermagem e serviço social avaliará a necessidade de acompanhamento nos demais casos.</p>
        </section>

        {/* Seção de Identificação de Acompanhantes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Identificação de Acompanhantes</h2>
          <p>É obrigatório o uso de crachá de identificação visível. Ele será entregue pelo vigia na recepção; após a visita, devolva o crachá.</p>
          <p>É permitido a entrada de uma visita por vez, podendo fazer revezamento, sendo obrigatório o uso de crachá em local visível.</p>
        </section>

        {/* Seção de Trajes e Proibição de Alimentos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trajes e Proibição de Alimentos</h2>
          <p>Não é permitido trazer qualquer tipo de alimento e bebidas sem autorização prévia da nutricionista.</p>
          <p>Não é permitido a entrada de visitantes e acompanhantes usando trajes inadequados.</p>
        </section>
      </div>
    </div>
  );

};

export default ServicesAboutPage;
