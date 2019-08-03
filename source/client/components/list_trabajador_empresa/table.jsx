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
          <th>Empresa</th>
          <th>Cargo</th>
          <th className="center">Inicio</th>
          <th className="center">Entrada</th>
          <th className="th100 center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.data.ejecucion.estado &&
          props.data.datos.lista.map((item, i) => (
            <tr key={item.id}>
              <td>{item.trabajador_nombres}</td>
              <td>{item.trabajador_apellido_paterno}</td>
              <td>{item.empresa_nombre}</td>
              <td>{item.cargo_nombre}</td>
              <td className="center">
                {moment(item.horario_hora_inicio).format("DD-MM-YYYY h:mm:ss")}
              </td>
              <td className="center">
                {moment(item.horario_hora_termino).format("DD-MM-YYYY h:mm:ss")}
              </td>

              <td>
                <div className="icon-table">
                  <Link to={`update_trabajador_empresa/${item.user_id}`}>
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
