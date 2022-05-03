import React, { useContext } from 'react';
import './DiaryPage.scss';
import calendario from '../images/calendario.png';
import close from '../images/close.png';
import filter from '../images/filter.png';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const DiaryPage = () => {
    
const {product, setProduct} = useContext(ProductContext);
console.log('esto es lo que me traigo', product)



  return (
    <div>
      <div className="container">
      <div className="nav">
      <ul>
          <img src={calendario} alt="calendario"></img>
          <img src={close} alt="close"></img>
          <img src={filter} alt="filter"></img>
          </ul>
      </div>
      <div className="c-diary__texts">
      <h4 className="c-scans__text-prim">¿Incluimos la selección en tu diario?</h4>
      <p className="c-scans__text-sec">Añade tus comentarios para completar tu información.</p>
      </div>
      <div >
      <img className="product" src={product.imagen} alt="product"></img>
      <p>{product.nombre}</p>
      </div>
      <div>
      <Link to ='/home'><button type="submit" className="btn btn-info col-12">Guardar</button></Link>
          
        
      </div>
      </div>
    </div>
  )
}

export default DiaryPage
