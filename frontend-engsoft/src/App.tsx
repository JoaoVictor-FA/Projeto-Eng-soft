import HomeProfessor from "./components/HomeProfessor";
import Login from "./components/Login";

function App() {
  const isLogged = true;

  return (
    <div className="bg-gradient-to-br from-black to-blue-pure h-screen flex justify-center items-center">
      {!isLogged ? <Login /> : <HomeProfessor />}
    </div>
  );
}

export default App;
