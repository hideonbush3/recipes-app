import React from "react";

const Ingredient = ({ amount, measurement, name }) => {
    return (
      <React.StrictMode>
        <li>
          {amount} {measurement} {name}
        </li>
      </React.StrictMode>
    );
}

export default Ingredient;