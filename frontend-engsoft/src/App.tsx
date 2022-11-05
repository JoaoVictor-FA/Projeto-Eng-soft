import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import StudentHome from './pages/StudentHome'
import TeacherHome from "./pages/TeacherHome";
import Answers from './pages/Answers';
import CompareAnwser from './pages/CompareAnswer';
function App() {
  return (
    <div className='bg-gradient-to-br from-black to-blue-pure min-h-screen h-full flex justify-center py-20'>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/student' element={<StudentHome />} />
      <Route path='/answers' element={<Answers />} />
      <Route path='/teacher' element={<TeacherHome />} />
      <Route path='/compare' element={<CompareAnwser />} />
    </Routes>
    </div>
  );
}

export default App;
