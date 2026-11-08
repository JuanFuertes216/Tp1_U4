import React, { useState } from 'react';

export default function ContadorBasico() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <p>Has hecho click {clicks} veces</p>
      <button onClick={() => setClicks(clicks + 1)}>Incrementar</button>
      <button onClick={() => setClicks(clicks - 1)}>Decrementar</button>
      <button onClick={() => setClicks(0)}>Limpiar</button>
    </div>
  );
}
