import React from "react";
import PropTypes from "prop-types";

const Spiner = props => (
  <div className="fa-1x spiner-table top">
    {props.loading && (
      <div>
        Cargando <i className="fas fa-spinner fa-spin" />
      </div>
    )}
  </div>
);

Spiner.propTypes = {};

export default Spiner;
