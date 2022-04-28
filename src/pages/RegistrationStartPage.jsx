import React from "react";
import { useForm } from "react-hook-form";
import cam from "../images/subir_foto.jpg";
import btng from "../images/btn_grayStart.png";
import "./RegistrationStartPage.scss";
import FormError from "../components/FormError";
import { Link, useNavigate } from "react-router-dom";


const RegistrationStartPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  console.log(watch("nombre"));
  console.log(errors);

  return (
    <>
      <div className="c-startpage">
      <button className="c-startpage_return" onClick={() => navigate(-1)}>Volver</button>
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
              <FormError error={errors.nombre}/>
          </div>

          <div className="div">
            

            <input
              type="text"
              className="input"
              placeholder="Dirección email"
              {...register("correo", { required: true })}
            />
              <FormError error={errors.correo}/>
          </div>

          <div className="div">
      
            <input
              type="Number"
              className="input"
              placeholder="Móvil"
              {...register("telefono", { required: false })}
            />
              <FormError error={errors.telefono}/>
          </div>

          <div className="div">
         
            <input
              type="text"
              className="input"
              placeholder="Password"
              {...register("password", { required: true })}
            />
              <FormError error={errors.password}/>
          </div>

          <Link to = '/emergency'><img className="btn_blue-regis" src={btng} alt="Guardar_Perfil"></img></Link> 
          
        </form>
      </div>
    </>
  );
};

export default RegistrationStartPage;