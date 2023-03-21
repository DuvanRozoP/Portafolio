import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Presentation from './Pages/Presentation/Presentation';
import Resumen from './Pages/Resumen/Resumen';
// import stateGlobal from './Store/stateGlobal';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Presentation />} />
      <Route path='/resumen' element={<Resumen />} />
    </Routes>
  );
}

export default App;
