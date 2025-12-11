import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Beranda from './pages/Beranda.jsx'
import Event from './pages/Event.jsx'
import Kontak from './pages/Kontak.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Tentang from './pages/Tentang.jsx'
import Admin from './pages/Admin.jsx'
import User from './pages/User.jsx'
import Checkout from './pages/Checkout.jsx'

import { BrowserRouter,Routes , Route } from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Beranda/>}></Route>
        <Route path = "/Event" element = {<Event/>}></Route>
        <Route path = "/Kontak" element = {<Kontak/>}></Route>
        <Route path = "/Login" element = {<Login/>}></Route>
        <Route path = "/Register" element = {<Register/>}></Route>
        <Route path = "/Tentang" element = {<Tentang/>}></Route>
        <Route path = "/Admin" element = {<Admin/>}></Route>
        <Route path = "/User" element = {<User/>}></Route>
        <Route path = "/Checkout/:id" element = {<Checkout/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App
