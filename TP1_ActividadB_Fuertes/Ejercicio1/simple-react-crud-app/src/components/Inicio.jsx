import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { personal } from "../db";

export default function Inicio() {
  const navigate = useNavigate();
  const [lista, setLista] = useState(personal);

  const eliminarRegistro = (id) => {
    const idx = personal.findIndex((p) => p.id === id);
    if (idx !== -1) {
      personal.splice(idx, 1);
      setLista([...personal]);
    }
  };

  return (
    <div className="shadow p-4 bg-white rounded border">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="m-0 text-secondary">Directorio de Empleados</h4>
        <Button variant="success" onClick={() => navigate("/nuevo")}>+ Registrar Nuevo</Button>
      </div>
      
      <Table hover responsive bordered className="text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Edad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.length > 0 ? (
            lista.map((emp) => (
              <tr key={emp.id}>
                <td className="fw-bold">{emp.id}</td>
                <td>{emp.nombre}</td>
                <td>{emp.edad} años</td>
                <td>
                  <Link to={`/editar/${emp.id}`}>
                    <Button variant="outline-primary" size="sm" className="me-2">Modificar</Button>
                  </Link>
                  <Button variant="outline-danger" size="sm" onClick={() => eliminarRegistro(emp.id)}>Eliminar</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-muted p-4">No hay registros almacenados.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}