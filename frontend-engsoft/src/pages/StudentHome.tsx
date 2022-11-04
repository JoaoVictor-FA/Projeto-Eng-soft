import Card from "../components/Card";
import Labels from "../components/Labels";
export default function StudentHome() {
  return (
    <main className="text-white w-full max-w-6xl">
      <h1 className="font-bold text-5xl">Olá Lorem Ipsum</h1>
      <section className="flex items-center justify-between gap-10">
        <aside className="w-1/2 flex flex-col gap-6">
          <h3 className="text-3xl">Suas Tarefas</h3>
          <div className="flex flex-col gap-6 bg-blue-main bg-opacity-50 p-5 rounded drop-shadow-lg">
            <Labels />
            <Card />
          </div>
        </aside>
        <div className="">
          <h3>Inscreva-se numa atividade</h3>
        </div>
      </section>
    </main>
  )
}
