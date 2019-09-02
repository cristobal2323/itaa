import React from "react";
import PropTypes from "prop-types";
import Radio from "./radio";

const Options = props => (
  <div className={props.top}>
    <label htmlFor="nombres" className="flex">
      <div className="circle">{props.data.consulta.numero}</div>{" "}
      <div>{props.data.consulta.enunciado}</div>
    </label>
    {props.data.respuesta[0].es_opciones && (
      <Radio
        atributo={props.data.consulta.atributo}
        form={props.form}
        handleChange={props.handleChange}
        opcion={props.data.respuesta[0].opcion}
        opciones={props.data.respuesta[0].opciones}
      />
    )}
  </div>
);

Options.propTypes = {};

export default Options;
