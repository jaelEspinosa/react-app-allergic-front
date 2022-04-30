import React from "react";
import "./ScanResults.scss";
import favoritoF from "../images/favoritoF.png";
import diarioF from "../images/diarioF.png";
import redF from "../images/redF.png";
import { useNavigate } from "react-router-dom";

const ScanResults = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
     <button className="c-scans__return" onClick={() => navigate(-1)}>
        Volver
      </button>
    <div className="row">
     
      <div className="c-scans__texts col-12">
        <h3 className="c-scans__text-prim col-12">Aquí tienes el resultado.</h3>
        <p className="c-scans__text-sec col-12">
          Este producto NO es apto para ti, contiene xxx.
        </p>
        {/* <p>Lo sentimos, no hay datos suficientes para valorar este producto.</p>
<p>Este producto es para ti.</p> */}
      </div>
      <div className="c-scans__results">
        <div className="square"></div>
        <div className="menu">
          <img className="menu__item" src={favoritoF} alt="logo"></img>
          <img className="menu__item" src={diarioF} alt="logo"></img>
          <img className="menu__item" src={redF} alt="logo"></img>
        </div>
      </div>
      <div className="c-scans__texts">
        <h4 className="c-scans__text-third">Información del producto.</h4>
        <p className="c-scans__text-fourth">Detalle del producto</p>
      </div>
      <div className="row">
        <button type="submit" className="btn btn-info col-12">
          Escanear otro producto
        </button>
      </div>
      </div>
    </div>
  );
};

export default ScanResults;
