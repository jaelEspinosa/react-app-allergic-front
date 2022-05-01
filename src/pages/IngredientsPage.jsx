import React from 'react'
import './IngredientsPage.scss'
import {useLocation} from 'react-router-dom';
import axios from "axios";


const IngredientsPage = () => {
  
  const location = useLocation();
  
  const USER_ID = sessionStorage.getItem('userID');
  const TOKEN = sessionStorage.getItem('token');

  const postIngredientes = () => {
    Array.from(location.state)
    axios({
      method: "put",
      url: "http://localhost:5000/users/updateUserById/"+USER_ID,
      data: {ingredientes: Array.from(location.state.ids)},
      headers: { "Content-Type": "application/json", 'authorization' : TOKEN },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status === 200) {

          console.log(response.status)
        }
      })
      .catch(function (response) {
        //handle error
        console.log(Array.from(location.state.ids).join(','))

        console.log(response);
        
      });
  }


  return (
  <div className='container'>
  <div  className="row">
    <h1 className="col-12 title1">Confirma tu selección</h1>
    <p className="col-12 subtitle1">A continuación te resumimos los alimentos registrados como peligrosos para ti.</p>
    <p className="col-12 subtitle2">Marca para deseleccionar o añadir uno nuevo.</p>
    <div  className="row">
    
    { Array.from(location.state.names).map((ingrediente) =>
        {
        return <button key={ingrediente}>{ingrediente}</button>;
      }

        )}



    <button className="btn btn-light col-12">Añadir nuevos</button>
    <div  className="row">
    <button className="btn btn-info col-12" onClick={() => {postIngredientes()}}>Confirma</button>
</div>
</div>

</div>
  </div>
  )
}

export default IngredientsPage