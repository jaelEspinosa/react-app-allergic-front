import React from "react";
import { useForm } from "react-hook-form";
import cam from "../images/subir_foto.jpg";
import "./RegistrationStartPage.scss";
import FormError from "../components/FormError";
import { Link, useHref, useNavigate, useHistory } from "react-router-dom";
import axios from "axios";

const RegistrationStartPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    axios({
      method: "post",
      url: "http://localhost:4000/users/authenticate",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem("token", "Bearer " + response.data.data.token);
          sessionStorage.setItem("userID", response.data.data.User._id);

          navigate("/emergency", { replace: true });
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const submit = (data) => {

    var formData = new FormData();

    formData.append("nombre", data.nombre);
    formData.append("password", data.password);
    formData.append("foto", data.fotoUrl);
    formData.append("correo", data.correo);
    // number 123456 is immediately converted to string "123456"
    console.log(data);
    /*fetch("http://localhost:5000/users/register",

    {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "multipart/form-data" },

    })
    .then((res)=> { return res.json(); })
    .then((data)=>{
        console.log(data) 
    })*/

    axios({
      method: "post",
      url: "http://localhost:4000/users/register",
      data: data,
      headers: { "Content-Type": "application/json" },
      //headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status === 200) {
          //navigate("/emergency", { replace: true });
          handleLogin(data);
        }
      })
      .catch(function (error) {
        //handle error
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div className="c-startpage">
        <button className="c-startpage_return" onClick={() => navigate(-1)}>
          Volver
        </button>
        <div className="c-startpage-principal">
          <p>Dinos quien eres.</p>
          <img className="c-startpage__image" src={cam} alt="foto_camara"></img>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="div">
            <input
              type="text"
              className="input"
              placeholder="Nombre completo"
              {...register("nombre", { required: true })}
            />
            <FormError error={errors.nombre} />
          </div>

          <div className="div">
            <input
              type="text"
              className="input"
              placeholder="Dirección email"
              {...register("correo", { required: true })}
            />
            <FormError error={errors.correo} />
          </div>

          <div className="div">
            <input
              type="Number"
              className="input"
              placeholder="Móvil"
              {...register("telefono", { required: false })}
            />
            <FormError error={errors.telefono} />
          </div>

          <div className="div">
            <input
              type="text"
              className="input"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <FormError error={errors.password} />
          </div>

          {/* <Link to = '/emergency'><img className="btn_blue-regis" src={btng} alt="Guardar_Perfil"></img></Link>  */}
          {/* <img className="btn_blue-regis" type="submit" src={btng} value="Submit" alt="Guardar_Perfil"></img> */}
          <button className="btn btn-info col-12" type="submit" value="Submit">
            Guardar perfil
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationStartPage;
