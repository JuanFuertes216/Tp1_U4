import React, { useState } from 'react';

export default function FormularioSimple() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Enviado: ${nombre} ${apellido}`);
    setNombre('');
    setApellido('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input 
        type="text" 
        placeholder="Ingrese su nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Ingrese su apellido" 
        value={apellido} 
        onChange={(e) => setApellido(e.target.value)} 
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
