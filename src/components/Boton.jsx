

import React, { useState } from 'react'

const Boton = ({ingrediente, pushIngrediente} ) => {
    const [clicked, setClicked]=useState('btn-ing')
    
  return (
    <button
    className= {clicked}
    
    value={ingrediente.name}
    onClick={() => {
      pushIngrediente(ingrediente._id, ingrediente.name);
      setClicked('btn-ing clicked')
    }}
  >
    {ingrediente.name} 
  </button>
  )
}

export default Boton