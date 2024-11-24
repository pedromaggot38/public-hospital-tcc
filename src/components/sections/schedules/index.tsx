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
                    Endereço: Avenida José Bonifácio, 382, Centro - Maracaí/SP.
                    Horário de funcionamento: Atendimento 24h por dia, 7 dias por semana.
                `,
            },
            {
                title: "Internação",
                content: `
                    Endereço: Avenida José Bonifácio, 382, Centro - Maracaí/SP.
                    Horário de funcionamento: Atendimento 24h por dia, 7 dias por semana.
                `,
            },
            {
                title: "Exames Radiológicos",
                content: `
                    Endereço: Avenida José Bonifácio, 382, Centro - Maracaí/SP.
                    Atendimento de segunda a sexta-feira:
                    Das 7h às 12h e das 16h às 21h.
                    Atendimento nos finais de semana:
                    Sábado: das 7h às 12h.
                    Domingo: das 7h às 11h.
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
                    Para pacientes suspeitos ou confirmados com Covid-19.

                    Orientações para os visitantes:
                    - Higienizar as mãos com água e sabão antes e após qualquer contato com o paciente e/ou áreas próximas a ele.
                    - O álcool em gel está disponível em todas as dependências do hospital.
                    - Contatos físicos devem ser evitados.
                    - Evitar a circulação pelas áreas comuns do hospital.

                    Atenção:
                    - Somente será permitida a entrada de acompanhantes que não apresentem sintomas de tosse, coriza ou febre.
                    - É obrigatório o uso de crachá de identificação visível, que será entregue pelo vigia na recepção. Após a visita, o crachá deve ser devolvido.
                    - É permitido o revezamento de visitas, sendo permitida a entrada de uma visita por vez. O uso de crachá visível é obrigatório.
                    - Não é permitido o ingresso de visitantes ou acompanhantes com trajes inadequados.
                    - Não é permitido trazer alimentos e bebidas sem autorização prévia da nutricionista.
                    - A equipe de enfermagem e o serviço social avaliarão a necessidade de acompanhamento nos demais casos.
                `,
            },
            {
                title: "Horário de Visitas",
                content: `
                    Tarde: das 14h às 15h.
                    Noite: das 19h às 20h.
                `,
            },
            {
                title: "Troca de Acompanhante",
                content: `
                    Manhã: das 07h30 às 08h30.
                    Tarde: das 13h às 14h.
                    Noite: das 19h30 às 20h30.
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