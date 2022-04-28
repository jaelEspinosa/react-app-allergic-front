import React from "react";
import "./LoginPage.scss";
import sample from "../images/image.png";
import primary from "../images/primary.png";
import { Link, useHref, useNavigate, useHistory  } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import bcrypt from 'bcryptjs'

const LoginPage = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data)
    data.password = data.password.toString()
    console.log(data)
    axios({
      method: "post",
      url: "http://localhost:5000/users/authenticate",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem('token', 'Bearer '+response.data.data.token);
          sessionStorage.setItem('userID', response.data.data.User._id);

          navigate("/home", { replace: true });

        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        
      });
  }


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
        <form onSubmit={handleSubmit(submit)} >
          <div className="div-sec">
            <input
              className="c-logpageinput"
              type="text"
              name="correo"
              placeholder="Dirección email"
              {...register("correo", { required: true })}

            ></input>
          </div>

          <div className="div-sec">
            <input
              className="c-logpageinput"
              type="text"
              name="password"
              placeholder="Contraseña" 
              {...register("password", { required: true })}

            ></input>
          </div>
        <div>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
        <div>
        <button  className="btn btn-info col-10" type="submit" value="Submit">Entrar</button>

        </div>
        </form>

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