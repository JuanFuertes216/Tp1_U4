import React, { useState, useEffect } from 'react';

export default function ContadorEfecto() {
  const [contador, setContador] = useState(4); // Iniciado en 4 para imitar la imagen

  useEffect(() => {
    document.title = `Click ${contador} veces`;
  }, [contador]);

  return (
    <div>
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
