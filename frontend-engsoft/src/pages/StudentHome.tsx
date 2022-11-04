import Card from "../components/Card";

export default function StudentHome() {
  return (
    <main className="text-white">
      <h1 className="font-bold text-5xl">Olá Lorem Ipsum</h1>
      <section className="flex justify-between">
        <aside >
          <h3 className="text-3xl">Suas Tarefas</h3>
          <div className="bg-blue-main bg-opacity-50 p-5 rounded drop-shadow-lg">
            <Card />
          </div>
        </aside>
        <div>
          <h3>Inscreva-se numa atividade</h3>
        </div>
      </section>
    </main>
  )
}
