import React, { useState } from "react";
import Error from "../components/Error";
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, setBusqueda, setConsulta }) => {
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
    setConsulta(true);
  };

  const { ciudad, pais } = busqueda;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          {error ? <Error mensaje="Todos los campos son necesarios" /> : null}
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

Formulario.propTypes={
  busqueda:PropTypes.object.isRequired,
  setBusqueda:PropTypes.func.isRequired,
   setConsulta:PropTypes.func.isRequired

}
export default Formulario;
