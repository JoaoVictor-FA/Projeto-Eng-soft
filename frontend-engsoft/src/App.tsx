import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import StudentHome from './pages/StudentHome'
function App() {

  return (
    <div className='bg-gradient-to-br from-black to-blue-pure h-screen flex justify-center items-center'>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Student' element={<StudentHome />} />
    </Routes>
    </div>
  )
}

export default App
