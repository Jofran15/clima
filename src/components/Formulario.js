import React, { useState } from "react";

const Formulario = ({busqueda,setBusqueda,setConsulta}) => {
 

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setConsulta(true)
  };

  const { ciudad, pais } = busqueda;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          {error ? (
            <div className="red darken-4 error">
              Todos los campos son necesarios
            </div>
          ) : null}
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
            className="input-field col s12"
          />
          <label htmlFor="ciudad">Ciudad:</label>
        </div>

        <div className="input-field col s12">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value=""> Seleccione un pais </option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais"> Pais:</label>
        </div>
        <div className="input-field col s12">
          <input
            type="submit"
            value="Buscar clima"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
