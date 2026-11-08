import React from 'react';

export default function BotonConsola() {
  const mostrarEnConsola = () => {
    console.log("hola, este es un mensaje en la consola");
  };

  return (
    <div>
      <p>hola, este es un mensaje en la consola</p>
      {/* El texto suelto que se ve en la imagen original */}
    </div>
  );
}
