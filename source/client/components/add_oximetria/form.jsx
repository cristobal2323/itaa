import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos oximetría</h2>
      </article>
      <div>
        <label htmlFor="nombres">Nombres</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="nombres"
          id="nombres"
          value={props.form.nombres}
        />
      </div>
      <div>
        <label htmlFor=" spo2Basal">Spo2 Basal</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="spo2Basal"
          id=" spo2Basal"
          value={props.form.spo2Basal}
        />
      </div>
      <div className="top">
        <label htmlFor="spo2Media">Spo2 Media</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="spo2Media"
          id="spo2Media"
          value={props.form.spo2Media}
        />
      </div>
      <div className="top">
        <label htmlFor="spo2Minima">Spo2 Minima</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="spo2Minima"
          id="spo2Minima"
          value={props.form.spo2Minima}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadDesaturacion85">Cantidad Desaturacion 85</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadDesaturacion85"
          id="cantidadDesaturacion85"
          value={props.form.cantidadDesaturacion85}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadDesaturacion80">Cantidad Desaturacion 80</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadDesaturacion80"
          id="cantidadDesaturacion80"
          value={props.form.cantidadDesaturacion80}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoSpo285">Tiempo Spo 285</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoSpo285"
          id="tiempoSpo285"
          value={props.form.tiempoSpo285}
        />
      </div>
      <div className="top">
        <label htmlFor="desaturacionMasLarga">Desaturacion Más Larga</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="desaturacionMasLarga"
          id="desaturacionMasLarga"
          value={props.form.desaturacionMasLarga}
        />
      </div>
      <div className="top">
        <label htmlFor="desaturacionMasGrande">Desaturacion Más Grande</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="desaturacionMasGrande"
          id="desaturacionMasGrande"
          value={props.form.desaturacionMasGrande}
        />
      </div>
      <div className="top">
        <label htmlFor="desaturacionPromedio">Desaturacion Promedio</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="desaturacionPromedio"
          id="desaturacionPromedio"
          value={props.form.desaturacionPromedio}
        />
      </div>
      <div className="top">
        <label htmlFor="desaturacionMasProfunda">
          Desaturacion Más Profunda
        </label>
        <input
          onChange={props.handleChange}
          type="number"
          name="desaturacionMasProfunda"
          id="desaturacionMasProfunda"
          value={props.form.desaturacionMasProfunda}
        />
      </div>
      <div className="top">
        <label htmlFor="sumaDesaturaciones">Suma Desaturaciones</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="sumaDesaturaciones"
          id="sumaDesaturaciones"
          value={props.form.sumaDesaturaciones}
        />
      </div>
      <article className="button-form top">
        <div>
          {props.statusSave != 0 &&
            Fucform.stautsForm({
              status: props.statusSave,
              data: props.dataSave,
              message401: "No tiene los permisos necesarios.",
              messageSuccess:
                "   Se ha enviado un email al usuario con su user y contraseña.",
              messageError: "Error al ingresar el usuario."
            })}
        </div>
        <div>
          {props.loading ? (
            <article className="fa-1x box-form-button-spinner">
              <i className="fas fa-spinner fa-spin" />
            </article>
          ) : (
            <input type="submit" value="Ingresar" />
          )}
        </div>
      </article>
    </section>
  </form>
);

Form.propTypes = {};

export default Form;
