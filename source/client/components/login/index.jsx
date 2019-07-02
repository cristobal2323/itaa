import React from "react";
import PropTypes from "prop-types";

const LoginForm = props => (
  <div className="module-login">
    <img className="logo" src={props.logo} alt="" />
    {/* Section LOG IN */}
    <div className="box-login box-login--a" id="box-login--a">
      <form action="">
        <div className="title-login">
          <h2>Ingresa a Itaa</h2>
        </div>
        <div className="down-login">
          <p>Ingresa con tu usuario y password</p>
        </div>
        <div className="form-login">
          <label htmlFor="mail">
            <i className="fas fa-envelope" />
          </label>
          <input id="mail" autoComplete="on" placeholder="Usuario" />
        </div>
        <div className="form-login top">
          <label htmlFor="pass">
            <i className="fas fa-key" />
          </label>
          <input
            id="pass"
            autoComplete="on"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="forget-login top">
          <a
            data-close="ok"
            tabIndex={0}
            role="button"
            onClick={props.handleModal}
          >
            ¿Olvidaste tu Contraseña?
          </a>
        </div>
        <div className="button-login top topx3">
          {props.message && (
            <p className="error">Usuario o Contraseña no valida</p>
          )}
          <button onClick={props.handleLogin}>Ingresa</button>
        </div>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleLog: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  dataRegister: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  loadingRegister: PropTypes.bool.isRequired,
  statusRegister: PropTypes.number.isRequired,
  message: PropTypes.bool.isRequired
};

export default LoginForm;
