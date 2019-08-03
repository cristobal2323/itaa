import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Paginator = props => {
  if (props.data.ejecucion.estado) {
    let i = props.paginator.blockStart;

    const total =
      props.data.datos.paginador.total / props.data.datos.paginador.regxpagina;

    const buttons = [];
    while (
      i <= props.paginator.blockEnd &&
      i <= props.data.datos.paginador.total
    ) {
      if (i < total)
        buttons.push(
          <div
            className={props.paginator.main == i ? "active" : ""}
            data-num={i}
            onClick={props.handlePaginator}
            data-main={i}
            key={i}
          >
            {i}
          </div>
        );
      i++;
    }

    return (
      <div className="paginator top">
        {props.paginator.main > 1 && (
          <div
            data-num={parseInt(props.paginator.main, 10) - 1}
            onClick={props.handlePaginator}
          >
            <i className="fas fa-chevron-left" />
          </div>
        )}
        {buttons}
        {props.paginator.main < total - 1 && (
          <div
            data-num={parseInt(props.paginator.main, 10) + 1}
            onClick={props.handlePaginator}
          >
            <i className="fas fa-chevron-right" />
          </div>
        )}
      </div>
    );
  } else {
    return <div className="paginator top" />;
  }
};

Paginator.propTypes = {};

export default Paginator;
