import React from 'react';
import SaludoProps from './components/SaludoProps';
import ContadorBasico from './components/ContadorBasico';
import InputSincronizado from './components/InputSincronizado';
import FormularioSimple from './components/FormularioSimple';
import MensajeCondicional from './components/MensajeCondicional';
import ControlSesion from './components/ControlSesion';
import BotonConsola from './components/BotonConsola';
import ContadorEfecto from './components/ContadorEfecto';
import BotonHijoAPadre from './components/BotonHijoAPadre';
import ListaUsuariosApi from './components/ListaUsuariosApi';

function App() {
  const mostrarAlertaPadre = () => {
    alert("Has hecho click en el botón del componente hijo");
  };

  return (
    <div>
      <SaludoProps nombre="Juan Fuertes" />
      <hr />
      
      <ContadorBasico />
      <hr />
      
      <InputSincronizado />
      <hr />
      
      <FormularioSimple />
      <hr />
      
      <MensajeCondicional />
      <hr />
      
      <ControlSesion />
      <hr />
      
      <BotonConsola />
      <hr />
      
      <ContadorEfecto />
      <hr />

      <BotonHijoAPadre onClickPadre={mostrarAlertaPadre} />
      <hr />

      <ListaUsuariosApi />
    </div>
  );
}

export default App;
