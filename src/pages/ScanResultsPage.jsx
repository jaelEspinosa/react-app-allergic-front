import React, { useContext, useEffect, useState } from "react";
import "./ScanResultsPage.scss";
import favoritoF from "../images/favoritoF.png";
import diarioF from "../images/diarioF.png";
import redF from "../images/redF.png";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import axios from "axios";


const ScanResultsPage = () => {
  const {data,SetData} = useContext(DataContext);
  const [producto, setProducto]=useState([]);
  const [ingredientes, setIngredientes]=useState([]);  
  const navigate = useNavigate();



useEffect(()=>{
  const getProducto = async ()=>{
    const res= await axios.get('http://localhost:5000/productos/getAllProductos');
    const resIng= await axios.get('http://localhost:5000/ingredientes/getAllIngredientes');
    console.log(res.data);
    setProducto(res.data);  
    console.log(resIng.data);
    setIngredientes(resIng.data);
}
getProducto();

},[]);
 
console.log("esto es lo k me devuelve el productos",producto) 
console.log("esto es lo k me devuelve el ingredientes",ingredientes) 
  return ( 
    
    <div className="container">
     <button className="c-scans__return" onClick={() => navigate(-1)}>
        Volver
      </button>
    <div className="row">
     
      <div className="c-scans__texts col-12">
        <h3 className="c-scans__text-prim col-12">Aquí tienes el resultado.</h3>
        <p className="c-scans__text-sec col-12">
          Este producto NO es apto para ti, contiene xxx.
        </p>
        {/* <p>Lo sentimos, no hay datos suficientes para valorar este producto.</p>
<p>Este producto es para ti.</p> */}
      </div>
      <div className="c-scans__results">
        <div className="square"></div>
        <div className="menu">
          <img className="menu__item" src={favoritoF} alt="logo"></img>
          <img className="menu__item" src={diarioF} alt="logo"></img>
          <img className="menu__item" src={redF} alt="logo"></img>
        </div>
      </div>
      <div className="c-scans__texts">
        <h4 className="c-scans__text-third">Información del producto.</h4>
        <p className="c-scans__text-fourth">Detalle del producto</p>
        <p className="c-scans__text-fourth">Código:{data} </p>
      </div>
      <div className="row">
        <Link to= '/scanner'><button type="submit" className="btn btn-info col-12">
          Escanear otro producto
        </button></Link>
      </div>
      </div>
    </div>
  );
};

export default ScanResultsPage;
