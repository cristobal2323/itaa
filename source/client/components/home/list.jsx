import React from "react";
import PropTypes from "prop-types";

const List = props => (
  <div className="container-button-home">
    <div className="container-button-home--box">
      <h4>
        <i className="fas fa-money-bill-alt" /> Acciones
      </h4>
      {props.loading ? (
        <span>
          Cargando <i className="fas fa-cog fa-spin" />
        </span>
      ) : (
        <ul>
          {props.data.datos.lista.map((item, i) => {
            return (
              <li key={item.id}>
                <a
                  data-menuh="all"
                  role="button"
                  tabIndex={0}
                  onClick={props.handleNav}
                  id={`${item.id}`}
                  className={i === 0 ? "active" : ""}
                >
                  {item.nombre}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  </div>
);

List.propTypes = {};

export default List;
