import './App.css';
import '../reset.css';
import Main from './Main';
import Armor from './armor/Armor';
import Map from './map/Map';
import Market from './market/Market';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/ammo" element={<Main />} />
                    <Route path="/armor" element={<Armor />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="/map" element={<Map />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
