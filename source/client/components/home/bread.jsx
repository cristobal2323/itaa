import React from "react";
import PropTypes from "prop-types";

const Bread = props => (
  <div className="bread">
    <ul>
      <li>
        <a>
          <i className="fas fa-home" />
        </a>
      </li>
      <li>
        <a>Home</a>
      </li>
    </ul>
  </div>
);

Bread.propTypes = {};

export default Bread;
