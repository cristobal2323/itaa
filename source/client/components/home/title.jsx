import React from "react";
import PropTypes from "prop-types";

import Date from "../../containers/common/date";

const Title = props => (
  <div className="title">
    <div>
      <h1>Listado de acciones</h1>
    </div>
    <div className="margin-right topx4">
      <h3> Fecha </h3>
      <Date id="date" />
    </div>
  </div>
);

Title.propTypes = {};

export default Title;
