import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration.jsx';
import Registered from './pages/Registered.jsx';
import Update from './pages/Update.jsx';
import Home from './pages/Home.jsx';
import './App.css';
import ProductionData from './pages/ProductionData.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/production" element={<ProductionData />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/registered" element={<Registered />} />
        <Route exact path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
