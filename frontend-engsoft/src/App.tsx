import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import VerRespostas from './pages/VerRespostas'
import StudentHome from './pages/StudentHome'
import TeacherHome from "./pages/TeacherHome";
function App() {
  return (
    <div className='bg-gradient-to-br from-black to-blue-pure min-h-screen h-full flex justify-center py-20'>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/student' element={<StudentHome />} />
      <Route path='/answers' element={<VerRespostas />} />
      <Route path='/teacher' element={<TeacherHome />} />
    </Routes>
    </div>
  );
}

export default App;
