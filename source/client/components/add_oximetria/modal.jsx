import React from "react";
import PropTypes from "prop-types";

const ModalAdd = props => (
  <div
    role="button"
    tabIndex={0}
    data-close="ok"
    onClick={props.handleModal}
    className={props.modal ? `container-modal` : `container-modal hide`}
  >
    <section className="modal-title">
      <h2>Oximetría ingresada</h2>
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

    <div className="box-form islabel center modal-button-box">
      <div>
        {props.status === 200 && props.data.ejecucion && (
          <p className="success">
            Muchas gracias por ingresar la oximetría{" "}
            <i className="fas fa-heart" />{" "}
          </p>
        )}
        {props.status === 200 && !props.data.ejecucion && (
          <p className="error">
            Problemas cuando ingresa la encuesta <i className="fas fa-heart" />{" "}
          </p>
        )}
        {props.loading && <p className="Normal">Cargando</p>}
        <div className="buttons-container">
          <div>
            <input
              data-close="ok"
              onClick={props.handleModal}
              className="active"
              type="button"
              value="Ok"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

ModalAdd.propTypes = {};
export default ModalAdd;
