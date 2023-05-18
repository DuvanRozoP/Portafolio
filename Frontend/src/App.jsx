import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Presentation from './Pages/Presentation/Presentation';
import About from './Pages/About/About';
import Navbar from './Components/navbar/Navbar';
import Portafolio from './Pages/Portafolio/Portafolio';
// import Resumen from './Pages/Resumen/Resumen';
// import stateGlobal from './Store/stateGlobal';

function App() {
  const location = useLocation();
  console.log('🚀 ~ file: App.jsx:13 ~ App ~ location:', location.pathname);
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Presentation />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portafolio />} />
      </Routes>
    </div>
  );
}

export default App;
