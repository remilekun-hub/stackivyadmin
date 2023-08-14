import './App.css'
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Verify from './pages/Verify-otp'
import Forgotpassword from './pages/Forgotpassword'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'


function App() {


  return (
    <>
      <Routes>
        <Route element={<Signup/>} path='/sign-up'/>
        <Route element={<Signin/>} path='/sign-in'/>
        <Route element={<Verify/>} path='/verify-otp'/>
        <Route element={<Verify/>} path='/verify-otp'/>
        <Route element={<Forgotpassword/>} path='/forgot-password'/>
        <Route element={<Home/>} path='/'/>

      </Routes>
      <main>
        <Sidebar />
      </main>
      
    </>
  )
}

export default App
