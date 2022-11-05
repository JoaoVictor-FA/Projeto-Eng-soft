import calendarImg from "../assets/Calendar.svg";

export default function EnviarAtividade() {
  return (
    <div className="text-white w-2/3 flex flex-col p-6 items-center bg-gray-main gap-6">
      <h1>Enviar nova atividade</h1>
      <div className="flex gap-2">
        <label className="flex flex-col">
          Nome da atividade
          <input
            className="bg-gray-dark h-10 border-blue-main border-2 rounded focus:outline-none p-2"
            type="text"
          />
        </label>
        <label className="flex flex-col">
          Código da atividade
          <input
            className="bg-gray-dark h-10 border-blue-main border-2 rounded focus:outline-none p-2"
            type="text"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <label className="flex flex-col">
          Código para inscrição
          <input
            className="bg-gray-dark h-10 border-blue-main border-2 rounded focus:outline-none p-2"
            type="text"
          />
        </label>
        <label className="flex flex-col relative">
          Data limite
          <input
            type="date"
            className="bg-gray-dark h-10 border-blue-main border-2 rounded focus:outline-none p-2  w-full"
          />
          <img
            src={calendarImg}
            alt="calendario"
            className="absolute right-2 top-7 cursor-pointer"
          />
        </label>
      </div>
      <div className="flex gap-2 w-2/3">
        <button className="bg-blue-main w-1/2 h-10 rounded font-bold">
          Confirmar
        </button>
        <button className="bg-red-secondary w-1/2 h-10 rounded font-bold">
          Cancelar
        </button>
      </div>
    </div>
  );
}
