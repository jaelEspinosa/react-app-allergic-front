import React from 'react';
import { useNavigate } from 'react-router-dom';
import okHand from '../images/ok.png';
import './RegistrationEndPage.scss';

const RegistrationEndPage = () => {
  const navigate = useNavigate();
  return (
    <div className="c-regpage">
      <img className="c-regpage__image" src={okHand} alt="goodjob"></img>
      <p className="c-regpage__text">Hemos terminado, ya puedes escanear tu primer producto.</p>
      <button className="btn_blue" onClick={()=>navigate('/scanner')}>Escanea tu producto</button>
    </div>
  )
}

export default RegistrationEndPage;
