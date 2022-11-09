import InputField from "./InputField"
export default function EntrarAtividade() {
  return (
    <div className="bg-gray-dark2 p-5 rounded flex flex-col gap-6">
      <h3 className="font-bold text-2xl">Inscreva-se numa atividade</h3>
      <form className="flex flex-col items-center justify-center gap-6 drop-shadow-lg" action="">
        <InputField label="Código da atividade" type="text" />
        <button type="submit" className="font-bold text-lg py-3 px-10 bg-blue-main hover:bg-blue-secondary transition rounded">Inscrever-se</button>
      </form>
    </div>
  )
} 
