import React from "react";
import PropTypes from "prop-types";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos usuario</h2>
      </article>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="email"
          id="email"
          value={props.form.email}
        />
        <input
          onChange={props.handleChange}
          type="hidden"
          name="id"
          id="id"
          value={props.form.id}
        />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="pass"
          id="pass"
          value={props.form.pass}
        />
      </div>
      <div className="top">
        <label htmlFor="confirmar_contrasena">Confirmar contraseña</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="passConfirm"
          id="passConfirm"
          value={props.form.passConfirm}
        />
      </div>
      <article className="button-form top">
        <div>
          {props.status != 0 &&
            Fucform.stautsForm({
              status: props.status,
              data: props.data,
              message401: "No tiene los permisos necesarios.",
              messageSuccess: "Se ha actualizado con éxito el usuario.",
              messageError: "Error al actualizar el usuario."
            })}
        </div>
        <div>
          {props.loading ? (
            <article className="fa-1x box-form-button-spinner">
              <i className="fas fa-spinner fa-spin" />
            </article>
          ) : (
            <input type="submit" value="Actualizar" />
          )}
        </div>
      </article>
    </section>
  </form>
);

Form.propTypes = {};

export default Form;
