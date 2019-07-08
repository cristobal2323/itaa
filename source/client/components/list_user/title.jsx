import React from "react";
import PropTypes from "prop-types";

import Date from "../../containers/common/date";

const Title = props => (
  <div className="title-table">
    <div>
      <h3>Usuarios</h3>
    </div>
    <div>
      <button>Nuevo usuario</button>
    </div>
  </div>
);

Title.propTypes = {};

export default Title;
