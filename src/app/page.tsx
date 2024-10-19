import Hero from "@/components/sections/hero/page";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Seção principal da página inicial */}
      <div className="w-[70%] p-4">
        <Hero />
      </div>

      {/* Seção fixa de últimas notícias */}
      <div className="w-[30%] p-4 sticky top-0 h-screen shadow-lg">
        <h2 className="text-xl font-bold mb-4">Últimas Notícias</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Notícia 1</h3>
            <p>Descrição breve da notícia 1...</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Notícia 2</h3>
            <p>Descrição breve da notícia 2...</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Notícia 3</h3>
            <p>Descrição breve da notícia 3...</p>
          </div>
          {/* Continue adicionando mais notícias conforme necessário */}
        </div>
      </div>
    </div>
  );
}