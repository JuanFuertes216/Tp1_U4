import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { personal } from "../db";

export default function Agregar() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const navigate = useNavigate();

  const guardarDatos = (e) => {
    e.preventDefault();
    const idUnico = uuidv4().slice(0, 8);
    personal.push({ id: idUnico, nombre, edad });
    navigate("/");
  };

  return (
    <Card className="mx-auto shadow-sm border-0 mt-4" style={{ maxWidth: "500px" }}>
      <Card.Header as="h5" className="bg-primary text-white text-center py-3">Añadir Nuevo Empleado</Card.Header>
      <Card.Body className="p-4 bg-white border">
        <Form onSubmit={guardarDatos}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej. 30"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </Form.Group>
          
          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={() => navigate("/")}>Volver</Button>
            <Button variant="primary" type="submit">Guardar Registro</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}