import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Bread = props => (
  <div className="bread">
    <ul>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-home" />
        </Link>
      </li>
      <li>
        <a href="">Listado de usuarios</a>
      </li>
    </ul>
  </div>
);

Bread.propTypes = {};

export default Bread;
