import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Date from "../../containers/common/date";

const Title = props => (
  <div className="title-table">
    <div>
      <h3>Polisomnografia</h3>
    </div>
    <div>
      <Link to="/dashboard/add_polisomnografia">Nueva polisomnografia</Link>
    </div>
  </div>
);

Title.propTypes = {};

export default Title;
