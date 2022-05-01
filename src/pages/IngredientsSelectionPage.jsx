import './IngredientsSelectionPage.scss'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHref, useNavigate, useHistory  } from "react-router-dom";



function IngredientsSelectionPage() {
  const navigate = useNavigate();

  const ingredienteIdArray = new Set();
  const ingredienteName = new Set();

  const pushIngrediente = (ingrediente, name) => {
    ingredienteIdArray.add(ingrediente)
    ingredienteName.add(name)
    console.log(ingredienteIdArray)
  };



  const navigationToIngredientesPage = () => {
    navigate("/ingredients", {state: {ids: ingredienteIdArray, names: ingredienteName}}  );
  }

  const [ingredientes, setIngredientes] = useState([]);  
  useEffect(()=>{
    const getIngredientes = async ()=>{
      const res= await axios.get('http://localhost:5000/ingredientes/getAllIngredientes') 
      setIngredientes( res.data ) 
      
      console.log( res.data )
    
  
  }
  getIngredientes();
},[]);
const orderIngredientes = ingredientes.sort()


  return (

    <div className='container'>
  <h1 className='col-12 title'>Ahora selecciona tus alergias e intolerencias</h1>
        <p className='col-12 subtitle'>Los elementos marcados serán identificados en tus busquedas como peligrosos para ti.</p>

        {orderIngredientes.map((ingrediente) =>
  <button key={ingrediente._id} value={ingrediente.name} onClick={() => {pushIngrediente(ingrediente._id, ingrediente.name)}}>{ingrediente.name}</button>

        )}
        
        <button className="btn btn-info col-12" onClick={()=>{navigationToIngredientesPage()}}>Guardar</button>
</div>  )
}

export default IngredientsSelectionPage