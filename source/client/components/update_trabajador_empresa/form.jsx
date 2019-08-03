import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos empresa</h2>
      </article>
      <div>
        <label htmlFor="nombres">Nombres</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="nombres"
          id="nombres"
          value={props.form.nombres}
        />
      </div>
      <div>
        <label htmlFor="nombreEmpresa">Nombre empresa</label>
        <select
          name="nombreEmpresa"
          id="nombreEmpresa"
          onChange={props.handleChange}
          value={props.form.nombreEmpresa}
        >
          <option value="">Seleccione empresa</option>
          {props.data.empresa.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="rubro">Rubro</label>
        <select
          name="rubro"
          id="rubro"
          onChange={props.handleChange}
          value={props.form.rubro}
        >
          <option value="">Seleccione rubro</option>
          {props.data.rubro.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="cargo">Cargo</label>
        <select
          name="cargo"
          id="cargo"
          onChange={props.handleChange}
          value={props.form.cargo}
        >
          <option value="">Seleccione cargo</option>
          {props.data.cargo.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="Area">Area</label>
        <select
          name="Area"
          id="Area"
          onChange={props.handleChange}
          value={props.form.area}
        >
          <option value="">Seleccione area</option>
          {props.data.area.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="rut">Turno</label>
        <select
          name="turno"
          id="turno"
          onChange={props.handleChange}
          value={props.form.turno}
        >
          <option value="">Seleccione turno</option>
          {props.data.tipo.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="estructura">Estructura turno</label>
        <select
          name="estructura"
          id="estructura"
          onChange={props.handleChange}
          value={props.form.estructura}
        >
          <option value="">Seleccione estructura</option>
          {props.data.estructura.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="numeroHijos">Capacitaciones</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="capacitaciones"
          id="capacitaciones"
          value={props.form.capacitaciones}
        />
      </div>
      <div className="top">
        <label htmlFor="antiguedad">Antigüedad</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="antiguedad"
          id="antiguedad"
          value={props.form.antiguedad}
        />
      </div>
      <div className="top">
        <label htmlFor="horaInicio">Horario</label>
        <select
          name="horario"
          id="horario"
          onChange={props.handleChange}
          value={props.form.horario}
        >
          <option value="">Seleccione horario</option>
          {props.data.horario.map(item => (
            <option key={item.id} value={item.id}>
              {`${moment(item.hora_inicio).format(" HH:mm")} -  ${moment(
                item.hora_itermino
              ).format(" HH:mm")}`}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="faena">Permanece faena</label>
        <select
          name="faena"
          id="faena"
          onChange={props.handleChange}
          value={props.form.faena}
        >
          <option value="">Seleccione si permanece en faena</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      <article className="button-form top">
        <div>
          {props.statusSave != 0 &&
            Fucform.stautsForm({
              status: props.statusSave,
              data: props.dataSave,
              message401: "No tiene los permisos necesarios.",
              messageSuccess:
                "   Se ha enviado un email al usuario con su user y contraseña.",
              messageError: "Error al ingresar el usuario."
            })}
        </div>
        <div>
          {props.loading ? (
            <article className="fa-1x box-form-button-spinner">
              <i className="fas fa-spinner fa-spin" />
            </article>
          ) : (
            <input type="submit" value="Actualizar" />
          )}
        </div>
      </article>
    </section>
  </form>
);

Form.propTypes = {};

export default Form;
