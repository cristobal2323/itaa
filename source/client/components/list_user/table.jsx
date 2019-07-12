import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Table = props => (
  <div className="table top">
    <table>
      <thead>
        <tr>
          <th className="th100">Número</th>
          <th className="th220">Email</th>
          <th>Permisos</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>
              <ul>
                {item.permissions.map((permit, i) => (
                  <li key={i}>{permit}</li>
                ))}
              </ul>
            </td>
            <td>
              <div className="icon-table">
                <Link to={`update_user/${item.id}`}>
                  <i className="fas fa-user-edit" />
                </Link>
                <a>
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {};

export default Table;
