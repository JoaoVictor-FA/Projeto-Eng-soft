import { TextField, Typography } from "@mui/material";
import InputField from "./InputField";

export default function EnviarAtividade() {
  return (
    <div className="text-white flex flex-col p-6 items-center bg-gray-main gap-6">
      <Typography variant="h5">Enviar nova atividade</Typography>
      <div className="flex gap-2 w-full">
        <InputField label="Nome da atividade" type="text" />
        <InputField label="Código da atividade" type="text" />
      </div>
      <div className="flex gap-2 w-full">
        <InputField label="Código para inscrição" type="text" />
        <InputField label="Data limite" type="date" />
      </div>
      <TextField type="file" />
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
