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
          <th className="center">Latencia sueño</th>
          <th className="center">Porcentaje sueño rem</th>
          <th className="center">Total sueño</th>
          <th className="center">Frecuencia cardiaca promedio</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.ejecucion.estado &&
          props.data.datos.lista.map((item, i) => (
            <tr key={item.id}>
              <td>{item.nombres}</td>
              <td>{item.apellido_paterno}</td>
              <td className="center">{item.latencia_sueno}</td>
              <td className="center">{item.porcentaje_sueno_rem}</td>
              <td className="center">{item.tiempo_total_sueno}</td>
              <td className="center">{item.frecuencia_cardiaca_promedio}</td>
              <td>
                <div className="icon-table">
                  <Link to={`update_oximetria/${item.user_id}`}>
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
