import CardAtividade from "./CardAtividade";
import EnviarAtividade from "./EnviarAtividade";

const user = {
  name: "Lávio",
};

const activities = [
  {
    name: "Lorem 1",
    code: "A1",
    limitDate: "2021-10-10",
  },
  {
    name: "Lorem 2",
    code: "A2",
    limitDate: "2021-10-10",
  },
  {
    name: "Lorem 3",
    code: "A3",
    limitDate: "2021-10-10",
  },
];

export default function HomeProfessor() {
  return (
    <div className="flex flex-col w-3/5">
      <h1>Olá, {user.name}</h1>
      <section className="flex gap-2">
        <div className="bg-blue-secondary h-20 w-1/2">
          {activities.map((activity) => (
            <CardAtividade activity={activity} />
          ))}
        </div>
        <EnviarAtividade />
      </section>
    </div>
  );
}
