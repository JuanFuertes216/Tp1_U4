import { useState, useEffect } from "react";
import FormularioContactos from "./components/FormularioContactos";
import TablaContactos from "./components/TablaContactos";
import estilos from "./styles/Principal.module.css";

export default function App() {
  const [listaContactos, setListaContactos] = useState(() => {
    const memoria = localStorage.getItem("agenda_contactos_db");
    return memoria ? JSON.parse(memoria) : [];
  });

  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    localStorage.setItem("agenda_contactos_db", JSON.stringify(listaContactos));
  }, [listaContactos]);

  const procesarContacto = (nuevoContacto) => {
    if (contactoSeleccionado) {
      const listaActualizada = listaContactos.map((c) =>
        c.correo === contactoSeleccionado.correo ? nuevoContacto : c
      );
      setListaContactos(listaActualizada);
      setContactoSeleccionado(null);
    } else {
      setListaContactos([...listaContactos, nuevoContacto]);
    }
  };

  const eliminarRegistro = (correoAEliminar) => {
    const filtro = listaContactos.filter((c) => c.correo !== correoAEliminar);
    setListaContactos(filtro);
  };

  const cargarParaEdicion = (contacto) => {
    setContactoSeleccionado(contacto);
  };

  const resultadosBusqueda = listaContactos.filter((c) => {
    const termino = busqueda.toLowerCase();
    return (
      c.nombre.toLowerCase().includes(termino) ||
      c.correo.toLowerCase().includes(termino) ||
      c.telefono.includes(termino)
    );
  });

  return (
    <div className={estilos.contenedorApp}>
      <header className={estilos.cabecera}>
        <h1>Directorio Personal</h1>
        <p>Administra tus contactos fácilmente</p>
      </header>

      <div className={estilos.cajaBusqueda}>
        <input
          type="text"
          placeholder="🔍 Buscar por nombre, correo o teléfono..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className={estilos.inputBuscador}
        />
      </div>

      <div className={estilos.disenoGrid}>
        <div className={estilos.columnaFormulario}>
          <FormularioContactos 
            guardarDatos={procesarContacto} 
            datosEdicion={contactoSeleccionado} 
          />
        </div>
        
        <div className={estilos.columnaTabla}>
          <TablaContactos
            contactos={resultadosBusqueda}
            borrar={eliminarRegistro}
            editar={cargarParaEdicion}
          />
        </div>
      </div>
    </div>
  );
}