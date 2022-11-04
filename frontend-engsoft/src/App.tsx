import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import VerRespostas from './pages/VerRespostas'
import StudentHome from './pages/StudentHome'
function App() {

  return (
    <div className='bg-gradient-to-br from-black to-blue-pure min-h-screen h-full flex justify-center items-center'>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Student' element={<StudentHome />} />
      <Route path='/Answers' element={<VerRespostas />} />
    </Routes>
    </div>
  )
}

export default App
