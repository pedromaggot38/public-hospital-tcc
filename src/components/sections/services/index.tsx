import Link from "next/link";
import { ServiceCard } from "./ServicesCard";
import { services } from "./servicesData"

export default function ServicesSection() {

    return (
        <section className="bg-gray-900 text-white rounded-lg">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">Tipos de Consultas</h2>
                    <p className="mt-4 text-gray-300">
                        Oferecemos uma variedade de consultas para atender às suas necessidades de saúde. Veja abaixo as opções disponíveis:
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/about/services">
                        <div className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                            Mais informações
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}