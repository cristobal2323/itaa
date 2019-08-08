import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos examén medico</h2>
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
        <label htmlFor="colesterolTotal">Colesterol Total</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="colesterolTotal"
          id="colesterolTotal"
          value={props.form.colesterolTotal}
        />
      </div>
      <div className="top">
        <label htmlFor="colesterolIdl">Colesterol Idl</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="colesterolIdl"
          id="colesterolIdl"
          value={props.form.colesterolIdl}
        />
      </div>
      <div className="top">
        <label htmlFor="colesterolHdl">Colesterol Hdl</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="colesterolHdl"
          id="colesterolHdl"
          value={props.form.colesterolHdl}
        />
      </div>
      <div className="top">
        <label htmlFor="colesterolIdl">Colesterol vldl</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="colesterolVldl"
          id="colesterolVldl"
          value={props.form.colesterolVldl}
        />
      </div>
      <div className="top">
        <label htmlFor="triglicerido">Triglicerido</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="triglicerido"
          id="triglicerido"
          value={props.form.triglicerido}
        />
      </div>
      <div className="top">
        <label htmlFor="glicemia">Glicemia</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="glicemia"
          id="glicemia"
          value={props.form.glicemia}
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
            <input type="submit" value="actualizar" />
          )}
        </div>
      </article>
    </section>
  </form>
);

Form.propTypes = {};

export default Form;
