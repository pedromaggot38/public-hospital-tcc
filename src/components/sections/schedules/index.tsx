import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const sections = [
    {
        sectionTitle: "Horários de Funcionamento",
        items: [
            {
                title: "Pronto-Socorro",
                content: `
                    Endereço: Avenida José Bonifácio, 382, centro - Maracaí/SP.
                    Horários: Atendimento 24h por dia, 7 dias por semana.
                `,
            },
            {
                title: "Internação",
                content: `
                    Endereço: Avenida José Bonifácio, 382, centro - Maracaí/SP.
                    Horários: Atendimento 24h por dia, 7 dias por semana.
                `,
            },
            {
                title: "Exames Radiológicos",
                content: `
                    Endereço: Avenida José Bonifácio, 382, centro - Maracaí/SP.
                    Atendimento segunda a sexta-feira:
                    Horário 7h às 12h e das 16h às 21h.
                    Atendimento finais de semana:
                    Sábado 7h às 12h.
                    Domingo 7h às 11h.
                `,
            },
        ],
    },
    {
        sectionTitle: "Horários de Visitas",
        items: [
            {
                title: "Orientações Gerais",
                content: `
                    VISITA SUSPENSA
                    Pacientes suspeitos ou confirmados Covid-19.
                    Orientações para os visitantes:
                    Higienizar as mãos com água e sabão antes e após qualquer contato com o paciente e/ou áreas próximas a ele;
                    O álcool gel está disponível em todas as dependências do hospital;
                    Contatos físicos devem ser evitados;
                    Evitar a circulação pelas áreas comuns do hospital.

                    Atenção:
                    Somente será permitida a entrada de acompanhantes que estiverem sem sintomas de tosse, coriza ou febre.
                    É obrigatório o uso de crachá de identificação visível. Ele será entregue pelo vigia na recepção; após a visita, devolva o crachá.
                    É permitido a entrada de uma visita por vez, podendo fazer revezamento, sendo obrigatório uso de crachá em local visível.
                    Não é permitido a entrada de visitantes e acompanhantes usando trajes inadequados.
                    Não é permitido trazer qualquer tipo de alimento e bebidas sem autorização prévia da nutricionista.
                    A equipe de enfermagem e serviço social, avaliará a necessidade de acompanhamento nos demais casos.
                `,
            },
            {
                title: "Horário de Visitas",
                content: `
                    Tarde: 14h às 15h.
                    Noite: 19h às 20h.
                `,
            },
            {
                title: "Troca de Acompanhante",
                content: `
                    Manhã: 07:30h às 08:30h.
                    Tarde: 13h às 14h.
                    Noite: 19:30h às 20h:30h.
                `,
            },
        ],
    },
];

export function SchedulesSection() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="Horários de Funcionamento"
            className="w-full space-y-4"
        >
            {sections.map(({ sectionTitle, items }, index) => (
                <AccordionItem
                    key={index}
                    value={sectionTitle}
                    className="rounded-lg border shadow-sm"
                >
                    <AccordionTrigger className="text-2xl font-bold bg-white p-4 rounded-lg">
                        {sectionTitle}
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-100 p-4 rounded-b-lg">
                        <div className="space-y-4">
                            {items.map(({ title, content }, idx) => (
                                <div key={idx}>
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <div className="space-y-2">
                                        {content
                                            .trim()
                                            .split("\n")
                                            .map((paragraph, paragraphIdx) => (
                                                <p key={paragraphIdx}>{paragraph.trim()}</p>
                                            ))}
                                    </div>
                                    {idx < items.length - 1 && (
                                        <Separator className="my-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}