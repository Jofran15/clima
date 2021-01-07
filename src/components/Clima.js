import React from "react";
import PropTypes from 'prop-types';

const Clima = ({ clima }) => {
  const { name, main } = clima;
  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div>
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2>El clima de {name}</h2>
          <p className="temperatura">
            {parseFloat(main.temp - kelvin, 10).toFixed(2)}{" "}
            <span> &#x2103;</span>
          </p>
          <h2>La temperatura maxima es de :</h2>
          <p>
            {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{" "}
            <span> &#x2103;</span>
          </p>
          <h2>La temperatura minima es de : </h2>
          <p>
            {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{" "}
            <span> &#x2103;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Clima.propTypes={
  clima:PropTypes.object.isRequired

}

export default Clima;
