import React, { useState } from 'react';

export default function MensajeCondicional() {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Escriba un mensaje" 
        value={mensaje} 
        onChange={(e) => setMensaje(e.target.value)} 
      />
      <p>{mensaje ? mensaje : 'No hay mensaje'}</p>
    </div>
  );
}
