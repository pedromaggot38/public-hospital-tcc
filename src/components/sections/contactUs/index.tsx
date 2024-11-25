import { CONTACT_INFO } from "@/lib/vars";
import Features from "../features";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import LocationMap from "../locationMap";

const buttonsData = [
    {
        href: `tel:${CONTACT_INFO.phone}`,
        title: "Telefone",
        icon: "/svg/phone.svg",
        bgColor: "bg-violet-200",
        hoverColor: "group-hover:bg-violet-600",
        description: `${CONTACT_INFO.phoneString}`,
    },
    {
        href: `mailto:${CONTACT_INFO.email}`,
        title: "E-mail",
        icon: "/svg/mail.svg",
        bgColor: "bg-lime-200",
        hoverColor: "group-hover:bg-lime-600",
        description: `${CONTACT_INFO.email}`,
    },
    {
        href: `${CONTACT_INFO.mapsLink}`,
        title: "Localização",
        icon: "/svg/location.svg",
        bgColor: "bg-pink-200",
        hoverColor: "group-hover:bg-pink-600",
        description: `${CONTACT_INFO.address}`,
    },
];

const ContactUsSection = () => {
    return (
        <div>
            <Features
                buttonsData={buttonsData}
                sectionTitle="Informações para Contato"
                sectionDescription="Para dúvidas, agendamentos ou emergências, nossa equipe está pronta para ajudar. Entre em contato conosco através dos nossos canais de atendimento e receba o suporte necessário com rapidez e eficiência."
                badge="Contato"
                target="_blank"
            />
            <Separator className="my-6" />
            <div className="mb-14 text-center">
                <span className="py-1 px-4 bg-blue-100 rounded-full text-xs font-medium text-blue-600 text-center">
                    Currículo
                </span>
                <h2 className="text-3xl text-center font-bold text-gray-900 py-5">
                    Recebimento de Currículos
                </h2>
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Informamos que recebemos currículos exclusivamente através do e-mail <Link href={`mailto:${CONTACT_INFO.email}`} className="text-blue-500 hover:text-blue-700">{CONTACT_INFO.email}</Link>. Fique à vontade para enviar seu currículo e entraremos em contato caso seu perfil se encaixe nas oportunidades disponíveis.
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
            </div>
            <Separator className="my-6" />
            <LocationMap />
        </div>
    );
};

export default ContactUsSection;
