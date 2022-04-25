import React from 'react';
import okHand from '../images/ok.png';
import './RegistrationEnd.scss';

const RegistrationEnd = () => {
  return (
    <div className="c-regpage">
      <img className="c-regpage__image" src={okHand} alt="goodjob"></img>
      <p className="c-regpage__text">Hemos terminado, ya puedes escanear tu primer producto.</p>
      <button className="btn_blue">Escanea tu producto</button>
    </div>
  )
}

export default RegistrationEnd
