import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Date from "../../containers/common/date";

const Title = props => (
  <div className="title-table">
    <div>
      <h3>Oximetría</h3>
    </div>
    <div>
      <Link to="/dashboard/add_examen_medico">Nueva Oximetría</Link>
    </div>
  </div>
);

Title.propTypes = {};

export default Title;
