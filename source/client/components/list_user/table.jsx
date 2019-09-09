import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Table = props => (
  <div className="table top">
    <table id="table-user">
      <thead>
        <tr>
          <th className="th100">Número</th>
          <th className="th220">Email</th>
          <th>Permisos</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>
              <ul className="list--bubble">
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
                <a
                  data-close="ok"
                  tabIndex={0}
                  role="button"
                  onClick={props.handleModal}
                >
                  <i
                    data-num={i}
                    data-id={item.id}
                    data-close="ok"
                    className="fas fa-trash-alt"
                  />
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
