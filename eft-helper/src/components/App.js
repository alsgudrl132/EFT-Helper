import "./App.css";
import "../reset.css";
import Main from "./Main";
import Armor from "./Armor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/armor" element={<Armor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
