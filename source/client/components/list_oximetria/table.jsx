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
          <th className="center">Desaturación promedio</th>
          <th className="center">spo2 media</th>
          <th className="center">Desaturación profunda</th>
          <th className="center">Suma desaturación</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.ejecucion.estado &&
          props.data.datos.lista.map((item, i) => (
            <tr key={item.id}>
              <td>{item.nombres}</td>
              <td>{item.apellido_paterno}</td>
              <td className="center">{item.desaturacion_promedio}</td>
              <td className="center">{item.spo2_media}</td>
              <td className="center">{item.desaturacion_mas_profunda}</td>
              <td className="center">{item.suma_desaturaciones}</td>
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
