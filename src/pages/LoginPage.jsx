import React from "react";
import "./LoginPage.scss";
import sample from "../images/image.png";
import primary from "../images/primary.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="c-logpage">
      <img className="c-logpageimage" src={sample} alt="sample"></img>
      <div className="c-logpagediv-prim">
        <div className="c-logpagediv-cto">
          <h3 className="c-logpagetext-prim">¡Bienvenido de nuevo!</h3>
          <p className="c-logpagetext-sec">
            Por favor, introduce tus datos para continuar.
          </p>
        </div>
        <form>
          <div className="div-sec">
            <input
              className="c-logpageinput"
              type="text"
              name="name"
              placeholder="Dirección email"
            ></input>
          </div>

          <div className="div-sec">
            <input
              className="c-logpageinput"
              type="text"
              name="name"
              placeholder="Contraseña" 
            ></input>
          </div>
        </form>
        <div>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
        <div>
          <img className="c-logpageimg-cent" src={primary} alt="primary"></img>
        </div>
        <div className="c-logpage__div-terc">
          <p>¿Nuevo en Applergic?</p>
          <Link to ='/create'> <p>Crea tu cuenta aquí</p></Link>
        </div>
        <div>
          <Link to = '/home'><p>Me registraré en otro momento</p></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;