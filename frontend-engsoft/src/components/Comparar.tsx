import Card from "./Card";

export default function Comparar() {

  return (
    <div className="mt-24 flex flex-col h-max w-1/2 bg-gray-dark text-white p-4 gap-4 font-bold rounded shadow-xl shadow-gray-main ">
      <div className="px-20">
        <Card justShow />
      </div>
      <h1 className="text-lg">Autor: Lorenco ipsilo</h1>
      <h1 className="text-lg">Data de envio: 04/11/2022</h1>
      <div>
        <label className="flex flex-col">
          Resposta: 
          <div
            className="whitespace-pre-wrap max-w-full break-words  bg-white border-blue-main border-2 rounded focus:outline-none p-2 mt-3 text-black"
          >texto de resposta wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          wwwwwwwwwwww</div>
        </label>
      </div>
      <div>
        <label className="flex flex-col">
          <div>
            Taxa de plágio: <span className="text-green-700">20%</span>
          </div>
          <div
            className="whitespace-pre-wrap max-w-full break-words  bg-white border-blue-main border-2 rounded focus:outline-none p-2 mt-3 text-black"
          >texto de resposta wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          wwwwwwwwwwww</div>
        </label>
      </div>
      <div>
        <label className="flex flex-col">
          Semelhanças: 
          <div className="mt-4">
          1 - atividade de Lorenço: 
          <div
            className="whitespace-pre-wrap max-w-full break-words  bg-white border-blue-main border-2 rounded focus:outline-none p-2 mt-3 text-black"
            >texto de resposta wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          wwwwwwwwwwww</div>
          </div>
        </label>
      </div>
    </div>
  );
}
