import React from "react";

const Clima = ({ clima }) => {
  const { name, main } = clima;
  return (
    <div>
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2>El clima de {name}</h2>
         
        </div>
      </div>
    </div>
  );
};

export default Clima;
