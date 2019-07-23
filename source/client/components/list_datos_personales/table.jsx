import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

const Table = props => (
  <div className="table top">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th className="center">Fecha</th>
          <th className="center">Número de hijos</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.ejecucion.estado &&
          props.data.datos.lista.map((item, i) => (
            <tr key={item.id}>
              <td>{item.nombres}</td>
              <td>{item.apellido_paterno}</td>
              <td>{item.email}</td>
              <td className="center">
                {moment(item.fecha_nacimiento).format("DD-MM-YYYY")}
              </td>

              <td className="center">{item.numero_hijos}</td>

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
