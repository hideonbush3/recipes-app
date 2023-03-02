import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import Logo from "../../public/images/smile.png";

const Recipe = ({ name, ingredients, steps }) => {
  let fname = name.toLowerCase().replace(/ /g, "-");
  return (
    <React.StrictMode>
      <div>
        <img src={Logo} />
      </div>
      <section id={fname}>
        <h1>{name}</h1>
        <div>
          <img src={`./images/${fname}.png`} width="220px" height="220px" />
        </div>
        <IngredientsList list={ingredients} />
        <Instructions title="요리 방법" steps={steps} />
      </section>
    </React.StrictMode>
  );
};

export default Recipe;
