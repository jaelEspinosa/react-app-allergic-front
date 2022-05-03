import React from 'react';
import completeLogo from "../images/completelogoApplergicFigurasGiro.png";
import "./ValorationPage.scss";
import StarRatingComponent from "../components/StarRatingComponent"
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import { data } from 'jquery';

const ValorationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const USER_ID = sessionStorage.getItem('userID');
  const TOKEN = sessionStorage.getItem('token');

  const postStar = () => {
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
          sessionStorage.clear();
          navigate("/", { replace: true }); 
          console.log(response.status)
        }
      })
      .catch(function (response) {
        //handle error

        console.log(response);
        
      });
  }


  return (
    <div className="c-valpage" >
      <img className="c-valpage__image" src={completeLogo} alt="appLogo"></img>
      <p className="text1">¡Gracias por usar Applergic!</p>
      <p className="text2">Por favor, evalúa tu experiencia.</p>
      <StarRatingComponent/>
      <div>
      <p className="c-btn" onClick={() => {postStar()}}>Enviar</p>
      </div>
    </div>
  )
}


export default ValorationPage;
