import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import './EmergenciPage.scss'




export default function ContactPage() {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();  

  const submit = (data) => {
    console.log(data);
  };
  console.log(watch("name"))
  console.log(errors);

  return (
    <form className="container" onSubmit={handleSubmit(submit)}>
    <div class="row">
<div class="col-12 text1">Vamos a añadir tu contacto en caso de emergencia.</div>
<div class="col-12 text2">Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en casa de emergencia.</div>
</div>
      <div>
        <label class="row">
          <input   class="form-control line col-12" type="text" placeholder="Nombre completo de tu contacto" {...register("nombreContactoEmergencia")} />
        </label>
        <FormError error={errors.nombreContactoEmergencia}/>
      </div>

      <div>
        <label class="row">
          <input  class="form-control line col-12" type="text" placeholder="Correo contacto emergencia"{...register("correoContactoEmergencia")} />
        </label>
        <FormError error={errors.correoContactoEmergencia}/>
      </div>
<div>
          <label class="row">

              <input  class="form-control line col-12" type="text" placeholder="Telefono contacto emergencia"{...register("telefonoContactoEmergencia")}>
              </input>
          </label>
          <FormError error={errors.telefonoContactoEmergencia}/>
      </div>
      <div>
          <label class="row">

        <input  class="form-control line col-12" type="text" placeholder="Compañia de seguros/ Nº de poliza"{...register("polizaSeguros")}>
              </input>
              <FormError error={errors.polizaSeguros}/>
          </label>
      </div>
<div class="row">
      <button type="button" class="btn btn-info col-12">Guardar emergencia</button>
      <div class="col-12 stylenext">Registraré mi contacto en otro momento</div>
</div>
    </form>
  );
}