import Resposta from "./Resposta";

export default function VerRespostas() {

    return (
        <div className="py-20">
            <h1 className="text-white text-5xl pl-10">Olá Fulano</h1>
            <div className="w-100 flex flex-col items-center">
                <Resposta/>
                <Resposta/>
                <Resposta/>
                <Resposta/>
                <Resposta/>
                <Resposta/>
            </div>
        </div>
    );
  }
  