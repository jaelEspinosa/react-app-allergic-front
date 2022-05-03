import React, { useContext } from 'react';
import './DiaryPage.scss';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';

const DiaryPage = () => {

const {product, setProduct} = useContext(ProductContext);
console.log('esto es lo que me traigo', product)

  const navigate = useNavigate
  const location = useLocation();
  
  const USER_ID = sessionStorage.getItem('userID');
  const TOKEN = sessionStorage.getItem('token');

  const saveProduct = () => {
    axios({
      method: "put",
      url: "http://localhost:4000/users/updateUserById/"+USER_ID,
      data: product,
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

        console.log(response);
        
      });
  }

    




  return (
    <div>
      <div className="container">
      <div className="c-diary__texts">
      <h4 className="c-scans__text-prim">¿Incluimos la selección en tu diario?</h4>
      <p className="c-scans__text-sec">Añade tus comentarios para completar tu información.</p>
      </div>
      <div >
      <img className="product" src={product.imagen} alt="product"></img>
      <h4>{product.nombre}</h4>
      </div>
      <div>
      <Link to = '/home'><button type="submit" className="btn btn-info col-12" onClick={() => {saveProduct()}}>Guardar</button></Link>
          
        
      </div>
      </div>
    </div>
  )
}

export default DiaryPage
