import { CONTACT_INFO } from "@/lib/vars";
import Image from "next/image";
import Link from "next/link";

export default function LocationMap() {
    return (
        <div>
            <div className="mb-8 text-center">
                <span className="py-1 px-4 bg-blue-100 rounded-full text-xs font-medium text-blue-600 text-center">
                    Localização
                </span>
                <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
                    Localização
                </h2>
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                    Verifique nosso endereço diretamente pelo mapa
                </p>
                <div className="flex my-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
                <Link href={CONTACT_INFO.mapsLink}
                    rel="noreferrer"
                    target="_blank"
                >
                    <Image
                        src="/svg/location.svg"
                        alt="localização"
                        width={25}
                        height={25}
                        className="mr-2 inline-block"
                    />
                    <span className="text-sm text-gray-700">Endereço: {CONTACT_INFO.address}</span>
                    <p className="text-sm text-gray-700">CEP: {CONTACT_INFO.cep}</p>
                </Link>
            </div>
            <div className="px-4 py-16 sm:px-6 lg:px-8 relative w-full max-w-full mx-auto h-[500px]">
                <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    title="map"
                    src={CONTACT_INFO.embedMapsLink}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </div>
    );
}
