import Image from "next/image";
import Link from "next/link";

const buttonsData = [
    {
        href: "about/horarios-atendimento",
        title: "Horários de Atendimento",
        icon: "/svg/time.svg",
        hoverColor: "#6495ED"
    },
    {
        href: "/about/services",
        title: "Tipos de Atendimento",
        icon: "/svg/clipboard.svg",
        hoverColor: "#6495ED"
    },
    {
        href: "/about/",
        title: "",
        icon: "/svg/.svg",
        hoverColor: "#6495ED"
    },
    {
        href: "/doctors",
        title: "Horários de Plantão",
        icon: "/svg/24-hour-service.svg",
        hoverColor: "#6495ED"
    },
];

export default function NavigationButtonsSection() {
    return (
        <section className="bg-white dark:bg-gray-900 rounded-lg ">
            <div className="container p-4 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Navegação Hospitalar
                </h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Selecione uma opção para saber mais sobre nossos serviços.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {buttonsData.map((button, index) => (
                        <Link href={button.href} key={index}>
                            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#6495ED] rounded-xl">
                                <div className="mb-4">
                                    <Image
                                        src={button.icon}
                                        alt={button.title}
                                        width={64}
                                        height={64}
                                        className="text-gray-600 dark:text-gray-300 group-hover:text-white"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                    {button.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
