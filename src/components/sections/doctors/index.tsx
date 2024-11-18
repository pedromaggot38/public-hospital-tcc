import Image from 'next/image'
import React from 'react'

export default function DoctorsSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl pt-2 xl:pt-0">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt="Medical professionals"
                            src="/doctors.jpg"
                            width={800}
                            height={800}
                            className="absolute inset-0 h-full w-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Horários de Plantão</h2>

                        <p className="mt-4 text-gray-600">
                        No nosso hospital, disponibilizamos informações detalhadas sobre os horários de plantão dos nossos 
                        médicos. Isso garante que você possa encontrar assistência médica sempre que precisar. Confira a programação dos 
                        especialistas e saiba quando eles estarão disponíveis para atendê-lo.
                        </p>

                        <a
                            href="/doctors"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Veja aqui os horários de seu médico
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}