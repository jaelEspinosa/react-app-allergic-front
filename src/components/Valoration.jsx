import React from 'react';
import completeLogo from "../images/completelogoApplergicFigurasGiro.png";
import stars from "../images/botNSatisfacciN.png";
import './Valoration.scss';

const Valoration = () => {
  return (
    <div className="c-valpage" >
      <img className="c-valpage__image"src={completeLogo} alt="appLogo"></img>
      <p className="c-valpage__text">¡Gracias por usar Applergic!</p>
      <p className="c-valpage__text">Por favor, evalúa tu experiencia.</p>
      <img src={stars} alt="stars"></img>
      <div>
      <button className="c-valpage__btn">Enviar sugerencias</button>
      </div>
    </div>
  )
}

export default Valoration
