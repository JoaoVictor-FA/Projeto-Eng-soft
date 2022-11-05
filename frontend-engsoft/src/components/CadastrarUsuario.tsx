import { Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import InputField from "./InputField";

export default function CadastrarUsuario() {
  const [checkboxValue, setCheckboxValue] = useState("aluno");
  const handleCheckboxChange = (name: string) => {
    setCheckboxValue(name);
  };
  return (
    <div className="text-white flex flex-col p-6 items-center bg-gray-main gap-6">
      <Typography variant="h5">Cadastrar novo usuário</Typography>
      <div className="flex gap-2 w-full">
        <InputField label="Nome" type="text" />
        <InputField label="Email" type="email" />
      </div>
      <div className="flex gap-2 w-full">
        <InputField label="Senha" type="password" />
        <InputField label="Confirmar senha" type="password" />
      </div>
      <div className="flex gap-2 w-full flex-col">
        <Typography variant="h6">Tipo do usuário</Typography>
        <div className="flex gap-2">
          <div className="flex items-center">
            <Checkbox
              checked={checkboxValue === "professor"}
              onClick={() => handleCheckboxChange("professor")}
            />
            <Typography>Professor</Typography>
          </div>
          <div className="flex items-center">
            <Checkbox
              checked={checkboxValue === "aluno"}
              onClick={() => handleCheckboxChange("aluno")}
            />
            <Typography>Aluno</Typography>
          </div>
        </div>
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
