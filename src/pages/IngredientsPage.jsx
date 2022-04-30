import React from 'react'

const IngredientsPage = () => {
  return (
  <div className='container'>
  <div  className="row">
    <h1 className="col-12">Confirma tu selección</h1>
    <p className="col-12">A continuación te resumimos los alimentos registrados como peligrosos para ti.</p>
    <p className="col-12">Marca para deseleccionar o añadir uno nuevo.</p>
    <div  className="row">
    <button className="btn btn-light col-12">Añadir nuevos</button>
    <div  className="row">

    <button className="btn btn-info col-12">Confirma</button>
</div>
</div>

</div>
  </div>
  )
}

export default IngredientsPage