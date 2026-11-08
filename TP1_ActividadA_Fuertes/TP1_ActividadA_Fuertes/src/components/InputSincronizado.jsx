import React, { useState } from 'react';

export default function InputSincronizado() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Escribe algo" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
      />
      <p>Has escrito: {texto}</p>
    </div>
  );
}
