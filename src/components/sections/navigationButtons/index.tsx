import Image from "next/image";
import Link from "next/link";

const buttonsData = [
    {
        href: "about/horarios-gerais",
        title: "Horários Gerais de Funcionamento",
        icon: "/svg/time.svg",
    },
    {
        href: "/about/services",
        title: "Tipos de Atendimento",
        icon: "/svg/clipboard.svg",
    },
    {
        href: "/doctors",
        title: "Horários de Plantão",
        icon: "/svg/24-hour-service.svg",
    },
];

export default function NavigationButtonsSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container p-6 mx-auto">
                <div className="text-center mb-14">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                        Navegação Hospitalar
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                        Selecione uma opção para saber mais sobre nossos serviços.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {buttonsData.map((button, index) => (
                        <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <Link href={button.href}>
                                <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md hover:bg-[#93b9ff] transition-colors duration-300">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                        <Image
                                            src={button.icon}
                                            alt={button.title}
                                            width={40}
                                            height={40}
                                            className="group-hover:text-white"
                                        />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                        {button.title}
                                    </h2>
                                    <p className="leading-relaxed text-base mb-4">
                                        Clique para mais informações sobre os {button.title}.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
