import React from 'react';

export default function BotonHijoAPadre({ onClickPadre }) {
  return (
    <div>
      <button onClick={onClickPadre}>Enviar alerta al padre</button>
    </div>
  );
}
