import React from "react";
import PropTypes from "prop-types";

const Bread = props => (
  <div className="bread">
    <ul>
      <li>
        <a href="">
          <i className="fas fa-home" />
        </a>
      </li>
      <li>
        <a href="">Listado usuario</a>
      </li>
      <li>
        <a href="">Nuevo usuario</a>
      </li>
    </ul>
  </div>
);

Bread.propTypes = {};

export default Bread;
