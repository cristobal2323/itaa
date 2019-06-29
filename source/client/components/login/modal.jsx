import React from "react";
import PropTypes from "prop-types";

const Modal = props => (
  <div
    role="button"
    tabIndex={0}
    data-close="ok"
    onClick={props.handleModal}
    className={props.modal ? `container-modal` : `container-modal hide`}
  >
    <section className="modal-title">
      <h2>Recupera tu clave</h2>
      <a>
        <i
          role="button"
          tabIndex={0}
          data-close="ok"
          onClick={props.handleModal}
          className="fas fa-times-circle"
        />
      </a>
    </section>

    <div className={`box-modal max500`}>
      <section className="top">
        <div className="box-login">
          <div className="form-login">
            <label htmlFor="forget">
              <i className="fas fa-envelope" />
            </label>
            <input id="forget" placeholder="Email" />
          </div>
        </div>
      </section>
    </div>

    <div className="box-form islabel center modal-button-box">
      <div>
        {!props.loadingForget &&
          props.statusForget === 200 &&
          props.dataForget.ejecucion.estado === false && (
            <p className="error">Correo invalido</p>
          )}
        {!props.loadingForget &&
          props.statusForget === 200 &&
          props.dataForget.ejecucion.estado && (
            <p className="success">Correo enviado, revise su mail </p>
          )}
        {props.loadingForget && (
          <p className="success">
            Cargando <i className="fas fa-spinner fa-pulse" />
          </p>
        )}
        <input
          onClick={props.handleForget}
          className="active"
          type="button"
          value="Recuperar"
        />
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleForget: PropTypes.func.isRequired,
  dataForget: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  loadingForget: PropTypes.bool.isRequired,
  statusForget: PropTypes.number.isRequired
};
export default Modal;
