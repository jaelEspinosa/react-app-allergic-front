import React, { useContext } from 'react';
import './DiaryPage.scss';
import { ProductContext } from '../context/ProductContext';

const DiaryPage = () => {
    
const {product, setProduct} = useContext(ProductContext);
console.log('esto es lo que me traigo', product)



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
      <button type="submit" className="btn btn-info col-12">
          Guardar
        </button>
      </div>
      </div>
    </div>
  )
}

export default DiaryPage
