import { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { personal } from "../db";

export default function Modificar() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const empleado = personal.find((p) => p.id === id);
    if (empleado) {
      setNombre(empleado.nombre);
      setEdad(empleado.edad);
    }
  }, [id]);

  const actualizarDatos = (e) => {
    e.preventDefault();
    const idx = personal.findIndex((p) => p.id === id);
    if (idx !== -1) {
      personal[idx].nombre = nombre;
      personal[idx].edad = edad;
    }
    navigate("/");
  };

  return (
    <Card className="mx-auto shadow-sm border-0 mt-4" style={{ maxWidth: "500px" }}>
      <Card.Header as="h5" className="bg-warning text-dark text-center py-3">Editar Empleado</Card.Header>
      <Card.Body className="p-4 bg-white border">
        <Form onSubmit={actualizarDatos}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Edad</Form.Label>
            <Form.Control
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </Form.Group>
          
          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={() => navigate("/")}>Cancelar</Button>
            <Button variant="warning" type="submit" className="fw-bold">Actualizar Datos</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}