import estilos from "../styles/Tabla.module.css";

export default function TablaContactos({ contactos, borrar, editar }) {
  return (
    <div className={estilos.tarjetaTabla}>
      <h2 className={estilos.tituloSeccion}>📋 Lista de Contactos</h2>
      <div className={estilos.scrollTabla}>
        <table className={estilos.tablaPrincipal}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Contacto</th>
              <th className={estilos.centrado}>Gestión</th>
            </tr>
          </thead>
          <tbody>
            {contactos.length === 0 ? (
              <tr>
                <td colSpan="3" className={estilos.mensajeVacio}>
                  No se encontraron contactos en la agenda.
                </td>
              </tr>
            ) : (
              contactos.map((c, index) => (
                <tr key={index}>
                  <td className={estilos.celdaFuerte}>{c.nombre}</td>
                  <td>
                    <div>📧 {c.correo}</div>
                    <div className={estilos.textoSecundario}>📞 {c.telefono}</div>
                  </td>
                  <td className={estilos.centrado}>
                    <button
                      onClick={() => editar(c)}
                      className={estilos.btnEditar}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => borrar(c.correo)}
                      className={estilos.btnBorrar}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}