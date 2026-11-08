import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/Inicio";
import Agregar from "./components/Agregar";
import Modificar from "./components/Modificar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ color: "#0d6efd", fontWeight: "bold" }}>Gestor de Personal</h2>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nuevo" element={<Agregar />} />
          <Route path="/editar/:id" element={<Modificar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}