
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PromoSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-blue-800 to-blue-900 px-6 sm:py-20 py-10 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
          Horários de Funcionamento
        </h1>
        <p className="text-lg mb-12">
          Estamos à disposição 24h por dia. Se você deseja saber os detalhes sobre nossos horários, basta acessar a página de horários gerais.
        </p>

        <Link href="/about/horarios-gerais" passHref>
          <Button
            type="button"
            className="text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out bg-blue-600 hover:bg-blue-700"
          >
            Saiba Mais
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PromoSection;
