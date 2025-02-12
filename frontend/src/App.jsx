import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import { useAuthContext } from './Context/AuthContext.jsx'
function App() {
  const {authUser}=useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path ='/' element={authUser ? <Home/> : <Navigate to='/login'/>}/>
        <Route path ='/login' element={authUser ? <Navigate to='/'/>:<Login/>}/>
        <Route path ='/signup' element={authUser ? <Navigate to="/"/> : <Signup/>} />
      </Routes>
    </div>
  )
}

export default App
