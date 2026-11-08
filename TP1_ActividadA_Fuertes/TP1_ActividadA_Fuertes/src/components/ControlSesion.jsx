import React, { useState } from 'react';

export default function ControlSesion() {
  const [logueado, setLogueado] = useState(false);

  return (
    <div>
      {logueado ? (
        <>
          <p>Bienvenido, Juan</p>
          <button onClick={() => setLogueado(false)}>Cerrar Sesion</button>
        </>
      ) : (
        <button onClick={() => setLogueado(true)}>Iniciar Sesion</button>
      )}
    </div>
  );
}
