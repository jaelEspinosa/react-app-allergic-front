import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import './EmergenciPage.scss'
import { Link, useHref, useNavigate, useHistory  } from "react-router-dom";
import axios from "axios";



export default function ContactPage() {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();  
  const navigate = useNavigate();

  const submit = (data) => {
    const USER_ID = sessionStorage.getItem('userID');
    const TOKEN = sessionStorage.getItem('token');
    console.log(TOKEN);
    console.log(USER_ID);
    axios({
      method: "put",
      url: "http://localhost:4000/users/updateUserById/"+USER_ID,
      data: data,
      headers: { "Content-Type": "application/json", 'authorization' : TOKEN },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status === 200) {


          navigate("/IngredientsSelec", { replace: true });

        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        
      });
  };
  console.log(watch("name"))
  console.log(errors);

  return (
    <form className="container" onSubmit={handleSubmit(submit)}>
    <button className="c-startpage_return" onClick={() => navigate(-1)}>
          Volver
        </button>
    <div className="row">
<div className="col-12 text1">Vamos a añadir tu contacto en caso de emergencia.</div>
<div className="col-12 text2">Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en casa de emergencia.</div>
</div>
      <div>
        <label className="row">
          <input   className="form-control line col-12" type="text" placeholder="Nombre completo de tu contacto" {...register("nombreContactoEmergencia")} />
        </label>
        <FormError error={errors.nombreContactoEmergencia}/>
      </div>

      <div>
        <label className="row">
          <input  className="form-control line col-12" type="text" placeholder="Correo contacto emergencia"{...register("correoContactoEmergencia")} />
        </label>
        <FormError error={errors.correoContactoEmergencia}/>
      </div>
<div>
          <label className="row">

              <input  className="form-control line col-12" type="text" placeholder="Telefono contacto emergencia"{...register("telefonoContactoEmergencia")}>
              </input>
          </label>
          <FormError error={errors.telefonoContactoEmergencia}/>
      </div>
      <div>
          <label className="row">

        <input  className="form-control line col-12" type="text" placeholder="Compañia de seguros/ Nº de poliza"{...register("polizaSeguros")}>
              </input>
              <FormError error={errors.polizaSeguros}/>
          </label>
      </div>
<div className="row">
      <button type="submit" className="btn btn-info col-12">Guardar emergencia</button>
    <Link to = '/IngredientsSelec'><div className="col-12 stylenext">Registraré mi contacto en otro momento</div></Link>  
</div>
    </form>
  );
}