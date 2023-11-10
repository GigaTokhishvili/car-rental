import './App.css';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import VehicleModels from './pages/VehicleModels/VehicleModels'
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials/Testimonials';
import OurTeam from './pages/OurTeam/OurTeam';
import Contact from './pages/Contact/Contact';


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} index/>
        <Route path='/about' element={<About />} index/>
        <Route path='/vehiclemodels' element={<VehicleModels />} index/>
        <Route path='/testimonials' element={<Testimonials />} index/>
        <Route path='/ourteam' element={<OurTeam />} index/>
        <Route path='/contact' element={<Contact />} index/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
