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
          <th className="center">Peso</th>
          <th className="center">Talla</th>
          <th className="center">Imc</th>
          <th className="center">Temperatura</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.ejecucion.estado &&
          props.data.datos.lista.map((item, i) => (
            <tr key={item.id}>
              <td>{item.nombres}</td>
              <td>{item.apellido_paterno}</td>
              <td className="center">{item.peso}</td>
              <td className="center">{item.talla}</td>
              <td className="center">{item.imc}</td>
              <td className="center">{item.temperatura}</td>
              <td>
                <div className="icon-table">
                  <Link to={`update_examen_fisico/${item.user_id}`}>
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
