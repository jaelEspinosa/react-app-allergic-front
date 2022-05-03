import "./IngredientsSelectionPage.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHref, useNavigate, useHistory } from "react-router-dom";

function IngredientsSelectionPage() {
  const navigate = useNavigate();

  const ingredienteIdArray = new Set();
  const ingredienteName = new Set();

  const pushIngrediente = (ingrediente, name) => {
    ingredienteIdArray.add(ingrediente);
    ingredienteName.add(name);
    console.log(ingredienteIdArray);
  };

  const navigationToIngredientesPage = () => {
    navigate("/ingredients", {
      state: { ids: ingredienteIdArray, names: ingredienteName },
    });
  };

  const [ingredientes, setIngredientes] = useState([]);
  const [firstLetters, setFirstLetters] = useState(new Set());
  useEffect(() => {
    const getIngredientes = async () => {
      const res = await axios.get(
        "http://localhost:4000/ingredientes/getAllIngredientes"
      );
      res.data.forEach((ingrediente) => {
        firstLetters.add(ingrediente.name.toUpperCase()[0]);
      });
      setIngredientes(res.data);
      console.log(firstLetters);

      console.log(res.data);
    };
    getIngredientes();
  }, []);
  const orderIngredientes = ingredientes.sort();
  function goToletter() {}

  function contraer(e) {

    e.target.nextElementSibling.classList.toggle("ocultar");

  }

  return (
    <div className="container">
      <h1 className="col-12 title">
        Ahora selecciona tus alergias e intolerencias
      </h1>
      <p className="col-12 subtitle">
        Los elementos marcados serán identificados en tus busquedas como
        peligrosos para ti.
      </p>

      <div className="busquedaR">
        {Array.from(firstLetters).map((letter) => (
          <div key={letter} className="col-3">
            <button key={letter} onClick={() => goToletter()} className="firstLetterButton">
              {letter}
            </button>
          </div>
        ))}
      </div>

      <div>
        {Array.from(firstLetters).map((letter) => (
          <div key={letter} className="firstLetterBlock">
            <p className="firstLetterTitle">{letter}</p>
            <button onClick={contraer} className="firstLetterExpand">▽</button>
            <div className="firstLetterIngredients">
              {orderIngredientes
                .filter((ingrediente) => {
                  return ingrediente.name.toUpperCase().startsWith(letter);
                })
                .map((ingrediente) => (
                  <button
                    className="btn-ing"
                    key={ingrediente._id}
                    value={ingrediente.name}
                    onClick={() => {
                      pushIngrediente(ingrediente._id, ingrediente.name);
                    }}
                  >
                    {ingrediente.name}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn btn-info col-12"
        onClick={() => {
          navigationToIngredientesPage();
        }}
      >
        Guardar
      </button>
    </div>
  );
}

export default IngredientsSelectionPage;
