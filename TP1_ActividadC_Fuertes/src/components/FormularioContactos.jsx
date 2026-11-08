import { useState, useEffect } from "react";
import estilos from "../styles/Formulario.module.css";

export default function FormularioContactos({ guardarDatos, datosEdicion }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    if (datosEdicion) {
      setNombre(datosEdicion.nombre);
      setCorreo(datosEdicion.correo);
      setTelefono(datosEdicion.telefono);
    } else {
      limpiarFormulario();
    }
  }, [datosEdicion]);

  const limpiarFormulario = () => {
    setNombre("");
    setCorreo("");
    setTelefono("");
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (nombre.trim() && correo.trim() && telefono.trim()) {
      guardarDatos({ nombre, correo, telefono });
      limpiarFormulario();
    }
  };

  return (
    <div className={estilos.tarjetaForm}>
      <h2 className={estilos.tituloSeccion}>
        {datosEdicion ? "✍️ Modificar Registro" : "➕ Añadir Nuevo"}
      </h2>
      <form onSubmit={enviarFormulario} className={estilos.formulario}>
        <div className={estilos.grupoInput}>
          <label>Nombre Completo</label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Juan Pérez"
          />
        </div>
        
        <div className={estilos.grupoInput}>
          <label>Correo Electrónico</label>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="correo@ejemplo.com"
            disabled={!!datosEdicion} 
          />
          {datosEdicion && <small className={estilos.ayuda}>El correo no se puede cambiar.</small>}
        </div>

        <div className={estilos.grupoInput}>
          <label>Teléfono Celular</label>
          <input
            type="tel"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Ej. +54 9 261..."
          />
        </div>

        <button type="submit" className={estilos.btnGuardar}>
          {datosEdicion ? "Actualizar Contacto" : "Guardar Contacto"}
        </button>
      </form>
    </div>
  );
}