import React, { useContext, useEffect, useState } from "react";
import "./ScanResultsPage.scss";
import favoritoF from "../images/favoritoF.png";
import diarioF from "../images/diarioF.png";
import redF from "../images/redF.png";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { ProductContext } from "../context/ProductContext";


const ScanResultsPage = () => {
  const {data,SetData} = useContext(DataContext);
  const [productos, setProductos]= useState([]);
  const [ingredientes, setIngredientes]=useState([]);
  const [filteredprod, setFilteredProd]=useState({});  
  const [ingredienteUser, setIngredienteUser]=useState({});  
  const [stateScan, setStateScan]=useState('');  
  const [clase, setClase]= useState('square');
  const {product, setProduct} = useContext(ProductContext);
  const navigate = useNavigate();



useEffect(()=>{
  const getProducto = async ()=>{

    //procedemos a la creación de los headers para enviar con la peticion de getUser
    const axiosInstance = axios.create({
      headers: {
        'authorization': sessionStorage.getItem('token')
      }
  });
  //axios.all, hacemos todas las peticiones a la vez para evitar problemas de renderizado en diferentes peticiones
    axios.all([
      axios.get('http://localhost:4000/productos/getAllProductos'),
      axios.get('http://localhost:4000/ingredientes/getAllIngredientes'),
      //esta peticion la hacemos con el authorization token
      axiosInstance.get('http://localhost:4000/users/getUserById/'+sessionStorage.getItem('userID'))
    ])
    //con el spread, en orden, devolvemos los resultados de las peticiones
    .then(axios.spread((allProductos, allIngredientes, userData)=> {
      //introducimos los productos
      setProductos(allProductos.data); 
      //introducimos los ingredientes
      setIngredientes(allIngredientes.data); 
      //recogemos el producto del codigo escaneado
      const filter = allProductos.data.filter(item => item.codigo === data);

      //Si existe el codigo en los productos de la base de datos:
      if (filter[0]) {
        setFilteredProd ({
          codigo: filter[0].codigo, 
          nombre: filter[0].nombre ,
          imagen: filter[0].imagen,
          id : filter[0]._id,
        })

        setProduct({
          nombre:filter[0].nombre,
          imagen:filter[0].imagen
        })
        
        

        //creamos un array temporal para almacenar todos los ids de ingredientes del usuario
        let arrayTemp = [];
        userData.data.data.usuario.ingredientes.map((elem, i)=> {
          arrayTemp.push(elem._id)
        })

        //si encuentra los ingredientes del producto dentro de los ingredientes del usuario, guardamos la id de ingrediente en un string
        let ingrediente = '';
        filter[0].ingredientes.some(item => {
          if (arrayTemp.includes(item)) {ingrediente=item}
        })

        if (filter[0].ingredientes.some(item => arrayTemp.includes(item))) { //si existe el ingredinte del producto en los ingredientes del usuario

          //guardamos en stateScan el string de texto que mostraremos por pantalla
          setStateScan('Este producto NO es apto para ti, contiene '+allIngredientes.data.filter(elem=> ingrediente === elem._id)[0].name);
          setClase('square red')
        }
        else { //no existe el ingrediente en los ingredientes del usuario, por lo tanto es apto
          setStateScan('Este producto es apto para tí');
          setClase('square green');
        }
      }
      else {//el producto no existe en la base de datos
        setStateScan('Lo sentimos, no hay datos suficientes para poder valorar este producto.');
        setClase('square yellow')
      }
      
    }))
    
}
getProducto();

},[]);
 



 
  return ( 
    
    <div className="container">
     {/* <button className="c-scans__return" onClick={() => navigate(-1)}>
        Volver
      </button> */}
    <div className="row">
     
      <div className="c-scans__texts col-12">
        <h3 className="c-scans__text-prim col-12">Aquí tienes el resultado.</h3>
        <p className="c-scans__text-sec col-12">
          {stateScan}
        </p>
        {/* <p>Lo sentimos, no hay datos suficientes para valorar este producto.</p>
<p>Este producto es para ti.</p> */}
      </div>
      <div className="c-scans__results">
        <div className={clase}>
          {filteredprod.nombre && <>
            <img  className="imgdata" src={filteredprod.imagen} alt ='img'></img>
            </>
          }  
        </div>
        <div className="menu">
          <img className="menu__item" src={favoritoF} alt="logo"></img>
          <Link to= '/diary'><img className="menu__item" src={diarioF} alt="logo"></img></Link>
          <img className="menu__item" src={redF} alt="logo"></img>
        </div>
      </div>
      <div className="c-scans__texts">
        <h4 className="c-scans__text-third">{filteredprod.nombre} </h4>
        {/* <p className="c-scans__text-fourth">Detalle del producto</p> */}
        <p className="c-scans__text-fourth">Código:{data} </p>
      </div>
      <div>
        <Link to= '/scanner'><button type="submit" className="btn_blue col-12">
          Escanear otro producto
        </button></Link>
      </div>
      </div>
    </div>
  );
};

export default ScanResultsPage;
