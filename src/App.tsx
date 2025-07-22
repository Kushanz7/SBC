import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar';
import Landing from './pages/Landing';
import Moments from './pages/Moments';
import HotelTypes from './pages/HotelTypes';
import CollectivesPage from './pages/CollectivesPage';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import HotelPage from './pages/Hotels';
import AboutUs from './pages/AboutUs';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-screen h-screen bg-black">
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/hotel-types" element={<HotelTypes />} />
            <Route path="/collectives" element={<CollectivesPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App