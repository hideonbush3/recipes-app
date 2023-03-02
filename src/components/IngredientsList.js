import React from "react";
import Ingredient from "./Ingredient";

const IngredientsList = ({ list }) => {
  return (
    <React.StrictMode>
      <ul className="ingredients">
        {list.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
    </React.StrictMode>
  );
};

export default IngredientsList;
