import CadastrarUsuario from "../components/CadastrarUsuario";
import Card from "../components/Card";
import EnviarAtividade from "../components/EnviarAtividade";
import Labels from "../components/Labels";

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

export default function TeacherHome() {
  return (
    <div className="flex flex-col w-3/5 text-white">
      <h1 className="font-bold text-5xl mb-3">Olá, {user.name}</h1>
      <section className="flex gap-2">
        <div className="h-20 w-1/2">
          <div className="flex flex-col gap-6 bg-blue-main bg-opacity-50 p-5 rounded drop-shadow-lg">
            <Labels />
            {activities.map((activity) => (
              <Card isTeacher />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-2/3 gap-5">
        <EnviarAtividade />
        <CadastrarUsuario />
        </div>
      </section>
    </div>
  );
}
