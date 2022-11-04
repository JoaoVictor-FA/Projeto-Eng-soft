import { useState } from "react";
import eye from "../assets/Eye.svg";

export default function Respostas() {

  return (
    <div className="flex flex-col items-center h-max w-70 bg-blue-darker text-white p-4 gap-4 font-bold rounded shadow-xl shadow-gray-main ">
      <h1 className="text-lg">Faça o login para acessar</h1>
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
      <button className="bg- w-full h-10 rounded font-bold">
        Login
      </button>
    </div>
  );
}
