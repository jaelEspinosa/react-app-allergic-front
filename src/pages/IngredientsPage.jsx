import React from 'react'
import './IngredientsPage.scss'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";


const IngredientsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const USER_ID = sessionStorage.getItem('userID');
  const TOKEN = sessionStorage.getItem('token');

  const postIngredientes = () => {
    Array.from(location.state)
    axios({
      method: "put",
      url: "http://localhost:4000/users/updateUserById/"+USER_ID,
      data: {ingredientes: Array.from(location.state.ids)},
      headers: { "Content-Type": "application/json", 'authorization' : TOKEN },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status === 200) {
          navigate("/registerend", { replace: true }); 
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
    
    <div  className="row divBotones">
    
    { Array.from(location.state.names).map((ingrediente) =>
        {
        return <button className = "btn-selection" key={ingrediente}>{ingrediente}</button>;
      }

        )}



   
    <div  className="row">
    <button className="btn btn-info col-12" onClick={() => {postIngredientes()}}>Confirma</button>
</div>
</div>

</div>
  </div>
  )
}

export default IngredientsPage