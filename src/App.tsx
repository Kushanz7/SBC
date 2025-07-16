import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Landing from './pages/Landing';
import Moments from './pages/Moments';

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="w-screen h-screen overflow-hidden bg-black">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/moments" element={<Moments />} />
        {/* Add other routes here */}
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
