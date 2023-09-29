import './App.css';
import '../reset.css';
import Main from './Main';
import Armor from './armor/Armor';
import Map from './map/Map';
import Market from './market/Market';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/ammo" element={<Main />} />
                <Route path="/armor" element={<Armor />} />
                <Route path="/market" element={<Market />} />
                <Route path="/map" element={<Map />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
