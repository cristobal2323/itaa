import React from "react";
import PropTypes from "prop-types";

const Radio = props => (
  <React.Fragment>
    {props.opciones.map((item, i) => (
      <label key={item.glosa} className="container-radio">
        {item.glosa}
        <input
          required
          type="radio"
          value={item.valor}
          onChange={props.handleChange}
          checked={props.form[props.atributo] === item.valor.toString()}
          name={props.atributo}
        />
        <span className="checkmark" />
      </label>
    ))}
  </React.Fragment>
);

Radio.propTypes = {};

export default Radio;
