import Image from "next/image";

export const HistoriaHospital = () => {
    return (
        <section>
            <div className="text-center">
                <span className="py-1 px-4 bg-blue-100 rounded-full text-xs font-medium text-blue-600 text-center">
                    História
                </span>
                <h2 className="text-3xl text-center font-bold text-gray-900 py-5">
                    História do Hospital
                </h2>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <p className="mt-4 text-gray-700">
                                A Associação Hospital Beneficente de Maracai foi fundada em 28 de novembro de 1977, com o objetivo de oferecer cuidados médicos à população de Maracai, cidade localizada no interior de São Paulo. Inicialmente, a instituição surgiu para suprir a demanda local por serviços de saúde, e ao longo dos anos tem se dedicado a fornecer atendimento hospitalar, incluindo internações e cirurgias, para a comunidade.
                            </p>
                            <p className="mt-4 text-gray-700">
                                Em 2009, a Associação recebeu uma emenda parlamentar do deputado Ed Thomas, que destinou R$ 50 mil para a aquisição de equipamentos essenciais para o hospital, como monitores multiparâmetros e aparelhos de ar-condicionado, além de recursos para melhorar o atendimento à população. A infraestrutura do hospital continuou a se expandir, e em 2011, foi inaugurado um novo Centro Cirúrgico, o <span className="font-bold">Matilde Alves da Silva</span>, que recebeu esse nome em homenagem a uma parteira que teve um papel fundamental na história da entidade. O novo centro tem capacidade para realizar até duas cirurgias simultâneas, atendendo a uma grande parte da população de Maracaí.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/foto-hospital-maracai.png"
                            className="rounded"
                            alt="Hospital Beneficente de Maracai"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};