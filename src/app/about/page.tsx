import BreadCrumb from "@/components/breadcrumb"
import PagesTitles from "@/components/pagesTitles"
import Features from "@/components/sections/features"
import ImageGallery from "@/components/sections/imageGallery"
import LocationMap from "@/components/sections/locationMap"

const buttonsData = [
    {
        href: "about/horarios-gerais",
        title: "Horários Gerais de Funcionamento",
        icon: "/svg/time.svg",
        bgColor: "bg-indigo-200",
        hoverColor: "group-hover:bg-indigo-600",
    },
    {
        href: "/about/services",
        title: "Tipos de Atendimento",
        icon: "/svg/clipboard.svg",
        bgColor: "bg-lime-200",
        hoverColor: "group-hover:bg-lime-600",
    },
    {
        href: "/doctors",
        title: "Horários de Plantão",
        icon: "/svg/24-hour-service.svg",
        bgColor: "bg-pink-200",
        hoverColor: "group-hover:bg-pink-600",
    },
];

const About = () => {

    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Sobre', href: '/about' },
                ]}
            />
            <PagesTitles title="Sobre" />
            <div className="flex flex-col gap-6">
                <Features
                    buttonsData={buttonsData}
                    sectionTitle="Navegação Hospitalar"
                    sectionDescription="Selecione uma opção para saber mais sobre nossos serviços."
                    badge="Navegação"
                />
                <LocationMap />
                <ImageGallery />
            </div>
        </div>
    )
}

export default About