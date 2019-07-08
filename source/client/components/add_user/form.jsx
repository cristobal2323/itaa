import React from "react";
import PropTypes from "prop-types";

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
            (props.data.ejecucion.estado ? (
              <p className="green">
                Se ha enviado un email al usuario con su user y contraseña
              </p>
            ) : (
              <p className="red">Error al ingresar el usuario</p>
            ))}
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
