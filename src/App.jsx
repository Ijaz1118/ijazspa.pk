import React from 'react'
import Home from './pages/Home'
import Navber from './components/shared/Navber'
import Footer from './components/shared/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contant from './pages/Contant'
import{BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
     <Navber/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Contant-us" element={<Contant/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
