import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

/* Components */
import Pie from "./graph";

const Table = props => (
  <div className="table top">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Supervisor / Area </th>
          <th className="th300">Perfil Basal</th>
          <th className="th400" colSpan="2">
            Información
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.ejecucion.estado &&
          props.data.datos.map((item, i) => (
            <tr key={i}>
              <td>{`${item.nombres} ${item.apellido_paterno}`}</td>
              <td>
                <section className="module--basalTable">
                  <div className="module--basalTable__info">
                    <h3>{item.nombre_supervisor}</h3>
                    <h4>{item.area_glosa}</h4>
                  </div>
                </section>
              </td>
              <td>
                <section className="module--basalTable">
                  <div className="module--basalTable__pie">
                    <Pie
                      clasification={item.perfil_riesgo_basal.clasificacion}
                      data={item.perfil_riesgo_basal.rangos}
                    />
                  </div>
                  <div className="module--basalTable__info">
                    <h3>
                      Clasificación: {item.perfil_riesgo_basal.clasificacion}
                    </h3>
                  </div>
                </section>
              </td>
              <td>
                <div className="module--InfoTable">
                  <ul>
                    <li>
                      <strong>1</strong> Riesgo turno: {item.riesgo_turno}
                    </li>
                    <li>
                      <strong>2</strong> Nivel Alerta: {item.nivel_alerta_turno}
                    </li>
                    <li>
                      <strong>3</strong> Hora critica menor:{" "}
                      {item.hora_critica_menor_alerta}
                    </li>
                    <li>
                      <strong>4</strong> Calidad del sueño:{" "}
                      {item.calidad_de_sueno}
                    </li>
                    <li>
                      <strong>5</strong> Riesgo fatiga acumulado:{" "}
                      {item.riesgo_fatiga_acumulado}
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <div className="module--InfoTable">
                  <ul>
                    <li>
                      <strong>6</strong> Alerta diaria: {item.alerta_diaria}
                    </li>
                    <li>
                      <strong>7</strong> Alerta diaria proyectada:{" "}
                      {item.alerta_diaria_proyectada}
                    </li>
                    <li>
                      <strong>8</strong> Status avance fatiga sueño:{" "}
                      {item.status_avance_programa_fatiga_sueno}
                    </li>
                    <li>
                      <strong>9</strong> Tasa accidentabilidad:{" "}
                      {item.tasa_accidentabilidad_x_somnolencia}
                    </li>
                    <li>
                      <strong>10</strong> Hora capacitación:{" "}
                      {item.horas_capacitacion}
                    </li>
                  </ul>
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
