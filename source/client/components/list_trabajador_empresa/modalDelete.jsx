import React from "react";
import PropTypes from "prop-types";

const ModalDelete = props => (
  <div
    role="button"
    tabIndex={0}
    data-close="ok"
    onClick={props.handleModal}
    className={props.modal ? `container-modal` : `container-modal hide`}
  >
    <section className="modal-title">
      <h2>Elimina usuario</h2>
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
        <p className="normal">¿Esta seguro que desea eliminar?</p>
        {!props.loadingDelete &&
          props.statusDelete === 200 &&
          props.dataDelete.response === false && (
            <p className="error">Problemas el eliminar</p>
          )}
        {!props.loadingDelete &&
          props.statusDelete === 200 &&
          props.dataDelete.response && (
            <p className="success">Usuario eliminado </p>
          )}
        {props.loadingDelete && (
          <p className="success">
            Cargando <i className="fas fa-spinner fa-pulse" />
          </p>
        )}
        {props.statusDelete === 0 && (
          <div className="buttons-container">
            <div>
              <input
                data-close="ok"
                onClick={props.handleModal}
                className="active cancel"
                type="button"
                value="Cancelar"
              />
            </div>
            <div>
              <input
                onClick={props.handleDelete}
                className="active"
                type="button"
                value="Eliminar"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

ModalDelete.propTypes = {};
export default ModalDelete;
