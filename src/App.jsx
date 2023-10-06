import { Route, Routes,Link } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Routes/Home'
import About from './Component/Routes/About'
import Service from './Component/Routes/Service'
import Contact from './Component/Routes/Contact'
import Hero from './Component/Hero'




function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/> 
   </Routes>
   
   
   
  
   </>
  )
}

export default App
