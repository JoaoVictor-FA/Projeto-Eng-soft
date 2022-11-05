import { useState } from "react";
import eye from "../assets/Eye.svg";

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <div className="flex flex-col items-center h-max w-70 bg-blue-darker text-white p-4 gap-4 font-bold rounded shadow-xl shadow-gray-main ">
      <h1 className="text-lg">Faça o login para acessar</h1>
      <div>
        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            className="bg-gray-dark h-10 border-blue-main border-2 rounded focus:outline-none p-2"
          />
        </label>
      </div>
      <div>
        <label className="flex flex-col relative">
          Senha
          <input
            type={visiblePassword ? "text" : "password"}
            name="password"
            className="bg-gray-dark h-10 border-blue-main border-2 rounded focus:outline-none p-2"
          />
          <img
            src={eye}
            alt="mostrar senha"
            className="absolute right-2 top-7 cursor-pointer"
            onClick={() => setVisiblePassword(!visiblePassword)}
          />
        </label>
      </div>
      <button className="bg-blue-main w-full h-10 rounded font-bold">
        Login
      </button>
    </div>
  );
}
