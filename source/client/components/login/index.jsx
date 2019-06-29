import React from "react";
import PropTypes from "prop-types";

const LoginForm = props => (
  <div className="module-login">
    <img className="logo" src={props.logo} alt="" />
    {/* Section LOG IN */}
    <div className="box-login box-login--a" id="box-login--a">
      <form action="">
        <div className="title-login">
          <h2>Ingresa a DataOn</h2>
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
    <div className="box-login box-login--b" id="box-login--b">
      {/* Section Register */}
      <div className="title-login">
        <h2>Crea tu cuenta</h2>
      </div>
      <div className="down-login">
        <p>Ingresa con tu nombre, usuario y password</p>
      </div>
      <div className="form-login">
        <label htmlFor="name">
          <i className="fas fa-user" />
        </label>
        <input id="name" placeholder="Nombre" />
      </div>
      <div className="form-login top">
        <label htmlFor="last-name">
          <i className="fas fa-user-secret" />
        </label>
        <input id="last-name" placeholder="Apellido" />
      </div>
      <div className="form-login top">
        <label htmlFor="mail-register">
          <i className="fas fa-envelope" />
        </label>
        <input id="mail-register" placeholder="Usuario" />
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
        {props.statusRegister === 200 &&
          props.dataRegister.ejecucion.estado === false && (
            <p className="error">Este mail ya es utilizado</p>
          )}
        {props.statusRegister === 200 &&
          props.dataRegister.ejecucion.estado && (
            <p className="success">
              Usuario creado exitosamente, revise su mail{" "}
            </p>
          )}
        {props.loadingRegister && (
          <p className="success">
            Cargando <i className="fas fa-spinner fa-pulse" />
          </p>
        )}
        <button onClick={props.handleRegister}>Crear</button>
      </div>
    </div>
    <div className="background" id="background">
      <div className="content">
        <div className="text-login--a" id="text-login--a">
          <div className="title-login">
            <h2 id="title-login--text">Registrate</h2>
          </div>
          <div className="down-login">
            <p id="down-login--text">
              Se parte de este excelente emprendimiento
            </p>
          </div>
          <div className="button-login top topx3">
            <button onClick={props.handleLog}>Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  handleLog: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  dataRegister: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  loadingRegister: PropTypes.bool.isRequired,
  statusRegister: PropTypes.number.isRequired,
  message: PropTypes.bool.isRequired
};

export default LoginForm;
