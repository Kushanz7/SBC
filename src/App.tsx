import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Moments from './pages/Moments';
import HotelTypes from './pages/HotelTypes';
import CollectivesPage from './pages/CollectivesPage';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import HotelPage from './pages/Hotels';
import AboutUs from './pages/AboutUs';
import MainLayout from './layouts/MainLayout';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/hotel-types" element={<HotelTypes />} />
            <Route path="/collectives" element={<CollectivesPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Add other routes here */}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App